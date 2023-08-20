import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { userSignup } from "@/serveractions/user";
import GoogleLoginProvider from "../components/Login/GoogleLoginProvider";

async function page() {
  const session = await getServerSession();
  console.log(session);
  if (session) {
    return redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:py-5">
      <GoogleLoginProvider />
      <div className="my-3 flex items-center justify-between">
        <span className="border-b md:w-48 w-32"></span>
        <span className="text-sm text-center text-gray-500 uppercase ">
          or login with email
        </span>
        <span className="border-b md:w-48 w-32"></span>
      </div>
      <div className="w-full bg-slate-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
            Welcome to ShopVio !
          </h1>
          <form action={userSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium  ">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium  ">
                Your email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="name@company.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium  ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                required=""
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium  ">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                required=""
              />
            </div>

            <button
              type="submit"
              className="w-full mt-3 text-white bg-black hover:bg-opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
