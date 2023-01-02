import React, { useState, useRef, useEffect } from "react";

import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

import { Link, Route, Routes } from "react-router-dom";

import { Outlet } from "react-router-dom";

import { Sidebar, UserProfile } from "../../components/barrel";
import { client } from "../../client.js";
import Pins from "../pins/index.jsx";
import logo from "../../assets/logo.png";
import { userQuery } from "../../utils/data";
function Layout() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  //get the userInfo from sanity
  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);
  return (
    <div
      className="flex bg-gray-500 md:flex-rpw flex-col h-screen transition-height
      duration-75 ease-out"
    >
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>

      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />

          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>

          <Link to={`user-profile/${user?._id}`}>
            <img src={user?.image} alt="logo" className="w-28" />
          </Link>
        </div>

        {/* Show sidebar if toggled */}
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
