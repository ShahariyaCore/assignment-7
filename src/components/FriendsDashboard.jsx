import { useState, useEffect } from "react";
import FriendCard from "./FriendCard";

const FriendsDashboard = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Load friends.json from public folder
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Error loading friends.json:", err));
  }, []);

  // ✅ Show spinner for 0.5 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Summary stats
  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  return (
    <div className="p-6 container mx-auto">
      {/* Summary Boxes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
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
          <h2 className="text-xl font-bold">0</h2>
          <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>

      {/* Friends Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-4">Your Friends</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FriendsDashboard;
