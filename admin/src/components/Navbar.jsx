import logo from "../assets/dknlogo.png";

// eslint-disable-next-line react/prop-types
function Navbar({ setToken }) {
  return (
    <div className="flex items-center justify-between">
      <img
        src={logo}
        alt=""
        className="max-w-[120px] w-[120px] cursor-pointer"
      />

      <button
        className="px-4 py-2 bg-blue-400 text-white cursor-pointer rounded-lg"
        onClick={() => setToken("")}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
