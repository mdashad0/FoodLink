// import React from "react";
// // import foodImage from "../assets/food.png"; // make sure the image exists

// const HeroSection = () => {
//      const foodImage =
//     "https://cdn-icons-png.flaticon.com/512/706/706164.png";
//   const styles = {
//     heroContainer: {
//       width: "100%",
//       margin: 0,
//       padding: 0,
//       backgroundColor: "transparent",
//       fontFamily: "Poppins, sans-serif",
//     },
//     hero: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "60px 80px",
//       background: "#b2becbff",
//       fontFamily: "Poppins, sans-serif",
//       flexWrap: "wrap",
//     },
//     content: {
//       flex: 1,
//       maxWidth: "50%",
//       minWidth: "300px",
//     },
//     heading: {
//       fontSize: "2.8rem",
//       color: "#1e293b",
//       fontWeight: "700",
//       marginBottom: "20px",
//     },
//     paragraph: {
//       color: "#475569",
//       fontSize: "1.1rem",
//       lineHeight: "1.6",
//       marginBottom: "30px",
//     },
//     buttons: {
//       display: "flex",
//       gap: "15px",
//     },
//     primaryBtn: {
//       backgroundColor: "#22c55e",
//       color: "white",
//       border: "none",
//       padding: "12px 25px",
//       borderRadius: "6px",
//       fontSize: "1rem",
//       cursor: "pointer",
//       transition: "0.3s",
//     },
//     secondaryBtn: {
//       backgroundColor: "transparent",
//       border: "2px solid #22c55e",
//       color: "#22c55e",
//       padding: "10px 23px",
//       borderRadius: "6px",
//       fontSize: "1rem",
//       cursor: "pointer",
//       transition: "0.3s",
//     },
//     imageContainer: {
//       flex: 1,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     image: {
//       width: "380px",
//       borderRadius: "12px",
//     },
//   };

//   return (
//     <section style={styles.hero}>
//       <div style={styles.content}>
//         <h1 style={styles.heading}>Reducing Food Waste, Feeding the Hungry</h1>
//         <p style={styles.paragraph}>
//           FoodLink connects restaurants, events, and individuals with nearby
//           NGOs or people in need — making surplus food reach those who need it most.
//         </p>
//         <div style={styles.buttons}>
//           <button
//             style={styles.primaryBtn}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#16a34a")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#22c55e")}
//           >
//             Get Started
//           </button>
//           <button
//             style={styles.secondaryBtn}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = "#22c55e";
//               e.target.style.color = "white";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = "transparent";
//               e.target.style.color = "#22c55e";
//             }}
//           >
//             Learn More
//           </button>
//         </div>
//       </div>

//       <div style={styles.imageContainer}>
//         <img src={foodImage} alt="FoodLink Illustration" style={styles.image} />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";

const HeroSection = () => {
  const foodImage =
    
    "https://play-lh.googleusercontent.com/0Udfrr6vjLToiLl8mziklywGDqw_VuEj4Kr8ArdDcJ5zJV9alaGrhhE6f_dshVE3Gkg";

  const styles = {
    heroContainer: {
      position: "relative",
      width: "100vw", // full viewport width
      height: "100vh", // full viewport height
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #b2becbff, #74b9ffcc)",
      overflow: "hidden", // prevents scrollbars from minor flex shifts
      boxSizing: "border-box",
    },
    heroContentWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "1200px", // limits content width
      padding: "0 50px", // content padding only
      boxSizing: "border-box",
      gap: "40px",
    },
    content: {
      flex: 1,
      minWidth: "300px",
    },
    heading: {
      fontSize: "3rem",
      color: "#1e293b",
      fontWeight: "700",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    paragraph: {
      color: "#2d3436",
      fontSize: "1.2rem",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
    buttons: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
    primaryBtn: {
      backgroundColor: "#22c55e",
      color: "white",
      border: "none",
      padding: "12px 30px",
      borderRadius: "8px",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    secondaryBtn: {
      backgroundColor: "transparent",
      border: "2px solid #22c55e",
      color: "#22c55e",
      padding: "10px 28px",
      borderRadius: "8px",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    imageContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "300px",
    },
    image: {
      width: "400px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    },
  };

  return (
    <section style={styles.heroContainer}>
      <div style={styles.heroContentWrapper}>
        <div style={styles.content}>
          <h1 style={styles.heading}>
            Reducing Food Waste, Feeding the Hungry
          </h1>
          <p style={styles.paragraph}>
            FoodLink connects restaurants, events, and individuals with nearby
            NGOs or people in need — making surplus food reach those who need it
            most.
          </p>
          <div style={styles.buttons}>
            <button
              style={styles.primaryBtn}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#16a34a")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#22c55e")
              }
            >
              Get Started
            </button>
            <button
              style={styles.secondaryBtn}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#22c55e";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#22c55e";
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <img
            src={foodImage}
            alt="FoodLink Illustration"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

