"use client";
import Image from "next/image";
import React, { useState } from "react";

function ProductImage({ images }) {
  const [displayState, setDisplayState] = useState("hidden");
  const [ currentImageUrl, setCurrentImageUrl] = useState("")
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
    <>
      <div className="flex lg:order-2 lg:ml-5 pt-2 mainImage mx-2 md:mx-0 cursor-crosshair">
        <div className=" rounded-lg mx-auto relative h-[25rem] w-[30rem]  lg:h-[45rem] lg:w-[42rem]">
          <Image
            className="object-contain lg:object-cover object-top rounded-lg"
            src={currentImageUrl?currentImageUrl: images[0]}
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
              backgroundImage: `url('${currentImageUrl?currentImageUrl: images[0]}')`,
              backgroundSize: "400%",
            }}
          />
        </div>
      </div>
      <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
        <div className="flex flex-row items-start lg:flex-col">
          <div className="flex flex-col mx-auto border-black">
            <div className="h-auto flex lg:flex-col items-end md:ml-0">
              {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mt-2 mr-4 w-[7vh] flex border-2 border-black/30 hover:border-black  object-cover object-top h-[80px] md:w-[70px] md:h-[112px] rounded-lg cursor-pointer relative justify-center"
                  >
                    <Image
                      className="object-contain rounded-lg"
                      src={item}
                      onClick={()=>{
                        setCurrentImageUrl(item)
                      }}
                      alt="productImg1"
                      loading="eager"
                      fill
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImage;
