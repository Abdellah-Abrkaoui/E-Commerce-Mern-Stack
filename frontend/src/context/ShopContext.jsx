import { createContext, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // states for search bar logic

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // use navigate
  const navigate = useNavigate();

  // for adding products in the cart
  const [cartItems, setCartItems] = useState({});

  // import backend url
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // store products in useState
  const [products, setProducts] = useState([]);

  // async function addToCart

  const addToCart = async (productId, size) => {
    try {
      if (!size) {
        toast.error("please select size");
        return;
      }

      // Deep copy the state using structuredClone
      let cartData = structuredClone(cartItems);

      // Check if product exists in the cart
      if (!cartData[productId]) {
        cartData[productId] = {};
      }

      if (cartData[productId][size]) {
        cartData[productId][size] += 1; // Increment quantity if product & size exist
      } else {
        cartData[productId][size] = 1; // Add new product with size
      }

      setCartItems(cartData);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // function for get Cart Count
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log("we can not add to cart", error);
        }
      }
    }
    return totalCount;
  };

  // function for updating the quantity of the product

  const updatingProductQuantity = async (productId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[productId][size] = quantity;
    setCartItems(cartData);
  };

  // get total of all items in the cart

  const getTotalAmount = () => {
    let totalAmout = 0;
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];

        const productData = products.find(
          (product) => product._id === productId
        );

        if (productData) {
          const totalItem = productData.price * quantity;
          totalAmout += totalItem;
        }
      }
    }

    return totalAmout;
  };

  const currency = "$";
  const delivery_fee = 10;

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/products/allProducts`
      );
      if (response.status) {
        setProducts(response.data); // Update the state
      } else {
        console.log("Error while fetching data");
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    getAllProducts();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    getCartCount,
    cartItems,
    updatingProductQuantity,
    getTotalAmount,
    navigate,
    backendUrl,
  };

  return (
    // eslint-disable-next-line react/prop-types
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
