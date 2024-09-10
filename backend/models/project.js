

const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    members:{
        type:Array,
        default:[]
    },manager:{
        type:String
    },
    
}, { timestamps: true });

const Project = mongoose.model("Project", taskSchema);

module.exports = Project;
