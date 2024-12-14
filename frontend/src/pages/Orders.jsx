import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleAndDesc from "../components/TitleAndDesc";

function Orders() {
  const { products, currency } = useContext(ShopContext);
  const showedProducts = products.slice(1, 4);
  return (
    <div className="my-32 section-container">
      <div className="flex flex-col items-start gap-4">
        <TitleAndDesc
          title1="my"
          title2="orders"
          desc=""
          className="font-bold text-xl md:text-xl uppercase"
        />
        <div className="w-full">
          {showedProducts.map((item, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col md:items-center md:justify-between gap-10 border-y py-2"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.image}
                  alt=""
                  className="min-w-[100px] w-[100px]"
                />
                <div>
                  <p className="font-semibold text-blue-400 min-w-[250px] w-[250px]">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <p className="font-semibold">
                      {item.price}
                      {currency}
                    </p>
                    <p>
                      Quantity : <span>1</span>
                    </p>
                    <p>
                      Size : <span>L</span>
                    </p>
                  </div>
                  <p className="text-gray-400 font-light text-sm mt-2">
                    Date : 12/09/2024
                  </p>
                </div>
              </div>

              <div className="flex items-center md:justify-between justify-start gap-4 md:gap-0 min-w-[500px] w-[500px]">
                <div className="flex items-center justify-center gap-3 h-12 px-6 cursor-pointer">
                  <p
                    className={`h-4 w-4 rounded-full border cursor-pointer bg-green-400`}
                  ></p>
                  <p>Shipped</p>
                </div>
                <button className="border px-3 py-1 cursor-pointer">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
