import React from "react";
import { redirect } from "next/navigation";
import Signup from "../components/Signup/Signup";
import { getServerSession } from "next-auth";

async function page() {
  const session = await getServerSession();
  if (session?.user) {
    return redirect("/");
  }
  return <Signup />;
}

export default page;
