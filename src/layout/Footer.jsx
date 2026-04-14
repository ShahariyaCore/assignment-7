import React from "react";
import logo from "../assets/logo-xl.png"; // adjust path if your logo file differs
; // adjust path if your logo file differs
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="KeenKeeper Logo" className="h-12" />
        </div>

        {/* Title */}
        
        <p className="max-w-xl mx-auto text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="text-lg font-semibold mb-3">Social Links</h3>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-900 hover:bg-green-700 hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-900 hover:bg-green-700 hover:text-white transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-900 hover:bg-green-700 hover:text-white transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 border-t border-gray-700 pt-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
