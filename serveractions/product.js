"use server";

import product from "@/libs/models/product";
import dbConn from "@/libs/mongo/dbconn";

let conn = false;

async function connect() {
  try {
    await dbConn();
    conn = true;
    console.log("MongoDB connected", conn);
  } catch (error) {
    throw new Error("MongoDB not connected", error);
  }
}

export async function createProduct({ data }) {
  try {
    if (!conn) {
      await connect();
    }
    const newProduct = await product.create(data);
    return JSON.stringify(newProduct);
  } catch (error) {
    console.log("failed to create product");
  }
}

export async function searchProduct(e) {
  try {
    if (!conn) {
      await connect();
    }
    const searchedProduct = await product.find({
      title: { $regex: e, $options: "i" },
    });
    return JSON.stringify(searchedProduct);

    // const prod = await product.create({
    //   title: "test",
    //   slug: e,
    //   price: 0,
    //   description: "test",
    //   content: "testa",
    //   size: ["small", "medium", "large"],
    //   color: ["red", "blue", "green"],
    //   images: [
    //     {
    //       image:
    //         "https://m.media-amazon.com/images/I/71hW0vqaIfL._SY741._SX._UX._SY._UY_.jpg",
    //       size: "small",
    //     },
    //     {
    //       image:
    //         "https://m.media-amazon.com/images/I/71GtpNG3CtL._SY741._SX._UX._SY._UY_.jpg",
    //       size: "medium",
    //     },
    //   ],
    //   category: "mens",
    //   verified: true,
    //   inStock: 100,
    //   sold: 10,
    // });
  } catch (error) {
    console.log("failed to serchProduct", error);
  }
}

export async function getAllProducts({ category }) {
  try {
    if (!conn) {
      await connect();
    }
    const allProducts = await product.find({
      category,
    });
    return JSON.stringify(allProducts);
  } catch (error) {
    console.log("fail to get products from db", error);
  }
}

export async function deleteProduct(id) {
  try {
    if (!conn) {
      await connect();
    }
    const delProdut = await product.deleteOne(id);
    return JSON.stringify(delProdut);
  } catch (error) {
    console.log("faild to delete product");
  }
}