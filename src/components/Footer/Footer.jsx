import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";
import xImg from "../../assets/x-logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="  border-t border-white/10 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* --- Left Section: Logo & Brand --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-1 mb-4">
            <img src={logo} alt="HomeNest Logo" className="w-12 h-12 rounded-lg dark:invert" />
            <h2 className="text-2xl font-bold">
              Home<span className="text-blue-400">Nest</span>
            </h2>
          </div>
          <p className="text-gray-800 dark:text-white leading-relaxed max-w-sm">
            Your trusted destination for finding, listing, and managing real estate effortlessly across Bangladesh. Discover modern homes, verified properties, expert agents, and seamless transactions that make buying, selling, or renting easy and reliable.
          </p>
        </div>

        {/* --- Middle Section: Contact Info --- */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className=" text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2 text-gray-700 dark:text-white">
              <MapPin size={18} className="text-blue-400" />
              Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2 text-gray-700 dark:text-white">
              <Mail size={18} className="text-blue-400" />
              support@homenest.com
            </p>
            <p className="flex items-center gap-2 text-gray-700 dark:text-white">
              <Phone size={18} className="text-blue-400" />
              +880 1723473804
            </p>
          </div>
        </div>

        {/* --- Right Section: Links & Social --- */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <Link to="/about-us" className="hover:text-blue-400 transition hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-blue-400 transition hover:underline">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-400 transition hover:underline">Privacy Policy</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <Link to="https://www.facebook.com/sabbir.hossainsohag.5" target="_blank" className="p-2  rounded-full transition bg-gray-400 hover:bg-gray-500 ">
              <Facebook size={18} />
            </Link>
            <Link to="https://x.com" target="_blank" className=" flex items-center p-2 rounded-full transition bg-gray-400 hover:bg-gray-500 ">
              <img className="w-4" src={xImg} alt="" />
            </Link>
            <Link to="https://www.instagram.com/sabbir__shs" target="_blank" className="p-2 bg-gray-400 hover:bg-gray-500 rounded-full transition">
              <Instagram size={18} />
            </Link>
            <Link to="https://www.linkedin.com/in/sabbirhossainsohag" target="_blank" className="p-2 bg-gray-400 hover:bg-gray-500 rounded-full transition"> 
              <Linkedin size={18} />
            </Link>
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
