const express = require("express");
const cartRoutes = express.Router();
const CartModel = require("../models/Cart");
const UserModel = require("../models/User");

// Get Cart
cartRoutes.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const cart = await CartModel.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Save cart
cartRoutes.post("/", async (req, res) => {
  const { userId, cartItems } = req.body;
  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({
        userId,
        cartItems,
      });
    } else {
      cart.cartItems = cartItems;
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = cartRoutes;
