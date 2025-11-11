import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";
import xImg from "../../assets/x-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-white/10 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* --- Left Section: Logo & Brand --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="HomeNest Logo" className="w-10 h-10 rounded-lg" />
            <h2 className="text-2xl font-bold text-white">
              Home<span className="text-blue-400">Nest</span>
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Your trusted destination for finding, listing, and managing real estate effortlessly across Bangladesh. Discover modern homes, verified properties, expert agents, and seamless transactions that make buying, selling, or renting easy and reliable.
          </p>
        </div>

        {/* --- Middle Section: Contact Info --- */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400" />
              Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              support@homenest.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" />
              +880 1234-567890
            </p>
          </div>
        </div>

        {/* --- Right Section: Links & Social --- */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#" className="hover:text-blue-400 transition">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition">
              <Facebook size={18} />
            </a>
            <a href="#" className=" flex items-center p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition">
              <img className="w-4" src={xImg} alt="" />
            </a>
            <a href="#" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span>Home</span><span className="text-blue-400 font-semibold">Nest</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
