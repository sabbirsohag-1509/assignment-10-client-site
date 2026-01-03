import React from "react";
import agentImg from "../../assets/agent.jpg";
import { Link } from "react-router";

const JoinWithUs = () => {
  return (
    <section
      className="relative py-20 pb-28 overflow-hidden
      bg-gray-50 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b]"
    >
      {/* Background Glow (dark only) */}
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute top-20 left-1/3 w-[350px] h-[350px]
          bg-blue-500/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px]
          bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight
            text-gray-900 dark:text-white"
          >
            Join Home
            <span className="text-blue-600 dark:text-blue-400">Nest</span> Today
          </h2>

          <p
            className="mb-8 leading-relaxed max-w-xl
            text-gray-600 dark:text-gray-300"
          >
            Become part of Bangladesh’s fastest-growing real estate community.
            Whether you’re a property owner, an agent, or a buyer, HomeNest
            connects you to the right opportunities — safely and effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/all-properties"
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg
              bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Started
            </Link>

            <button
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-300
              border border-blue-600 text-blue-600
              hover:bg-blue-600 hover:text-white
              dark:border-blue-400 dark:text-blue-400
              dark:hover:bg-blue-500 dark:hover:text-white"
            >
              Become an Agent
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full flex justify-center">
            {/* Image Glow */}
            <div
              className="absolute -inset-8 rounded-full blur-3xl
              bg-blue-400/20 dark:bg-blue-500/30"
            ></div>

            <img
              src={agentImg}
              alt="Real Estate Agent"
              className="relative z-10 w-72 sm:w-80 md:w-[26rem] lg:w-[30rem] xl:w-[34rem]
              object-contain drop-shadow-xl
              transition-transform duration-500 hover:scale-[1.03] rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWithUs;
