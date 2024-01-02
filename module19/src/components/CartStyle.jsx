import React from "react";
import { Link } from "react-router-dom";

const CartStyle = () => {
  return (
    <div>
      <div className="bg-gray-400 text-center py-24">
        <h1 className="text-5xl font-bold text-black">Cart Page</h1>
        <div className="uppercase flex flex-wrap mx-auto justify-center items-center py-9 text-xl">
          <Link to="/" className="text-white mr-5">
            Home
          </Link>
          <h3 className="text-blue-700">// Cart</h3>
        </div>
      </div>
    </div>
  );
};

export default CartStyle;
