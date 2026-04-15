import React from "react";
const Intro = () => {
  return (
    <div className="mt-5 mb-10 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Friends to keep close in your life
      </h2>
      <p className="mt-2 text-gray-600">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg shadow hover:bg-emerald-700 transition">
        + Add a Friend
      </button>
    </div>
  );
};

export default Intro;
