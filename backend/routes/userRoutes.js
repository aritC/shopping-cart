const express = require("express");
const userRoutes = express();
const UserModel = require("../models/User");

userRoutes.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    let errors = [];

    if (!userName || userName.length < 3) {
      errors.push("UserName cannot be empty or less than 3 chars");
    }
    if (!password || password.length < 6) {
      errors.push("Password cannot be empty or less than 6 chars");
    }
    if (errors.length !== 0) {
      return res.status(400).json({ message: "Bad request", errors });
    }

    const user = await UserModel.findOne({ userName, password });
    if (!user) {
      return res.status(404).json({ message: "Invalid userName or password!" });
    }

    const responseUserObject = user.toObject();
    delete responseUserObject.password;
    return res
      .status(200)
      .json({ messsage: "Success", user: responseUserObject });
  } catch (err) {
    console.error("Database Error: ", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

userRoutes.post("/signup", async (req, res) => {
  try {
    const { userName, password, firstName, lastName, email, address } =
      req.body;
    let errors = [];

    if (!userName || userName.length < 3) {
      errors.push("UserName cannot be empty or less than 3 chars");
    }
    if (!password || password.length < 6) {
      errors.push("Password cannot be empty or less than 6 chars");
    }
    if (!firstName) {
      errors.push("Firstname cannot be empty or less than 6 chars");
    }
    if (!lastName) {
      errors.push("LastName cannot be empty or less than 6 chars");
    }
    if (!email) {
      errors.push("Email cannot be empty or less than 6 chars");
    }
    if (!address || address.length < 6) {
      errors.push("Address cannot be empty or less than 6 chars");
    }
    if (errors.length !== 0) {
      return res.status(400).json({ message: "Bad request", errors });
    }

    const user = new UserModel({
      firstName,
      lastName,
      email,
      userName,
      password,
      address,
    });

    const savedUser = await user.save();

    if (savedUser) {
      const responseUserObject = savedUser.toObject();
      delete responseUserObject.password;
      return res
        .status(200)
        .json({ message: "Success", user: responseUserObject });
    }
  } catch (err) {
    console.error("Database Error: ", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = userRoutes;
