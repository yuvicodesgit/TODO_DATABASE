const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/TODO").then(console.log("DB connected"));

const todo = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("TODOSCHEMA",todo); 
