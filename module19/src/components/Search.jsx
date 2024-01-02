import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className=" bg-slate-900">
      <div className="w-[70%] mx-auto flex flex-wrap  justify-between items-center text-center text-white py-9">
        <div>
          <h1 className="text-4xl">
            <span className="text-blue-500">H</span>mart
          </h1>
        </div>
        <div>
          <input
            className="text-xl py-2 pl-5 w-[350px] rounded-s-lg text-black outline-none"
            type="text"
            placeholder="search"
          />
          <button className=" text-2xl bg-blue-500 pb-[14px]  pt-[7px] px-3 rounded-e-lg">
            <FiSearch />
          </button>
        </div>
        <div className="flex gap-6 text-4xl">
          <AiOutlineHeart />
          <Link to="/cart">
            <FaCartPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
