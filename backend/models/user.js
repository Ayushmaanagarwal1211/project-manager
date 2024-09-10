const mongoose = require("mongoose");
const Task = require("./task");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tasks: [{
        type: mongoose.Types.ObjectId,
        ref: "task",
    }],
   role:{type:String}
});
 
module.exports = mongoose.model("User", userSchema);