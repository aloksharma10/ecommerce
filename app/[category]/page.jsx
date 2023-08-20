import Image from "next/image";
import React from "react";
import Filter from "./Filter";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

function Products() {
  return (
    <section className="py-10">
      <h1 className="mb-12 text-center font-sans text-2xl md:text-5xl font-bold">
        Our Collections
      </h1>
      <div className="flex">
        <Filter />
        <div className="mx-2 md:mx-10 grid justify-center px-4 gap-5 md:grid-cols-2 2xl:grid-cols-4">
          {/* product card */}
        
          <div className="my-4 flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:shadow-lg">
            <Link href="/product/qew">
              <div className="relative "> 
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                  Sale
                </span>
                <div className="object-contain flex justify-center bottom-0 h-96 md:h-80 z-10  w-full bg-white overflow-hidden">
                  <Image
                    className="h-96 md:h-80 max-w-none  object-cover "
                    src="https://m.media-amazon.com/images/I/41CK1CvkW6L._SX300_SY300_QL70_FMwebp_.jpg"
                    height={200}
                    width={300}
                    alt=""
                  />
                </div>
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <AiTwotoneStar className="text-yellow-400 text-xl" />
                  <span className="text-slate-400 ml-1 text-sm">4.9</span>
                </span>
              </div>
            </Link>

            <div className="px-6 py-3">
              <div className="mt-4 mb-3 md:text-base font-semibold text-sm">
                Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB
                RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor |
                5000 mAh Battery | 13MP Dual Camera
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl mx-1 md:text-2xl font-bold text-slate-900">
                    $249
                  </span>
                  <span className="text-sm text-slate-900 line-through ">
                    $299
                  </span>
                </div>
                <div className="flex items-center rounded-md bg-slate-900 px-3 py-2 xl:px-5 md:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                  <BsCart3 className="mx-2 text-xl font-black" />
                  Add to cart
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:shadow-lg">
            <Link href="/product/qew">
              <div className="relative ">
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                  Sale
                </span>
                <div className="object-contain flex justify-center bottom-0 h-96 md:h-80 z-10  w-full bg-white overflow-hidden">
                  <Image
                    className="h-96 md:h-80 max-w-none"
                    src="https://m.media-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"
                    height={200}
                    width={300}
                    alt=""
                  />
                </div>
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <AiTwotoneStar className="text-yellow-400 text-xl" />
                  <span className="text-slate-400 ml-1 text-sm">4.9</span>
                </span>
              </div>
            </Link>

            <div className="px-6 py-3">
              <div className="mt-4 mb-3 md:text-base font-semibold text-sm">
                Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB
                RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor |
                5000 mAh Battery | 13MP Dual Camera
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl mx-1 md:text-2xl font-bold text-slate-900">
                    $249
                  </span>
                  <span className="text-sm text-slate-900 line-through ">
                    $299
                  </span>
                </div>
                <div className="flex items-center rounded-md bg-slate-900 px-3 py-2 xl:px-5 md:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                  <BsCart3 className="mx-2 text-xl font-black" />
                  Add to cart
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:shadow-lg">
            <Link href="/product/qew">
              <div className="relative ">
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                  Sale
                </span>
                <div className="object-contain flex justify-center bottom-0 h-96 md:h-80 z-10  w-full bg-white overflow-hidden">
                  <Image
                    className="h-96 md:h-80 max-w-none"
                    src="https://m.media-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"
                    height={200}
                    width={300}
                    alt=""
                  />
                </div>
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <AiTwotoneStar className="text-yellow-400 text-xl" />
                  <span className="text-slate-400 ml-1 text-sm">4.9</span>
                </span>
              </div>
            </Link>

            <div className="px-6 py-3">
              <div className="mt-4 mb-3 md:text-base font-semibold text-sm">
                Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB
                RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor |
                5000 mAh Battery | 13MP Dual Camera
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl mx-1 md:text-2xl font-bold text-slate-900">
                    $249
                  </span>
                  <span className="text-sm text-slate-900 line-through ">
                    $299
                  </span>
                </div>
                <div className="flex items-center rounded-md bg-slate-900 px-3 py-2 xl:px-5 md:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                  <BsCart3 className="mx-2 text-xl font-black" />
                  Add to cart
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:shadow-lg">
            <Link href="/product/qew">
              <div className="relative ">
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                  Sale
                </span>
                <div className="object-contain flex justify-center bottom-0 h-96 md:h-80 z-10  w-full bg-white overflow-hidden">
                  <Image
                    className="h-96 md:h-80 max-w-none"
                    src="https://m.media-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"
                    height={200}
                    width={300}
                    alt=""
                  />
                </div>
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <AiTwotoneStar className="text-yellow-400 text-xl" />
                  <span className="text-slate-400 ml-1 text-sm">4.9</span>
                </span>
              </div>
            </Link>

            <div className="px-6 py-3">
              <div className="mt-4 mb-3 md:text-base font-semibold text-sm">
                Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB
                RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor |
                5000 mAh Battery | 13MP Dual Camera
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl mx-1 md:text-2xl font-bold text-slate-900">
                    $249
                  </span>
                  <span className="text-sm text-slate-900 line-through ">
                    $299
                  </span>
                </div>
                <div className="flex items-center rounded-md bg-slate-900 px-3 py-2 xl:px-5 md:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                  <BsCart3 className="mx-2 text-xl font-black" />
                  Add to cart
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:shadow-lg">
            <Link href="/product/qew">
              <div className="relative ">
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                  Sale
                </span>
                <div className="object-contain flex justify-center bottom-0 h-96 md:h-80 z-10  w-full bg-white overflow-hidden">
                  <Image
                    className="h-96 md:h-80 max-w-none"
                    src="https://m.media-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"
                    height={200}
                    width={300}
                    alt=""
                  />
                </div>
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <AiTwotoneStar className="text-yellow-400 text-xl" />
                  <span className="text-slate-400 ml-1 text-sm">4.9</span>
                </span>
              </div>
            </Link>

            <div className="px-6 py-3">
              <div className="mt-4 mb-3 md:text-base font-semibold text-sm">
                Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB
                RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor |
                5000 mAh Battery | 13MP Dual Camera
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl mx-1 md:text-2xl font-bold text-slate-900">
                    $249
                  </span>
                  <span className="text-sm text-slate-900 line-through ">
                    $299
                  </span>
                </div>
                <div className="flex items-center rounded-md bg-slate-900 px-3 py-2 xl:px-5 md:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                  <BsCart3 className="mx-2 text-xl font-black" />
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
