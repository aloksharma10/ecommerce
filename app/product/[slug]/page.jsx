import Image from "next/image";
import ProductImage from "../components/ProductImage";
import { getProduct } from "@/serveractions/product";
import Link from "next/link";

async function page({ params }) {
  const { slug } = params;
  const product = await getProduct(slug);
  const {
    title,
    price,
    description,
    highlights,
    size,
    color,
    images,
    category,
    verified,
    inStock,
  } = product.product;

  console.log(product);
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="xl:flex">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <ProductImage images={images} />
            </div>
          </div>

          <div className="lg:w-3/5 mx-5 mt-1 pt-5 md:pt-0">
            <nav className="hidden md:flex mb-4">
              <ol role="list" className="flex items-center">
                <li className="text-left">
                  <div className="-m-1">
                    <Link
                      href="/"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      Home
                    </Link>
                  </div>
                </li>

                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <Link
                        href="/product"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      >
                        Products
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <a
                        href="#"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                        aria-current="page"
                      >
                        {title}
                      </a>
                    </div>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className=" text-lg md:text-3xl font-bold">{title}</h1>
            <div className="mb-4 mt-3 hidden md:block">
              <h2 className=" font-bold mb-1">Product Description:</h2>
              <div className="product-description">
                <div className="product-description">
                  <p>{description}</p>
                  <h2 className=" font-bold mb-1">Product Highlights:</h2>
                  <ul className="list-disc pl-10">
                    {
                      highlights?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    }
                  </ul>
                  <span>
                    <b>Tags:</b> Motivational Quotes, Positive Vibes, Black Tee,
                    Inspirational Clothing
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            <h2 className="mt-8 text-base text-gray-900">Size</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="s"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black uppercase peer-checked:text-white rounded-lg border text-sm border-black px-3 p-2 font-bold">
                  s
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="m"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black uppercase peer-checked:text-white rounded-lg border text-sm border-black px-3 p-2 font-bold">
                  m
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="l"
                  defaultChecked
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black uppercase peer-checked:text-white rounded-lg border text-sm border-black px-3 p-2 font-bold">
                  l
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="xl"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black uppercase peer-checked:text-white rounded-lg border text-sm border-black px-3 p-2 font-bold">
                  xl
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="xxl"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black uppercase peer-checked:text-white rounded-lg border text-sm border-black px-3 p-2 font-bold">
                  xxl
                </p>
              </label>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between space-y-3 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">₹{price}</h1>
                <span className="text-sm text-slate-900 line-through ">
                  ₹{price + 100}
                </span>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Buy now
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </button>
            </div>

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    className=""
                  ></path>
                </svg>
                Free shipping worldwide
              </li>

              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    className=""
                  ></path>
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="border-b border-gray-300">
            <nav className="flex gap-4">
              <a
                href="#"
                title=""
                className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
              >
                Description
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
              >
                Reviews
                <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                  1,209
                </span>
              </a>
            </nav>
          </div>

          <div className="mt-8 flow-root sm:mt-12">
            <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusantium nesciunt fuga.
            </p>
            <h1 className="mt-8 text-3xl font-bold">
              From the Fine Farms of Brazil
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              numquam enim facere.
            </p>
            <p className="mt-4">
              Amet consectetur adipisicing elit. Optio numquam enim facere.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              rerum nostrum eius facere, ad neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
