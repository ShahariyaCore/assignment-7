import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-green-700 mb-4"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-semibold mb-2"
      >
        Page Not Found
      </motion.h2>

      <p className="text-gray-600 mb-6 max-w-md">
        Looks like this friendship link is broken. The page you’re looking for
        doesn’t exist or has been moved.
      </p>

      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#065f46", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-700 text-white shadow hover:bg-green-800 transition"
      >
        <FaArrowLeft /> Back to Home
      </motion.button>
    </div>
  );
};

export default NotFound;
