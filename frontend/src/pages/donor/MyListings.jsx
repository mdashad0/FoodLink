
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("https://foodlink-0jeg.onrender.com/my-listings", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setListings(res.data.listings || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const statusColors = {
    available: "bg-green-500 text-white",
    requested: "bg-yellow-500 text-black",
    completed: "bg-gray-500 text-white",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading your listings...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-emerald-900 to-green-700 text-white py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 drop-shadow-xl">
        📦 My Food Listings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {listings.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 shadow-2xl p-6 rounded-3xl text-gray-900 hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-green-700">{item.foodName}</h2>

            <p className="mt-2">
              <span className="font-semibold">Quantity:</span> {item.quantity}
            </p>

            <p>
              <span className="font-semibold">Location:</span> {item.location}
            </p>

            <p>
              <span className="font-semibold">Created:</span>{" "}
              {new Date(item.createdAt).toLocaleDateString()}
            </p>

            <span
              className={`mt-4 inline-block px-4 py-1 rounded-full text-sm font-semibold ${statusColors[item.status]}`}
            >
              {item.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {listings.length === 0 && (
        <p className="text-center text-lg mt-10 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-lg">
          You haven't listed any food yet.
        </p>
      )}
    </div>
  );
};

export default MyListings;
