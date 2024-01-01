import React from "react";

const Thank = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="mb-6">
        <img
          src="https://htmldemo.net/hmart/hmart/assets/images/icons/cmpted_logo.png"
          alt=""
        />
      </div>
      <p className="text-xl py-5">
        Thank you for ordering in our store. You will receive a confirmation
        email shortly.
      </p>
      <button
        className="bg-blue-500 text-white p-3 text-lg rounded-md hover:bg-black"
        type="input"
      >
        Continue Shopping
      </button>
      <h1 className="text-4xl font-bold py-5">Call Us for Quick Order</h1>
      <p className="text-rose-500 text-lg">01 234 567 890</p>
    </div>
  );
};

export default Thank;
