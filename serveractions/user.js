"use server";

import User from "@/libs/models/user";
import dbConn from "@/libs/mongo/dbconn";
import bcrypt from "bcrypt";

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
    });
    return { status: true, message: "User created successfully" };
  } catch (error) {
    console.log("failed to create user", error);
  }
}
