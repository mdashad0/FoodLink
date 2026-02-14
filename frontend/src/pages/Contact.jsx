import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <div
      style={{
        position: "fixed", // 🔥 perfectly centered always
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #1c1c1c)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
      }}
    >
      <style>
        {`
        @keyframes gradientMove {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
      `}
      </style>

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.6, 0] }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            position: "absolute",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#22c55e",
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* 3D Tilt Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          rotateX: 6,
          rotateY: -6,
        }}
        style={{
          width: "100%",
          maxWidth: "480px",
          padding: "50px 35px",
          borderRadius: "25px",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
          transformStyle: "preserve-3d",
        }}
      >
        <h2
          style={{
            fontSize: "2.3rem",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "35px",
            color: "#22c55e",
          }}
        >
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit}>
          {["name", "email", "message"].map((field) => (
            <div key={field} style={{ marginBottom: "25px" }}>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field}
                  value={formData[field]}
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused("")}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "14px",
                    border:
                      focused === field
                        ? "2px solid #22c55e"
                        : "1px solid #ccc",
                    outline: "none",
                    transition: "0.3s",
                  }}
                />
              ) : (
                <textarea
                  name={field}
                  placeholder={field}
                  value={formData[field]}
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused("")}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "14px",
                    border:
                      focused === field
                        ? "2px solid #22c55e"
                        : "1px solid #ccc",
                    outline: "none",
                    resize: "none",
                    minHeight: "120px",
                  }}
                />
              )}
            </div>
          ))}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34,197,94,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "16px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              background:
                "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#fff",
            }}
          >
            🚀 Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* 🎉 SUCCESS ANIMATION OVERLAY */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 60px rgba(34,197,94,0.8)",
            }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "60px",
                color: "#fff",
              }}
            >
              ✓
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
