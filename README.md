# Nimble website

Marketing site for Nimble (nimble.kiwi). Next.js 14 (App Router) + Tailwind,
built into a container and deployed to Google Cloud Run by GitHub Actions on
every push to `main`.

## Local development

```bash
npm install
npm run dev   # http://localhost:3000
```

The contact form needs these in `.env.local` to work end to end:

```bash
RECAPTCHA_SITE_KEY=...     # public v3 site key (localhost must be an allowed domain)
RECAPTCHA_SECRET_KEY=...   # server-only
DISCORD_WEBHOOK_URL=...    # server-only
```

## Contact form

`src/app/contact/page.tsx` renders `ContactForm` with the reCAPTCHA site key read
at request time (`force-dynamic`, so the key isn't baked in empty at build
time). The form POSTs to `src/app/api/contact/route.ts`, which checks a honeypot
field, a minimum fill time, field lengths, email format, a per-IP rate limit and
a reCAPTCHA v3 score, then posts to Discord. The webhook URL and reCAPTCHA
secret only ever live on the server.

The rate limit is in-memory, so it's best-effort: each Cloud Run instance keeps
its own count.

## Deployment

| Setting | Value |
|---|---|
| GCP project | `nimble-prod-01` |
| Region (Cloud Run + Artifact Registry) | `australia-southeast2` |
| Cloud Run service / AR repo | `nimble-website` |
| Runtime service account | `nimble-website-runtime@nimble-prod-01.iam.gserviceaccount.com` |
| Deploy service account | `gh-deployer-nimble-website@nimble-prod-01.iam.gserviceaccount.com` |
| Secret Manager secrets | `discord-webhook-url`, `recaptcha-secret-key` |

Workflow: `.github/workflows/deploy.yml`. Pushes to other branches don't deploy.

### One-time GCP setup

Run in Cloud Shell. Use the same region everywhere; a mismatch shows up as
`Repository "nimble-website" not found` on `docker push`. Pass `--condition=None` on
every IAM binding. If a command fails with `PERMISSION_DENIED` right after a
grant, wait 1–2 minutes for propagation and retry.

```bash
PROJECT_ID=nimble-prod-01
REGION=australia-southeast2
REPO=Nimble-MLs/nimble-website

gcloud projects create $PROJECT_ID --name="Nimble"
gcloud config set project $PROJECT_ID
# Link a billing account before enabling APIs:
#   gcloud billing projects link $PROJECT_ID --billing-account=XXXXXX-XXXXXX-XXXXXX

gcloud services enable run.googleapis.com \
  artifactregistry.googleapis.com \
  iamcredentials.googleapis.com \
  secretmanager.googleapis.com

gcloud artifacts repositories create nimble-website \
  --repository-format=docker --location=$REGION \
  --description="nimble-website container images"

# Runtime identity for the Cloud Run service (don't rely on the default compute SA)
gcloud iam service-accounts create nimble-website-runtime \
  --display-name="Cloud Run runtime (nimble-website)"

# Deployer identity for GitHub Actions
gcloud iam service-accounts create gh-deployer-nimble-website \
  --display-name="GitHub Actions deployer (nimble-website)"

for role in run.admin artifactregistry.writer secretmanager.secretAccessor; do
  gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:gh-deployer-nimble-website@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/$role" --condition=None
done

# Let the deployer deploy *as* the runtime SA (scoped to that one SA)
gcloud iam service-accounts add-iam-policy-binding \
  nimble-website-runtime@$PROJECT_ID.iam.gserviceaccount.com \
  --member="serviceAccount:gh-deployer-nimble-website@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser" --condition=None

# Workload Identity Federation (GitHub OIDC -> GCP, no JSON keys)
gcloud iam workload-identity-pools create github-pool \
  --location=global --display-name="GitHub Actions Pool"

gcloud iam workload-identity-pools providers create-oidc github-provider \
  --location=global --workload-identity-pool=github-pool \
  --display-name="GitHub OIDC" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
  --attribute-condition="assertion.repository=='$REPO'"

PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')

gcloud iam service-accounts add-iam-policy-binding \
  gh-deployer-nimble-website@$PROJECT_ID.iam.gserviceaccount.com \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/github-pool/attribute.repository/$REPO" \
  --condition=None

echo "GCP_WORKLOAD_IDENTITY_PROVIDER:"
gcloud iam workload-identity-pools providers describe github-provider \
  --location=global --workload-identity-pool=github-pool --format='value(name)'
```

Secrets, readable only by the runtime SA:

```bash
for secret in discord-webhook-url recaptcha-secret-key; do
  read -rsp "Value for $secret: " value; echo
  echo -n "$value" | gcloud secrets create $secret --data-file=- --replication-policy=automatic
  gcloud secrets add-iam-policy-binding $secret \
    --member="serviceAccount:nimble-website-runtime@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor" --condition=None
done
```

### reCAPTCHA v3

In the [reCAPTCHA admin console](https://www.google.com/recaptcha/admin),
register a **v3** site with these domains: `nimble.kiwi`, `run.app` (covers the
Cloud Run URL you test on before the custom domain is live), and `localhost`.
The site key goes in the `RECAPTCHA_SITE_KEY` GitHub secret. The secret key
goes in Secret Manager as `recaptcha-secret-key` (above).

### GitHub repository secrets

Settings → Secrets and variables → Actions:

- `GCP_PROJECT_ID`: `nimble-prod-01`
- `GCP_REGION`: `australia-southeast2`
- `GCP_WORKLOAD_IDENTITY_PROVIDER`: the `providers describe` output above
- `GCP_SERVICE_ACCOUNT`: `gh-deployer-nimble-website@nimble-prod-01.iam.gserviceaccount.com`
- `RECAPTCHA_SITE_KEY`: the public site key

### Verify a deploy

```bash
gcloud run services describe nimble-website --region=australia-southeast2 \
  --project=nimble-prod-01 --format='value(status.url)'
```

Submit the contact form on that URL and confirm the message arrives in
Discord. A green workflow run doesn't prove the form works.

### Custom domain (nimble.kiwi)

Cloud Run domain mappings (`gcloud run domain-mappings create`) are **not
available in `australia-southeast2`**. Put a global external Application Load
Balancer with a serverless NEG in front of the service instead:

```bash
gcloud services enable compute.googleapis.com
gcloud compute addresses create nimble-ip --global
gcloud compute network-endpoint-groups create nimble-neg \
  --region=australia-southeast2 --network-endpoint-type=serverless \
  --cloud-run-service=nimble-website
gcloud compute backend-services create nimble-backend --global \
  --load-balancing-scheme=EXTERNAL_MANAGED
gcloud compute backend-services add-backend nimble-backend --global \
  --network-endpoint-group=nimble-neg --network-endpoint-group-region=australia-southeast2
gcloud compute url-maps create nimble-urlmap --default-service=nimble-backend
gcloud compute ssl-certificates create nimble-cert --global \
  --domains=nimble.kiwi,www.nimble.kiwi
gcloud compute target-https-proxies create nimble-https-proxy \
  --url-map=nimble-urlmap --ssl-certificates=nimble-cert
gcloud compute forwarding-rules create nimble-https --global \
  --load-balancing-scheme=EXTERNAL_MANAGED --address=nimble-ip \
  --target-https-proxy=nimble-https-proxy --ports=443

gcloud compute addresses describe nimble-ip --global --format='value(address)'
```

At the registrar, point `A` records for `nimble.kiwi` and `www` at that IP.
The managed certificate provisions once DNS resolves, usually within an hour
and at most about 24 hours. The load balancer costs roughly US$18/month extra.
For HTTP→HTTPS redirects, add a second url-map, target-http-proxy and
forwarding rule on port 80.
