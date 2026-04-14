import { useState } from "react";
import { toast } from "react-toastify";

const FriendCard = ({ friend, onUpdateStatus }) => {
  const [isContacted, setIsContacted] = useState(false);

  const handleContact = () => {
    if (isContacted) return;
    setIsContacted(true);
    toast.success(`You contacted ${friend.name}!`);
    onUpdateStatus(friend.id);
  };

  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case "overdue":
        return { text: "Overdue", color: "bg-red-500 text-white" };
      case "almost_due":
      case "almost due":
        return { text: "Almost Due", color: "bg-amber-400 text-white" };
      case "on-track":
      case "on_track":
        return { text: "On-Track", color: "bg-emerald-600 text-white" };
      default:
        return { text: status || "", color: "bg-gray-400 text-white" };
    }
  };

  const statusConfig = getStatusConfig(friend.status);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Profile Picture - Centered */}
      <div className="flex justify-center mb-5">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md"
        />
      </div>

      {/* Name */}
      <h3 className="text-center text-2xl font-semibold text-gray-900 mb-1">
        {friend.name}
      </h3>

      {/* Days ago */}
      <p className="text-center text-sm text-gray-400 mb-6">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <div className="flex justify-center mb-8">
        <span
          className={`px-6 py-1.5 text-sm font-semibold rounded-full tracking-wider ${statusConfig.color}`}
        >
          {statusConfig.text}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={handleContact}
        disabled={isContacted}
        className="mt-auto w-full py-3.5 rounded-2xl text-white font-semibold text-base
                   bg-gradient-to-r from-purple-600 to-pink-500 
                   hover:from-purple-700 hover:to-pink-600 
                   disabled:opacity-60 disabled:cursor-not-allowed 
                   transition-all active:scale-95 shadow-sm"
      >
        {isContacted ? "✓ Contacted" : "Mark as Contacted"}
      </button>
    </div>
  );
};

export default FriendCard;