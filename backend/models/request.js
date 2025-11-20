// import mongoose from "mongoose";

// const requestSchema = new mongoose.Schema({
//   foodId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Food",
//     required: true,
//   },
//   receiverName: {
//     type: String,
//     required: true,
//   },
//   donorName: {
//     type: String,
//     required: true,
//   },
//   foodName: {
//     type: String,
//     required: true,
//   },
//   quantity: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["Pending", "Approved", "Rejected"],
//     default: "Pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Request = mongoose.model("Request", requestSchema);
// export default Request;

// const mongoose = require("mongoose");

// import mongoose from "mongoose";

// const requestSchema = new mongoose.Schema(
//   {
//     foodId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Food",
//       required: true,
//     },
//     receiverName: {
//       type: String,
//       required: true,
//     },
//     donorName: {
//       type: String,
//       default: "Unknown Donor",
//     },
//     foodName: {
//       type: String,
//       required: true,
//     },
//     quantity: {
//       type: String,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "Approved", "Rejected"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// const Request = mongoose.model("Request", requestSchema);
// // module.exports = Request;

// export default Request;
import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  food: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Request", requestSchema);
