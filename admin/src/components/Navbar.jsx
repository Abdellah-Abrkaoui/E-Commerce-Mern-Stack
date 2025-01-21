import logo from "../assets/dknlogo.png";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar({ setToken }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    setToken(""); // Reset the token state
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-between">
      <img
        src={logo}
        alt=""
        className="max-w-[120px] w-[120px] cursor-pointer"
      />

      <button
        className="px-4 py-2 bg-blue-400 text-white cursor-pointer rounded-lg"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
