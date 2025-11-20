// var express = require('express');
// var router = express.Router();
// const bcrypt = require("bcryptjs");
// const userModel = require("../models/User");

// const jwt = require("jsonwebtoken");
// const Path = require("path")
// var router = express.Router();

// router.get("/register", (req, res) =>  {
//   res.send("Register route working ");
// });

// router.post("/register", async (req, res) => {  
//   try {
//     const { fullName,email,password } = req.body;

    
//     const existingUser = await userModel.findOne({ email: email.toLowerCase() });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

   
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

    
//     const newUser = await userModel.create({
//       fullName,
      
//       email: email.toLowerCase(),
      
//       password: hashedPassword,
      
//     });

//     console.log("User registered:", newUser);
//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });






// router.post("/login",async(req,res) => {
//   const{email,password} = req.body;
//   console.log(req.body);
  
//   if(!email || !password) {
//    return res.status(401).json({error:"fill the all data "})
//   };
//   try {
//     const userlogin = await userModel.findOne({email:email});
//     if(!userlogin){
//       res.status(401).json({message:"user not found"})
//     }
//     if(userlogin) {
//       const isMatch = await bcrypt.compare(password,userlogin.password);
//       console.log(isMatch);
//       if(!isMatch) {
//         res.status(401).json({error:"something went wrong"})

//       } else {
//         const token = jwt.sign({email:userlogin.email,id:userlogin._id,username:userlogin.username}, "Mishthi",{expiresIn:"2h"});
//         res.status(201).json({message:"login success",token:token})
//       }
//     }
//   } catch (error) {
//     res.status(400).json({error:"invalid details"})
//   }
//  })


// backend/routes/index.js
// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

// // REGISTER
// // router.post("/register", async (req, res) => {
// //   try {
// //     const { fullName, username, email, password } = req.body;

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) return res.status(400).json({ message: "User already exists" });

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = new User({ fullName, username, email, password: hashedPassword });

// //     await user.save();
// //     res.status(201).json({ message: "User registered successfully" });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// router.post("/register", async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const newUser = new User({ fullName, email, password });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     res.json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


// var express = require("express");
// var router = express.Router();
// const User = require("../models/user.js");
// const bcrypt = require("bcryptjs");
// const Food = require("../models/food.js");
// const Request = require("../models/request.js");
// const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth.js")


// const router = express.Router();

import express from "express";
const router = express.Router();

import User from "../models/user.js";
import Food from "../models/food.js";
import Request from "../models/request.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authenticateToken from "../middleware/auth.js";
import FoodRequest from "../models/FoodRequest.js";





// 🟢 Register route
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password ,role} = req.body;
    console.log(req.body);
    
    

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ fullName, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("❌ Registration Error:", error.message);
    res.status(500).json({ message: "Server error during registration" });
  }
});


// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     console.log(user);
    

//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     res.json({ message: "Login successful", user });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ error: "Server error during login" });
//   }
// });



router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // ⬇⬇ Generate JWT Token here
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "MISHTHI",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email },
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
router.post("/add-food", async (req, res) => {
  try {
    const { foodName, quantity, location, contact } = req.body;

    if (!foodName || !quantity || !location || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const food = new Food({
      foodName,
      quantity,
      location,
      contact,
      status: "Available",
    });

    await food.save();
    res.status(201).json({ message: "Food added successfully", food });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ message: "Server error", error });
  }
});
router.get("/browse-food", async (req, res) => {
  try {
    const foods = await Food.find({ status: "Available" }).populate("donorId", "fullName email");

    if (!foods || foods.length === 0) {
      return res.status(404).json({ message: "No available food items found" });
    }

    res.status(200).json({
      message: "Available food items fetched successfully",
      foods,
    });
  } catch (error) {
    console.error("Error fetching food items:", error);
    res.status(500).json({
      message: "Server error while fetching food items",
      error,
    });
  }
});

// router.post("/add-request", async (req, res) => {
//   try {
//     const { foodId, receiverName } = req.body;

//     if (!foodId || !receiverName) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Find the food to get its details
//     const food = await Food.findById(foodId);
//     if (!food) {
//       return res.status(404).json({ message: "Food not found" });
//     }

//     // Create a new request
//     const newRequest = new Request({
//       foodId,
//       receiverName,
//       donorName: food.donorName || "Unknown Donor",
//       foodName: food.foodName,
//       quantity: food.quantity,
//       location: food.location,
//     });

//     await newRequest.save();
//     res.status(201).json({ message: "Request added successfully", request: newRequest });
//   } catch (error) {
//     console.error("Error adding request:", error);
//     res.status(500).json({ message: "Server error while adding request", error });
//   }
// });
// router.post("/add-request", async (req, res) => {
//   try {
//     const { foodId, receiverName } = req.body;

//     if (!foodId || !receiverName) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Find the food item to copy its details
//     const food = await Food.findById(foodId);
//     if (!food) {
//       return res.status(404).json({ message: "Food not found" });
//     }

//     // Create new request
//     const newRequest = new Request({
//       foodId,
//       receiverName,
//       donorName: food.donorName || "Unknown Donor",
//       foodName: food.foodName || "Unnamed Food",
//       quantity: food.quantity || "N/A",
//       location: food.location || "Not specified",
//       status: "Pending",
//     });

//     await newRequest.save();

//     res.status(201).json({
//       message: "Request added successfully",
//       request: newRequest,
//     });
//   } catch (error) {
//     console.error("❌ Error adding request:", error.message);
//     res.status(500).json({
//       message: "Server error while adding request",
//       error: error.message,
//     });
//   }
// });
router.post("/add-request", async (req, res) => {
  try {
    const { foodId, receiverName } = req.body;

    if (!foodId || !receiverName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    const newRequest = new Request({
      foodName: food.foodName,
      donorName: food.donorName,
      quantity: food.quantity,
      location: food.location,
      receiverName,
      status: "Pending",
    });

    await newRequest.save();
    console.log("✅ Request saved:", newRequest);

    res.status(201).json({ message: "Request added successfully", request: newRequest });
  } catch (error) {
    console.error("❌ Error adding request:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/request-food", authenticateToken, async (req, res) => {
  try {
    const { foodId } = req.body;
    const receiverId = req.user.id; // coming from JWT token

    if (!foodId) {
      return res.status(400).json({ message: "foodId is required" });
    }

    // Check if food exists
    const foodItem = await Food.findById(foodId);
    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }

    // Save request
    const newRequest = new FoodRequest({
      foodId,
      receiverId,
      status: "Pending",
    });

    await newRequest.save();

    res.json({ message: "Food request submitted successfully!" });

  } catch (error) {
    console.error("Error in /request-food:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// router.post("/request-food", authenticateToken, async (req, res) => {
//   try {
//     const { foodId } = req.body;
//     const receiverId = req.user.id; // make sure token payload contains `id`

//     if (!foodId) {
//       return res.status(400).json({ message: "foodId is required" });
//     }

//     res.json({ message: "Food request submitted", receiverId });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });



// router.get("/my-requests", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const requests = await FoodRequest.find({ receiverId: userId }).populate(
//       "foodId"
//     );

//     res.json({
//       requests: requests.map((r) => ({
//         foodName: r.foodId?.foodName || "Unknown",
//         quantity: r.foodId?.quantity || "N/A",
//         donorName: r.foodId?.donorName || "Anonymous",
//         location: r.foodId?.location || "Not provided",
//         status: r.status || "Pending",
//       })),
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });
router.get("/my-requests", authenticateToken, async (req, res) => {
  try {
    const requests = await FoodRequest.find({ receiverId: req.user.id });

    res.json({ requests });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/my-listings", async (req, res) => {
  try {
    const { donorId } = req.query;

    if (!donorId) {
      return res.status(400).json({ message: "donorId is required" });
    }

    const foods = await Food.find({ donorId }).sort({ createdAt: -1 });

    if (!foods.length) {
      return res.status(404).json({ message: "No listings found for this donor" });
    }

    res.status(200).json({ message: "Listings fetched successfully", foods });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Server error while fetching listings", error });
  }
});


router.get("/requests-received", async (req, res) => {
  try {
    const { donorId } = req.query;

    if (!donorId) {
      return res.status(400).json({ message: "donorId is required" });
    }

    const requests = await Request.find({ donorId })
      .populate("foodId", "foodName quantity location")
      .populate("receiverId", "fullName email");

    if (!requests.length) {
      return res.status(404).json({ message: "No requests received" });
    }

    res.status(200).json({ message: "Requests received fetched successfully", requests });
  } catch (err) {
    console.error("Error fetching received requests:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put("/requests/update-status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.status(200).json({ message: "Request status updated successfully", updatedRequest });
  } catch (err) {
    console.error("Error updating request status:", err);
    res.status(500).json({ error: err.message });
  }
});
// module.exports = router;
export default router;