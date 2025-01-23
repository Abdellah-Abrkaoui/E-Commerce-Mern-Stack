import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ListProducts from "./pages/ListProducts";
import Orders from "./pages/Orders";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import "./index.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <>
      <ToastContainer />
      {token ? (
        <div className="section-container pt-5">
          <Navbar setToken={setToken} />
          <div className="flex gap-10">
            <div className="min-w-[300px] w-[300px] border-r max-h-screen">
              <SideBar />
            </div>
            <div className="items-start w-full">
              <Routes>
                <Route path="/add" element={<AddProduct token={token} />} />
                <Route path="/list" element={<ListProducts token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
                <Route path="*" element={<Navigate to="/add" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
