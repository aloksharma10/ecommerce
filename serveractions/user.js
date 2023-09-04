"use server";

import User from "@/libs/models/user";
import dbConn from "@/libs/mongo/dbconn";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

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

export async function userSignup(formData) {
  try {
    if (!conn) {
      await connect();
    }
    const userToken = await bcrypt.hashSync(formData.get("password"), 10);
    const newUser = await User.create({
      name: formData.get("name"),
      email: formData.get("email"),
      password: userToken,
      phone: formData.get("phone"),
      address:{
        street: "I-block",
      }
    });
    const { password, ...userWithoutPassword } = newUser;
    return { status: true, message: "User created successfully" };
  } catch (error) {
    console.log("failed to create user", error);
  }
}

export async function userLogin(formData) {
  try {
    if (!conn) {
      await connect();
    }
   
    return { status: true, message: "Login successful" };
  } catch (error) {
    return { status: false, message: error.message };
  }
}
