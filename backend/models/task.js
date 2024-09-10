

const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    user:{type:String},project:{type:String},
    member:{type:String},
    status:{type:Boolean}
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
