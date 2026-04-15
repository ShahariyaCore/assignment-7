import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/friends/${friend.id}`, { state: { friend } });
  };

  return (
    <div
      onClick={handleViewDetails}
      className="cursor-pointer bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
    >
      {/* Profile Picture */}
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
      <div className="flex justify-center">
        <span
          className={`px-6 py-1.5 text-sm font-semibold rounded-full tracking-wider ${
            friend.status === "overdue"
              ? "bg-red-500 text-white"
              : friend.status === "almost due"
              ? "bg-amber-400 text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
