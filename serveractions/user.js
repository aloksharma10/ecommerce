"use server";

import User from "@/libs/models/user";
import dbConn from "@/libs/mongo/dbconn";
import jwt from "jsonwebtoken";
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
    console.log(userToken)
    const newUser = await User.create({
      name: formData.get("name"),
      email: formData.get("email"),
      password: userToken,
      phone: formData.get("phone"),
    });
    const { password, ...userWithoutPassword } = newUser;
    return "User created";
  } catch (error) {
    console.log("failed to create user", error);
  }
}

export async function userLogin(formData) {
  const user = await User.findOne({
    email: formData.get("email"),
  });
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(formData.get("password"), user.password);
  if (!isMatch) {
    throw new Error("Password is incorrect");
  }
  const { password, ...userWithoutPassword } = user;
  console.log(userWithoutPassword, isMatch)
  return "verified";
}
