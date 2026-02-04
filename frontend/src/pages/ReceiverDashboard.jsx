import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaHistory } from "react-icons/fa";

const ReceiverDashboard = () => {
  return (
    <div className="p-6 w-full bg-white w-screen h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🙏 Welcome, Receiver!
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-black">Available Food</h2>
          <p className="text-4xl font-bold text-green-600 mt-3">24</p>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-black">My Requests</h2>
          <p className="text-4xl font-bold text-blue-600 mt-3">4</p>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-black">Approved</h2>
          <p className="text-4xl font-bold text-purple-600 mt-3">3</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="text-2xl font-semibold text-black mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          to="/receiver/browse-food"
          className="bg-green-300 text-black p-6 rounded-xl shadow flex items-center gap-4 hover:bg-green-400 transition"
        >
          <FaSearch size={32} />
          <div>
            <h3 className="text-lg font-bold">Browse Food</h3>
            <p className="text-sm">Find available food donations</p>
          </div>
        </Link>

        <Link
          to="/receiver/my-requests"
          className="bg-blue-300 text-black p-6 rounded-xl shadow flex items-center gap-4 hover:bg-blue-400 transition"
        >
          <FaShoppingBasket size={32} />
          <div>
            <h3 className="text-lg font-bold">My Requests</h3>
            <p className="text-sm">View pending & approved food requests</p>
          </div>
        </Link>

        <Link
          to="/receiver/my-history"
          className="bg-purple-300 text-black p-6 rounded-xl shadow flex items-center gap-4 hover:bg-purple-400 transition"
        >
          <FaHistory size={32} />
          <div>
            <h3 className="text-lg font-bold">History</h3>
            <p className="text-sm">See your request & pickup history</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ReceiverDashboard;

