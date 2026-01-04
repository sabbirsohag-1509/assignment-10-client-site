import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required fields check
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all required fields before submitting!",
      });
      return;
    }

    // Success alert
    Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Thank you for contacting us. We will get back to you shortly.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Get in Touch with Home<span className="text-blue-600">Nest</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Have questions or need assistance? Our team is here to help you find
          your dream property. Reach out and we'll get back to you promptly.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center hover:shadow-2xl transition">
          <Mail className="w-8 h-8 mx-auto text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-700 dark:text-gray-300">
            support@homenest.com
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center hover:shadow-2xl transition">
          <Phone className="w-8 h-8 mx-auto text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-700 dark:text-gray-300">+880 1723473804</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center hover:shadow-2xl transition">
          <MapPin className="w-8 h-8 mx-auto text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-700 dark:text-gray-300">Dhaka, Bangladesh</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-lg"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="input input-bordered w-full rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full rounded-lg h-32"
          />
          <button
            type="submit"
            className="btn btn-primary w-full rounded-full text-white hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Optional Map Section */}
      <section className="mt-12">
        <iframe
          title="HomeNest Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.905238995935!2d90.3916!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b09a27f3e7%3A0x8e7f7d9f7f7f7f7f!2sDhaka%2C+Bangladesh!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          className="w-full h-64 md:h-96 rounded-xl shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
