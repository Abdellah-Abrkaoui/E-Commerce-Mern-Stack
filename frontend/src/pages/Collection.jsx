import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleAndDesc from "../components/TitleAndDesc";
import ProductCart from "../components/ProductCart";

function Collection() {
  const { products } = useContext(ShopContext);

  // States for sorting and filtering logic
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [sortOrder, setSortOrder] = useState("relevent");

  // Category filter
  const handleCategoryChange = (e) => {
    setSelectedCategory((prev) => {
      const newCategoryList = prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value];
      return newCategoryList; // Return updated state
    });
  };

  // Sub-category filter
  const handleSubCategoryChange = (e) => {
    setSelectedType((prev) => {
      const newTypeList = prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value];
      return newTypeList; // Return updated state
    });
  };

  // logic for getting items by using search bar

  const { search } = useContext(ShopContext);

  // Apply filters
  const applyFilter = (products) => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory.length === 0 ||
        selectedCategory.includes(product.category);
      const typeMatch =
        selectedType.length === 0 || selectedType.includes(product.subCategory);
      const searchMatch =
        search === "" ||
        product.name.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && typeMatch && searchMatch;
    });
  };

  // Sorting logic
  const sortProducts = (products) => {
    switch (sortOrder) {
      case "low-to-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "high-to-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "relevent":
      default:
        return products;
    }
  };

  // Get filtered and sorted products
  const filteredProducts = applyFilter(products);
  const sortedProducts = sortProducts(filteredProducts);

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row pt-36 md:pt-40 section-container gap-10">
      <div className="min-w-[25%]">
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-400 font-semibold">FILTERS</h1>
          <div className="border flex flex-col items-start gap-3 py-2 px-4">
            <h2 className="text-gray-500">Categories</h2>
            <div className="flex items-center gap-2 text-xs">
              <input
                onChange={() =>
                  handleCategoryChange({ target: { value: "Men" } })
                }
                type="checkbox"
                name="men"
                id="men"
              />
              <label htmlFor="men">Men</label>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <input
                onChange={() =>
                  handleCategoryChange({ target: { value: "Women" } })
                }
                type="checkbox"
                name="women"
                id="women"
              />
              <label htmlFor="women">Women</label>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <input
                onChange={() =>
                  handleCategoryChange({ target: { value: "Kids" } })
                }
                type="checkbox"
                name="kids"
                id="kids"
              />
              <label htmlFor="kids">Kids</label>
            </div>
          </div>
          <div className="border flex flex-col items-start gap-3 py-2 px-4">
            <h2 className="text-gray-500">Type</h2>
            <div className="flex items-center gap-2 text-xs">
              <input
                onChange={() =>
                  handleSubCategoryChange({ target: { value: "TopWear" } })
                }
                type="checkbox"
                name="topwear"
                id="topwear"
              />
              <label htmlFor="topwear">TopWear</label>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <input
                onChange={() =>
                  handleSubCategoryChange({ target: { value: "BottomWear" } })
                }
                type="checkbox"
                name="bottomwear"
                id="bottomwear"
              />
              <label htmlFor="bottomwear">BottomWear</label>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <input
                onChange={() =>
                  handleSubCategoryChange({ target: { value: "WinterWear" } })
                }
                type="checkbox"
                name="winterwear"
                id="winterwear"
              />
              <label htmlFor="winterwear">WinterWear</label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-start justify-between flex-1">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full">
          <TitleAndDesc
            title1="ALL"
            title2="COLLECTIONS"
            desc=""
            className="text-sm md:text-xl"
          />
          <select
            className="py-1 px-2 md:py-2 md:px-4 border outline-none"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="relevent">Sort By: Relevant</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-7">
          {sortedProducts.map((p, index) => (
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
    </div>
  );
}

export default Collection;
