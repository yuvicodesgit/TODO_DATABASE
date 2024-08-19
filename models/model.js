const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mirrorgamingtv:ZyFttzcNL7Gbp8FY@todo-db.2gre3.mongodb.net/?retryWrites=true&w=majority&appName=todo-db").then(console.log("DB connected"));

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
