"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
    {/* desktop carousel */}
      <div className="flex justify-center mx-2">
        <div className="w-full hidden md:block">
          <div className="overflow-hidden  relative">
            <div
              className="flex transition-transform ease-out duration-500 "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  priority
                  loading="eager"
                  height={780}
                  width={1920}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                className="p-0 md:rounded-full md:shadow md:bg-white text-white md:text-gray-800"
                onClick={goToPreviousSlide}
              >
                <MdKeyboardArrowLeft className="font-extrabold text-3xl" />
              </button>
              <button
                className="p-0 md:rounded-full md:shadow md:bg-white text-white md:text-gray-800"
                onClick={goToNextSlide}
              >
                <MdKeyboardArrowRight className="font-extrabold text-3xl" />
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div
                className="flex items-center justify-center mb-4 aos-init aos-animate"
                data-aos="zoom-in-up"
              >
                <a href="/tshirts">
                  <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 md:py-2 md:px-8 rounded-xl text-base md:text-lg xl:text-2xl shadow-lg">
                    Shop Now
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all w-2 h-2 md:w-3 md:h-3 rounded-full ${
                      index === currentIndex
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile carousel */}
      <div className="flex justify-center mx-2 md:hidden">
        <div className="w-full md:w-4/5 aspect-w-1920 aspect-h-780">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={
                    "https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fsquarebanner%2F1.webp&w=1080&q=75"
                  }
                  alt={`Slide ${index + 1}`}
                  priority
                  height={780}
                  width={1920}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                className="p-0 md:rounded-full md:shadow md:bg-white text-white md:text-gray-800"
                onClick={goToPreviousSlide}
              >
                <MdKeyboardArrowLeft />
              </button>
              <button
                className="p-0 md:rounded-full md:shadow md:bg-white text-white md:text-gray-800"
                onClick={goToNextSlide}
              >
                <MdKeyboardArrowRight className="font-extrabold text-2xl" />
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div
                className="flex items-center justify-center mb-4 aos-init aos-animate"
                data-aos="zoom-in-up"
              >
                <a href="/tshirts">
                  <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 md:py-2 md:px-8 rounded-xl text-base md:text-lg xl:text-2xl shadow-lg">
                    Shop Now
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all w-2 h-2 md:w-3 md:h-3 rounded-full ${
                      index === currentIndex
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
