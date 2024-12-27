import express from "express";
import {
  userRegister,
  adminLogin,
  userLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

// user Register route
userRouter.post("/register", userRegister);

// user Login route
userRouter.post("/login", userLogin);

// admin Login route
userRouter.post("/adminLogin", adminLogin);

export default userRouter;
