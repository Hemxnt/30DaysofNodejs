import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://aditya892003:Aditya8903@cluster0.edaij68.mongodb.net/", {});
    console.log("DB connected successfully");
  } catch (err) {
    console.log("DB connection issues");
    console.error(err);
    process.exit(1);
  }
};

export { connect };
