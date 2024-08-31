const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//logs in
Router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //Try to log the user in
  try {
    const user = await User.login(email, password)
    res.status(200).json({user, message: "Succesfully logged in"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// try to sign the user in
Router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({user, message: "Successfully signed in"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = Router;
