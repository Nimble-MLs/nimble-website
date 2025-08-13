import React from "react";

const RecentWork = () => {
  return (
    <section className="max-w-7xl mx-auto px-12 py-12 relative">
      {/* Background Illustration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Recent Work</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Development Card */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
            {/* Card background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Product Development</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-darkTertiary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Building an intelligent order management for an FMCG distributor with 3k+ SKUs</span>
                </li>
                <li className="flex items-start hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-darkTertiary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Developed a generative AI reporting proof of concept for a global top ten bank</span>
                </li>
                <li className="flex items-start hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-darkTertiary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Built MVP report generation platform covering marketing strategy and customer sentiment documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enablement Card */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
            {/* Card background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Enablement</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-darkTertiary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Providing advisory services to a surgeon on private practice operational efficiency</span>
                </li>
                <li className="flex items-start hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-darkTertiary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Providing advisory services to a boutique consulting firm helping them become thought leaders with LLMs</span>
                </li>
                <li className="flex items-start hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-darkTertiary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Ran workshops and customer journey mapping for startups on leveraging LLMs within their own products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
