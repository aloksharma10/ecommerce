"use client"
import React, { useEffect, useState } from "react";
import { TbFilterOff } from "react-icons/tb";

function Filter() {
    const [price, setPrice] = useState(100000)
  return (
    <div className="filters ml-16 hidden lg:block">
      <div className="m-4 ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="lg:hidden absolute m-2 z-10 cursor-pointer text-black-600 font-medium text-4xl text-center right-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path>
        </svg>
      </div>
      <div className="absolute top-0 bg-white w-full px-6 z-20 transition-transform transform lg:transition-none  translate-y-0 lg:static shadow-lg md:shadow-none">
        <div className="flex text-4xl font-semibold my-4 md:my-6 justify-between">
          Filters <TbFilterOff className="mt-1 cursor-pointer hover:scale-105 hover:shadow-lg"/>
        </div>
        <hr className="w-full border border-black dark:border-white mb-2" />
        <div>
          <h2 className="text-xl font-semibold">Theme</h2>
          <div className="flex my-2 capitalize flex-wrap flex-col">
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="anime"
                id="anime"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                anime
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="coding"
                id="coding"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                coding
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="combo"
                id="combo"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                combo
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="customized"
                id="customized"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                customized
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="gaming"
                id="gaming"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                gaming
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="gym"
                id="gym"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                gym
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="hacking"
                id="hacking"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                hacking
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="lifestyle"
                id="lifestyle"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                lifestyle
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="motivation"
                id="motivation"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                motivation
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="music"
                id="music"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                music
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="plain"
                id="plain"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                plain
              </label>
            </div>
            <div className="flex items-center mx-14 my-1">
              <input
                type="checkbox"
                name="socialmedia"
                id="socialmedia"
                className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm md:text-base font-medium"
              >
                socialmedia
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold ">Sort By Price</h2>
          <div className="flex my-2 mb-4 capitalize flex-wrap flex-col ml-11">
            <div className="flex justify-between my-2">
                <div  className="border py-1 px-1 text-sm font-medium bg-slate-100">₹0</div>
                <div className="border py-1 px-1 text-sm font-medium bg-slate-100">₹{price}</div>
            </div>
            <input id="default-range" type="range" step="10000" min="0" max="100000" onChange={(e)=>setPrice(e.target.value)} value={price}  className={`w-full h-2 bg-gray-200  rounded-lg appearance-none cursor-pointer  `}/>

          </div>
        </div>
        <button className="whitespace-nowrap text-white bg-black hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center mx-4 my-2">
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
