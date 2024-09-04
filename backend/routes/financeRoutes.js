const express = require("express");
const Router = express.Router();
const FinanceController = require('../controllers/FinanceController');
const {requireAuth} = require('../middleware/RequireAuth');

//Ready to go into the app, as long as the integration with the frontend is complete
//Router.use(requireAuth);
//gets all the finance information related to a user
Router.get("/", FinanceController.getAll);

//get an specific month finance info
Router.get("/:id", FinanceController.getOne);

Router.delete("/:id", FinanceController.deleteOne);

//Post the finance information for an specific month
Router.post("/", FinanceController.postOne);

Router.patch("/:id", FinanceController.updateOne);

module.exports = Router;
