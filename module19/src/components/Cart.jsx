import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/database/data.json");
        const data = await response.json();
        setCartItems(data.cart);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    })();
  }, []);
  const [localQuantity, setLocalQuantity] = useState(1);

  const handleIncrement = () => {
    const newQuantity = localQuantity + 1;
  };

  const handleDecrement = () => {
    if (localQuantity > 1) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
    }
  };

  return (
    <div>
      <div className="w-[80%] flex mx-auto flex-wrap justify-between">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2">Image</th>
              <th className="py-2">Product Name</th>
              <th className="py-2">Unit Price</th>
              <th className="py-2">Quantity</th>

              <th className="py-2">Subtotal</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {cartItems.length > 0 ? (
              cartItems.map((data, id) => (
                <tr
                  key={id.toString()}
                  className="items-center justify-center text-center "
                >
                  <td>
                    <img src={data["img"]} alt="car!" />
                  </td>
                  <td className="py-2 text-lg">{data.name}</td>
                  <td className="py-2 text-lg">{data.price}</td>

                  <td>
                    <div className="flex items-center">
                      <button
                        onClick={handleDecrement}
                        className="bg-blue-500 text-white px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={localQuantity}
                        min="1"
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value);
                          setLocalQuantity(newQuantity);
                        }}
                        className="w-16 text-center border-t border-b"
                      />
                      <button
                        onClick={handleIncrement}
                        className="bg-blue-500 text-white px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 text-lg">{data.subtotal}</td>
                  <td
                    className="py-2 text-lg 
                  "
                  >
                    <div className="flex gap-3">
                      <FaPencil />
                      <MdDeleteForever />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </tbody>
        </table>
        <div className="py-10">
          <button
            type="input"
            className="btn text-lg hover:bg-blue-500 hover:text-white"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
