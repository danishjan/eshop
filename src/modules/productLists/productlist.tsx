import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Card } from "../../component/card/card";
import { useGlobalContext } from "../../global/contextManager";
import { Link } from "react-router-dom";

export const Productlist = () => {
  const { state, addToCart } = useGlobalContext();
  
  const handleAddTocart = (item: any) => {
    addToCart(item)
  }

  return (
    <div className="flex flex-wrap">
      {state?.items?.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <Card>
              <Link to={`/products/${product?.id}`}>
                <img className="rounded-t-lg" src={product?.thumbnail} alt="" />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product?.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product?.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  $ {product?.price}
                </p>
                <div className="flex justify-between">
                  <Link
                    to={`/products/${product?.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <button onClick={()=> handleAddTocart(product)} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                    Add to cart
                  </button>
                </div>
              </div>
            </Card>
          </React.Fragment>
        );
      })}
    </div>
  );
};
