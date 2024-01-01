import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="w-[80%] flex mx-auto flex-wrap justify-between items-center my-14">
        <div>
          <div className="relative">
            <img
              src="https://htmldemo.net/hmart/hmart/assets/images/banner/3.webp"
              alt="Banner"
            />

            <div className="absolute mt-[-200px] ml-11">
              <h1 className="text-4xl font-bold text-gray-500">
                Smart Watch For <br /> Your Hand
              </h1>
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl pt-4 font-bold">From $29.00</p>
                </div>
                <div className="ml-14 mt-3 font-bold text-xl text-white bg-blue-500 p-5 rounded-[50%]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="https://htmldemo.net/hmart/hmart/assets/images/banner/4.webp"
              alt="Banner"
            />

            <div className="absolute mt-[-200px] ml-11">
              <h1 className="text-4xl font-bold text-gray-500">Headphones</h1>
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl pt-4 font-bold">From $29.00</p>
                </div>
                <div className="ml-14 mt-3 font-bold text-xl text-white bg-blue-500 p-5 rounded-[50%]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-5 hover:translate-x-0">
            <img
              src="https://htmldemo.net/hmart/hmart/assets/images/banner/5.webp"
              alt="Banner"
            />

            <div className="absolute mt-[-200px] ml-11">
              <h1 className="text-4xl font-bold text-gray-500">Smartphone</h1>
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl pt-4 font-bold">From $29.00</p>
                </div>
                <div className="ml-14 mt-3 font-bold text-xl text-white bg-blue-500 p-5 rounded-[50%]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
