import React from "react";

const RecentWork = () => {
  return (
    <section className="max-w-7xl mx-auto px-12 py-12">
      <h2 className="pageHeader text-center">Recent Work</h2>

      <div className="grid md:grid-cols-2 gap-12 justify-center">
        {/* Product Development Card */}
        <div className="member bg-secondary bg-opacity-40 rounded-lg p-10 w-full flex flex-col items-center text-wrap justify-top text-center">
          <h3 className="text-xl font-bold">Product Development</h3>
          <p className="text-sm p-4 text-opacity-80">
            Building an intelligent order management for an FMCG distributor with 3k+ SKUs
          </p>
          <p className="text-sm px-4 pb-2 text-opacity-80">
            Developed a generative AI reporting proof of concept for a global top ten bank
          </p>
          <p className="text-sm px-4 pb-2 text-opacity-80">
            Built MVP report generation platform covering marketing strategy and customer sentiment documents
          </p>
        </div>

        {/* Enablement Card */}
        <div className="member bg-secondary bg-opacity-40 rounded-lg p-10 w-full flex flex-col items-center text-wrap justify-top text-center">
          <h3 className="text-xl font-bold">Enablement</h3>
          <p className="text-sm p-4 text-opacity-80">
            Providing advisory services to a surgeon on private practice operational efficiency
          </p>
          <p className="text-sm px-4 pb-2 text-opacity-80">
            Providing advisory services to a boutique consulting firm helping them become thought leaders with LLMs
          </p>
          <p className="text-sm px-4 pb-2 text-opacity-80">
            Ran workshops and customer journey mapping for startups on leveraging LLMs within their own products
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
