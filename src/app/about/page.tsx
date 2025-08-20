import { traceGlobals } from "next/dist/trace/shared";
"use client";
import Link from "next/link";

export default function About() {
  const teamMembers = [
        {
            name: "Ash Bhatia",
            role: "Product & Engineering",
            tagline:"Build products that customers love and you are proud of",
            description: "Developing and executing on the mission for SAAS firms in EMEA. Bringing hands on experience across all parts of a product firm at various stages (Series B to post IPO).",
            linkedinurl:"https://www.linkedin.com/in/bhatiaash/"
        },
        /*
         {
            name: "Ali Mahmood",
            role: "Customer Success Lead",
            tagline: "Domain expert in all things Strategy, Customers, and Marketing",
            description: "Brand building positions in multiple FCMGs and food businesses across the UK, Europe, Middle East and Asia",
        },*/
        {
            name: "Sunil Lath",
            role: "Full Stack Engineering Lead",
            tagline: "Python, React and even Wildlife. Its all a breezey forest walk",
            description: "Enterprise engineering leader with 18+ years experience running specialised teams. Experience building software for Climate, Healthcare and Finance.",
            linkedinurl:"https://www.linkedin.com/in/sunil-lath/"
        },
        {
            name: "Affan Tanke",
            role: "Product Management",
            tagline: "Loves pestering you with the right questions",
            description:"True hustle mindset. Tasked to uncover user pain points, validate assumptions, and facilitate data-informed product decisions",
            linkedinurl:"https://www.linkedin.com/in/affan-ibn-hisham-6015aa199/"
        },
        {
            name: "Mo Sami",
            role: "Full Stack Developer",
            tagline: "Everything is bite sized. Including a data migration into Mongo within 1 month.",
            description: "Building SAAS platforms from scratch. Experience with Flutter, Typescrript, GCP, MongoDB, Hasura GraphQL, PostgresSQL and Firebase.",
            linkedinurl:"https://www.linkedin.com/in/mohammadsamishaikh/"
        }
    ];

    return  (
    <div className="py-8">
      <h2 className="pageHeader text-center">A bit about the team</h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-10
                   max-w-6xl mx-auto"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-secondary/40 rounded-lg p-6
                       flex flex-col items-center text-center
                       min-h-[260px]" /* ensure consistent card height; adjust as needed */
          >
            {/* TOP SECTION */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <h4 className="text-lg">{member.role}</h4>
              <h5 className="text-lg font-semibold text-darkTertiary leading-none">
                {member.tagline}
              </h5>
              <p className="text-sm px-4 text-opacity-80">
                {member.description}
              </p>
            </div>

            {/* BOTTOM (PINNED) */}
            {member.linkedinurl && (
              <a
                href={member.linkedinurl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-4 inline-flex justify-center"
                aria-label={`${member.name} on LinkedIn`}
              >
                <img
                  src="/linkedIn_logo.png"
                  alt=""
                  width={20}
                  height={20}
                  className="block"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}