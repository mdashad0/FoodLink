import React from "react";
import { FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaHandsHelping size={40} />,
      title: "Connect with NGOs",
      description:
        "Easily connect with verified NGOs to donate surplus food quickly and efficiently.",
      color: "#ff7675",
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Reduce Food Waste",
      description:
        "Minimize food wastage by redirecting excess food to those in need.",
      color: "#55efc4",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Community Impact",
      description:
        "Support local communities by feeding the hungry and reducing environmental impact.",
      color: "#74b9ff",
    },
  ];

  const styles = {
    container: {
      width: "100vw",
      minHeight: "90vh",
      padding: "100px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f7f9fc",
      boxSizing: "border-box",
      textAlign: "center",
    },
    wrapper: {
      maxWidth: "1200px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "40px",
    },
    card: {
      background: "#fff",
      padding: "40px 20px",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      cursor: "pointer",
    },
    iconWrapper: (bg) => ({
      width: "80px",
      height: "80px",
      margin: "0 auto 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      background: bg,
      color: "#fff",
    }),
    title: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#2d3436",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#636e72",
    },
  };

  return (
    <section id="features" style={styles.container}>
      <div style={styles.wrapper}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-15px)";
              e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.1)";
            }}
          >
            <div style={styles.iconWrapper(feature.color)}>{feature.icon}</div>
            <h3 style={styles.title}>{feature.title}</h3>
            <p style={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;


