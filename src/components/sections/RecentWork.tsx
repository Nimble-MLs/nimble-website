"use client";

import { data } from "autoprefixer";
import React, { useState } from "react";

const dataResponse = [
  {
    label: "Product Development",
    description:
      "Building an intelligent order management for an FMCG distributor with 3k+ SKUs",
  },
  {
    label: "Product Development",
    description:
      "Developed a generative AI reporting proof of concept for a global top ten bank",
  },
  {
    label: "Product Development",
    description:
      "Built MVP report generation platform covering marketing strategy and customer sentiment documents",
  },
  {
    label: "Enablement",
    description:
      "Providing advisory services to a surgeon on private practice operational efficiency",
  },
  {
    label: "Enablement",
    description:
      "Providing advisory services to a boutique consulting firm helping them become thought leaders with LLMs",
  },
  {
    label: "Enablement",
    description:
      "Ran workshops and customer journey mapping for startups on leveraging LLMs within their own products",
  },
];

//const projects = dataResponse.sort(randFunc);
function randFunc(a, b) {  
  return 0.5 - Math.random();
} 
const projects = dataResponse;

const RecentWork = () => {


  return (
    <div className="py-8">
      <h2 className="pageHeader text-center">Recent Work</h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-10
                   max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary/40 rounded-lg p-6
                       flex flex-col items-center text-center
                       min-h-[100px]" /* ensure consistent card height; adjust as needed */
          >
            {/* TOP SECTION */}
            <div className="space-y-2">
              <p className="text-lg">{project.description}</p>
            </div>
            <p className="text-xs opacity-60 mt-auto pt-4 inline-flex justify-center">{project.label}</p>


          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;

