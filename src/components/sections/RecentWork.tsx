"use client";

import React, { useState } from "react";

const projects = [
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

const RecentWork = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="max-w-7xl mx-auto px-12 py-12">
      <h2 className="text-2xl md:text-3xl font-boska text-dark text-center mb-6">
        Recent Work
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="member bg-secondary bg-opacity-40 rounded-lg p-8 w-full flex flex-col items-stretch text-wrap justify-start text-left space-y-3">
                  <h3 className="text-lg md:text-xl font-bold mb-1 text-center md:text-center">
                    {project.label}
                  </h3>
                  <p className="text-sm text-opacity-80 px-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Previous project"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-dark text-white px-3 py-1 rounded-full"
          onClick={prev}
        >
          &#8592;
        </button>
        <button
          aria-label="Next project"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-dark text-white px-3 py-1 rounded-full"
          onClick={next}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default RecentWork;

