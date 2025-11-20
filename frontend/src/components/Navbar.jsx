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

// const Navbar = () => {
//   return (
//     <nav className="bg-[#1e293b] text-white fixed top-0 left-0 right-0 z-50 shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-3 px-6">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors duration-200"
//         >
//           🌿 FoodLink
//         </Link>

//         {/* Nav Links */}
//         <div className="hidden md:flex space-x-6 font-medium">
//           <Link
//             to="/dashboard"
//             className="hover:text-yellow-300 transition-colors duration-200"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/donor/add-food"
//             className="hover:text-yellow-300 transition-colors duration-200"
//           >
//             Add Food
//           </Link>
//           <Link
//             to="/receiver/browse-food"
//             className="hover:text-yellow-300 transition-colors duration-200"
//           >
//             Browse
//           </Link>
//           <Link
//             to="/login"
//             className="hover:text-yellow-300 transition-colors duration-200"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="hover:text-yellow-300 transition-colors duration-200"
//           >
//             Register
//           </Link>
//         </div>

//         {/* Mobile Menu (Hamburger Icon for small screens) */}
//         <div className="md:hidden">
//           <button className="text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#1e293b", // dark blue
      padding: "12px 80px",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    logo: {
      color: "#22c55e", // green color
      fontSize: "1.8rem",
      fontWeight: "700",
      textDecoration: "none",
      fontFamily: "Poppins, sans-serif",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "35px",
      marginRight: "60px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "Poppins, sans-serif",
      transition: "color 0.3s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        FoodLink
      </Link>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/features" style={styles.link}>
          Features
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <Link to="/register" style={styles.link}>
          Register
        </Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        {/* <Link to="/donor/add-food" style={styles.link}>AddFood</Link>
        <Link to="/receiver/browse-food" style={styles.link}>BrowseFood</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
