import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function SerachBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/collection") {
      setShowSearch(false);
    }
  }, [location, setShowSearch]);

  return (
    <>
      {location.pathname === "/collection" && showSearch && (
        <div className="flex items-center justify-center mt-20">
          <div className="py-6 px-6 flex items-center justify-center gap-3 w-full bg-slate-100">
            <div className="border md:min-w-[40%] md:w-[40%] w-full flex items-center justify-between rounded-full bg-white">
              <input
                type="text"
                placeholder="Search ...."
                className="w-10/12 border-none outline-none px-3 py-3 rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>
                <img
                  src={assets.search_icon}
                  alt=""
                  className="min-w-7 w-7 pr-3"
                />
              </button>
            </div>
            <button>
              <img
                src={assets.cross_icon}
                alt=""
                className="min-w-5 w-5"
                onClick={() => setShowSearch(false)}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SerachBar;
