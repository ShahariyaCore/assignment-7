import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(saved);
  }, []);

  // Count interactions
  const callCount = timeline.filter((i) => i.type === "call").length;
  const textCount = timeline.filter((i) => i.type === "text").length;
  const videoCount = timeline.filter((i) => i.type === "video").length;

  const data = {
    labels: ["Text", "Call", "Video"],
    datasets: [
      {
        data: [textCount, callCount, videoCount],
        backgroundColor: [
          "rgba(139, 92, 246, 0.8)", // purple
          "rgba(6, 95, 70, 0.8)",   // dark green
          "rgba(16, 185, 129, 0.8)", // emerald
        ],
        borderColor: [
          "rgba(139, 92, 246, 1)",
          "rgba(6, 95, 70, 1)",
          "rgba(16, 185, 129, 1)",
        ],
        borderWidth: 3,
        hoverOffset: 20, // zoom effect on hover
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151", // gray-700
          font: {
            size: 14,
            weight: "bold",
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "#111827", // dark tooltip
        titleColor: "#fff",
        bodyColor: "#d1d5db",
        padding: 12,
        cornerRadius: 8,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Friendship Analytics</h2>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-center">By Interaction Type</h3>
        <div className="w-72 mx-auto">
          <Pie data={data} options={options} />
        </div>

        {/* Counts */}
        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div className="bg-purple-100 p-4 rounded-lg shadow-sm">
            <p className="text-xl font-bold text-purple-700">{textCount}</p>
            <p className="text-sm text-gray-600">Texts</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-sm">
            <p className="text-xl font-bold text-green-900">{callCount}</p>
            <p className="text-sm text-gray-600">Calls</p>
          </div>
          <div className="bg-emerald-100 p-4 rounded-lg shadow-sm">
            <p className="text-xl font-bold text-emerald-700">{videoCount}</p>
            <p className="text-sm text-gray-600">Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
