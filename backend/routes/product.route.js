import express from "express";

import {
  addProduct,
  getProducts,
  removeProduct,
  getSingleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRoute = express.Router();

// add a product to db route
productRoute.post("/add", upload.single("image"), addProduct);

// list products from db route
productRoute.get("allProducts", getProducts);

// remove a product from db route
productRoute.delete("delete", removeProduct);

// get a single product in db route
productRoute.get("/singleProduct", getSingleProduct);

export default productRoute;
