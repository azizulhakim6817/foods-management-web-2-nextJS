"use client";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "Work At The Speed Of Thought",
    desc: "SwiftCart brings the world's best brands to your doorstep with lightning-fast delivery.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    date: "March 01, 2026",
  },
  {
    id: 2,
    title: "The Future of Online Shopping",
    desc: "Discover how technology is transforming the eCommerce industry worldwide.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    date: "March 02, 2026",
  },
  {
    id: 3,
    title: "The Future of Online Shopping",
    desc: "Discover how technology is transforming the eCommerce industry worldwide.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    date: "March 02, 2026",
  },
  {
    id: 4,
    title: "Best Brands in One Place",
    desc: "SwiftCart connects you with the world's most trusted brands.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
    date: "March 04, 2026",
  },
  {
    id: 5,
    title: "Secure Checkout Experience",
    desc: "Shop with confidence using SwiftCart's secure payment system.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    date: "March 05, 2026",
  },
  {
    id: 6,
    title: "Smart Shopping Tips",
    desc: "Learn how to shop smarter and save more with SwiftCart.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    date: "March 06, 2026",
  },
];

const BlogPage = () => {
  return (
    <div className="  px-6 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Work At The Speed Of Thought
        </h1>
        <p className="mt-4 mb-6 text-gray-600 text-lg dark:text-white">
          SwiftCart brings the world's best brands to your doorstep with
          lightning-fast delivery and a seamless checkout experience.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" shadow-2xl rounded-xl overflow-hidden hover:shadow-xlhover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <p className="text-sm  mb-2">{blog.date}</p>
              <h2 className="text-xl font-semibold ">{blog.title}</h2>
              <p className=" mt-2">{blog.desc}</p>

              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
