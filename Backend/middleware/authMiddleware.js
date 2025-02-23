const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req,res,next)=>{
    const authHeader = req.header('Authorization')
    
    if(!authHeader){
        return res.status(401).json({message:"Access Denied"})
    }

    const token = authHeader.split(" ")[1]

    try{
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.user = decoded;
        next();
    }catch(error){
        res.status(403).json({message:"invalid Token"})
    }
}

module.exports = authMiddleware