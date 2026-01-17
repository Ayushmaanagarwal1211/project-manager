const jwt = require("jsonwebtoken");

// Middleware function to authenticate JWT token
const authenticateToken = (req, res, next) => {
    // Use the token from cookies instead of headers
    const token = req.cookies.token;

    console.log(token);
    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET || 'tcmTM', (err, user) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(403).json({ message: "Invalid or expired token." });
        }

        // Attach the user info to the request object
        req.user = user;
        next(); // Pass to the next middleware or route handler
    });
};

module.exports = { authenticateToken };