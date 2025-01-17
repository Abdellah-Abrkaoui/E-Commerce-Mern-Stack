import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ setToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      // console.log(email, password);
      const response = await axios.post(`${backendUrl}/api/user/adminLogin`, {
        email,
        password,
      });

      if (response.data.success) {
        const token = response.data.token;
        setToken(token);
        toast.success("Login successful!");
        navigate("/add");
      } else {
        toast.error("Login failed!");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-32 section-container">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl">Admin Login</h1>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center gap-5 w-full"
        >
          <input
            type="email"
            placeholder="Email"
            className="md:w-1/3 w-full px-2 py-2 outline-none border-black border text-sm text-black-300 placeholder:text-gray-300"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="md:w-1/3 w-full px-2 py-2 outline-none border-black border text-sm text-black-300 placeholder:text-gray-300"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="md:w-1/3 w-full flex items-center justify-between">
            <p className="cursor-pointer text-sm font-semibold text-blue-300"></p>
            <p className="cursor-pointer text-sm font-semibold text-blue-300"></p>
          </div>
          <button className="px-6 py-2 text-white bg-black cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
