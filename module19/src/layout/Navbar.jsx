import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-blue-500 text-white transition duration-1000 ease-in-out">
      <div className="w-[80%] navbar uppercase ml-[-150px]">
        <div className="navbar-start"></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contact</NavLink>
            </li>
            <li>
              <details className="relative z-50">
                {/* Set the 'z-50' class here for consistency */}
                <summary className="z-50">Pages</summary>
                <ul className="p-2 text-black z-50">
                  {/* Set the 'z-50' class here for consistency */}
                  <li>
                    <NavLink to="/cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/checkout">Checkout</NavLink>
                  </li>
                  <li>
                    <NavLink to="/thanks">Thanks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/notfound">404 Page</NavLink>
                  </li>
                  <li>
                    <NavLink to="/questions">Asked questions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/reviews">Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to="/search">Search</NavLink>
                  </li>
                  <li>
                    <NavLink to="/privacy">Privacy</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/registration">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
