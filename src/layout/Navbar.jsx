import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

export const Navbar = () => {
  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded-md transition";
  const activeClasses = "bg-green-700 text-white hover:bg-green-800";
  const inactiveClasses = "text-gray-700 hover:text-green-700";

  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-white">
      {/* Logo / Title */}
      <div className="text-xl font-bold">
        <span className="text-black">Keen</span>
        <span className="text-green-700">Keeper</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaHome /> Home
        </NavLink>

        {/* Timeline */}
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaClock /> Timeline
        </NavLink>

        {/* Stats */}
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaChartBar /> Stats
        </NavLink>
      </div>
    </nav>
  );
};
