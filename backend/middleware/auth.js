// const jwt = require("jsonwebtoken");

// function isLoggedin(req, res, next) {
//   try {
//     const authHeader = req.header("Authorization");
//     if (!authHeader) return res.status(401).json({ message: "No token provided" });

//     const token = authHeader.split(" ")[1]; 
//     if (!token) return res.status(401).json({ message: "Invalid token" });

//     const decodedToken = jwt.verify(token, "Mishthi");
//     req.user = decodedToken;
//     console.log("decoded token", decodedToken);

//     next();
//   } catch (err) {
//     console.error("Auth middleware error:", err.message);
//     return res.status(401).json({ message: "Unauthorized or invalid token" });
//   }
// }

// module.exports = isLoggedin;

import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied, token missing" });
  }

  jwt.verify(token, "MISHTHI", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = user;
    next();
  });
};

export default authenticateToken;



