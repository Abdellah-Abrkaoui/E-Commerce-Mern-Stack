import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Collection from "../src/pages/Collection";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Product from "../src/pages/Product";
import Cart from "../src/pages/Cart";
import PlaceOrder from "../src/pages/PlaceOrder";
import Orders from "../src/pages/Orders";
import Login from "../src/pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SerachBar from "./components/SerachBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 */}
      <ToastContainer />
      <NavBar />
      <SerachBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
