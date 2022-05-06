import React, { useState } from "react";

import { CgProfile as Profile } from "react-icons/cg";
import { FiSearch as Search } from "react-icons/fi";
import { FiGrid as Dashboard } from "react-icons/fi";
import { FiPlus as Add } from "react-icons/fi";
import { FiEdit as Edit } from "react-icons/fi";
import { FiTool as Services } from "react-icons/fi";
import { FiSettings as Settings } from "react-icons/fi";
import { FiBell as Notification } from "react-icons/fi";
import { FiArrowRight as ArrowRight } from "react-icons/fi";

const Side = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/*Main*/}
      <div className="relative flex flex-col lg:flex-row h-screen lg:overflow-hidden">
        {/*First*/}
        <div className="w-full h-screen bg-gray-50 p-6 lg:p-8 lg:basis-1/4 lg:overflow-y-hidden">
          <div className="flex flex-row justify-between">
            {/*Mobile NavBar*/}
            <div className="lg:hidden">
              <div className="static">
                <div className="flex flex-row bg-gray-50 items-center text-gray-800 focus:outline-none focus:text-teal-500">
                  <div
                    aria-label="toggler"
                    className="flex justify-center items-center"
                  >
                    <button
                      id="open"
                      onClick={() => setShow(!show)}
                      aria-label="open"
                      className={`${
                        show ? "" : "hidden"
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800`}
                    >
                      <svg
                        className="text-teal-500 w-8 h-8"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 12H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 18H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      id="close"
                      onClick={() => setShow(!show)}
                      aria-label="close"
                      className={`${
                        show ? "hidden" : ""
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex flex-grow justify-end w-full relative z-10`}
                    >
                      <svg
                        className="text-teal-500 w-8 h-8 block"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  id="Main"
                  className={`${
                    show ? " -translate-x-96" : "-translate-x-6"
                  } absolute top-20 l-0 bg-gray-50 transform ease-in-out transition duration-500 flex justify-start items-start w-fit h-fit flex-col`}
                >
                  <div className="flex flex-col justify-start items-start p-8 pt-4 w-full space-y-5">
                    <div className=" relative focus:outline-none flex jusitfy-start w-full text-teal-800 rounded  items-center border-teal-300 focus:border-teal-300/75 sm:visible">
                      <input
                        type="text"
                        placeholder="Search"
                        className="placeholder-teal-800 text-base placeholder-text-base leading-4 py-3 w-full pl-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 rounded sm:visible"
                      />
                      <Search className="absolute left-4 text-xl text-gray-800"></Search>
                    </div>

                    <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
                      <Dashboard className="text-2xl"></Dashboard>
                      <p className="text-base leading-4 ">Dashboard</p>
                    </button>

                    <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4  items-center w-full  space-x-6">
                      <Add className="text-2xl"></Add>
                      <p className="text-base leading-4 ">Add QR Code</p>
                    </button>

                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded  py-3 pl-4  w-full ">
                      <Edit className="text-2xl"></Edit>
                      <p className="text-base leading-4  ">Manage</p>
                    </button>

                    <button className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4  w-full ">
                      <Services className="text-2xl"></Services>
                      <p className="text-base leading-4  ">Services</p>
                    </button>

                    <div className="w-full">
                      <hr className=" border-gray-200 w-full" />
                    </div>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded  py-3 pl-4  w-full ">
                      <Settings className="text-2xl"></Settings>
                      <p className="text-base leading-4  ">Settings</p>
                    </button>
                    <div className="w-full sm:hidden">
                      <hr className=" border-gray-200 w-full" />
                    </div>
                    <button className=" sm:hidden focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded  py-3 pl-4  w-full ">
                      <Notification className="text-2xl"></Notification>
                      <p className="text-base leading-4  ">Notifications</p>
                    </button>
                  </div>

                  <div className="mt-36 flex  bg-teal-700 justify-start space-x-2 items-center h-full py-4 px-3.5    w-full  ">
                    <div>
                      <img
                        src="https://i.ibb.co/fxrbS6p/Ellipse-2-2.png"
                        alt="avatar"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-2">
                      <p className="cursor-pointer text-base leading-4 text-white">
                        Alexis Enache
                      </p>
                      <p className="cursor-pointer text-xs leading-3 text-gray-200">
                        alexis _enache@gmail.com
                      </p>
                    </div>
                    <button
                      aria-label="visit"
                      className=" focus:ring-2 focus:outline-none hover:bg-teal-800 p-2.5 bg-teal-600 rounded-full"
                    >
                      <ArrowRight className="text-xl text-white"></ArrowRight>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*Logo*/}
            <div className="flex items-center">
              <p className="text-xl font-bold text-teal-500 lg:px-4">
                Lorem Ipsum System
              </p>
            </div>
            {/*Profiles*/}
            <div className="flex flex-row items-center space-x-4 lg:hidden">
              <div className="text-xl">
                <Notification></Notification>
              </div>
              <div className="text-xl">
                <Profile></Profile>
              </div>
            </div>
          </div>
          {/*LG Screen SideBar*/}
          <div className="hidden lg:block">
            <div className="flex flex-col justify-start items-start py-8 px-4 w-full space-y-5">
              <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
                <Dashboard className="text-2xl"></Dashboard>
                <p className="text-base leading-4 ">Dashboard</p>
              </button>

              <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4  items-center w-full  space-x-6">
                <Add className="text-2xl"></Add>
                <p className="text-base leading-4 ">Add QR Code</p>
              </button>

              <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded  py-3 pl-4  w-full ">
                <Edit className="text-2xl"></Edit>
                <p className="text-base leading-4  ">Manage</p>
              </button>

              <button className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4  w-full ">
                <Services className="text-2xl"></Services>
                <p className="text-base leading-4  ">Services</p>
              </button>

              <div className="w-full">
                <hr className=" border-gray-200 w-full" />
              </div>
              <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded  py-3 pl-4  w-full ">
                <Settings className="text-2xl"></Settings>
                <p className="text-base leading-4  ">Settings</p>
              </button>
              <div className="w-full sm:hidden">
                <hr className=" border-gray-200 w-full" />
              </div>
              <button className=" sm:hidden focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded  py-3 pl-4  w-full ">
                <Notification className="text-2xl"></Notification>
                <p className="text-base leading-4  ">Notifications</p>
              </button>
            </div>
          </div>
        </div>
        {/*Second*/}
        <div className="flex flex-col lg:h-screen bg-gray-100 lg:basis-1/2 lg:overflow-y-scroll">
          <div className="w-full p-8 flex flex-col justify-center space-y-8 rounded">
            {/*Greetings*/}
            <div class="flex flex-col items-start">
              <span class=" text-xl font-bold">
                Good Afternoon, Rose Shorts 👋
              </span>
              <p class=" text-xs font-light">
                Welcome back to Lorem Ipsum System!
              </p>
            </div>
            {/*First Box*/}
            <div>
              <p className=" text-sm font-semibold text-teal-500 pb-1">
                Summary
              </p>
              <div className="bg-white w-full h-48 rounded-xl flex justify-center items-center shadow-xl shadow-slate-300/30">
                Box 1
              </div>
            </div>
            <div>
              <p className=" text-sm font-semibold text-teal-500 pb-1">
                Summary
              </p>
              <div className="bg-white w-full h-48 rounded-xl flex justify-center items-center shadow-xl shadow-slate-300/30">
                Box 2
              </div>
            </div>
            <div>
              <p className=" text-sm font-semibold text-teal-500 pb-1">
                Summary
              </p>
              <div className="bg-white w-full h-48 rounded-xl flex justify-center items-center shadow-xl shadow-slate-300/30">
                Box 3
              </div>
            </div>
          </div>
        </div>
        {/*Third*/}
        <div className="hidden h-screen bg-gray-50 lg:block lg:p-8 lg:basis-1/4 lg:overflow-y-scroll">
          <div className="flex flex-row justify-center space-x-4">
            <div className="flex flex-grow items-center">
              <input
                className="p-2 rounded-md"
                type="text"
                name="search"
                id="Search"
                placeholder="Search"
              ></input>
            </div>
            <button className="flex flex-shrink-0 items-center">
              <Notification className="text-xl"></Notification>
            </button>
            <button className="flex flex-shrink-0 items-center">
              <Profile className="text-2xl"></Profile>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;
