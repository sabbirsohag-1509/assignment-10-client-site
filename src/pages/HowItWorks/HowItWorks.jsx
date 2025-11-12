import React from "react";
import { Search, Building2, ClipboardCheck, Key } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
          How Home<span className="text-blue-400">Nest</span> Works
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
          Finding your dream home is simple with HomeNest. Follow these easy
          steps to buy or rent your perfect property effortlessly.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full mb-4 sm:mb-6">
              <Search size={28} className="text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              1. Browse Properties
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Explore thousands of listings with detailed descriptions, images,
              and maps — all in one place.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full mb-4 sm:mb-6">
              <Building2 size={28} className="text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              2. Schedule a Visit
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Book a property tour or virtual visit directly through our
              platform — hassle-free and flexible.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full mb-4 sm:mb-6">
              <ClipboardCheck size={28} className="text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              3. Finalize the Deal
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Discuss terms with verified agents and finalize your deal with
              full transparency and confidence.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full mb-4 sm:mb-6">
              <Key size={28} className="text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              4. Move Into Your New Home
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Collect your keys and step into your dream home — HomeNest makes
              it that easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
