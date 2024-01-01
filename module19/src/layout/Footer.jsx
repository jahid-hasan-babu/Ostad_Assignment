import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-300 py-9">
        <div className="w-[70%] mx-auto flex flex-wrap align-center justify-between">
          <div>
            <h1 className="text-4xl">
              <span className="text-blue-500">H</span>mart
            </h1>
            <p>
              Lorem ipsum dolor sit amet consl <br /> adipisi elit, sed do
              eiusmod templ <br /> incididunt ut labore
            </p>
            <div className="flex gap-5 pt-5 text-white">
              <div className="bg-zinc-700 p-3 rounded-lg">
                <FaFacebookF size={20} />
              </div>

              <div className="bg-zinc-700 p-3 rounded-lg">
                <FaTwitter size={20} />
              </div>

              <div className="bg-zinc-700 p-3 rounded-lg">
                <FaLinkedinIn size={20} />
              </div>
              <div className="bg-zinc-700 p-3 rounded-lg">
                <CiInstagram size={20} />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Services</h1>
            <Link to="/account" className="hover:text-blue-400 cursor-pointer">
              My Account
            </Link>
            <br />
            <Link to="/contact" className="hover:text-blue-400 cursor-pointer">
              Contact
            </Link>
            <br />
            <Link to="/cart" className="hover:text-blue-400 cursor-pointer">
              Shopping Cart
            </Link>
            <br />
            <Link o="/shop" className="hover:text-blue-400 cursor-pointer">
              Shop
            </Link>
            <br />
            <Link to="/login" className="hover:text-blue-400 cursor-pointer">
              Services Login
            </Link>
          </div>

          <div>
            <h1 className="text-2xl font-bold">My Account</h1>
            <Link to="/account" className="hover:text-blue-400 cursor-pointer">
              My Account
            </Link>
            <br />
            <Link to="/contact" className="hover:text-blue-400 cursor-pointer">
              Contact
            </Link>
            <br />
            <Link to="/cart" className="hover:text-blue-400 cursor-pointer">
              Shopping Cart
            </Link>
            <br />
            <Link o="/shop" className="hover:text-blue-400 cursor-pointer">
              Shop
            </Link>
            <br />
            <Link to="/login" className="hover:text-blue-400 cursor-pointer">
              Services Login
            </Link>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Contact Info</h1>
            <span>Address: Your Address Goes Here.</span>
            <br />
            <span>Phone/Fax: 0123456789</span>
            <br />

            <span>Email: demo@example.com</span>
            <br />

            <span>demo@example.com</span>
            <br />
          </div>
        </div>
      </div>
      <div className=" text-gray-600 py-4  bg-blue-100">
        <div className="w-[70%] flex flex-wrap mx-auto justify-between items-center">
          <div>
            <p>&copy; Jahid Hasan. All rights reserved.</p>
          </div>

          <p className="ml-[600px]">Pay With</p>
          <div className="w-[3%] flex">
            <img
              src="https://vectorseek.com/wp-content/uploads/2021/02/bKash-Logo-Vector.jpg"
              alt=""
            />
            <img
              src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg"
              alt=""
            />
            <img
              src="https://api.upaybd.com/media/dynamic_image/Logo_for_Footer_1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
