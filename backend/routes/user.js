const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./auth");

// SIGN IN API (register new user)
router.post("/sign-in", async (req, res) => {
    try {
        const { username, email, password ,role} = req.body;
        
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

//Login API
router.post("/log-in", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        // Find user by username
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid Credentials" });
        } 

        // Compare the input password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
console.log(existingUser)

        // Generate JWT Token
        const token = jwt.sign(
           {
                id: existingUser._id,
                email: existingUser.email,
                name: existingUser.username,
                role: existingUser.role,
                // Include other fields as needed
            },
            process.env.JWT_SECRET || 'tcmTM',  // Use env variable for secret if available
            { expiresIn: '2d' }
        );
        
        // Return the user ID and token
        return res.status(200).json({ id: existingUser._id, token,role:existingUser.role });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Intenal Server Error" });
    }
});
router.get("/users", async (req, res) => {
    try {
        let users=await User.find()
        return res.status(200).json({users:users})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Intenal Server Error" });
    }
});
router.get("/get",authenticateToken ,async (req, res) => {
    try {
     
        return res.status(200).json({users:req.user})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Intenal Server Error" });
    }
});
module.exports = router;