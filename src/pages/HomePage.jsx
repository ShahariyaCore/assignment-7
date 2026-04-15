import { useState, useEffect } from "react";
import FriendsDashboard from "../components/FriendsDashboard";
import Intro from "../components/Intro";


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show spinner for 0.5 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6">
      <Intro />

      {/* Counter section */}
    

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
