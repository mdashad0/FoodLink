// import React, { useState, useEffect } from "react";

// const MyRequests = () => {
//   const [requests, setRequests] = useState([
//     {
//       foodName: "Rice & Curry",
//       donorName: "Anita",
//       quantity: "3 plates",
//       status: "Pending",
//       location: "Delhi",
//     },
//     {
//       foodName: "Bread Packets",
//       donorName: "Ravi",
//       quantity: "10 pcs",
//       status: "Approved",
//       location: "Noida",
//     },
//     {
//       foodName: "Fruit Basket",
//       donorName: "Sunita",
//       quantity: "5 items",
//       status: "Rejected",
//       location: "Gurgaon",
//     },
//   ]);

//   // Example: Fetch requests from backend
//   // useEffect(() => {
//   //   fetch("/api/requests")
//   //     .then(res => res.json())
//   //     .then(data => setRequests(data));
//   // }, []);

//   const statusColors = {
//     Pending: "bg-yellow-200 text-yellow-800",
//     Approved: "bg-green-200 text-green-800",
//     Rejected: "bg-red-200 text-red-800",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
//       <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
//         📋 My Food Requests
//       </h1>

//       {requests.length === 0 ? (
//         <p className="text-center text-gray-700 text-lg">You have not requested any food yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {requests.map((req, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-l-4 border-green-500"
//             >
//               <div>
//                 <h2 className="text-xl font-bold text-green-700 mb-2">{req.foodName}</h2>
//                 <p className="text-gray-700"><span className="font-semibold">Quantity:</span> {req.quantity}</p>
//                 <p className="text-gray-700"><span className="font-semibold">Donor:</span> {req.donorName}</p>
//                 <p className="text-gray-700"><span className="font-semibold">Location:</span> {req.location}</p>
//               </div>
//               <span
//                 className={`mt-4 inline-block px-4 py-1 rounded-full font-semibold text-sm ${statusColors[req.status]}`}
//               >
//                 {req.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyRequests;


// import React, { useState, useEffect } from "react";

// const MyRequests = () => {
//   const [requests, setRequests] = useState([
//     {
//       foodName: "Rice & Curry",
//       donorName: "Anita",
//       quantity: "3 plates",
//       status: "Pending",
//       location: "Delhi",
//     },
//     {
//       foodName: "Bread Packets",
//       donorName: "Ravi",
//       quantity: "10 pcs",
//       status: "Approved",
//       location: "Noida",
//     },
//     {
//       foodName: "Fruit Basket",
//       donorName: "Sunita",
//       quantity: "5 items",
//       status: "Rejected",
//       location: "Gurgaon",
//     },
//   ]);

//   // Example backend fetching
//   // useEffect(() => {
//   //   fetch("/api/requests")
//   //     .then((res) => res.json())
//   //     .then((data) => setRequests(data));
//   // }, []);

//   const statusColors = {
//     Pending: "bg-yellow-200 text-yellow-800",
//     Approved: "bg-green-200 text-green-800",
//     Rejected: "bg-red-200 text-red-800",
//   };

//   return (
//     <div className="min-h-screen bg-green-100 flex flex-col items-center py-12 px-6">
//       {/* Page Title */}
//       <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-12 text-center drop-shadow-md">
//         📋 My Food Requests
//       </h1>

//       {/* Requests Section */}
//       {requests.length === 0 ? (
//         <p className="text-gray-700 text-lg">
//           You have not requested any food yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
//           {requests.map((req, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-t-4 border-green-500"
//             >
//               <div>
//                 <h2 className="text-2xl font-bold text-green-700 mb-3">
//                   {req.foodName}
//                 </h2>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Quantity:</span> {req.quantity}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Donor:</span> {req.donorName}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Location:</span>{" "}
//                   {req.location}
//                 </p>
//               </div>

//               <span
//                 className={`mt-4 inline-block px-4 py-1 rounded-full font-semibold text-sm ${statusColors[req.status]}`}
//               >
//                 {req.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyRequests;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MyRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch requests from backend
//   // useEffect(() => {
//   //   const fetchRequests = async () => {
//   //     try {
//   //       const res = await axios.get("http://localhost:3000/my-requests"); // 🔗 Adjust route if needed
//   //       setRequests(res.data.requests || []);
//   //     } catch (err) {
//   //       console.error("Error fetching requests:", err);
//   //       setError("Failed to load your requests.");
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchRequests();
//   // }, []);
//  useEffect(() => {
//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/my-requests");
//       setRequests(res.data.requests || []);
//     } catch (err) {
//       console.error("Error fetching requests:", err);
//       setError("Failed to load your requests.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchRequests();
// }, []);


//   const statusColors = {
//     Pending: "bg-yellow-200 text-yellow-800",
//     Approved: "bg-green-200 text-green-800",
//     Rejected: "bg-red-200 text-red-800",
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-green-100 text-green-900 text-2xl font-semibold">
//         Loading your requests...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-green-100 text-red-700 text-xl font-semibold">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-green-100 flex flex-col items-center py-12 px-6">
//       {/* Page Title */}
//       <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-12 text-center drop-shadow-md">
//         📋 My Food Requests
//       </h1>

//       {/* Requests Section */}
//       {requests.length === 0 ? (
//         <p className="text-gray-700 text-lg">You have not requested any food yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
//           {requests.map((req, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-t-4 border-green-500"
//             >
//               <div>
//                 <h2 className="text-2xl font-bold text-green-700 mb-3">
//                   {req.foodName}
//                 </h2>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Quantity:</span> {req.quantity}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Donor:</span> {req.donorName}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Location:</span> {req.location}
//                 </p>
//               </div>

//               <span
//                 className={`mt-4 inline-block px-4 py-1 rounded-full font-semibold text-sm ${statusColors[req.status]}`}
//               >
//                 {req.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyRequests;


import React, { useState, useEffect } from "react";
import axios from "axios";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch requests from backend
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        console.log("📡 Fetching requests...");
        
        const res = await axios.get("http://localhost:3000/my-requests", {
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
        setLoading(false); // ✅ Always stop loading (even if error)
      }
    };

    fetchRequests();
  }, []);

  // ✅ Status colors
  const statusColors = {
    Pending: "bg-yellow-200 text-yellow-800",
    Approved: "bg-green-200 text-green-800",
    Rejected: "bg-red-200 text-red-800",
  };

  // ✅ Loading screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100 text-green-900 text-2xl font-semibold">
        Loading your requests...
      </div>
    );
  }

  // ✅ Error screen
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100 text-red-700 text-xl font-semibold">
        {error}
      </div>
    );
  }

  // ✅ Main content
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-12 text-center drop-shadow-md">
        📋 My Food Requests
      </h1>

      {requests.length === 0 ? (
        <p className="text-gray-700 text-lg">
          You have not requested any food yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {requests.map((req, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-t-4 border-green-500"
            >
              <div>
                <h2 className="text-2xl font-bold text-green-700 mb-3">
                  {req.foodName}
                </h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Quantity:</span> {req.quantity}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Donor:</span> {req.donorName}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Location:</span> {req.location}
                </p>
              </div>

              <span
                className={`mt-4 inline-block px-4 py-1 rounded-full font-semibold text-sm ${
                  statusColors[req.status] || "bg-gray-200 text-gray-700"
                }`}
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
