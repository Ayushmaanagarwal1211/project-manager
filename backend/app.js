const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Project = require("./models/project");

// Middleware
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");

const USER_NAME = process.env.DB_USER_NAME;
const PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
// const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.ffwuw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=MernCluster`

const MONGO_URI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.ffwuw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=MernCluster`;

const response = mongoose.connect(MONGO_URI)
.then((data)=>{
    console.log("Database has been connected successfully");
})
.catch((err)=>{
    console.log('adasasasas',err.message);
})

// API routes 
app.use("/api/v1", UserAPI);   // e.g., localhost:1000/api/v1/sign-in 
app.use("/api/v2", TaskAPI);   // e.g., localhost:1000/api/v2/create-task

// Default route
app.get("/", (req, res) => {
    res.send("Hello from backend");
});
app.post("/sign-in", async (req, res) => {
    console.log("SDSD")
    try {
        const { username, email, password ,role} = req.body;
        console.log(username,email,password)
        // Check if all fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        if (username.length < 4) {
            return res.status(400).json({ message: "Username should have at least 4 characters" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password should have at least 6 characters" });
        }
        
        // Check if username or email already exits
        const existingUser = await User.findOne({ 
            $or: [{ username }, { email }] 
        });
        
        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(400).json({ message: "Username already exists" });
            }
            if (existingUser.email === email) {
                return res.status(400).json({ message: "Email already exists" });
            }
        }

        // Hash the password before saving
        const hashPass = await bcrypt.hash(password, 10);


        const newUser = new User({
            username, 
            email,
            password: hashPass,
            role
        });
        
        await newUser.save();
        return res.status(200).json({message: "Signin successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    } 
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});
app.post("/create-project", async (req, res) => {
    try {
        const {status, projectName, description ,members,manager } = req.body;
        // Create and save new task
        console.log(status,projectName,description,members,manager)
        let project = new Project({ status, projectName,description,manager,members });
         project = await project.save();

console.log(project)
        res.status(200).json({ message: "Project Created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
app.get("/getprojects", async (req, res) => {
    try {
       // Create and save new task
        let project = await Project.find()

        res.status(200).json({projects:project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

