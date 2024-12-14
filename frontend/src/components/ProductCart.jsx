import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProductCart({ id, name, image, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/products/${id}`} className="flex flex-col items-start">
      <div className="mb-3 overflow-hidden">
        <img
          src={image}
          alt=""
          className="hover:scale-110 transition ease-in-out cursor-pointer"
        />
      </div>
      <p className="font-semibold text-sm">{name}</p>
      <p className="font-semibold text-blue-400">{`${price} ${currency}`}</p>
    </Link>
  );
}

export default ProductCart;
