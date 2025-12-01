// const mongoose = require("mongoose");
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { config } from "dotenv"
config();
const db = process.env.MONGO_URI;


// ✅ Connect to MongoDB (you can change DB name if needed)
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Define user schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["donor", "receiver"],
      default:"donor",
      required: true,
    },
  
    
  },
  { timestamps: true }
);

// 🔒 Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Method to compare entered password during login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ✅ Export model
const User = mongoose.model("User", userSchema);
// module.exports = User;
export default User;
