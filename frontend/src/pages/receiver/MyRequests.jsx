
import React, { useState, useEffect } from "react";
import axios from "axios";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        console.log("📡 Fetching requests...");

        const res = await axios.get("https://foodlink-0jeg.onrender.com/my-requests", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("✅ Response:", res.data);
        setRequests(res.data.requests || []);
      } catch (err) {
        console.error("❌ Error fetching requests:", err);
        setError("Failed to load your requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  // Status badge colors + glow effect
  const statusColors = {
    pending: "bg-yellow-300 text-yellow-900 shadow-yellow-500/40",
    approved: "bg-green-300 text-green-900 shadow-green-500/40",
    rejected: "bg-red-300 text-red-900 shadow-red-500/40",
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen w-screen 
    bg-linear-to-br from-emerald-900 via-emerald-800 to-emerald-700
    flex flex-col items-center py-14 px-6 text-white"
>

        Loading your requests...
      </div>
    );
  }

  // Error Screen
  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center 
      bg-linear-to-br from-red-300 to-red-500 text-red-900 
      text-xl font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen 
    bg-linear-to-br from-emerald-900 via-emerald-800 to-emerald-700
    flex flex-col items-center py-14 px-6 text-white">

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold 
      text-white mb-12 text-center drop-shadow-lg tracking-wide">
        📋 My Food Requests
      </h1>

      {requests.length === 0 ? (
        <p className="text-gray-900 text-lg font-medium bg-white 
        px-6 py-3 rounded-xl shadow-xl backdrop-blur">
          You have not requested any food yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 
        w-full max-w-6xl">

          {requests.map((req, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-xl 
              border border-white/30 shadow-2xl rounded-3xl p-6
              transition-transform duration-300 
              hover:-translate-y-2 hover:shadow-green-500/40 
              hover:bg-white/30"
            >
              <div>
                <h2 className="text-2xl font-bold text-green-200 drop-shadow-sm mb-3">
                  {req.foodName}
                </h2>

                <p className="text-gray-100 mb-1">
                  <span className="font-semibold text-green-300">Quantity:</span> {req.quantity}
                </p>

                <p className="text-gray-100 mb-1">
                  <span className="font-semibold text-green-300">Donor:</span> {req.donorName}
                </p>

                <p className="text-gray-100 mb-1">
                  <span className="font-semibold text-green-300">Location:</span> {req.location}
                </p>
              </div>

              {/* Animated status badge */}
              <span
                className={`mt-5 inline-block px-5 py-2 rounded-full font-semibold text-sm 
                shadow-md animate-bounce-slow
                ${statusColors[req.status?.toLowerCase()] || "bg-gray-300 text-gray-800"}`}
              >
                {req.status || "Unknown"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequests;
