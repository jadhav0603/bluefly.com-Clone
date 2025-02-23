// const jwt = require('jsonwebtoken')
// require ('dotenv').config()

// const verifyToken = (req,res,next) =>{
//     const token = req.header('Authorization')

//     if(!token){
//         return res.status(403).json({message:"Access denied"})
//     }

//     try {
//         const verified = jwt.verify(token, process.env.SECRET_KEY)
//         req.user = verified;
//         next();
//     } catch (error) {
//         res.status(400).json({message:"invalid token"})
//     }

// }

// module.exports = verifyToken
