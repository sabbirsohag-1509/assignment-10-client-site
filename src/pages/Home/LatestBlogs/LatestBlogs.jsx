import React from "react";
import { Link } from "react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import blog1 from "../../../assets/blog1.jpg";
import blog2 from "../../../assets/blog2.jpg";
import blog3 from "../../../assets/blog3.jpg";

const blogs = [
  {
    id: 1,
    title: "Top Tips for First-Time Home Buyers",
    description:
      "Essential tips to help first-time buyers make smart and confident real estate decisions.",
    image: blog1,
    date: "July 15, 2025",
    path: "/blogs/1",
    content: `
Buying your first home can be overwhelming.
In this blog, we discuss budgeting, location,
legal checks, and how to choose the right agent.
    `,
  },
  {
    id: 2,
    title: "Real Estate Investment Trends in 2025",
    description:
      "Explore the latest trends shaping property investment opportunities in Bangladesh.",
    image: blog2,
    date: "August 02, 2025",
    path: "/blogs/2",
    content: `
Location determines property value.
This guide explains how to evaluate neighborhood,
transport, future growth, and facilities.
    `,
  },
  {
    id: 3,
    title: "How to Choose the Right Property Location",
    description:
      "A practical guide to selecting the perfect location for long-term value and comfort.",
    image: blog3,
    date: "August 20, 2025",
    path: "/blogs/3",
    content: `
2025 brings new opportunities in real estate.
From smart homes to commercial investments,
we explore the latest market trends in Bangladesh.
    `,
  },
];

const LatestBlogs = () => {
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
            Latest Real Estate
            <span className="text-blue-600 dark:text-blue-400"> Blogs</span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed
            text-gray-600 dark:text-gray-300"
          >
            Stay updated with expert insights, market trends, and helpful guides
            from our real estate professionals.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-xl overflow-hidden
              bg-white dark:bg-[#020617]/70
              border border-gray-200 dark:border-white/10
              shadow-md hover:shadow-xl
              transition-all duration-300 hover:-translate-y-1"
            >
              {/* Blog Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover
                  transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div
                  className="flex items-center gap-2 text-sm
                  text-gray-500 dark:text-gray-400 mb-2"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>

                <h3
                  className="text-lg font-semibold mb-2
                  text-gray-900 dark:text-white"
                >
                  {blog.title}
                </h3>

                <p
                  className="text-sm leading-relaxed
                  text-gray-600 dark:text-gray-400 mb-4"
                >
                  {blog.description}
                </p>

                {/* Individual Blog Link */}
                <Link
                  to={blog.path}
                  className="inline-flex items-center gap-1
                  text-blue-600 dark:text-blue-400 font-semibold
                  group-hover:underline"
                >
                  View More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs */}
        <div className="text-center mt-12">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2
            px-8 py-3 rounded-lg font-semibold
            bg-blue-600 hover:bg-blue-700 text-white
            transition-all duration-300 shadow-lg"
          >
            View All Blogs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
