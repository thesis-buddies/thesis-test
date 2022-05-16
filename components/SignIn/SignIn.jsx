import React from "react";
import Link from "next/link";

import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlinePhone as Phone } from "react-icons/ai";
import { BsKey as Password } from "react-icons/bs";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col w-full min-h-screen flex-grow justify-center p-6 px-12 lg:px-36">
          <div className=" bg-white w-full h-fit mx-auto flex flex-col lg:space-y-2">
            {/* Start First Row */}
            <div className="flex flex-grow font-medium">
              {/* Logo */}
              <span className="w-14 h-14 rounded-full border-2 border-teal-500"></span>
              {/* Sign in and Sign up */}
              <div className="flex flex-row flex-grow justify-end items-start space-x-4 text-xs">
                <button className=" font-bold text-teal-600 active:text-teal-500">
                  {" "}
                  Log in
                </button>
                <button>Sign up</button>
              </div>
            </div>
            {/* End First Row */}

            {/* Start Second Row */}
            <div className=" py-8">
              <h1 className=" text-2xl font-bold">Lorem Ipsum System</h1>
              <p className=" text-xs">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            {/* End Second Row */}

            {/* Start Third Row */}
            <div>
              <h2 className=" text-xl font-semibold flex flex-grow justify-center">
                Log in to continue
              </h2>
            </div>
            {/* End Third Row */}

            {/* Start Fourth Row */}
            <div className="flex flex-grow flex-col text-xs justify-between py-8 space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
              <button className="bg-teal-500 p-2 rounded-md text-white flex flex-grow justify-center items-center space-x-2 active:bg-teal-600">
                <AiFillGoogleCircle className="text-white text-lg"></AiFillGoogleCircle>
                <button>Log in with Google</button>
              </button>

              <button className="bg-teal-500 p-2 rounded-md text-white flex flex-grow justify-center items-center space-x-2 active:bg-teal-600">
                <BsFacebook className="text-base"></BsFacebook>
                <button>Log in with Facebook</button>
              </button>
            </div>
            {/* End Fourth Row */}

            {/* Start Fifth Row */}
            <div className=" text-xs flex flex-grow justify-center text-neutral-500">
              <p>or sign in with your phone number</p>
            </div>
            {/* End Fifth Row */}

            {/* Start Sixth Row */}
            <div className=" text-xs flex flex-grow flex-col py-8 space-y-2">
              <div className=" space-y-1">
                <div className="py-1 after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-slate-700">
                  Phone Number
                </div>
                <div class="flex relative">
                  <div class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 text-sm">
                    <Phone className="text-gray-500 text-xl rotate-90"></Phone>
                  </div>
                  <input
                    type="text"
                    id="Phone Number"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    name="Phone Number"
                    placeholder="09123456789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-slate-700">
                  Password
                </span>
                <div class="flex relative">
                  <span class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 text-sm">
                    <Password className="text-gray-500 text-xl"></Password>
                  </span>
                  <input
                    type="password"
                    id="password"
                    class=" rounded-r-lg flex-1 appearance-none flex border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    name="password"
                    placeholder="**********"
                  />
                </div>
              </div>

              {/* Start cscksc */}
              <div className="flex flex-row space-x-1 py-1">
                <span className="flex flex-row space-x-1">
                  <input
                    className="rounded text-teal-500 border-slate-300"
                    type="checkbox"
                    name="RememberMe"
                    id="RememberMe"
                  />
                  <p className="text-xs">Remember me</p>
                </span>
                <span className=" text-xs flex flex-grow flex-row justify-end">
                  <button className="font-semibold">Forgot Password?</button>
                </span>
              </div>
            </div>
            {/* End Sixth Row */}
            <div>
              <Link>
                <button className="flex flex-grow justify-center p-2 bg-teal-500 text-white text-sm rounded-lg w-full active:bg-teal-600">
                  <button className=" font-medium">Log in</button>
                </button>
              </Link>

              <span className="flex flex-grow text-xs py-2">
                Don't have an account yet?
                <button className="font-semibold mx-1 text-teal-500">
                  Create an account.
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="hidden bg-teal-500 rounded-l-3xl w-full h-screen lg:block"></div>
      </div>
    </>
  );
};

export default SignIn;
