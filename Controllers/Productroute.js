
const route = require('express').Router();
const Middlewares = require('../Middlewares/Authmiddle.js');

const User = require('../Models/Usermodel.js');
const JWT = require('jsonwebtoken');

route.post("/prouduct", Middlewares, async (req, res) => {
  try {
    const { name, price, description } = req.body;

    // Assuming you have a Product model similar to User
    const newProduct = new Product({ name, price, description });
    await newProduct.save();

    res.status(201).json({ product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
});