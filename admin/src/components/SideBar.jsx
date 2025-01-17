import { IoMdAddCircleOutline } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex flex-col items-start gap-5 pt-10">
      <NavLink
        style={({ isActive }) => ({
          background: isActive ? "#7CB9E8" : "",
        })}
        to="/add"
        className="flex items-center gap-4 border px-10 py-2 w-[90%] cursor-pointer"
      >
        <IoMdAddCircleOutline />
        <p>Add Product</p>
      </NavLink>
      <NavLink
        className="flex items-center gap-4 border px-10 py-2 w-[90%] cursor-pointer"
        style={({ isActive }) => ({
          background: isActive ? "#7CB9E8" : "",
        })}
        to="/list"
      >
        <FaList />
        <p>All Products</p>
      </NavLink>
      <NavLink
        className="flex items-center gap-4 border px-10 py-2 w-[90%] cursor-pointer"
        style={({ isActive }) => ({
          background: isActive ? "#7CB9E8" : "",
        })}
        to="/orders"
      >
        <FaCartArrowDown />
        <p>Orders</p>
      </NavLink>
    </div>
  );
}

export default SideBar;
