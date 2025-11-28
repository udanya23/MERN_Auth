const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/dashboard",authMiddleware,(req,res)=>{
    // res.status(200).json({"message":"dashboard route"})
    res.json({"message":"Welcome to the website",user:req.user}) // providing loginned user data which we get from 'authMiddleWare.js'
})

module.exports=router