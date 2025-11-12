import React from "react";
import agentImg from "../../assets/agent.jpg";

const JoinWithUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 pb-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Join Home<span className="text-blue-400">Nest</span> Today
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-xl">
            Become part of Bangladesh’s fastest-growing real estate community.
            Whether you’re a property owner, an agent, or a buyer, HomeNest
            connects you to the right opportunities — safely and effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
              Become an Agent
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full flex justify-center">
            {/* Soft blue glow behind image */}
            <div className="absolute -inset-8 bg-blue-500/30 blur-3xl rounded-full"></div>

            {/* Agent image */}
            <img
              src={agentImg}
              alt="Real Estate Agent"
              className="relative z-10 w-72 sm:w-80 md:w-[26rem] lg:w-[30rem] xl:w-[34rem] drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] object-contain transition-all duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWithUs;
