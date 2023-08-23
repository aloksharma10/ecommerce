"use server";

import User from "@/libs/models/user";
import dbConn from "@/libs/mongo/dbconn";
import jwt from "jsonwebtoken";
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
    console.log(userToken);
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
  if (!conn) {
    await connect();
  }
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
  // console.log(user.password)
  const { password, _id, name, email, phone, cartItem } = user;
  const token = jwt.sign(
    { user: { _id, name, email, phone, cartItem } },
    process.env.JWT_SECRET,
    {
      expiresIn: 1440,
    }
  );
  // console.log(token)
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  console.log(verified);
  cookies().set("user", token, { secure: true, expires: 24 * 60 * 60 });
  return token;
}
