import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className=" bg-slate-900 text-white">
      <div className="w-[70%] my-0 mx-auto flex justify-between flex-wrap items-center py-3">
        <div>
          <p>World Wide Completely Free Returns and Shipping</p>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="text-blue-500 mr-3">
            <FaPhoneAlt />
          </div>
          <p className="mr-3  hover:text-blue-500 cursor-pointer">
            +012 3456 789
          </p>
          <div className="text-blue-500 mr-3">
            <IoMailOutline />
          </div>
          <p className="mr-3  hover:text-blue-500 cursor-pointer">
            demo@example.com
          </p>
          <div className="text-blue-500 mr-3">
            <RiAccountCircleLine />
          </div>

          <p className=" hover:text-blue-500 cursor-pointer">Account</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
