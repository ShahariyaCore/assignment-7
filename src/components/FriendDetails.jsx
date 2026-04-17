import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  FaBell,
  FaFolder,
  FaTrash,
  FaPhone,
  FaCommentDots,
  FaVideo,
} from "react-icons/fa";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [friends, setFriends] = useState(() => {
    return JSON.parse(localStorage.getItem("friends")) || [];
  });

  // If state was passed, use that; otherwise find friend by id
  const friend = state?.friend || friends.find((f) => String(f.id) === id);

  if (!friend) {
    return <p className="p-6">No friend selected.</p>;
  }

  const today = new Date();
  const nextDue = new Date(today);
  nextDue.setDate(today.getDate() + friend.goal);

  const handleDelete = () => {
    const updated = friends.filter((f) => f.id !== friend.id);
    setFriends(updated);
    localStorage.setItem("friends", JSON.stringify(updated));
    navigate("/");
  };

  // ✅ Log interaction and show toast (no auto redirect)
  const handleInteraction = (type) => {
    const newEntry = {
      type,
      friend: friend.name,
      friendId: friend.id,
      date: new Date().toLocaleDateString(),
    };

    const saved = JSON.parse(localStorage.getItem("timeline")) || [];
    saved.unshift(newEntry);
    localStorage.setItem("timeline", JSON.stringify(saved));

    toast.success(`${type.toUpperCase()} with ${friend.name} logged!`);
    // ❌ Removed navigate("/timeline")
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Profile Card */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 mx-auto rounded-full object-cover border"
          />

          <h2 className="text-2xl font-bold mt-4">{friend.name}</h2>

          <div className="flex justify-center gap-2 mt-2 flex-wrap">
            <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
              {friend.status}
            </span>
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-3 italic">{friend.bio}</p>
          <p className="text-gray-400 text-sm mt-1">
            Preferred: {friend.preferred}
          </p>

          {/* Actions */}
          <div className="mt-6 space-y-2">
            <button className="w-full py-2 flex items-center justify-center gap-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FaBell /> Snooze 2 Weeks
            </button>
            <button className="w-full py-2 flex items-center justify-center gap-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FaFolder /> Archive
            </button>
            <button
              onClick={handleDelete}
              className="w-full py-2 flex items-center justify-center gap-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-2xl font-bold">{friend.days_since_contact}</p>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-2xl font-bold">{friend.goal}</p>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-2xl font-bold">{nextDue.toLocaleDateString()}</p>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <p className="text-gray-500">
                Connect every{" "}
                <span className="font-semibold">{friend.goal} days</span>
              </p>
            </div>
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleInteraction("call")}
                className="py-4 flex items-center justify-center gap-2 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                <FaPhone /> Call
              </button>
              <button
                onClick={() => handleInteraction("text")}
                className="py-4 flex items-center justify-center gap-2 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                <FaCommentDots /> Text
              </button>
              <button
                onClick={() => handleInteraction("video")}
                className="py-4 flex items-center justify-center gap-2 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                <FaVideo /> Video
              </button>
            </div>
          </div>

          {/* Optional navigation */}
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <button
              onClick={() => navigate("/timeline")}
              className="px-6 py-2 bg-blue-100 rounded-lg hover:bg-blue-200"
            >
              View Timeline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
