import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js";

const app = express();

// Middleware
app.use(cors({
  origin:["https://food-link-five.vercel.app","http://localhost:5173/"],
  methods:["GET","POST","DELETE","PUT","PATCH"],
  credentials:true,
})); // Allow requests from frontend
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Routes
app.use("/", router);

// ❌ Do NOT start the server here if using a separate www file
// export the app for bin/www or other entry point
export default app;
