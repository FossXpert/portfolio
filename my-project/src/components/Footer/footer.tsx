import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-6 lg:py-10 mt-10">
      <div className=" mx-auto flex flex-col items-center justify-center text-center gap-2">
        
        {/* Contact Info */}
        <div>
          <div className="flex items-center gap-4 lg:gap-8 mt-2">
            <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-purple-400" /> 
                <a href="tel:+916386866386" className="hover:text-purple-400">
                +91 6386 86 6386
                </a>
            </div>
            <div className="flex items-center gap-1">
                <FaEnvelope className="text-purple-400" /> 
                <a href="mailto:ray_rahul@outlook.com" className="hover:text-purple-400">
                ray_rahul@outlook.com
                </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-sm opacity-75">
          &copy; {new Date().getFullYear()} Rahul Ray. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
