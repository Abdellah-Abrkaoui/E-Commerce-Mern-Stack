import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleAndDesc from "./TitleAndDesc";

export default function CartTotal() {
  const { currency, delivery_fee, getTotalAmount } = useContext(ShopContext);

  return (
    <div className="py-4 mb-4 flex flex-col items-start min-w-[500px] w-[500px] ">
      <TitleAndDesc
        title1="CART"
        title2="TOTAL"
        desc=""
        className="font-bold text-lg md:text-xl"
      />
      <div className="flex flex-col gap-3 font-semibold w-full">
        <div className="flex items-center justify-between">
          <span>subTotal</span>
          <span>
            {currency}
            {getTotalAmount()}
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between w-full">
          <span>Shipping Fees</span>
          <span>
            {currency}
            {delivery_fee}
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between w-full">
          <span>Total</span>
          <span>
            {currency}
            {getTotalAmount() + delivery_fee}
          </span>
        </div>
      </div>
    </div>
  );
}
