import React from "react";
import { FaClock, FaChartBar } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-white">
      {/* Logo / Title */}
      <div className="text-xl font-bold">
        <span className="text-black">Keen</span>
        <span className="text-green-700">Keeper</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        <button className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition">
          <FaClock /> Timeline
        </button>

        <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition">
          <FaChartBar /> Stats
        </button>
      </div>
    </nav>
  );
};
