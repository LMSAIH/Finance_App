const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FinanceInfoSchema = new Schema ({

    month: {
        type:String,
        required:true,
    },
    user_id: {
        type: String,
        required: true,
    },
    income:{
        type:Number,
        required:true,
    },
    outcome:{
      type: [Object],
      required: true,
    }

}, {timestamps: true});

module.exports = mongoose.model('finance', FinanceInfoSchema);