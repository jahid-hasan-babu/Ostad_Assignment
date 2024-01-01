import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-[70%] flex flex-wrap mx-auto  items-center justify-between py-20">
      <div>
        <h1 className="text-8xl font-bold">
          Oops! <br />
          Page not found!
        </h1>
        <p className="text-lg py-10">
          You could either go back or go to homepage
        </p>
        <div>
          <Link to="/">
            <button
              className="bg-blue-500 text-white p-3 px-5 text-lg rounded-[30px] hover:bg-black mr-5"
              type="input"
            >
              GO BACK
            </button>
          </Link>

          <Link>
            <button
              className="bg-gray-500 text-white p-3 px-5 text-lg rounded-[30px] hover:bg-black"
              type="input"
            >
              HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
