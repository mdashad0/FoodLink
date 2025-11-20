// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// // import { useAuth } from "../context/AuthContext"; 

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const renderDonorOptions = () => (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//       <div
//         onClick={() => handleNavigation("/donor/add-food")}
//         className="bg-green-100 hover:bg-green-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-green-700">🍲 Add Food Listing</h3>
//         <p className="text-gray-600 mt-2">Post surplus food details for donation.</p>
//       </div>

//       <div
//         onClick={() => handleNavigation("/donor/my-listings")}
//         className="bg-blue-100 hover:bg-blue-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-blue-700">📋 My Listings</h3>
//         <p className="text-gray-600 mt-2">Track your posted food items and availability.</p>
//       </div>

//       <div
//         onClick={() => handleNavigation("/donor/requests")}
//         className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-yellow-700">📩 Requests Received</h3>
//         <p className="text-gray-600 mt-2">View and manage requests from receivers.</p>
//       </div>
//     </div>
//   );

//   const renderReceiverOptions = () => (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//       <div
//         onClick={() => handleNavigation("/receiver/browse-food")}
//         className="bg-pink-100 hover:bg-pink-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-pink-700">🍛 Browse Food</h3>
//         <p className="text-gray-600 mt-2">Find available food near your location.</p>
//       </div>

//       <div
//         onClick={() => handleNavigation("/receiver/my-requests")}
//         className="bg-purple-100 hover:bg-purple-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-purple-700">📦 My Requests</h3>
//         <p className="text-gray-600 mt-2">Check status of your food requests.</p>
//       </div>
//     </div>
//   );

//   const renderAdminOptions = () => (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//       <div
//         onClick={() => handleNavigation("/admin/manage-users")}
//         className="bg-red-100 hover:bg-red-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-red-700">👥 Manage Users</h3>
//         <p className="text-gray-600 mt-2">Approve or block donors and receivers.</p>
//       </div>

//       <div
//         onClick={() => handleNavigation("/admin/manage-food")}
//         className="bg-orange-100 hover:bg-orange-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-orange-700">🥗 Manage Listings</h3>
//         <p className="text-gray-600 mt-2">Approve, edit, or remove food posts.</p>
//       </div>

//       <div
//         onClick={() => handleNavigation("/admin/analytics")}
//         className="bg-teal-100 hover:bg-teal-200 p-6 rounded-2xl shadow-md cursor-pointer text-center transition-transform transform hover:scale-105"
//       >
//         <h3 className="text-xl font-semibold text-teal-700">📊 Analytics</h3>
//         <p className="text-gray-600 mt-2">View stats on donations and users.</p>
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center p-8"
//       style={{
//         backgroundImage:
//           'url("https://img.freepik.com/free-photo/arrangement-compost-made-rotten-food-with-copy-space_23-2149073761.jpg?semt=ais_hybrid&w=740&q=80")',
//       }}
//     >
//       <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-6xl mx-auto shadow-lg">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-gray-800">
//             👋 Welcome, <span className="text-green-600">{user?.name || "User"}</span>
//           </h1>
//           <button
//             onClick={logout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
//           >
//             Logout
//           </button>
//         </div>

//         <p className="text-gray-600 mt-2">
//           You are logged in as <span className="font-semibold capitalize">{user?.role}</span>.
//         </p>

//         {user?.role === "donor" && renderDonorOptions()}
//         {user?.role === "receiver" && renderReceiverOptions()}
//         {user?.role === "admin" && renderAdminOptions()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 pt-24 px-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
//         <h1 className="text-4xl font-extrabold text-green-700 mb-4 flex items-center justify-center gap-2">
//           👋 Welcome, {user?.name || "User"}!
//         </h1>
//         <p className="text-gray-700 text-lg mb-8">
//           You are logged in as{" "}
//           <span className="font-semibold text-green-700">
//             {user?.role || "a valued member"}
//           </span>
//           .
//         </p>

//         {/* Dashboard Actions */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           <div className="bg-green-100 hover:bg-green-200 transition p-6 rounded-xl shadow-md cursor-pointer">
//             <h2 className="text-xl font-semibold text-green-800 mb-2">
//               🍱 Add Food
//             </h2>
//             <p className="text-gray-600 text-sm">
//               Share surplus food with those in need by posting available items.
//             </p>
//           </div>

//           <div className="bg-yellow-100 hover:bg-yellow-200 transition p-6 rounded-xl shadow-md cursor-pointer">
//             <h2 className="text-xl font-semibold text-yellow-800 mb-2">
//               🍛 Browse Food
//             </h2>
//             <p className="text-gray-600 text-sm">
//               Explore available food donations near your area.
//             </p>
//           </div>

//           <div className="bg-blue-100 hover:bg-blue-200 transition p-6 rounded-xl shadow-md cursor-pointer">
//             <h2 className="text-xl font-semibold text-blue-800 mb-2">
//               📊 My Activity
//             </h2>
//             <p className="text-gray-600 text-sm">
//               Track your food sharing or receiving activity.
//             </p>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="mt-10 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-md transition"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-700 via-emerald-500 to-lime-400 flex items-center justify-center px-4 py-10">
//       <div className="max-w-5xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 text-center border border-green-200">
//         <h1 className="text-5xl font-extrabold text-green-800 mb-4 flex items-center justify-center gap-2 drop-shadow-sm">
//           👋 Welcome, {user?.name || "User"}!
//         </h1>
//         <p className="text-gray-700 text-lg mb-8 font-medium">
//           You are logged in as{" "}
//           <span className="font-semibold text-green-700">
//             {user?.role || "a valued member"}
//           </span>
//           . Let’s make a difference together 🌍
//         </p>

//         {/* Dashboard Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//           {/* Card 1 */}
//           <div className="bg-gradient-to-br from-green-200 to-green-100 hover:from-green-300 hover:to-green-200 transform hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer">
//             <h2 className="text-2xl font-bold text-green-900 mb-3">🍱 Add Food</h2>
//             <p className="text-gray-900">
//               Share your surplus food and help feed those in need.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-gradient-to-br from-yellow-200 to-amber-100 hover:from-yellow-300 hover:to-amber-200 transform hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer">
//             <h2 className="text-2xl font-bold text-amber-900 mb-3">🍛 Browse Food</h2>
//             <p className="text-gray-700">
//               Discover available food donations in your neighborhood.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-gradient-to-br from-blue-200 to-indigo-100 hover:from-blue-300 hover:to-indigo-200 transform hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer">
//             <h2 className="text-2xl font-bold text-indigo-900 mb-3">📊 My Activity</h2>
//             <p className="text-gray-700">
//               Track your food contributions or received donations easily.
//             </p>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="mt-12 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
//         >
//           🚪 Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import AddFood from "./AddFood";
// import BrowseFood from "./BrowseFood";

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const styles = {
//     wrapper: {
//       width: "100vw",
//       height: "100vh",
//       margin: 0,
//       padding: 0,
//       background: "linear-gradient(135deg, #0f172a 0%, #065f46 100%)",
//       backgroundAttachment: "fixed",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       overflow: "hidden",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     card: {
//       background: "rgba(255, 255, 255, 0.12)",
//       backdropFilter: "blur(18px)",
//       borderRadius: "20px",
//       padding: "50px 60px",
//       maxWidth: "750px",
//       color: "#f8fafc",
//       boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
//       textAlign: "center",
//     },
//     heading: {
//       fontSize: "2.7rem",
//       fontWeight: "700",
//       marginBottom: "20px",
//       color: "#ffffff",
//     },
//     section: {
//       textAlign: "left",
//       margin: "25px 0",
//       lineHeight: "1.6",
//     },
//     sectionTitle: {
//       fontSize: "1.3rem",
//       fontWeight: "600",
//       marginBottom: "8px",
//       color: "#86efac",
//     },
//     paragraph: {
//       color: "#e2e8f0",
//       fontSize: "1rem",
//     },
//     button: {
//       backgroundColor: "#22c55e",
//       border: "none",
//       borderRadius: "8px",
//       padding: "10px 25px",
//       fontWeight: "600",
//       fontSize: "1rem",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//       color: "#0f172a",
//       marginTop: "15px",
//     },
//   };

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.card}>
//         <h1 style={styles.heading}>👋 Welcome, {user?.name || "User"}!</h1>
//         <p style={styles.paragraph}>
//           You are logged in as a valued member. Let’s make a difference together 🌍
//         </p>

//         <div style={styles.section}>
//           <h3 style={styles.sectionTitle}>🍱 Add Food</h3>
//           <p style={styles.paragraph}>
//             Share your surplus food and help feed those in need.
//           </p>
//         </div>

//         <div style={styles.section}>
//           <h3 style={styles.sectionTitle}>🥗 Browse Food</h3>
//           <p style={styles.paragraph}>
//             Discover available food donations in your neighborhood.
//           </p>
//         </div>

//         <div style={styles.section}>
//           <h3 style={styles.sectionTitle}>📚 My Activity</h3>
//           <p style={styles.paragraph}>
//             Track your food contributions or received donations easily.
//           </p>
//         </div>

//         <button
//           style={styles.button}
//           onClick={() => {
//             logout();
//             navigate("/login");
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#16a34a")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#22c55e")}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import AddFood from "./donor/AddFood";
// import BrowseFood from "./receiver/BrowseFood";

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [activeTab, setActiveTab] = useState("home");

//   const styles = {
//     container: {
//       width: "100vw",
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #0f172a 0%, #065f46 100%)",
//       color: "#f8fafc",
//       fontFamily: "'Poppins', sans-serif",
//       paddingTop: "100px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     card: {
//       background: "rgba(255,255,255,0.08)",
//       backdropFilter: "blur(10px)",
//       borderRadius: "16px",
//       padding: "30px",
//       width: "85%",
//       maxWidth: "900px",
//       boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
//     },
//     heading: {
//       fontSize: "2.3rem",
//       fontWeight: "700",
//       textAlign: "center",
//       marginBottom: "15px",
//       color: "#86efac",
//     },
//     subText: {
//       textAlign: "center",
//       marginBottom: "25px",
//       fontSize: "1rem",
//     },
//     buttonContainer: {
//       display: "flex",
//       justifyContent: "center",
//       gap: "20px",
//       flexWrap: "wrap",
//       marginBottom: "25px",
//     },
//     button: (isActive) => ({
//       backgroundColor: isActive ? "#22c55e" : "rgba(255,255,255,0.15)",
//       color: isActive ? "#0f172a" : "#f8fafc",
//       border: "none",
//       borderRadius: "10px",
//       padding: "10px 20px",
//       fontWeight: "600",
//       fontSize: "1rem",
//       cursor: "pointer",
//       transition: "0.3s",
//     }),
//     logout: {
//       backgroundColor: "#fbbf24",
//       border: "none",
//       borderRadius: "10px",
//       padding: "10px 20px",
//       fontWeight: "600",
//       cursor: "pointer",
//       marginTop: "20px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.heading}>👋 Welcome, {user?.name || "User"}!</h1>
//         <p style={styles.subText}>
//           You are logged in as a valued member. Let’s make a difference together 🌍
//         </p>

//         {/* Section Buttons */}
//         <div style={styles.buttonContainer}>
//           <button
//             style={styles.button(activeTab === "add")}
//             onClick={() => setActiveTab("add")}
//           >
//             🍱 Add Food
//           </button>
//           <button
//             style={styles.button(activeTab === "browse")}
//             onClick={() => setActiveTab("browse")}
//           >
//             🍽️ Browse Food
//           </button>
//           <button
//             style={styles.button(activeTab === "activity")}
//             onClick={() => setActiveTab("activity")}
//           >
//             📊 My Activity
//           </button>
//         </div>

//         {/* Dynamic Content */}
//         <div style={{ marginTop: "20px" }}>
//           {activeTab === "add" && <AddFood />}
//           {activeTab === "browse" && <BrowseFood />}
//           {activeTab === "activity" && (
//             <p style={{ textAlign: "center" }}>
//               Here you can track your food contributions and received donations.
//             </p>
//           )}
//           {activeTab === "home" && (
//             <p style={{ textAlign: "center" }}>
//               Choose an option above to get started.
//             </p>
//           )}
//         </div>

//         {/* Logout */}
//         <div style={{ textAlign: "center" }}>
//           <button style={styles.logout} onClick={logout}>
//             🚪 Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import AddFood from "./donor/AddFood";
// import BrowseFood from "./receiver/BrowseFood";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100vw",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #065f46 100%)",
      color: "#f8fafc",
      fontFamily: "'Poppins', sans-serif",
      paddingTop: "100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "40px",
      width: "85%",
      maxWidth: "900px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#86efac",
    },
    subText: {
      marginBottom: "30px",
      fontSize: "1.1rem",
      color: "#e2e8f0",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginBottom: "25px",
    },
    button: {
      backgroundColor: "#22c55e",
      color: "#0f172a",
      border: "none",
      borderRadius: "10px",
      padding: "12px 25px",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "0.3s",
    },
    logout: {
      backgroundColor: "#fbbf24",
      border: "none",
      borderRadius: "10px",
      padding: "10px 20px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "25px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>👋 Welcome, {user?.name || "User"}!</h1>
        <p style={styles.subText}>
          You are logged in as a valued member. Let’s make a difference together 🌍
        </p>

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => navigate("/donor/add-food")}
          >
            🍱 AddFood
          </button>

          <button
            style={styles.button}
            onClick={() => navigate("/receiver/browse-food")}
          >
            🍽️ BrowseFood
          </button>

          <button
            style={styles.button}
            onClick={() => navigate("/receiver/my-requests")}
          >
            📊 My Requests
          </button>
        
        <button
            style={styles.button}
            onClick={() => navigate("/donor/my-listings")}
          >
            📄 My Listings
          </button>
          <button
            style={styles.button}
            onClick={() => navigate("/donor/requests")}
          >
            📥 Requests Received
          </button>
        
        </div>

        <button
          style={styles.logout}
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
