import React from "react";
import agentImg from "../../assets/agent.jpg";

const JoinWithUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 pb-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Join <span className="text-blue-400">HomeNest</span> Today
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
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-blue-500/30 blur-3xl rounded-full"></div>
            <img
              src={agentImg}
              alt="Real Estate Agent"
              className="relative z-10 w-72 md:w-80 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWithUs;
