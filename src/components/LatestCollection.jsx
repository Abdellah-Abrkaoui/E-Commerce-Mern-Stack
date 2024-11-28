import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleAndDesc from "./TitleAndDesc";
import ProductCart from "./ProductCart";

function LatestCollection() {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="flex items-center flex-col py-24">
      <TitleAndDesc
        title1="LATEST"
        title2="COLLECTION"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
        className="font-bold text-4xl md:text-5xl"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 section-container py-7">
        {latestProducts.map((p, index) => (
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

export default LatestCollection;
