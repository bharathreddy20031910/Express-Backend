const route = require('express').Router();
const Middlewares = require('../Middlewares/Authmiddle.js');
const User = require('../Models/Usermodel.js');

route.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});



module.exports = route;