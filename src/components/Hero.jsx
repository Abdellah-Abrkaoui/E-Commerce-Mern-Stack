import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Hero() {
  return (
    <div
      className="w-full h-screen flex flex-col sm:flex-row  items-center justify-center gap-10 bg-center bg-cover bg-gradient-to-r from-blue-500 to-blue-800 text-white section-container"
      style={{
        backgroundImage: `url(${assets.hero_img})`,
      }}
    >
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-semibold py-4 md:leading-snug w-[80%]">
          Raining Offers For Hot Summer!
        </h1>
        <p className="text-xl md:text-2xl mt-4">25% Off On All Products</p>
        <div className="mt-8 flex gap-4 justify-start">
          <button className="bg-white text-black px-6 py-3 shadow-md font-semibold hover:bg-black hover:text-white">
            Shop Now
          </button>
          <button className="border-2 border-white px-6 py-3 shadow-md font-semibold hover:bg-white hover:text-black">
            Find More
          </button>
        </div>
      </div>
      <div className="md:w-1/2"></div>
    </div>
  );
}

export default Hero;
