const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    label  : {
        type : String,
        required : true,
        trim : true
    },
    status : {
        type : Boolean,
        trim : true,
        default : false
    }
})

const Todo = mongoose.model("Todos", schema);

module.exports = Todo;