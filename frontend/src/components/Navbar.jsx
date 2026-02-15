// import React from "react";
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   const styles = {
//     navbar: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       backgroundColor: "#1e293b",
//       padding: "6px 80px", // reduced padding (moves navbar up)
//       position: "relative",
//       top: "-90px", 
//       left: "0", 
//       right: "0",
//       zIndex: "1000",
//       boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//     },
//     logo: {
//       color: "#22c55e",
//       fontSize: "1.7rem",
//       fontWeight: "700",
//       cursor: "pointer",
//     //   marginTop: "-5px", // moves text a little up
//     },
//     navLinks: {
//       display: "flex",
//       alignItems: "center",
//       gap: "35px",
//       marginRight: "60px",
//     //   marginTop: "-5px", // aligns with logo
//     },
//     link: {
//       color: "white",
//       textDecoration: "none",
//       fontSize: "1rem",
//       fontWeight: "500",
//       transition: "color 0.3s ease",
//     },
//   };

//   return (
//     <nav style={styles.navbar}>
//       <div style={styles.logo}>FoodLink</div>
//       <div style={styles.navLinks}>
//         <a href="#home" style={styles.link}>Home</a>
//         <a href="#about" style={styles.link}>About</a>
//         <a href="#features" style={styles.link}>Features</a>
//         <a href="#contact" style={styles.link}>Contact</a>
//         <a href="#login" style={styles.link}>Login</a>
//         <a href="#register" style={styles.link}>Register</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";


// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const styles = {
//     navbar: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       backgroundColor: "#1e293b", // dark blue
//       padding: "12px 80px",
//       position: "fixed",
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 1000,
//       boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//     },
//     logo: {
//       color: "#22c55e", // green color
//       fontSize: "1.8rem",
//       fontWeight: "700",
//       textDecoration: "none",
//       fontFamily: "Poppins, sans-serif",
//     },
//     navLinks: {
//       display: "flex",
//       alignItems: "center",
//       gap: "35px",
//       marginRight: "60px",
//     },
//     link: {
//       color: "white",
//       textDecoration: "none",
//       fontSize: "1rem",
//       fontWeight: "500",
//       fontFamily: "Poppins, sans-serif",
//       transition: "color 0.3s ease",
//     },
//   };

//   return (
//     <nav style={styles.navbar}>
//       <Link to="/" style={styles.logo}>
//         FoodLink
//       </Link>
//       <div style={styles.navLinks}>
//         <Link to="/" style={styles.link}>
//           Home
//         </Link>
//         <Link to="/about" style={styles.link}>
//           About
//         </Link>
//         <Link to="/features" style={styles.link}>
//           Features
//         </Link>
//         <Link to="/contact" style={styles.link}>
//           Contact
//         </Link>
//         <Link to="/login" style={styles.link}>
//           Login
//         </Link>
//         <Link to="/register" style={styles.link}>
//           Register
//         </Link>
//         <Link to="/dashboard" style={styles.link}>Dashboard</Link>
//         {/* <Link to="/donor/add-food" style={styles.link}>AddFood</Link>
//         <Link to="/receiver/browse-food" style={styles.link}>BrowseFood</Link> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#1e293b",
      padding: "12px 25px",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },

    logo: {
      color: "#22c55e",
      fontSize: "1.8rem",
      fontWeight: "700",
      textDecoration: "none",
      fontFamily: "Poppins, sans-serif",
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "35px",
    },

    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "Poppins, sans-serif",
    },

    // Hamburger Button
    menuBtn: {
      display: "none",
      fontSize: "28px",
      color: "white",
      cursor: "pointer",
      border: "none",
      background: "none",
    },

    // Mobile Menu
    mobileMenu: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#1e293b",
      padding: "15px",
      position: "absolute",
      top: "60px",
      left: 0,
      right: 0,
      gap: "15px",
      borderTop: "1px solid #334155",
    },
  };

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo}>FoodLink</Link>

        {/* DESKTOP MENU */}
        <div className="desktop-menu" style={styles.navLinks}>
          <div className="nav-items">
            <div className="hide-mobile" style={{ display: window.innerWidth <= 768 ? "none" : "flex", gap: "35px" }}>
              <Link to="/" style={styles.link}>Home</Link>
              <Link to="/about" style={styles.link}>About</Link>
              <Link to="/features" style={styles.link}>Features</Link>
              <Link to="/contact" style={styles.link}>Contact</Link>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/register" style={styles.link}>Register</Link>
              <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            </div>
          </div>

          {/* HAMBURGER BUTTON (shown only in mobile) */}
          <button
            style={{
              ...styles.menuBtn,
              display: window.innerWidth <= 768 ? "block" : "none",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && window.innerWidth <= 768 && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/features" style={styles.link}>Features</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

