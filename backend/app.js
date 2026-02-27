import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import router from "./routes/index.js";

const app = express();

// Middleware
app.use(cors({
  origin:["https://food-link-five.vercel.app","http://localhost:5173"],
  methods:["GET","POST","DELETE","PUT","PATCH"],
  credentials:true,
})); // Allow requests from frontend
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Global rate limiter: 100 requests per 15 minutes per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { message: "Too many requests from this IP, please try again later." },
});

// Stricter limiter for auth endpoints to prevent brute-force
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many authentication attempts, please try again later." },
});

// Apply global limiter to all requests
app.use(apiLimiter);

// NOTE: auth-specific limiter moved to route-level in routes/index.js



// Routes
app.use("/", router);

// ❌ Do NOT start the server here if using a separate www file
// export the app for bin/www or other entry point
export default app;
