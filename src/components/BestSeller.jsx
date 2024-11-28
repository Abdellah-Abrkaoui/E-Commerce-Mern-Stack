import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleAndDesc from "./TitleAndDesc";
import ProductCart from "./ProductCart";

function BestSeller() {
  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);
  return (
    <div>
      <TitleAndDesc
        title1="BEST"
        title2="SELLER"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
        className="font-bold text-4xl md:text-5xl"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 section-container py-7">
        {bestSeller.map((p, index) => (
          <ProductCart
            key={index}
            id={p._id}
            name={p.name}
            image={p.image}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
