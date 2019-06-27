const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        unnique: true, 
        lowercase: true
    }, 
    password: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("User", userSchema);