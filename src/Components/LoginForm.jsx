import React from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  return (
    <>
      <div
        className="flex justify-center mt-[70px] "
        //style={{  height: "77.38px", top: "72px" }}
      >
        <img src={Logo} alt="Logo" className="" />
      </div>
      <div className="flex-coloum mt-[30px] ">
        <div className="flex justify-center items-center h-[42px]">
          <p className="text-[42px] font-serif">Welcome Back!</p>
        </div>
        <div className="flex justify-center items-center h-[22px]">
          <p className="text-[16px] font-serif text-[#585858]">
            Already have an account? Log In now
          </p>
        </div>
      </div>
      {/*<div className=" flex justify-center items-center mt-[34px] h-[56px]">
        

        <input
          className="w-[360px] h-[55px] text-gray-700 rounded-3xl  border-2 border-[#585858] "
          id="email"
          type="email"
          placeholder="✉ User name or email address"
        />
      </div>*/}
      <div className="flex items-center justify-center h-[42px] mt-[34px] ">
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-5 w-5 text-gray-400"
            />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:border-green-500"
            placeholder="User name or email address"
          />
        </div>
      </div>

      <div className="flex items-center justify-center h-[42px] mt-[18px]">
        <div className="relative w-full max-w-sm">
          <input
            type={"password"}
            className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:border-green-500"
            placeholder="Enter password"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="h-[16px] flex items-center justify-center mt-[6px]">
        <div className="w-[290px] h-full flex justify-between">
          <div className="  flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center h-[42px] mt-[24px]">
        <button className="w-full max-w-sm py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          Log In
        </button>
      </div>
    </>
  );
};
export default LoginForm;
