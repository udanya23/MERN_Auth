const express = require("express")
const app=express()
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser") 

require("dotenv").config()
const routeItems = require("./routes/auth.js")
const dashboardRoutes=require("./routes/dashboard.js")

app.use(cors({
    origin: "https://mern-auth-frontend-v8uh.onrender.com",
    credentials: true,
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("DB connected successfully"))
    .catch((err)=>console.log(err))

app.get("/",(req,res)=>res.json({"message":"dummy route"}))
app.use('/api',routeItems)
app.use("/api",dashboardRoutes)

app.listen(process.env.PORT,()=>console.log("Server started successfully"))