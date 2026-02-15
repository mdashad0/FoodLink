

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import AddFood from "./donor/AddFood";
// import BrowseFood from "./receiver/BrowseFood";

const Dashboard = () => {
  const { user,logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
  logout(); 
  window.location.href = "/login";
};


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
