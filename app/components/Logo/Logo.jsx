import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="px-0 pt-2 lg:pl-4 flex items-center lg:mx-4 cursor-pointer bg-clip-text text-2xl md:pt-0 font-bold mx-3  ">
      <Link href="/">Weird Fashion</Link>
    </div>
  );
}

export default Logo;
