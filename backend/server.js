const express = require("express");
 const app=express();
 const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
 app.use(express.json());
 mongoose.connect(process.env.MONGO_URI,{})
 .then(()=>{
   console.log("mongodb connected");
 })
.catch((err)=>{
      console.log("mongodb connection failed",err);
   }
 );
app.use('/auth',require('./routes/authRoutes'));
app.use('/task',require('./routes/taskRoutes'));
 app.listen(4000,()=>{
    console.log("server started");
 });

 app.get("/api",(req,res)=>{
    res.send("Hello from server");
 });

 app.post("/api",(req,res)=>{
   const temp=req.body;
   res.send(temp);
 })