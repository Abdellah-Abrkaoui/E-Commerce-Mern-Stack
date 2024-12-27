import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECT_DB_STRING);
    console.log("Connection to DB is successfully");
  } catch (error) {
    console.error("Connection to DB failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
