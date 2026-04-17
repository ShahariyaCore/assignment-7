import { useState, useEffect } from "react";
import FriendsDashboard from "../components/FriendsDashboard";
import Intro from "../components/Intro";


const HomePage = () => {

  return (
    <div className="p-6">
      <Intro />

      {/* Counter section */}
    

      
        <FriendsDashboard />
    </div>
  );
};

export default HomePage;
