import { useState } from "react";
import FriendCard from "./FriendCard";
import friendsData from "../../public/friends.json";

const FriendsDashboard = () => {
  const [friends, setFriends] = useState(friendsData);
  const [interactions, setInteractions] = useState(0);

  const handleUpdateStatus = (id) => {
    setFriends((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, status: "on-track", days_since_contact: 0 } : f
      )
    );
    setInteractions((prev) => prev + 1);
  };

  // Summary stats
  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  return (
    <div className="p-6">
      {/* Summary Boxes */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold">{totalFriends}</h2>
          <p className="text-gray-500">Total Friends</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold">{onTrack}</h2>
          <p className="text-gray-500">On Track</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold">{needAttention}</h2>
          <p className="text-gray-500">Need Attention</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold">{interactions}</h2>
          <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>

      {/* Friends Grid */}
      <h3 className="text-lg font-semibold mb-4">Your Friends</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard
            key={friend.id}
            friend={friend}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsDashboard;
