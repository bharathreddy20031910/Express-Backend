
const route = require('express').Router();
const Middlewares = require('../Middlewares/Authmiddle.js');

const User = require('../Models/Studentmodel.js');
const JWT = require('jsonwebtoken');

route.post("/prouduct", Middlewares, async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = new Product({ name, price, description });
    await newProduct.save();

    res.status(201).json({ product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
});
module.exports = route;