import React from "react";

const FoodCard = ({ food, onRequest }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={food.image || "https://img.freepik.com/free-photo/healthy-food-background_1150-37259.jpg?w=740&q=80"}
        alt={food.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-green-700">{food.name}</h2>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Quantity:</span> {food.quantity}
        </p>
        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Pickup:</span> {food.location}
        </p>
        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Expiry:</span> {food.expiryDate}
        </p>
        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Donor:</span> {food.donorName}
        </p>

        <button
          onClick={() => onRequest(food)}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-all"
        >
          Request Food
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
