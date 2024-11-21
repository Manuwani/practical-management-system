import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();

const dbConnect = async () => {
    const uri = process.env.MONGODB_URI ||"mongodb+srv://manuwani04:manuwani04@cluster0.2v69s.mongodb.net/practical"; 
    if (!uri) {
      throw new Error("MongoDB URI is not defined");
    }
    console.log("Connecting to MongoDB...");
 await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));
  };

export default dbConnect;