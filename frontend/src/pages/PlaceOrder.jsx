import React, { useContext, useState } from "react";
import TitleAndDesc from "../components/TitleAndDesc";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {
  const { navigate } = useContext(ShopContext);
  const [payementMethod, setPayementMethod] = useState("cod");

  const handleSelect = (method) => {
    setPayementMethod(method);
  };
  return (
    <div className="section-container mt-32 mb-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        {/* delivery infos */}
        <div className="md:min-w-[50%] w-full flex flex-col md:items-start items-center gap-10">
          <TitleAndDesc
            title1="Delivery"
            title2="Information"
            desc=""
            className="font-bold text-xl md:text-2xl uppercase"
          />
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="text-gray-500 outline-none px-2 py-[6px] border rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="text-gray-500 outline-none px-2 py-[6px] border rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email addess"
              className="text-gray-500 outline-none px-2 py-[6px] border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Street"
              className="text-gray-500 outline-none px-2 py-[6px] border rounded-md w-full"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="City"
                className="text-gray-500 outline-none px-2 py-[6px] border rounded-md"
              />
              <input
                type="text"
                placeholder="State"
                className="text-gray-500 outline-none px-2 py-[6px] border rounded-md"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Zip Code"
                className="text-gray-500 outline-none px-2 py-[6px] border rounded-md"
              />
              <input
                type="text"
                placeholder="Country"
                className="text-gray-500 outline-none px-2 py-[6px] border rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="phone"
              className="text-gray-500 outline-none px-2 py-[6px] border rounded-md w-full"
            />
          </div>
        </div>

        <div className="md:min-w-[50%] w-full flex flex-col items-start gap-8">
          <CartTotal />
          <TitleAndDesc
            title1="Payement"
            title2="Method"
            desc=""
            className="font-bold text-xl md:text-xl uppercase"
          />
          <div className="flex items-center justify-center gap-3 flex-wrap md:flex-nowrap">
            <div
              className="flex items-center justify-center gap-3 border h-12 px-6 cursor-pointer"
              onClick={() => handleSelect("stripe")}
            >
              <p
                className={`h-4 w-4 rounded-full border cursor-pointer ${
                  payementMethod === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} className="w-14" alt="" />
            </div>
            <div
              className="flex items-center justify-center gap-3 border h-12 px-6 cursor-pointer"
              onClick={() => handleSelect("razopay")}
            >
              <p
                className={`h-4 w-4 rounded-full border cursor-pointer ${
                  payementMethod === "razopay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} className="w-20" alt="" />
            </div>
            <div
              className="flex items-center justify-center gap-3 border h-12 px-6 cursor-pointer"
              onClick={() => handleSelect("cod")}
            >
              <p
                className={`h-4 w-4 rounded-full border cursor-pointer ${
                  payementMethod === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <span className="md:font-medium md:text-md">
                CASH ON DELIVERY
              </span>
            </div>
          </div>
          {/* buttton proced to checkout */}
          <button
            onClick={() => navigate("/orders")}
            className="bg-black py-2 px-5 text-white font-medium cursor-pointer mb-10 w-full"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
