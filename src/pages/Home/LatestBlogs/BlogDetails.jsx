import React from "react";
import { useParams } from "react-router";
import { CalendarDays } from "lucide-react";
import blogsData from "../../../data/blogsData";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogsData.find((b) => b.id === id);

  if (!blog) return <div>Blog Not Found</div>;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <img src={blog.image} alt={blog.title} className="w-full h-[350px] object-cover rounded-xl mb-8" />
      <div className="flex items-center gap-2 text-gray-500 mb-4">
        <CalendarDays className="w-5 h-5" />
        <span>{blog.date}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">{blog.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{blog.content}</p>
    </section>
  );
};

export default BlogDetails;
