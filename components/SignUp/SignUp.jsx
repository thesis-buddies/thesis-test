import React from "react";

import { FiPhone } from "react-icons/fi";
import { AiFillGoogleCircle as Google } from "react-icons/ai";
import { BsFacebook as Facebook } from "react-icons/bs";

const SignUp = () => {
  return (
    <>
      {/* Main */}
      <div className="flex flex-col min-h-screen flex-grow justify-center space-y-3">
        <div className=" bg-white p-10 container mx-auto">
          {/* Start First Row */}
          <div className="flex flex-grow font-medium">
            {/* Logo */}
            <span>Logo Here</span>
            {/* Sign in and Sign up */}
            <div className="flex flex-row flex-grow justify-end space-x-4 text-xs">
              <button> Sign in</button>
              <button>Sign up</button>
            </div>
          </div>
          {/* End First Row */}

          {/* Start Second Row */}
          <div className=" py-8">
            <h1 className=" text-2xl">Lorem Ipsum System</h1>
            <p className=" text-xs">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          {/* End Second Row */}

          {/* Start Third Row */}
          <div>
            <h2 className=" text-xl font-semibold flex flex-grow justify-center">
              Create an account to continue
            </h2>
          </div>
          {/* End Third Row */}

          {/* Start Fourth Row */}
          <div className="flex flex-grow flex-col text-xs justify-between py-8 space-y-2">
            <button className="bg-teal-500 p-2 rounded-md text-white flex flex-grow justify-center space-x-2">
              <Google className="text-white text-lg"></Google>
              <button>Sign up with Google</button>
            </button>

            <button className="bg-teal-500 p-2 rounded-md text-white flex flex-grow justify-center space-x-2">
              <Facebook className="text-base"></Facebook>
              <button>Sign up with Facebook</button>
            </button>
          </div>
          {/* End Fourth Row */}

          {/* Start Fifth Row */}
          <div className=" text-xs flex flex-grow justify-center text-neutral-500">
            <p>or sign up with your phone number</p>
          </div>
          {/* End Fifth Row */}

          {/* Start Sixth Row */}
          <div className=" text-xs flex flex-grow flex-col py-8 space-y-2">
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-semibold text-slate-700">
                Phone Number
              </span>
              <input
                type="number"
                name="Phone Number"
                class="mt-1 px-3 py-2 bg-white border text-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
                placeholder="09123456789"
              />
            </label>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-semibold text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                class="mt-1 px-3 py-2 bg-white border text-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
                placeholder="********"
              />
            </label>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-semibold text-slate-700">
                Re-enter Password
              </span>
              <input
                type="password"
                name="password"
                class="mt-1 px-3 py-2 bg-white border text-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
                placeholder="********"
              />
            </label>
          </div>
          {/* End Sixth Row */}
          <div className="pb-8">
            <button className="flex flex-grow justify-center p-2 bg-teal-500 text-white text-sm rounded-lg w-full">
              <button className=" font-medium">Sign up</button>
            </button>
            <span className="flex flex-grow text-xs my-1">
              I already have an account.
              <button className="font-semibold mx-1 text-teal-500">
                Login
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
