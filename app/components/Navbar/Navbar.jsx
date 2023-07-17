"use client";
import React, { useEffect, useState } from "react";
// import { useTheme } from 'next-themes';
import { BsMoonStarsFill, BsFillSunFill, BsCart2 } from "react-icons/bs";
import Link from "next/link";
import { AiFillCaretUp, AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import { MdAccountCircle, MdArrowDropUp } from "react-icons/md";
import { FiChevronDown, FiSearch } from "react-icons/fi";

function Navbar() {
  const login = false;
  const [nav, setNav] = useState("hidden");
  const [mounted, setMounted] = useState(false);
  const [fashion, setFashion] = useState(false);
  const [searchBox, setSearchBox] = useState(false);

  const toggleNav = () => {
    if (nav == "hidden") {
      setNav("block");
    } else {
      setNav("hidden");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // const { systemTheme, theme, setTheme } = useTheme()
  // const toggleMode = () => {
  //     console.log("dark se hu")
  //   if (!mounted) return null;
  //   const currentTheme = theme == 'system' ? systemTheme : theme
  //   if (currentTheme == "dark") {
  //     return (
  //       <BsFillSunFill className='text-red-500 text-2xl cursor-pointer' onClick={() => setTheme("light")} />
  //     )
  //   }
  //   else {
  //     return (
  //       <BsMoonStarsFill className='text-red-500 text-2xl cursor-pointer' onClick={() => setTheme("dark")} />
  //     )
  //   }
  // }
  return (
    <nav className="w-full z-20 py-2 shadow-lg sticky top-0 backdrop-blur-md bg-white/30 ">
      <div className="w-full px-3 flex flex-wrap items-center lg:justify-center mt-0 py-2 xl:py-0">
        <div className="px-0 pt-2 lg:pl-4 flex items-center lg:mx-4 cursor-pointer bg-clip-text text-2xl md:pt-0 font-bold mx-3  ">
          <Link href="/">ShopVio</Link>
        </div>
        <div className="xl:flex justify-center hidden">
          <div className="xl:w-[34vw]">
            <form
              className="input-group flex items-stretch m-2"
              action="/search"
            >
              <input
                name="query"
                type="search"
                className="form-control relative flex-auto min-w-0 block mx-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                placeholder="Search from our 1000+ Products"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              <button
                type="submit"
                className="btn px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                id="button-addon2"
              >
                <BiSearchAlt className="text-xl" />
              </button>
            </form>
            {/* suggestion box */}
            <ul className="hidden mt-1 mx-4 w-[29%] absolute  bg-white border border-gray-300 rounded-lg">
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">dress</li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">cloth</li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">kapde</li>
            </ul>
          </div>
        </div>
        {/* mobile cart icon */}
        <div className="flex lg:hidden justify-end absolute right-4 md:right-13 items-center">
          <div className="mx-3">
            <FiSearch
              className="text-xl cursor-pointer"
              onClick={() => {
                setSearchBox(!searchBox);
              }}
            />
          </div>
          <div className="mx-2 relative cursor-pointer">
            <BsCart2 className="text-2xl" />
            <span className="absolute -top-2 -right-2 h-5 w-5 text-sm rounded-full bg-slate-600 text-white flex justify-center items-center items cursor-pointer">
              <span>1</span>
            </span>
          </div>

          <button
            onClick={() => toggleNav()}
            className=" font-medium rounded-lg text-2xl  px-3 py-2 text-center inline-flex items-center mx-1 "
          >
            {nav == "hidden" ? <AiOutlineMenu /> : <RxCrossCircled />}
          </button>
        </div>
        {/* desktop nav */}
        <div className="w-full flex-grow-5 lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto h-0 lg:h-auto mt-2 lg:mt-0 z-20 overflow-hidden lg:overflow-visible ">
          <ul className="flex items-center lg:flex-row ">
            <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              <div onMouseLeave={() => setFashion(false)} className="relative">
                <button
                  onMouseOver={() => setFashion(true)}
                  className="flex items-center  rounded-md"
                >
                  <span className="flex">
                    Fashion <FiChevronDown className="mt-1 text-xl" />
                  </span>
                </button>
                <ul
                  className={`absolute mt-1 left-0 w-40 py-2  rounded-lg shadow-xl  bg-white ${
                    fashion ? "block" : "hidden"
                  }`}
                >
                  <Link href={"/mens-fashion"}>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                      Mens Fashion
                    </li>
                  </Link>
                  <Link href={"/women-fashion"}>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                      Women Fashion
                    </li>
                  </Link>
                  <Link href={"/kids-fashion"}>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                      Kids Fashion
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              <Link href="/gadgets">Gadgets</Link>
            </li>
            <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              <Link href="/electronics">Electronics</Link>
            </li>
            <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              <Link href="/grocery">Grocery</Link>
            </li>
            <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              <Link href="/beauty">Beauty</Link>
            </li>
            <li className="mx-1 relative cursor-pointer">
              <BsCart2 className="text-3xl" />
              <span className="absolute -top-2 -right-2 h-5 w-5 text-sm rounded-full bg-slate-600 text-white flex justify-center items-center hover:shadow-lg">
                <span>1</span>
              </span>
            </li>
          </ul>
          <div className="text-center my-2 pr-4 pl-2">
            {!login ? (
              <div>
                <Link href={"/login"}>
                  <button className="text-white bg-black hover:bg-slate-700 hover:shadow-lg duration-300 focus:ring-2 focus:ring-black font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <Link href={"/"}>
                  <button className=" text-sm md:text-3xl hover:shadow-lg duration-300 focus:ring-2 focus:ring-black font-medium rounded-lg px-3 py-2 text-center  items-center mx-1">
                    <MdAccountCircle />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`backdrop-blur-md bg-slate-200/70 text-center py-3 shadow-lg absolute w-full ${nav} lg:hidden`}
      >
        <ul>
          <div className="text-center my-2 pl-2">
            {!login ? (
              <Link href={"/login"}>
                <button className="text-white bg-black hover:bg-slate-700 hover:shadow-lg duration-300 focus:ring-2 focus:ring-black font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">
                  Login
                </button>
              </Link>
            ) : (
              <Link href={"/"}>
                <button className=" text-sm md:text-3xl hover:shadow-lg duration-300 focus:ring-2 focus:ring-black font-medium rounded-lg px-3 py-2 text-center  items-center mx-1">
                  <MdAccountCircle />
                </button>
              </Link>
            )}
          </div>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/wears">Wears</Link>
          </li>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/gadgets">Gadgets</Link>
          </li>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/electronics">Electronics</Link>
          </li>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/grocery">Grocery</Link>
          </li>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/beauty">Beauty</Link>
          </li>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/support">Support</Link>
          </li>
        </ul>
      </div>
      {searchBox && (
        <div className="flex justify-center xl:hidden">
          <div className="w-5/6  relative">
            <form
              className="input-group flex items-stretch m-2"
              action="/search"
            >
              <input
                name="query"
                type="search"
                className="form-control relative flex-auto min-w-0 block mx-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                placeholder="Search from our 1000+ Products"
                aria-label="Search"
                aria-describedby="button-addon2"
                autoFocus
              />
              <button
                type="submit"
                className="btn px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                id="button-addon2"
              >
                <BiSearchAlt className="text-xl" />
              </button>
            </form>
            <ul className="mt-1 mx-4 w-[71%] md:w-[85%] absolute  bg-white border border-gray-300 rounded-lg">
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">dress</li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">cloth</li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">kapde</li>
            </ul>
          </div>
        </div>
      )}
      {/* {suggestions.length > 0 && (
          <ul className="mt-2 bg-white border border-gray-300 rounded-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )} */}
    </nav>
  );
}

export default Navbar;
