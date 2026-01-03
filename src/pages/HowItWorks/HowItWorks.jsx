import React from "react";
import { Search, Building2, ClipboardCheck, Key } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="relative py-20 overflow-hidden
      bg-gray-50 dark:bg-gray-900">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 right-1/4 w-[300px] h-[300px]
          bg-blue-500/20 dark:bg-blue-500/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 left-1/4 w-[250px] h-[250px]
          bg-cyan-400/20 dark:bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2
          text-gray-900 dark:text-white">
          How Home<span className="text-blue-600 dark:text-blue-400">Nest</span> Works
        </h2>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-12
          text-gray-600 dark:text-gray-300 leading-relaxed">
          Finding your dream home is simple with HomeNest. Follow these easy
          steps to buy or rent your perfect property effortlessly.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              title: "Browse Properties",
              desc: "Explore thousands of listings with detailed descriptions, images, and maps — all in one place.",
            },
            {
              icon: Building2,
              title: "Schedule a Visit",
              desc: "Book a property tour or virtual visit directly through our platform — hassle-free and flexible.",
            },
            {
              icon: ClipboardCheck,
              title: "Finalize the Deal",
              desc: "Discuss terms with verified agents and finalize your deal with full transparency and confidence.",
            },
            {
              icon: Key,
              title: "Move Into Your New Home",
              desc: "Collect your keys and step into your dream home — HomeNest makes it that easy.",
            },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl p-8 transition-all duration-300
                  bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1
                  dark:bg-white/10 dark:backdrop-blur-xl dark:border dark:border-white/10"
              >
                <div className="bg-blue-600 w-14 h-14 mx-auto flex items-center justify-center
                  rounded-full mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="text-lg font-bold mb-3
                  text-gray-900 dark:text-white">
                  {i + 1}. {step.title}
                </h3>

                <p className="text-sm leading-relaxed
                  text-gray-600 dark:text-gray-300">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
