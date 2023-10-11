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
    return { status: false, message: "failed to create product" };
  }
}

export async function getProduct(slug) {
  try {
    if (!conn) {
      await connect();
    }
    const prod = await product.find({ slug });
    return {
      status: 200,
      product: prod[0],
    };
  } catch (error) {
    return { status: false, message: "failed to create product" };
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
    //   title: "Think Outside The Box Typography Tshirt (S/Green)",
    //   slug: e,
    //   price: 0,
    //   description:
    //     "Achieve greatness and inspire others with the Work Hard, Dream Big Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic Work Hard, Dream Big slogan, making it a perfect statement piece to express your positive attitude and determination.",
    //   content: "testa",
    //   size: "small",
    //   color: "Parrot Green",
    //   images: [
    //     "https://m.media-amazon.com/images/I/71hW0vqaIfL._SY741._SX._UX._SY._UY_.jpg",
    //     "https://m.media-amazon.com/images/I/71GtpNG3CtL._SY741._SX._UX._SY._UY_.jpg",
    //   ],
    //   category: "mens",
    //   verified: true,
    //   inStock: 100,
    //   sold: 10,
    // });

    // return ({status: false, message: pro})
  } catch (error) {
    return { status: false, message: "failed to serchProduct", error };
  }
}

export async function getAllProducts(category, searchParams) {
  try {
    if (!conn) {
      await connect();
    }
    const { color = [], size = [], price } = searchParams;

    const filter = {
      category: category,
    };

    if (color.length > 0) {
      filter.color = { $in: color.split(',') };
    }

    if (size.length > 0) {
      filter.size = { $in: size.split(',') };
    }
    if (price) {
      filter.price = { $lt: parseInt(price) };
    }
    const allProducts = await product.find(filter);

    let products = {};
    for (let item of allProducts) {
      if (item.title in products) {
        if (!products[item.title].color.includes(item.color)) {
          products[item.title].color.push(item.color);
        }
        if (!products[item.title].size.includes(item.size)) {
          products[item.title].size.push(item.size);
        }
      } else {
        products[item.title] = JSON.parse(JSON.stringify(item));
        products[item.title].color = [item.color];
        products[item.title].size = [item.size];
      }
    }
    console.log(products);
    return {
      status: 200,
      products,
    };
  } catch (error) {
    return { status: false, message: "fail to get products from db", error };
  }
}
export async function getCategoryFilters(category) {
  try {
    if (!conn) {
      await connect();
    }
    const allProducts = await product.find({ category });
    let products = {};
    for (let item of allProducts) {
      if (item.title in products) {
        if (!products[item.title].color.includes(item.color)) {
          products[item.title].color.push(item.color);
        }
        if (!products[item.title].size.includes(item.size)) {
          products[item.title].size.push(item.size);
        }
      } else {
        products[item.title] = JSON.parse(JSON.stringify(item));
        products[item.title].color = [item.color];
        products[item.title].size = [item.size];
      }
    }
    const colors = [];
    const sizes = [];
    for (let item in products) {
      colors.push(...products[item].color);
      sizes.push(...products[item].size);
    }
    console.log(colors, sizes);
    return {
      status: 200,
      colors,
      sizes,
    };
  } catch (error) {
    return { status: false, message: "fail to get products from db", error };
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
    return { status: false, message: "faild to delete product" };
  }
}
