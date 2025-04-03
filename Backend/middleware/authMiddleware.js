const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization'); // ✅ Fixed header key

    console.log("Received Authorization Header:", authHeader)

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied: No Token Provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Decoded Token:", decoded); 
        req.user = decoded;  
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
