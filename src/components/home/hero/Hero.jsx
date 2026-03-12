"use client";

const Hero = () => {
  return (
    <section className=" relative rounded-2xl flex items-center justify-center bg-gray-900 text-center overflow-hidden py-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
          alt="Hero Background"
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Responsive Typography: Using fluid text sizes */}
          <h1 className="text-3xl md:text-5xl  font-black text-white tracking-tight leading-[1.1] sm:leading-tight">
            Work At The
            <span className="block sm:inline text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-(--color-accent)">
              <span> Speed Of Thought.</span>
            </span>
          </h1>

          <p className="mt-6 sm:mt-8  text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            SwiftCart brings the world&apos;s best brands to your doorstep with
            lightning-fast delivery and a seamless checkout experience.
          </p>

          {/* Button Group: Stacked on mobile, row on tablet+ */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <a
              href="#"
              className="w-full sm:w-auto min-w-50 rounded-full px-4 py-3 text-base  font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95 bg-(--color-primary) hover:brightness-110"
            >
              Start Your Free Trial
            </a>
            <a
              href="#"
              className="w-full sm:w-auto min-w-50 rounded-full bg-white/10 backdrop-blur-md px-4 py-2  text-base sm:text-lg font-bold text-white border border-white/30 hover:bg-white/20 transition-all"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
