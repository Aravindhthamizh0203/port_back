const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name"]
    },
    email: {
        type: String,
        required: [true, "please enter your email"]
    },
    textarea: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);