import React from "react";
import { Search, Building2, ClipboardCheck, Key } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          How <span className="text-blue-400">HomeNest</span> Works
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          Finding your dream home is simple with HomeNest. Follow these easy
          steps to buy or rent your perfect property effortlessly.
        </p>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
              <Search size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Browse Properties</h3>
            <p className="text-gray-300 leading-relaxed">
              Explore thousands of listings with detailed descriptions, images,
              and maps — all in one place.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
              <Building2 size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Schedule a Visit</h3>
            <p className="text-gray-300 leading-relaxed">
              Book a property tour or virtual visit directly through our
              platform — hassle-free and flexible.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
              <ClipboardCheck size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Finalize the Deal</h3>
            <p className="text-gray-300 leading-relaxed">
              Discuss terms with verified agents and finalize your deal with
              full transparency and confidence.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
              <Key size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">4. Move Into Your New Home</h3>
            <p className="text-gray-300 leading-relaxed">
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
