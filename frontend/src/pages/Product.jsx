import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RealtedProducts from "../components/RealtedProducts";

function Product() {
  // 1. Get the product ID from the URL
  const { productId } = useParams();

  // 2. Initialize state for product data and product image
  const [productData, setProductData] = useState(false);
  const [productImage, setProductImage] = useState("");

  // Access the products from the ShopContext
  const { products, currency, addToCart } = useContext(ShopContext);

  // function for getting the product

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProductData = async () => {
    try {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setProductImage(product.image);
      }
    } catch (error) {
      console.error("error fetching data ...", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData, productId, products]);

  // handle size selection

  const [slectedSize, setSelectedSize] = useState(null);
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };
  // handle the loading state

  if (!productData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="mt-32 flx flex-col  section-container">
      <div className="flex flex-col md:flex-row md:gap-0 gap-4">
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={productImage} alt="" className="md:w-[80%] w-full" />
        </div>
        <div className="md:w-1/2">
          <h1 className="mb-3 text-2xl font-semibold">{productData.name}</h1>
          <div className="flex items-center gap-2 min-w-4 w-4 text-xs font-bold">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <span>(122)</span>
          </div>
          <h2 className="md:py-8 py-5 font-bold text-xl">
            {productData.price}
            {currency}
          </h2>
          <p className="text-sm min-w-[70%] w-[70%]">
            {productData.description}
          </p>
          <h3 className="md:py-5 py-3 font-semibold">Select Size</h3>
          <div className="flex items-start gap-7 py-5">
            {productData.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => handleSizeSelection(size)}
                className={`w-4 h-4 p-6 flex justify-center border items-center ${
                  slectedSize === size
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-200 text-gray-800 "
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <button
            className="px-6 py-2 bg-black text-white uppercase mt-3"
            onClick={() => addToCart(productData._id, slectedSize)}
          >
            Add To Cart
          </button>
          <hr className="min-w-[70%] w-[70%] mt-6" />
          <div className="text-sm py-5 flex flex-col gap-3">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and reviews */}

      <div className="my-10">
        <div className="collapse rounded-none border px-3 py-5">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-sm font-semibold ">
            Description
          </div>
          <div className="collapse-content">
            <p className="text-sm">
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
          </div>
        </div>
      </div>

      {/* related Products Scetion */}
      <RealtedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
}

export default Product;
