import Image from "next/image";
import React from "react";
import Filter from "./Filter";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import { getAllProducts, getCategoryFilters } from "@/serveractions/product";

async function Products({ params, searchParams }) {
  const { category } = params;
  const { status, products } = await getAllProducts(category.split("-")[0], searchParams);
  const { colors, sizes } = await getCategoryFilters(category.split("-")[0]);
  return (
    <section className="py-10">
      <h1 className="mb-12 text-center font-sans text-2xl md:text-5xl font-bold">
        {products && Object.keys(products).length > 0 ? "Our Collections" : " Oops! No product found"}
      </h1>
      <div className="flex">
        <Filter  colors={colors} sizes={sizes} />

        <div className="mx-2 md:mx-10 grid justify-center px-4 gap-5 md:grid-cols-2 2xl:grid-cols-4">
          {/* product card */}

          {products && Object.keys(products).map((item) => {
            return (
              <div
              key={products[item]._id}
              className="my-4 flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:shadow-lg"
            >
              <Link href={`/product/${products[item].slug}`}>
                <div className="relative ">
                  <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                    Sale
                  </span>
                  <div className="object-contain flex justify-center bottom-0 h-96 md:h-80 z-10  w-full bg-white overflow-hidden">
                    <Image
                      className="h-96 md:h-80 max-w-none object-contain "
                      src={products[item].images[0]}
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
                  {products[item].title}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl mx-1 md:text-2xl font-bold text-slate-900">
                      ₹{products[item].price}
                    </span>
                    <span className="text-sm text-slate-900 line-through ">
                      ₹{products[item].price + 100}
                    </span>
                  </div>
                  <div className="flex items-center rounded-md bg-slate-900 px-3 py-2 xl:px-5 md:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                    <BsCart3 className="mx-2 text-xl font-black" />
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
