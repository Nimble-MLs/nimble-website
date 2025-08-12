import React from "react";

const RecentWork = () => {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Recent work</h2>
      <h3 className="text-xl font-semibold mb-2">
        Product Development
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Building an intelligent order management for an FMCG distributor with 3k+ SKUs</li>
        <li>Developed a generative AI reporting proof of concept for a global top ten bank</li>
        <li>Built MVP report generation platform covering marketing strategy and customer sentiment documents</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Enablement
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Providing advisory services to a surgeon on private practice operational efficiency</li>
        <li>Providing advisory services to a boutique consulting firm helping them become thought leaders with LLMs</li>
        <li>Ran workshops and customer journey mapping for startups on leveraging LLMs within their own products</li>
      </ul>

    </section>
  );
};

export default RecentWork;
