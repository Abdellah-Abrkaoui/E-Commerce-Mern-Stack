import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.model.js";
import streamifier from "streamifier";

export const addProduct = async (req, res) => {
  try {
    console.log("Full Request Body:", req.body); // ✅ Debugging
    console.log(
      "Received bestseller:",
      req.body.bestSeller,
      typeof req.body.bestSeller
    ); // ✅ Check value

    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    let imageUrl = null;
    if (req.file) {
      try {
        const uploadFromBuffer = (fileBuffer) =>
          new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { resource_type: "image" },
              (error, result) => {
                if (error) return reject(error);
                resolve(result);
              }
            );
            streamifier.createReadStream(fileBuffer).pipe(uploadStream);
          });

        const result = await uploadFromBuffer(req.file.buffer);
        console.log("Cloudinary Upload Result:", result);
        imageUrl = result.secure_url;
      } catch (uploadError) {
        console.error("Cloudinary Upload Error:", uploadError);
        return res.status(500).json({
          message: "Image upload failed",
          error: uploadError.message,
        });
      }
    }
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes),
      bestseller: bestSeller === "true" ? true : false,
      image: imageUrl,
      date: Date.now(),
    };

    if (!name || !description || !price || !category || !sizes) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = new Product(productData);
    await product.save();
    res.json({ sucess: true, message: "Product added successfully" });

    // console.log("Request Body:", req.body);
    console.log("Request Files:", req.file);
  } catch (error) {
    console.error("Error:", error.message, error.stack);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "product deleted successfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const singleProduct = await Product.findById(productId);
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
