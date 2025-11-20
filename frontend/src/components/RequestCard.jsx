import React from "react";
  
const RequestCard = ({ request, onAccept, onReject }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-blue-700">{request.foodName}</h3>
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Requested by:</span> {request.receiverName}
      </p>
      <p className="text-gray-600 mt-1">
        <span className="font-semibold">Quantity:</span> {request.quantity}
      </p>
      <p className="text-gray-600 mt-1">
        <span className="font-semibold">Status:</span>{" "}
        <span
          className={`${
            request.status === "Pending"
              ? "text-yellow-600"
              : request.status === "Accepted"
              ? "text-green-600"
              : "text-red-600"
          } font-semibold`}
        >
          {request.status}
        </span>
      </p>

      {request.status === "Pending" && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => onAccept(request)}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex-1 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => onReject(request)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex-1 transition-colors"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default RequestCard;
