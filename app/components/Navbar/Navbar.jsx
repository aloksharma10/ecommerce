"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsCart2, BsBoxSeam } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { PiUser } from "react-icons/pi";
import { FiChevronDown, FiLogOut, FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { MdOutlineNotifications } from "react-icons/md";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import SearchBox from "./SearchBox";
import Logo from "../Logo/Logo";

function Navbar() {
  const { data } = useSession();
  const [nav, setNav] = useState("hidden");
  const [tshirts, setTshirts] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    if (nav == "hidden") {
      setNav("block");
    } else {
      setNav("hidden");
    }
  };

  useEffect(() => {
    setNav("hidden");
  }, [pathname]);

  return (
    <nav className="w-full z-20 py-2 shadow-lg sticky top-0 backdrop-blur-md bg-white/40  ">
      <div className="w-full flex flex-wrap items-center lg:justify-center mt-0 px-6 py-2 xl:py-0 ">
        <Logo />
        <div className="xl:flex justify-center hidden">
          <div className="xl:w-[34vw]">
            <SearchBox />
          </div>
        </div>
        {/* mobile nav icon */}
        <div className="flex lg:hidden justify-end absolute right-4 md:right-13 items-center">
          <div className="mx-2">
            <FiSearch
              className="text-2xl cursor-pointer"
              onClick={() => {
                setSearchBox(!searchBox);
              }}
            />
          </div>
          <div className="mx-2">
            <ThemeSwitcher />
          </div>
          <Link href={"/cart"} className="mx-2 relative">
            <BsCart2 className="text-2xl" />
            <span className="absolute -top-2 -right-2 h-5 w-5 text-sm rounded-full bg-slate-600 text-white flex justify-center items-center items cursor-pointer">
              <span>1</span>
            </span>
          </Link>

          <button
            onClick={() => toggleNav()}
            className=" font-medium rounded-lg text-2xl  px-3 py-2 text-center inline-flex items-center mx-1 "
          >
            {nav == "hidden" ? <AiOutlineMenu /> : <RxCrossCircled />}
          </button>
        </div>
        {/* desktop nav */}
        <div className="w-full flex-grow-5 lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto h-0 lg:h-auto mt-2 lg:mt-0 z-20 overflow-hidden lg:overflow-visible ">
          <ul className="flex justify-center space-x-2 xl:space-x-3 items-center whitespace-nowrap ">
            <li className="text-lg font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              <div onMouseLeave={() => setTshirts(false)} className="relative">
                <button
                  onMouseOver={() => setTshirts(true)}
                  className="flex items-center  rounded-md"
                >
                  <span className="flex">
                    Tshirts
                    <FiChevronDown
                      className={`mt-1 mx-1 text-xl transition ease-in-out ${
                        tshirts ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <ul
                  className={`absolute mt-0 left-0 w-40 py-2  rounded-lg shadow-xl bg-white ${
                    tshirts ? "block" : "hidden"
                  }`}
                >
                  <Link href={"/tshirts"}>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                      Tshirts
                    </li>
                  </Link>
                  <Link href={"/polo-tshirts"}>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                      Polo Tshirt
                    </li>
                  </Link>
                  <Link href={"/oversizedtshirts"}>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                      Oversized Tshirt
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <Link href="/hoodies">
              <li className="text-lg font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
                Hoodies
              </li>
            </Link>
            <Link href="/sweatshirts">
              <li className="text-lg  font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
                Sweatshirts
              </li>
            </Link>

            <li className="mx-1 relative cursor-pointer">
              <BsCart2 className="text-2xl" />
              <span className="absolute -top-2 -right-2 h-5 w-5 text-sm rounded-full bg-slate-600 text-white flex justify-center items-center hover:shadow-lg">
                <span>1</span>
              </span>
            </li>
            <li className="text-lg ml-4 mx-2 ">
              <ThemeSwitcher />
            </li>
          </ul>
          <div className="text-center my-2 pr-4 pl-2">
            {!data?.user ? (
              <div>
                <Link href={"/login"}>
                  <button className="text-white bg-black hover:bg-slate-700 hover:shadow-lg duration-300 focus:ring-2 focus:ring-black font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <ul>
                <li className="text-lg font-semibold hover:text-black rounded-md transition hover:scale-105 duration-150 ease-out hover:ease-in">
                  <div
                    onMouseLeave={() => setUserDropdown(false)}
                    className="relative"
                  >
                    <button
                      onMouseOver={() => setUserDropdown(true)}
                      className="flex items-center  rounded-md"
                    >
                      <div className="flex space-x-2 items-center">
                        <PiUser className="text-2xl" />
                        <span className="text-xl ">
                          {data?.user?.name.split(" ")[0]}
                        </span>
                        <FiChevronDown
                          className={` ${
                            userDropdown ? "rotate-180" : ""
                          } transition duration-150 ease-out hover:ease-in`}
                        />
                      </div>
                    </button>
                    <ul
                      className={`absolute mt-0 right-0 w-40 py-2 rounded-lg shadow-xl  bg-white ${
                        userDropdown ? "block" : "hidden"
                      }`}
                    >
                      <Link href={"/my-profile"}>
                        <li className="flex w-full cursor-pointer  items-center px-3 py-2 text-sm hover:bg-gray-100">
                          <PiUser className="text-lg mx-1" />{" "}
                          <span className="mx-2 "> My profile</span>
                        </li>
                      </Link>
                      <Link href={"/my-orders"}>
                        <li className="flex w-full cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100">
                          <BsBoxSeam className="text-lg mx-1" />{" "}
                          <span className="mx-2 "> Orders</span>
                        </li>
                      </Link>
                      <li className="flex w-full cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100">
                        <MdOutlineNotifications className="text-lg mx-1" />{" "}
                        <span className="mx-2 "> Notification</span>
                      </li>
                      <li
                        onClick={() => signOut()}
                        className="flex w-full cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100"
                      >
                        <FiLogOut className="text-lg mx-1" />{" "}
                        <span className="mx-2 "> Logout</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`backdrop-blur-md bg-slate-200/70 text-center py-3 shadow-lg absolute w-full ${nav} lg:hidden`}
      >
        <ul>
          <li className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
            <Link href="/">Home</Link>
          </li>
          <li
            className="text-lg mx-2 my-2 font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in"
            onClick={() => setTshirts(!tshirts)}
          >
            <span className="flex justify-center">
              Tshirts <FiChevronDown className="mt-1 text-xl" />
            </span>
            <ul
              className={`mt-0 py-2 rounded-lg shadow-xl  ${
                tshirts ? "block" : "hidden"
              }`}
            >
              <Link href={"/tshirts"}>
                <li className="flex w-full justify-center px-3 py-2 text-sm">
                  Tshirts
                </li>
              </Link>
              <Link href={"/polo-tshirts"}>
                <li className="flex w-full justify-center px-3 py-2 text-sm">
                  Polo Tshirts
                </li>
              </Link>
              <Link href={"/oversizetshirts"}>
                <li className="flex w-full justify-center px-3 py-2 text-sm">
                  Oversize Tshirts
                </li>
              </Link>
            </ul>
          </li>
          <Link href="/hoodies">
            <li className="text-lg font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              Hoodies
            </li>
          </Link>
          <Link href="/sweatshirts">
            <li className="text-lg  font-semibold hover:text-black transition hover:scale-105 duration-150 ease-out hover:ease-in">
              Sweatshirts
            </li>
          </Link>
        </ul>
      </div>
      {searchBox && (
        <div className="flex justify-center xl:hidden">
          <div className="w-5/6 relative">
            <SearchBox />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
