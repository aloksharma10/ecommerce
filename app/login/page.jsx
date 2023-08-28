import { getServerSession } from "next-auth";
import Login from "../components/Login/Login";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  console.log(session);
  if (session?.user) {
    return redirect("/");
  }
  return (
    <section className="min-h-screen ">
      <Login/>
    </section>
  );
};

export default page;