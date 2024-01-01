import React from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { RiContactsFill } from "react-icons/ri";

const Blog = () => {
  return (
    <div>
      <div className="bg-gray-400 text-center py-24">
        <h1 className="text-5xl font-bold text-black">Blog Single</h1>
        <div className="uppercase flex flex-wrap mx-auto justify-center items-center py-9 text-xl">
          <Link to="/" className="text-white mr-5">
            Home
          </Link>
          <h3 className="text-blue-700">// BLog Single</h3>
        </div>
      </div>

      <div className="w-[80%] flex flex-wrap mx-auto justify-between items-center py-20">
        <div>
          <img
            src="https://htmldemo.net/hmart/hmart/assets/images/blog-image/single-blog.webp"
            alt=""
          />

          <div className="flex items-center gap-5 mt-5">
            <SlCalender className="text-blue-500" />
            <p> 27,Jun 2030</p>
            <RiContactsFill className="text-blue-500" />
            <p> Oaklee Odom</p>
          </div>
          <h1 className="text-4xl font-bold py-5">
            10 Principles of Psychology You Can Use <br /> to Improve Your Smart
            Product
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor inci <br />
            didunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud ex <br /> ercitation ullamcol laboris nisi ut aliquipp
            ex ea commodo consequat. Duis aute irure <br /> dolor in
            reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. <br /> Excepteur sint occaec cupidatat non proident,
            sunt in culpa qui officia deserunt mollit <br /> anim id est
            laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
