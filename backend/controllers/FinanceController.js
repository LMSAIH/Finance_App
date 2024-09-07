const mongoose = require("mongoose");
const FinanceInfo = require("../models/FinanceInfo");

//gets all the finance information
const getAll = async (req, res) => {

  const user_id = req.user._id;

  console.log(user_id);

  const data = await FinanceInfo.find({user_id: user_id}).sort({ createdAt: -1 });
  res.status(200).json(data);

};

//gets just one record
const getOne = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No workout was found" });
  }

  const data = await FinanceInfo.findById(id);

  if (!data) {
    return res.status(404).json({ message: "No workout found" });
  }

  res.status(200).json(data);
};

//deletes one object
const deleteOne = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: "There is no workout to be deleted" });
  }

  const data = await FinanceInfo.findOneAndDelete({ _id: id });

  if (!data) {
    return res.status(404).json({ message: "No workout found to be deleted" });
  }

  res.status(200).json({ message: "data succesfully deleted", data });
};

//Posts an object
const postOne = async (req, res) => {
  try {

    const user_id = req.user._id;
    const emptyFields = [];
    const data = {
      year: req.body.year,
      month: req.body.month,
      user_id: user_id,
      income: req.body.income,
      outcome: req.body.outcome,
    };

    if(!data.year){
      emptyFields.push("year");
    }
    
    if (!data.month) {
      emptyFields.push("month");
    }

    if (!data.user_id) {
      emptyFields.push("userId");
    }

    if (!data.income) {
      emptyFields.push("income");
    }

    if (!data.outcome) {
      emptyFields.push("outcome");
    }

    //Checks if there is no empty fields in order to proceed
    if (emptyFields.length > 0) {
      return res
        .status(400)
        .json({ error: "Please fill in the empty field", emptyFields });
    }

    //creates a new object based on the given data
    const createdObject = await FinanceInfo.create(data);

    res.status(200).json(createdObject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Updates an object 
const updateOne = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: "There is no workout to be updated" });
  }

  //The data will be updated in the DB with this method spreading the request body objects
  const dataUpdated = await FinanceInfo.findByIdAndUpdate(id, {
    ...req.body,
  });

  //If this is null, return it
  if (!dataUpdated) {
    return res.status(404).json({ message: "There is no workout to update" });
  }

  //if everything goes well, return the updated data
  res.status(200).json(dataUpdated);
};

module.exports = { getAll, getOne, deleteOne, postOne, updateOne}