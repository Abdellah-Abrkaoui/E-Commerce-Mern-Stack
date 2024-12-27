import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleAndDesc from "../components/TitleAndDesc";
import { MdDelete } from "react-icons/md";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItems, updatingProductQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          tempData.push({
            productId,
            size,
            quantity,
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="section-container mt-32">
      <div className="flex flex-col md:items-start items-center gap-10 py-10">
        <TitleAndDesc
          title1="YOUR"
          title2="CART"
          desc=""
          className="font-bold text-lg md:text-xl"
        />
        <div className="w-full flex flex-col gap-5">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item.productId
            );
            return (
              <div
                key={index}
                className="flex md:flex-row flex-col md:items-center md:justify-between gap-10 border-y py-2"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={productData.image}
                    alt=""
                    className="min-w-[100px] w-[100px]"
                  />
                  <div>
                    <p className="font-semibold text-blue-400 min-w-[250px] w-[250px]">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <p className="font-semibold">
                        {productData.price}
                        {currency}
                      </p>
                      <button
                        className={`w-3 h-3 p-5 flex justify-center border items-center bg-blue-100 text-black font-bold`}
                      >
                        {item.size}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center md:justify-between justify-start gap-4 md:gap-0 min-w-[500px] w-[500px]">
                  <div>
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      className="border py-2 px-3 outline-none font-semibold min-w-[100px] w-[100px]"
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value || 0);
                        updatingProductQuantity(
                          item.productId,
                          item.size,
                          newQuantity
                        );
                      }}
                    />
                  </div>
                  <button>
                    <MdDelete
                      className="text-blue-400 text-2xl"
                      onClick={() =>
                        updatingProductQuantity(item.productId, item.size, 0)
                      }
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CartTotal />
      {/* buttton proced to checkout */}
      <button
        onClick={() => navigate("/place-order")}
        className="bg-black py-2 px-5 text-white font-medium cursor-pointer mb-10"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default Cart;
