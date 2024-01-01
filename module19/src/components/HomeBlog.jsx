import React from "react";
import { SlCalender } from "react-icons/sl";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <div>
      <div className="text-center py-9">
        <h1 className="text-6xl font-bold">Latest Blog</h1>
        <p className="text-2xl text-gray-400 py-5">
          There are many variations of passages of Lorem Ipsum available
        </p>
      </div>
      <div className="w-[80%] flex flex-wrap mx-auto justify-between py-10">
        <div>
          <img
            src="https://htmldemo.net/hmart/hmart/assets/images/blog-image/1.webp"
            alt=""
          />
        </div>
        <div className="px-[5px]">
          <div className="flex items-center gap-5 mt-5">
            <SlCalender />
            <p> 27,Jun 2030</p>
            <RiContactsFill />
            <p> Oaklee Odom</p>
          </div>
          <h3 className="text-2xl font-bold hover:text-blue-500 my-5">
            10 Quick Tips About <br /> Smart Product
          </h3>
          <p className="text-lg my-5">
            Lorem ipsum dolor sit amet consl <br /> adipisi elit, sed do eiusmod
            templ <br />
            incididunt ut labore
          </p>
          <Link to="/blog">
            <button className="btn hover:bg-blue-500 text-white bg-slate-600 text-xl mt-5">
              Read More
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://htmldemo.net/hmart/hmart/assets/images/blog-image/2.webp"
            alt=""
          />
        </div>
        <div className="px-[5px]">
          <div className="flex items-center gap-5 mt-5">
            <SlCalender />
            <p> 27,Jun 2030</p>
            <RiContactsFill />
            <p> Oaklee Odom</p>
          </div>
          <h3 className="text-2xl font-bold hover:text-blue-500 my-5">
            10 Quick Tips About <br /> Smart Product
          </h3>
          <p className="text-lg my-5">
            Lorem ipsum dolor sit amet consl <br /> adipisi elit, sed do eiusmod
            templ <br />
            incididunt ut labore
          </p>
          <Link to="/blog">
            <button className="btn hover:bg-blue-500 text-white bg-slate-600 text-xl mt-5">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
