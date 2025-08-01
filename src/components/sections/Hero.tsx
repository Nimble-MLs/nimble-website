import React from "react";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-5xl font-bold flex items-center gap-2">
        <span role="img" aria-label="kiwi" className="text-6xl">🥝</span>
        Nimble.
      </h1>
      <p className="text-lg leading-relaxed">
        We help organisations adopt generative AI in weeks, not months. Our engineers have been crafting LLM solutions since 2023.
      </p>
      <p className="text-lg leading-relaxed">
        From sales enablement to compliance automation, we deliver practical tools that keep your business ahead of the curve.
      </p>
    </section>
  );
};

export default Hero;
