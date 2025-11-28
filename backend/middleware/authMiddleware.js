const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next) =>{
    try{
        const token = req.headers["authorization"] //Reads the Authorization header from the incoming request. Express lowercases
        if(!token){ // if token not exits
            return res.status(401).json({"message":"No token provided"})
        }
        //is token exists
        const finalToken = token.split(" ")[1] // I am splitting the token which we give "bearer jwt" and taking the 1st position in it i.e., jwttoken
        const decoded=jwt.verify(finalToken,process.env.JWT_secret)
        req.user=decoded
        next()
    }
    catch(err){
        return res.status(401).json({"message":"Invalid token or token get expired"})
    }
}

module.exports = authMiddleware