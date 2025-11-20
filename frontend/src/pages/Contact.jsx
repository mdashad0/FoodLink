import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  const styles = {
    container: {
      width: "100vw",
      minHeight: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage:
        "url('https://img.freepik.com/free-photo/arrangement-compost-made-rotten-food-with-copy-space_23-2149073761.jpg?semt=ais_hybrid&w=740&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "100px 20px",
      boxSizing: "border-box",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)", // dark overlay for readability
      zIndex: 1,
    },
    card: {
      position: "relative",
      zIndex: 2, // above overlay
      background: "rgba(255,255,255,0.95)",
      padding: "40px 30px",
      borderRadius: "20px",
      maxWidth: "450px",
      width: "100%",
      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.2rem",
      fontWeight: "800",
      marginBottom: "25px",
      color: "#2d3436",
      textShadow: "1px 1px 5px rgba(0,0,0,0.1)",
    },
    formGroup: {
      position: "relative",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "0.95rem",
      outline: "none",
      boxSizing: "border-box",
      transition: "all 0.3s ease",
    },
    textarea: {
      width: "100%",
      padding: "12px 15px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "0.95rem",
      outline: "none",
      boxSizing: "border-box",
      resize: "vertical",
      minHeight: "100px",
      transition: "all 0.3s ease",
    },
    label: {
      position: "absolute",
      top: "-8px",
      left: "12px",
      background: "#fff",
      padding: "0 4px",
      fontSize: "0.85rem",
      color: "#636e72",
      fontWeight: "500",
    },
    button: {
      background: "linear-gradient(135deg, #22c55e, #16a34a)",
      color: "#fff",
      padding: "12px 35px",
      borderRadius: "10px",
      border: "none",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    },
  };

  return (
    <section style={styles.container}>
      <div style={styles.overlay}></div> {/* dark overlay */}
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



