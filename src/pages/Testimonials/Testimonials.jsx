import React from "react";
import { Star } from "lucide-react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const Testimonials = () => {
  return (
    <section className="relative py-20 overflow-hidden
      bg-gray-50 dark:bg-gray-900">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-[300px] h-[300px]
          bg-blue-500/20 dark:bg-blue-500/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-1/4 w-[250px] h-[250px]
          bg-cyan-400/20 dark:bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2
          text-gray-900 dark:text-white">
          What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
        </h2>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-12
          text-gray-600 dark:text-gray-300 leading-relaxed">
          Thousands of happy homeowners have found their perfect place through{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">HomeNest</span>.
          Here’s what some of them say about their experience.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: user2,
              name: "Sarah Johnson",
              location: "Dhaka, Bangladesh",
              text: "HomeNest made finding my first apartment incredibly easy. The filters and verified listings saved me a ton of time and stress!",
            },
            {
              img: user1,
              name: "Arif Hossain",
              location: "Chattogram, Bangladesh",
              text: "I sold my old house through HomeNest in just two weeks! The agents were helpful and communication was smooth throughout.",
            },
            {
              img: user3,
              name: "Nusrat Ahmed",
              location: "Sylhet, Bangladesh",
              text: "From browsing to closing the deal — everything felt modern and transparent. I’ll definitely recommend HomeNest!",
            },
          ].map((user, i) => (
            <div
              key={i}
              className="group rounded-2xl p-8 transition-all duration-300
                bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1
                dark:bg-white/10 dark:backdrop-blur-xl dark:border dark:border-white/10"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-5">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover
                    border-4 border-blue-500 shadow-md"
                />
              </div>

              {/* Review */}
              <p className="italic mb-5 text-sm sm:text-base leading-relaxed
                text-gray-600 dark:text-gray-300">
                “{user.text}”
              </p>

              {/* Stars */}
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Name */}
              <h3 className="font-bold text-base sm:text-lg
                text-gray-900 dark:text-white">
                {user.name}
              </h3>

              <p className="text-xs sm:text-sm
                text-gray-500 dark:text-gray-400">
                {user.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
