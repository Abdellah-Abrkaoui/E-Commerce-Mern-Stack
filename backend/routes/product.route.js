import express from "express";

import {
  addProduct,
  getProducts,
  removeProduct,
  getSingleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRoute = express.Router();

// add a product to db route
productRoute.post("/add", adminAuth, upload.single("image"), addProduct);

// list products from db route
productRoute.get("/allProducts", getProducts);

// remove a product from db route
productRoute.post("/delete", adminAuth, removeProduct);

// get a single product in db route
productRoute.post("/singleProduct", getSingleProduct);

export default productRoute;
