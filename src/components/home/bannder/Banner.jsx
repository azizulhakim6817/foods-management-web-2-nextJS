import React from "react";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const ModernBanner = () => {
  const features = [
    {
      title: "Fast Shipping",
      desc: "Worldwide delivery in 24h",
      icon: <Truck size={24} strokeWidth={1.5} />,
      color: "bg-blue-500",
      delay: "0ms",
    },
    {
      title: "Secure Pay",
      desc: "Encrypted transactions",
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      color: "bg-emerald-500",
      delay: "150ms",
    },
    {
      title: "Easy Returns",
      desc: "30-day no-risk policy",
      icon: <RotateCcw size={24} strokeWidth={1.5} />,
      color: "bg-orange-500",
      delay: "300ms",
    },
    {
      title: "Expert Help",
      desc: "Human support 24/7",
      icon: <Headphones size={24} strokeWidth={1.5} />,
      color: "bg-purple-500",
      delay: "450ms",
    },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] rounded-2xl dark:bg-black dark:text-white">
      <div className="container mx-auto px-2 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              style={{ "--delay": item.delay }}
              className="animate-in group relative overflow-hidden rounded-[2rem] bg-white p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 border border-gray-100  dark:bg-black dark:text-white"
            >
              {/* Animated Background Blob */}
              <div
                className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${item.color} opacity-[0.03] transition-all duration-500 group-hover:scale-[3] group-hover:opacity-[0.05]`}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white shadow-lg shadow-inherit/20 transition-transform duration-500 group-hover:rotate-[10deg] dark:text-white`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-gray-900 tracking-tight dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 font-medium dark:text-white">
                  {item.desc}
                </p>

                {/* Bottom "Explore" Link - visible on hover */}
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-black dark:text-white">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernBanner;
