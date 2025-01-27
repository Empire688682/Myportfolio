import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to data base");
      return;
    }
    const response = await mongoose.connect(process.env.MONGODB_URI);
    if (response) {
      console.log("Db connected successfully");
    }
  } catch (error) {
    console.log("DbConnection Error:", error);
  }
};
