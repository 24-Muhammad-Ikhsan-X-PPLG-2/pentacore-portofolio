"use client";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#030b1d] px-4 sm:px-6 lg:px-8 text-white">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent_35%)]" />

      {/* Main Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
        linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
      `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Extra Vertical Lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
          backgroundSize: "240px 240px",
        }}
      />

      {/* Blueprint Shape */}
      <div className="absolute -right-30 top-1/2 hidden -translate-y-1/2 opacity-10 xl:block">
        <div className="relative h-125 w-125 rotate-12 border border-blue-300/40">
          <div className="absolute inset-10 border border-blue-300/30" />

          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-300/20" />

          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-300/20" />

          <div className="absolute inset-0 rotate-45 border border-blue-300/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center py-10">
        <div className="max-w-3xl text-center md:text-left">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#c0c9fc]">
            CORE CAPABILITIES
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Engineering the next generation of{" "}
            <span className="text-[#c0c9fc]">digital excellence.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            provident consectetur veniam deleniti, iure laborum. Nemo ab, odit
            perferendis nulla optio libero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
