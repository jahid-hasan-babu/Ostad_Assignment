import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/database/data.json");
        const data = await response.json();
        setJsonData(data.product);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    })();
  }, []);
  return (
    <>
      <div className="w-[75%] flex flex-wrap mx-auto justify-between">
        <div className="p-7">
          <button className="btn btn-active hover:bg-blue-500 hover:text-white cursor-pointer font-bold text-2xl text-gray-500  bg-white">
            New Arrivals
          </button>
          <button className="btn hover:bg-blue-500 hover:text-white cursor-pointer mx-5 font-bold text-2xl text-gray-500  bg-white">
            Top Rated
          </button>
          <button className="btn hover:bg-blue-500 hover:text-white cursor-pointer font-bold text-2xl text-gray-500 bg-white">
            Featured
          </button>
        </div>
        <div className="mx-auto my-16">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4">
            {jsonData.length > 0 ? (
              jsonData.map((data, id) => (
                <div
                  key={id.toString()}
                  className="card-body items-center text-center p-10 w-[90%] mt-10 rounded-xl shadow-lg"
                >
                  <figure>
                    <img
                      className=" rounded-xl"
                      src={data["image"]}
                      alt="car!"
                    />
                  </figure>
                  <p className=" text-gray-400">{data.description}</p>
                  <h1 className=" font-bold">{data.headline}</h1>
                  <p className="text-lg font-semibold">{data.rate}</p>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
