import React from "react";

const About = () => {
  const styles = {
    aboutContainer: {
      width: "100vw",               // full viewport width
      minHeight: "100vh",            // almost full height
      padding: "100px 20px",        // top padding to avoid navbar overlap
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #74b9ff, #a29bfe)", // attractive gradient
      boxSizing: "border-box",
      color: "#fff",
      textAlign: "center",
    },
    aboutWrapper: {
      maxWidth: "900px",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "25px",
      textShadow: "2px 2px 10px rgba(0,0,0,0.3)", // gives a glowing effect
    },
    paragraph: {
      fontSize: "1.25rem",
      lineHeight: "1.8",
      marginBottom: "30px",
      textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
    },
    highlight: {
      color: "#ffeaa7", // highlight important words
      fontWeight: "700",
    },
  };

  return (
    <section id="about" style={styles.aboutContainer}>
      <div style={styles.aboutWrapper}>
        <h2 style={styles.heading}>About <span style={styles.highlight}>FoodLink</span></h2>
        <p style={styles.paragraph}>
          <span style={styles.highlight}>FoodLink</span> is a platform that connects restaurants, events, 
          and individuals with nearby NGOs or people in need. Our mission is to 
          <span style={styles.highlight}> reduce food waste</span> while 
          <span style={styles.highlight}> feeding the hungry</span>. By bridging the gap 
          between surplus food and those who need it most, we make a positive 
          impact on communities and the environment.
        </p>
      </div>
    </section>
  );
};

export default About;

