import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import connectDB function
import connectDB from "./config/mongodb.js";

// import cloudinary config file
import cloudinaryConfig from "./config/cloudinary.js";
import userRouter from "./routes/user.route.js";

dotenv.config({
  path: ".env",
});

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// call cloudinaryConfig function
cloudinaryConfig();

// routes

app.use("/api/user", userRouter);

// connecting to db
const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, async () => {
      console.log(`server is runnning on port ${port}`);
    });
  } catch (error) {
    console.log(`failed to start server`);
  }
};

startServer();
