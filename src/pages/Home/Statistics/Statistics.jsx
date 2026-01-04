import React from "react";
import {
  Building,
  Users,
  BadgeCheck,
  Handshake
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Total Properties",
    value: "1,250+",
    icon: Building,
    description: "Verified properties listed across the country",
  },
  {
    id: 2,
    title: "Happy Clients",
    value: "3,500+",
    icon: Users,
    description: "Satisfied buyers and renters",
  },
  {
    id: 3,
    title: "Trusted Agents",
    value: "150+",
    icon: BadgeCheck,
    description: "Professional and verified agents",
  },
  {
    id: 4,
    title: "Successful Deals",
    value: "2,100+",
    icon: Handshake,
    description: "Completed property transactions",
  },
];

const Statistics = () => {
  return (
    <section
      className="relative py-20 overflow-hidden
      bg-gray-50 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <div
          className="absolute top-24 left-1/4 w-[320px] h-[320px]
          bg-blue-500/25 blur-3xl rounded-full"
        ></div>
        <div
          className="absolute bottom-16 right-1/4 w-[280px] h-[280px]
          bg-cyan-500/20 blur-3xl rounded-full"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2
            text-gray-900 dark:text-white"
          >
            Our Platform
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Statistics
            </span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed
            text-gray-600 dark:text-gray-300"
          >
            A quick overview of HomeNest’s growth, trust, and success in the
            real estate market.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="rounded-xl p-6 text-center
                bg-white dark:bg-[#020617]/70
                border border-gray-200 dark:border-white/10
                shadow-md hover:shadow-xl
                transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="mx-auto w-14 h-14 flex items-center justify-center
                  rounded-full bg-blue-600/10 mb-4"
                >
                  <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>

                <h3
                  className="text-3xl font-extrabold
                  text-gray-900 dark:text-white"
                >
                  {stat.value}
                </h3>

                <p
                  className="mt-1 text-sm font-semibold
                  text-gray-700 dark:text-gray-300"
                >
                  {stat.title}
                </p>

                <p
                  className="mt-2 text-sm leading-relaxed
                  text-gray-600 dark:text-gray-400"
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
