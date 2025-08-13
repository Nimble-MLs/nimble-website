import React from "react";

const RecentWork = () => {
  return (
    <section className="max-w-7xl mx-auto px-12 py-12">
      <h2 className="text-2xl md:text-3xl font-boska text-dark text-center mb-6">Recent Work</h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 justify-center">
        {/* Product Development Card */}
        <div className="member bg-secondary bg-opacity-40 rounded-lg p-8 w-full flex flex-col items-stretch text-wrap justify-start text-left space-y-3">
          <h3 className="text-lg md:text-xl font-bold mb-1 text-center md:text-center">Product Development</h3>
          <ul className="text-sm text-opacity-80 space-y-3 px-1">
            <li>
              Building an intelligent order management for an FMCG distributor with 3k+ SKUs
            </li>
            <li>
              Developed a generative AI reporting proof of concept for a global top ten bank
            </li>
            <li>
              Built MVP report generation platform covering marketing strategy and customer sentiment documents
            </li>
          </ul>
        </div>

        {/* Enablement Card */}
        <div className="member bg-secondary bg-opacity-40 rounded-lg p-8 w-full flex flex-col items-stretch text-wrap justify-start text-left space-y-3">
          <h3 className="text-lg md:text-xl font-bold mb-1 text-center md:text-center">Enablement</h3>
          <ul className="text-sm text-opacity-80 space-y-3 px-1">
            <li>
              Providing advisory services to a surgeon on private practice operational efficiency
            </li>
            <li>
              Providing advisory services to a boutique consulting firm helping them become thought leaders with LLMs
            </li>
            <li>
              Ran workshops and customer journey mapping for startups on leveraging LLMs within their own products
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
