const express = require("express");
const Router = express.Router();
const FinanceInfo = require("../models/FinanceInfo");

//gets all the finance information related to a user
Router.get("/", async (req, res) => {

  const data = await FinanceInfo.find({}).sort({ createdAt: -1 });
  res.status(200).json(data);

});

//Post the finance information 
Router.post("/", async (req, res) => {

    try{

        const data = {
            month: req.month,
            user_id: req.user_id,
            income: req.income,
            outcome: req.outcome,
        }

        const createdObject =  await FinanceInfo.create(data);

        res.status(200).json(createdObject);

    } catch(err){
   
        res.status(400).json({error: err.message});
    }
});

module.exports = Router;
