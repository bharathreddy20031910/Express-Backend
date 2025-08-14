const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Models/Studentmodel.js');

const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const { name, gender, email, mobile, password, cpassword, subject, state, city, sclass, language } = req.body;

    // 1. Validate required fields
    if (!name || !gender || !email || !mobile || !password || !cpassword || !subject || !state || !city || !sclass || !language) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if passwords match
    if (password !== cpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 3. Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 4. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Create user
    const newUser = new User({
      name,
      gender,
      email,
      mobile,
      password: hashedPassword,
        cpassword: hashedPassword, 
      subject,
      state,
      city,
        sclass,
        language,
      dateTime: new Date().toISOString()
    });

    await newUser.save();

    res.status(201).json({ message: "Student created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating Student:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

module.exports = route;
