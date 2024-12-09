import React, { useContext, useState } from "react";
import logo from "../assets/frontend_assets/dknlogo.png";
import { assets } from "../assets/frontend_assets/assets";

import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function NavBar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="w-full fixed top-0 left-0 text-white z-50 shadow-md bg-white">
      <div className="flex items-center justify-between py-5 font-medium  max-w-7xl mx-auto px-6">
        {/* logo */}
        <a href="/">
          <img
            src={logo}
            alt="DKN E-Commerce"
            className="max-w-[140px] w-[140px] cursor-pointer"
          />
        </a>
        {/* nav links */}
        <ul className="hidden sm:flex gap-5 uppercase text-sm text-black">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Collection</p>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
          </NavLink>
        </ul>

        {/* search , user & cart icons */}
        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
          <div className="group relative">
            <Link to="/login">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-5 cursor-pointer"
              />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-2 px-5 bg-slate-100 text-gray-500 rounded-sm">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt=""
              className="w-5 min-w-5 cursor-pointer"
            />
            <span className="absolute bottom-[-5px] right-[-5px]  bg-black text-white rounded-full text-[8px] w-4 text-center leading-4 aspect-square">
              {getCartCount()}
            </span>
          </Link>

          {/* for the responsive mode */}
          <img
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden ml-3"
            alt=""
            onClick={() => setVisible(true)}
          />
        </div>

        {/* side bar menu for mobile devices */}
        {visible && (
          <div
            className={`absolute top-0 right-0 w-full h-screen bg-white text-gray-700 z-50 ${
              visible ? "w-full" : "w-0"
            }`}
          >
            <div className="flx flex-col text-gray-700 px-5 py-8">
              <img
                src={assets.cross_icon}
                alt=""
                onClick={() => setVisible(false)}
              />
              <div className="flex flex-col pt-10">
                <NavLink
                  className="border py-2 pl-6"
                  to="/home"
                  onClick={() => setVisible(false)}
                >
                  HOME
                </NavLink>
                <NavLink
                  className="border py-2 pl-6"
                  to="/collection"
                  onClick={() => setVisible(false)}
                >
                  COLLECTIONS
                </NavLink>
                <NavLink
                  className="border py-2 pl-6"
                  to="/about"
                  onClick={() => setVisible(false)}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  className="border py-2 pl-6"
                  to="/contact"
                  onClick={() => setVisible(false)}
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
