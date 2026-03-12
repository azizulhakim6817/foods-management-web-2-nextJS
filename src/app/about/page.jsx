"use client";
import React from "react";
import { Zap, ShoppingCart, Truck } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Work At The Speed Of Thought
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          SwiftCart brings the world's best brands to your doorstep with
          lightning-fast delivery and a seamless checkout experience. Our
          mission is to make online shopping faster, smarter, and more
          convenient than ever before.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <Zap className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Experience ultra-fast browsing and checkout with our optimized
              platform.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <ShoppingCart className="mx-auto text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Best Brands</h3>
            <p className="text-gray-600">
              Discover products from world-class brands curated for quality and
              style.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <Truck className="mx-auto text-purple-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly and reliably right to your
              doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
