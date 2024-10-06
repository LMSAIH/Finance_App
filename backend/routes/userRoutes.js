const express = require("express");
const Router = express.Router();
const UserController = require('../controllers/UserController');


//logs user in
Router.post("/login",UserController.loginUser);

// Signs user up, further impplementation is needed as it requires AUTH 
Router.post("/signup", UserController.signUpUser);

module.exports = Router;
