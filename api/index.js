import express from 'express';
import mongoose from 'mongoose';
import router from "../routes/Allroutes.js"
import dbConnect from "../config/database.js";
import dotenv from 'dotenv';
const app = express();
app.use(express.json());
dotenv.config()
app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})
app.use("/api/v1",router)
dbConnect()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
