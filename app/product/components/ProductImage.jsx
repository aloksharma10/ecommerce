"use client";
import Image from "next/image";
import React, { useState } from "react";

function ProductImage({images}) {
  const [displayState, setDisplayState] = useState("hidden");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setDisplayState("block");
    updateMousePosition(e);
  };

  const handleMouseLeave = () => {
    setDisplayState("hidden");
  };

  const updateMousePosition = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="flex lg:order-2 lg:ml-5 pt-2 mainImage mx-2 md:mx-0 cursor-crosshair">
      <div className=" rounded-lg mx-auto relative h-[25rem] w-[30rem]  lg:h-[45rem] lg:w-[42rem]">
        <Image
          className="object-contain lg:object-cover object-top rounded-lg"
          src="https://m.media-amazon.com/images/I/71dEY4Neo3L._SX679_.jpg"
          alt="productImg1"
          fill
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateMousePosition}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className={`absolute rounded-lg xl:h-[45rem] xl:w-[42rem] -right-2 top-0 z-10 ${displayState}`}
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            transform: "translateX(100%)",
            backgroundImage: `url('https://m.media-amazon.com/images/I/71dEY4Neo3L._SX679_.jpg')`,
            backgroundSize: "400%",
          }}
        />
      </div>
    </div>
  );
}

export default ProductImage;
