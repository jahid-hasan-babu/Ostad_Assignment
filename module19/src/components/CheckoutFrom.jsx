import React, { useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);
  };
  return (
    <div className="w-[80%] mx-auto flex flex-wrap justify-between py-20">
      <div className="w-[50%]">
        <form
          onSubmit={handleSubmit}
          className=" mt-8 bg-white p-8 rounded-md shadow-md"
        >
          <h1 className="text-4xl font-bold text-center py-10">
            Billing Details
          </h1>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input-field border border-gray-300 p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input-field border border-gray-300 p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              className="input-field border border-gray-300 p-2 rounded-md w-full"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="input-field border border-gray-300 p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field border border-gray-300 p-2 rounded-md w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="py-24">
        <h1 className="text-4xl font-bold text-center py-10">Your Order</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Item</th>
                <th className="p-3 text-right">Quantity</th>
                <th className="p-3 text-right">Unit Price</th>
                <th className="p-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-3">Product A</td>
                <td className="p-3 text-right">2</td>
                <td className="p-3 text-right">$10.00</td>
                <td className="p-3 text-right">$20.00</td>
              </tr>
              <tr>
                <td className="p-3">Product B</td>
                <td className="p-3 text-right">1</td>
                <td className="p-3 text-right">$15.00</td>
                <td className="p-3 text-right">$15.00</td>
              </tr>
            </tbody>
          </table>
          <button
            type="input"
            className="btn mt-10 text-xl w-[100%] bg-blue-500 text-white hover:text-black"
          >
            Please Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
