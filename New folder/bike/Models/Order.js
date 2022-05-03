const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    email:{
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    phNumber : {
        type :Number,
        required : true
    },
    address : {
        type :String,
        required : true
    }
})

module.exports = mongoose.model('order',orderSchema,'order');