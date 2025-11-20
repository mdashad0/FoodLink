// const mongoose = require("mongoose");
// const foodSchema = new mongoose.Schema({
//     donorId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required: true,
//     },
//     foodName : {type:String, required: true},
//     quantity: {type: String, required: true},
//     location: {type: String, required: true},
//     expiryDate: {type: Date, required: true},
//     status: {type: String, default:"Available"},
//     donorId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User", // linked to User model
//     },
// },
// {timestamps: true}
// );
// const Food = mongoose.model("Food",foodSchema);
// module.exports = Food;


import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    quantity: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, default: "Available" },
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
// module.exports = Food;
export default Food;

