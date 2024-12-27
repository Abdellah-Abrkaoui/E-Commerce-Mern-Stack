import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleAndDesc from "./TitleAndDesc";
import ProductCart from "./ProductCart";

// eslint-disable-next-line react/prop-types
function RealtedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelatedProduct(productCopy.slice(0, 5));
    }
  }, [category, products, subCategory]);

  return (
    <div className="py-5 mb-10">
      <TitleAndDesc
        title1="RELATED"
        title2="PRODUCTS"
        desc=""
        className="font-bold text-xl md:text-5xl"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-7">
        {relatedProduct.map((p, index) => (
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

export default RealtedProducts;
