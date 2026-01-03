import React from "react";
import { ShieldCheck, Home, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="mt-5 relative py-20 overflow-hidden rounded-t-2xl 
      bg-gray-50 dark:bg-gray-900">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/3 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] 
          bg-blue-500/20 dark:bg-blue-500/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] 
          bg-cyan-400/20 dark:bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold 
          text-gray-900 dark:text-white mb-2">
          Why Choose Home<span className="text-blue-600 dark:text-blue-400">Nest</span>?
        </h2>

        <p className="max-w-2xl mx-auto mb-10 leading-relaxed 
          text-gray-600 dark:text-gray-300">
          We combine technology, trust, and transparency to make finding your
          dream property effortless, secure, and exciting.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card */}
          {[
            {
              icon: ShieldCheck,
              title: "Verified & Trusted Listings",
              desc: "Every property on HomeNest is verified to ensure you always get what you see — no scams, no surprises.",
            },
            {
              icon: Home,
              title: "Smart Property Matching",
              desc: "Our intelligent filters recommend homes that perfectly match your budget, location, and lifestyle.",
            },
            {
              icon: Users,
              title: "Expert Support Team",
              desc: "Get help from our professional agents — from virtual tours to final paperwork.",
            },
            {
              icon: Zap,
              title: "Fast & Transparent Deals",
              desc: "A smooth process from search to signing with complete clarity and peace of mind.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl p-8 transition-all duration-300
                  bg-white shadow-lg hover:shadow-2xl
                  dark:bg-white/10 dark:backdrop-blur-xl dark:border dark:border-white/10
                  hover:-translate-y-1"
              >
                <div className="flex justify-center mb-5">
                  <div className="bg-blue-600 p-4 rounded-full shadow-md 
                    group-hover:scale-110 transition-transform">
                    <Icon size={26} className="text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 
                  text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed 
                  text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
