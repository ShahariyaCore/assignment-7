import { useState, useEffect } from "react";
import FriendsDashboard from "../components/FriendsDashboard";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show spinner for 1 second
    const timer = setTimeout(() => {
       setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <FriendsDashboard />
      )}
    </div>
  );
};

export default HomePage;
