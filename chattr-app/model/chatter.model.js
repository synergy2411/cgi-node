const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    chatterName : {
        type : String,
        required : true,
        trim : true
    },
    messages : {
        type : Array,
        required :true,
        trim : true
    }
})

const Chat = mongoose.model("Chats", schema);

module.exports = Chat;