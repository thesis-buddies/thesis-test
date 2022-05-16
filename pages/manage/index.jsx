import React from "react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { CgProfile as Profile } from "react-icons/cg";
import { FiSearch as Search } from "react-icons/fi";
import { FiGrid as Dashboard } from "react-icons/fi";
import { FiPlus as Add } from "react-icons/fi";
import { FiEdit as Edit } from "react-icons/fi";
import { FiTool as Services } from "react-icons/fi";
import { FiSettings as Settings } from "react-icons/fi";
import { FiBell as Notification } from "react-icons/fi";
import { FiLogOut as Logout } from "react-icons/fi";
import { FiTrash2 as Delete } from "react-icons/fi";
import { FiEdit3 as Update } from "react-icons/fi";
import { FiBook as View } from "react-icons/fi";

const index = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>Lorem Ipsum System</title>
      </Head>
      <div className="relative flex flex-col lg:flex-row h-screen lg:overflow-hidden">
        {/*First*/}
        <div className="w-full h-fit lg:h-screen bg-gray-50 p-6 lg:p-8 lg:basis-1/4 lg:overflow-y-hidden">
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
                      onClick={() => setShow(false)}
                      aria-label="open"
                      className={`${show ? "" : "hidden"} focus:outline-none`}
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
                  </div>
                </div>
                <div
                  id="Main"
                  className={`${
                    show ? " -translate-x-96" : "-translate-x-6"
                  } fixed left-6 bottom-0 top-0 bg-gray-50 transform ease-in-out transition duration-500 flex justify-between flex-col`}
                >
                  <div className="flex flex-col justify-start items-start p-8 pt-4 w-full space-y-4">
                    <button
                      id="close"
                      onClick={() => setShow(!show)}
                      aria-label="close"
                      className={`${
                        show ? "hidden" : ""
                      } focus:outline-none flex flex-grow justify-start w-full p-3`}
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
                    <div className=" relative focus:outline-none flex jusitfy-start w-full text-teal-800 rounded items-center border-teal-300 focus:border-teal-300/75 sm:visible">
                      <input
                        type="text"
                        placeholder="Search"
                        className="placeholder-teal-800 text-base placeholder-text-base leading-4 py-3 w-full pl-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 rounded-md sm:visible"
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
                      <p className="text-base leading-4  ">index</p>
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
                    <div className="w-full py-5">
                      <div className="flex bg-teal-600 rounded space-x-2 items-center justify-center py-2 w-full">
                        <div className="flex items-center space-x-1">
                          {/* <Logout className="text-white"></Logout> */}
                          <p className="text-white text-sm">Log out</p>
                        </div>
                      </div>
                    </div>
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
              <Link href={"/"}>
                <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
                  <Dashboard className="text-2xl"></Dashboard>
                  <p className="text-base leading-4 ">Dashboard</p>
                </button>
              </Link>

              <Link href={"/add"}>
                <button className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4 items-center w-full  space-x-6">
                  <Add className="text-2xl"></Add>
                  <p className="text-base leading-4 ">Add QR Code</p>
                </button>
              </Link>

              <Link href={"/index"}>
                <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-white bg-teal-500 rounded  py-3 pl-4  w-full ">
                  <Edit className="text-2xl"></Edit>
                  <p className="text-base leading-4  ">Manage</p>
                </button>
              </Link>
              <Link href={"/serv"}>
                <button className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded py-3 pl-4  w-full ">
                  <Services className="text-2xl"></Services>
                  <p className="text-base leading-4  ">Services</p>
                </button>
              </Link>

              <div className="w-full">
                <hr className=" border-gray-200 w-full" />
              </div>
              <Link href={"/set"}>
                <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-teal-500 focus:text-white hover:bg-teal-500 text-gray-600 rounded  py-3 pl-4  w-full ">
                  <Settings className="text-2xl"></Settings>
                  <p className="text-base leading-4  ">Settings</p>
                </button>
              </Link>

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
        <div className="flex flex-col w-full h-fit lg:h-screen bg-gray-100 scroll-smooth lg:basis-3/4 lg:overflow-y-scroll">
          <div className="w-full p-8 flex flex-col justify-center space-y-8 rounded">
            {/*Greetings*/}
            <div className="flex flex-col items-start">
              <span className=" text-xl font-bold">
                Good Afternoon, Rose Shorts 👋
              </span>
              <p className=" text-xs font-light">
                Welcome back to Lorem Ipsum System!
              </p>
            </div>
            {/*First Box*/}
            <div className="space-y-8">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl">Manage Page</h1>
                <p className="text-xs text-gray-500 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  turpis mi, hendrerit tristique tortor tristique suscipit. Ac
                  aliquam adipiscing.
                </p>
              </div>
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <Link href={"/manage"}>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-2 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          ></path>
                        </svg>
                        Manage
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="grid grid-rows-3 gap-8 lg:grid-cols-3 lg:gap-8">
                <Link href={"/manage"}>
                  <button className="bg-white shadow-xl active:bg-teal-500 active:text-white rounded-xl h-72 w-full text-md font-semibold text-teal-500 space-y-4">
                    <Delete className="flex justify-end w-full text-9xl"></Delete>
                    <p>Delete</p>
                  </button>
                </Link>
                <Link href={"/manage"}>
                  <button className="bg-white shadow-xl active:bg-teal-500 active:text-white rounded-xl h-72 w-full text-md font-semibold text-teal-500 space-y-4">
                    <Update className="flex justify-end w-full text-9xl"></Update>
                    <p>Update</p>
                  </button>
                </Link>
                <Link href={"/manage"}>
                  <button className="bg-white shadow-xl active:bg-teal-500 active:text-white rounded-xl h-72 w-full text-md font-semibold text-teal-500 space-y-4">
                    <View className="flex justify-end w-full text-9xl"></View>
                    <p>View</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Third*/}
      </div>
    </>
  );
};

export default index;
