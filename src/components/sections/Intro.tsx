import React from "react";

const Intro = () => {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-12 py-24">
      {/* Responsive background illustration behind content */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 86%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 86%, transparent 100%)",
        }}
      >
        {/* Big soft blob on the right */}
        <div className="absolute right-[-10%] top-6 w-[55vw] max-w-[720px] min-w-[280px] aspect-square bg-primary/40 rounded-full blur-3xl" />
        {/* Secondary blob lower right */}
        <div className="absolute right-[8%] bottom-[8%] w-[28vw] max-w-[420px] min-w-[180px] aspect-square bg-secondary/40 rounded-full blur-2xl" />
        {/* Subtle accent circle */}
        <div className="absolute left-[55%] top-[45%] w-24 h-24 bg-darkTertiary/20 rounded-full blur-md hidden md:block" />
        {/* Rotated square accent */}
        <div className="absolute right-[20%] top-[38%] w-16 h-16 bg-primary/40 rotate-12 rounded-md blur-[2px] hidden md:block" />
        {/* Small floating dots */}
        <div className="absolute right-[16%] top-[22%] w-3 h-3 bg-darkTertiary/50 rounded-full hidden md:block" />
        <div className="absolute right-[12%] bottom-[22%] w-2.5 h-2.5 bg-secondary/50 rounded-full hidden md:block" />
      </div>

      {/* Content */}
      <div className="space-y-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
          We are a boutique helping organisations rapidly learn and adopt generative AI by coaching, enablement and product development.
        </h1>
        <p className="text-lg md:text-xl text-darkSecondary/80 leading-relaxed">
          Whether it be for sales enablement, compliance automation or order management, we deliver practical tools that keep your business ahead of the curve. Our engineers have been crafting LLM solutions since 2023, when it first emerged. We have decades of experience rolling out emerging technologies into large complex organisations.
        </p>
      </div>
    </section>
  );
};

export default Intro;
