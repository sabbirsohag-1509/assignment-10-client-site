import React from "react";
import { Star } from "lucide-react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          What Our <span className="text-blue-400">Clients Say</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          Thousands of happy homeowners have found their perfect place through
          <span className="text-blue-400 font-semibold"> HomeNest</span>. Here’s what some of them say about their experience.
        </p>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <img
                src={user2}
                alt="Client"
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
            </div>
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              “HomeNest made finding my first apartment incredibly easy.
              The filters and verified listings saved me a ton of time and stress!”
            </p>
            <div className="flex justify-center mb-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <h3 className="text-lg font-bold">Sarah Johnson</h3>
            <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <img
                src={user1}
                alt="Client"
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
            </div>
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              “I sold my old house through HomeNest in just two weeks!
              The agents were helpful and communication was smooth throughout.”
            </p>
            <div className="flex justify-center mb-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <h3 className="text-lg font-bold">Arif Hossain</h3>
            <p className="text-gray-400 text-sm">Chittagong, Bangladesh</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <img
                src={user3}
                alt="Client"
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
            </div>
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              “From browsing to closing the deal — everything felt modern and transparent.
              I’ll definitely recommend HomeNest to my friends and family!”
            </p>
            <div className="flex justify-center mb-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <h3 className="text-lg font-bold">Nusrat Ahmed</h3>
            <p className="text-gray-400 text-sm">Sylhet, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
