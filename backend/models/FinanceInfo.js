const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creates the finance schema
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
    outcome:[{
        concept: {
            type:String,
            required: true,
        },
        amount: {
            type:String,
            required: true,
        }
    }],

}, {timestamps: true});

//makes sure that the outcome array always has at least one value for validation purposes
FinanceInfoSchema.path('outcome').validate(function(value) {
    return value.length > 0;
}, 'The outcome array must contain at least one entry.');



module.exports = mongoose.model('finance', FinanceInfoSchema);