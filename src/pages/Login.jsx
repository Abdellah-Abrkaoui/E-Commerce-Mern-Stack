import React, { useState } from "react";
import TitleAndDesc from "../components/TitleAndDesc";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-32 section-container">
      <div className="flex flex-col items-center justify-center gap-6">
        <TitleAndDesc
          title1={currentState}
          title2=""
          desc=""
          className="font-bold text-xl md:text-2xl uppercase"
        />
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center gap-5 w-full"
        >
          {currentState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Name"
              className="md:w-1/3 w-full px-2 py-2 outline-none border-black border text-sm text-black-300 placeholder:text-gray-300"
              required
            />
          ) : (
            ""
          )}
          <input
            type="email"
            placeholder="Email"
            className="md:w-1/3 w-full px-2 py-2 outline-none border-black border text-sm text-black-300 placeholder:text-gray-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="md:w-1/3 w-full px-2 py-2 outline-none border-black border text-sm text-black-300 placeholder:text-gray-300"
            required
          />
          <div className="md:w-1/3 w-full flex items-center justify-between">
            <p className="cursor-pointer text-sm font-semibold text-blue-300">
              {currentState === "Sign Up" ? "" : "Forgot Password ?"}
            </p>
            <p className="cursor-pointer text-sm font-semibold text-blue-300">
              {currentState === "Sign Up" ? (
                <p onClick={() => setCurrentState("Login")}>
                  Already Have An Account ? Loign
                </p>
              ) : (
                <p onClick={() => setCurrentState("Sign Up")}>
                  Create New Account ?
                </p>
              )}
            </p>
          </div>
          <button className="px-6 py-2 text-white bg-black cursor-pointer">
            {currentState === "Sign Up" ? "Create" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
