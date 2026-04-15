import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartBar, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded-md transition";
  const activeClasses = "bg-green-700 text-white hover:bg-green-800";
  const inactiveClasses = "text-gray-700 hover:text-green-700";

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <nav className="flex justify-between items-center container mx-auto px-6 py-3">
        {/* Logo / Title */}
        <div className="text-xl font-bold">
          <span className="text-black">Keen</span>
          <span className="text-green-700">Keeper</span>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row gap-4 md:gap-6 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaClock /> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaChartBar /> Stats
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
