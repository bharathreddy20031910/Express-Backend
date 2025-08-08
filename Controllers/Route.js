const route = require('express').Router();
const Middlewares = require('../Middlewares/Authmiddle.js');
const User = require('../Models/Usermodel.js');
const JWT = require('jsonwebtoken');


route.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    newUser.dateTime = new Date().toISOString(); 
    password.bcrypt = require('bcrypt');
    const salt = await password.bcrypt.genSalt(10); 
    await newUser.save();

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

route.post("/login", async (req, res) => {
  try {   
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {        
      return res.status(400).json({ message: "Invalid credentials" });

    }   
        const token =  await JWT.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(200).json({ token, user }); 
 
  } catch (error) { 
    res.status(500).json({ message: "Error logging in", error });
  }   
});


module.exports = route;