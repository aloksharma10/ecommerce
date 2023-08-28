"use server";

import user from "@/libs/models/user";
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

export async function addProductToCart(id, productId) {
  try {
    if (!conn) {
      await connect();
    }
    const user = await user.findOne(id);
    user.cartItem.push(productId);
    return JSON.stringify(user.cartItem);
  } catch (error) {
    return {status: false, message: "failed to add product to cart"};
  }
}

export async function removeProductFromCart(id, productId) {
  try {
    if (!conn) {
      await connect();
    }
    const user = await user.deleteOne(id);
    user.cartItem.pop(productId);
    return JSON.stringify(user.cartItem);
  } catch (error) {
    return {status: false, message: "failed to add product to cart"};
  }
}

export async function getUserCart(id) {
  try {
    if (!conn) {
      await connect();
    }
    const user = await user.findOne(id).populate("cartItem");
    return JSON.stringify(user.cartItem);
  } catch (error) {
    return {status: false, message: "failed to get cartItem"};
  }
}
