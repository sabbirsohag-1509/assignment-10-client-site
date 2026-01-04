import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email!",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: `Thank you for subscribing with ${email}`,
    });
    setEmail("");
  };

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b]">
      {/* Background glow for dark mode */}
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-blue-500/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Stay Updated with <span className="text-blue-600 dark:text-blue-400">HomeNest</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Subscribe to our newsletter to get the latest property listings, real estate tips, and market insights directly in your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            Subscribe <FcApproval className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
