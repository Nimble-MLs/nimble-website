import { traceGlobals } from "next/dist/trace/shared";

export default function About() {
  const teamMembers = [
        {
            name: "Ash Bhatia",
            role: "Product & Engineering Lead",
            tagline:"Build products that customers love and you are proud of.",
            description: "Developing and executing on the mission for SAAS firms in EMEA. Bringing hands on experience across all parts of a product firm at various stages (Series B to post IPO).",
        },
        /*
         {
            name: "Ali Mahmood",
            role: "Customer Success Lead",
            tagline: "Domain expert in all things Strategy, Customers, and Marketing",
            description: "Brand building positions in multiple FCMGs and food businesses across the UK, Europe, Middle East and Asia",
        },
        {
            name: "Sunil Lath",
            role: "Full Stack Engineering Lead",
            tagline: "Python, React and even Wildlife. Its all a breezey forest walk",
            description: "Enterprise engineering leader with 18+ years experience running specialised teams. Experience building software for Climate, Healthcare and Finance.",
        },*/
        {
            name: "Affan Tanke",
            role: "Product Management",
            tagline: "Loves pestering you with the right questions",
            description:"True hustle mindset. Tasked to uncover user pain points, validate assumptions, and facilitate data-informed product decisions",
        },
        {
            name: "Mo Sami",
            role: "Full Stack Developer",
            tagline: "Everything is bite sized. Including a data migration into Mongo within 1 month.",
            description: "Building SAAS platforms from scratch. Experience with Flutter, Typescrript, GCP, MongoDB, Hasura GraphQL, PostgresSQL and Firebase."
        }
    ];

    return (
            <div className="py-8">
                <h2 className="pageHeader text-center">A bit about the team</h2>
   
                <div className="flex flex-wrap 
                                justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="member bg-white 
                                       shadow-md rounded-lg p-4 w-60
                                       h-180 flex flex-col items-center
                                       justify-top text-center "
                        >
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <h4 className="text-lg">{member.role}</h4>
                            <h5 className="text-sm text-darkTertiary">{member.tagline}</h5>
                            <p className="text-sml p-4">{member.description}</p>
                             
                        </div>
                    ))}
                </div>
            </div>
    );
}