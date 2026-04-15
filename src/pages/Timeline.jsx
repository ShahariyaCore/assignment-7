import { useState } from "react";
import {
  FaPhone,
  FaCommentDots,
  FaVideo,
  FaHandshake,
  FaTrash,
  FaArrowLeft,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Timeline = () => {
  const [interactions, setInteractions] = useState(() => {
    return JSON.parse(localStorage.getItem("timeline")) || [];
  });
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filtered =
    filter === "all"
      ? interactions
      : interactions.filter((i) => i.type === filter);

  const handleDelete = (idx) => {
    const updated = interactions.filter((_, i) => i !== idx);
    setInteractions(updated);
    localStorage.setItem("timeline", JSON.stringify(updated));
  };

  // Animation variants for hover
  const variants = {
    call: { scale: 1.05, backgroundColor: "#e6ffed" },
    text: { scale: 1.05, backgroundColor: "#e6f0ff" },
    video: { scale: 1.05, backgroundColor: "#f3e6ff" },
    meetup: { scale: 1.05, backgroundColor: "#fff3e6" },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>

      {/* Filter Dropdown */}
      <div className="relative inline-block mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="appearance-none p-2 pr-8 border rounded-lg shadow focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
          <option value="meetup">Meetup</option>
        </select>
        <span className="absolute right-2 top-2 text-gray-500 pointer-events-none">
          ▼
        </span>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              whileHover={variants[item.type]}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow transition"
            >
              {item.type === "call" && <FaPhone className="text-green-600" />}
              {item.type === "text" && (
                <FaCommentDots className="text-blue-600" />
              )}
              {item.type === "video" && <FaVideo className="text-purple-600" />}
              {item.type === "meetup" && (
                <FaHandshake className="text-orange-600" />
              )}

              <div className="flex-1">
                <p className="font-medium capitalize">
                  {item.type} with {item.friend}
                </p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(idx)}
                className="p-2 rounded-full hover:bg-red-100 transition"
              >
                <FaTrash className="text-red-500" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Timeline;
