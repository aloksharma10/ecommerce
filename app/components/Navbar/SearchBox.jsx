"use client";
import { searchProduct } from "@/serveractions/product";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { LuImageOff } from "react-icons/lu";

function SearchBox() {
  const [suggestions, setSuggestions] = useState([]);
  const [boxState, setBoxState] = useState("hidden");
  const handleSearchProduct = async (e) => {
    if (e.target.value.length > 0) {
      setBoxState("block");
      const res = await searchProduct(e.target.value);
      setSuggestions(JSON.parse(res));
      if (JSON.parse(res).length === 0) {
        setSuggestions([{ title: "No Product Found" }]);
      }
    }
    if (e.target.value.length === 0) {
      setBoxState("hidden");
    }
  };
  return (
    <>
      <form className="input-group flex items-stretch m-2">
        <input
          name="query"
          onChange={handleSearchProduct}
          type="search"
          className="form-control relative flex-auto min-w-0 block mx-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
          placeholder="Search from our 1000+ Products"
          autoComplete="off"
        />

        <button
          type="submit"
          className="btn px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          id="button-addon2"
        >
          <BiSearchAlt className="text-xl" />
        </button>
      </form>
      <ul
        className={`${boxState} no-scrollbar mt-1 mx-4 w-[71%] md:w-[85%] xl:w-[29%] absolute bg-white border border-gray-300 rounded-lg max-h-80 overflow-y-auto z-10`}
      >
        {suggestions.length > 0 ? (
          suggestions.map((product, index) => (
            <Link key={index} href={`/product/${product.slug}`}>
              <li className="flex py-2 px-4 space-x-3 cursor-pointer hover:bg-gray-100">
                <div>
                  {product.images ? (
                    <Image
                      height={50}
                      width={50}
                      alt={product.title}
                      className="object-contain"
                      src={product.images[0]}
                    />
                  ) : (
                    <LuImageOff className="text-2xl mt-2" />
                  )}
                </div>
                <div className="w-full">
                  <div className="text-md mt-2 capitalize font-medium text-black  ">
                    {product.title}
                  </div>
                </div>
              </li>
            </Link>
          ))
        ) : (
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 ">
            <Image
              height={50}
              width={50}
              alt="loading..."
              className="mx-auto"
              src={"/images/spinner.gif"}
            />
          </li>
        )}
      </ul>
    </>
  );
}

export default SearchBox;
