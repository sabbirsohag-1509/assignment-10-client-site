import React from "react";
import { ShieldCheck, Home, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className=" mt-5 relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 overflow-hidden rounded-t-2xl">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-blue-500/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
          Why Choose <span className="text-blue-400">HomeNest</span>?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed text-base sm:text-lg">
          We combine technology, trust, and transparency to make finding your
          dream property effortless, secure, and exciting.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border border-white/10">
            <div className="flex justify-center mb-5">
              <div className="bg-blue-600 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Verified & Trusted Listings
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Every property on HomeNest is verified to ensure you always get
              what you see — no scams, no surprises.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border border-white/10">
            <div className="flex justify-center mb-5">
              <div className="bg-blue-600 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <Home size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Smart Property Matching
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Our intelligent filters recommend homes that perfectly match your
              budget, location, and lifestyle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border border-white/10">
            <div className="flex justify-center mb-5">
              <div className="bg-blue-600 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <Users size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Expert Support Team
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Get help from our professional agents — from virtual tours to
              final paperwork, we guide you all the way.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border border-white/10">
            <div className="flex justify-center mb-5">
              <div className="bg-blue-600 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <Zap size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Fast & Transparent Deals
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              From search to signing, our smooth process ensures clarity, speed,
              and complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
