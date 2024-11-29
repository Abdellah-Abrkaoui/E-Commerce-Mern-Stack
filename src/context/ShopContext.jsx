import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // states for search bar logic

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const currency = "$";
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    // eslint-disable-next-line react/prop-types
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
