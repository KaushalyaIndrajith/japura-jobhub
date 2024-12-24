// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Your message has been sent successfully!");
        setFormData({ firstname: "", lastname: "", phone: "", email: "", message: "" });
      } else {
        toast.error("Failed to send the message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <ToastContainer />
      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Left Side: Contact Info */}
        <div className="bg-white text-gray-700 flex flex-col justify-center p-8">
          <Image
                src="/images/contact.jpeg"
                alt="contact us"
                width={500}
                height={300}
                className="w-full max-w-lg rounded-xl shadow-2xl mt-3 transform hover:scale-105 transition-all"
                      />
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-900 mb-8">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname" className="block text-sm font-semibold text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-semibold text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-1/2 bg-red-900 hover:bg-red-950 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
