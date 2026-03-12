"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about SwiftCart? We're here to help. Reach out to our
            team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <Mail className="text-blue-500" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">support@swiftcart.com</p>
              </div>
            </div>

            <div className="my-2 flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <Phone className="text-green-500" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+880 1234-567890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <MapPin className="text-red-500" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <form className="space-y-5">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-accent text-white py-2  hover:bg-secondary transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
