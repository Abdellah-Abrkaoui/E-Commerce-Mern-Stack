import User from "../models/user.model.js";
import valiator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

// User Register
export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });

    // check if user already exists
    if (exists) {
      return res.status(404).json({ message: "User already exist" });
    }

    // check the email format & pass strength using validator package
    if (!valiator.isEmail(email)) {
      return res
        .status(404)
        .json({ message: "Please provide a correct email" });
    }

    if (password.length < 8) {
      return res
        .status(404)
        .json({ message: "Password must be at least 8 characters or more" });
    }

    // hashing user password using bcrypt package

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ sucess: true, token });
  } catch (error) {
    return res.status(404).json({ message: "error creating account" });
  }
};

// User Login
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const passAreMatch = await bcrypt.compare(password, user.password);
    if (!passAreMatch) {
      return res.status(404).json({ message: "Password is not valid" });
    } else {
      const token = createToken(user._id);
      res.json({ success: true, token });
    }
  } catch (error) {
    return res.status(404).json({ message: "error login to your account" });
  }
};

// Admin Login
export const adminLogin = async (req, res) => {};
