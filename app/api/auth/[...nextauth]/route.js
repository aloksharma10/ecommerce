import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../libs/models/user";
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


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user) {
      if (!conn) {
        await connect();
      }
      console.log("user", user.user.name);
      const userExist = await User.findOne({ email: user.user.email });
      if (!userExist) {
        const newUser = new User({
          name: user.user.name,
          email: user.user.email,
          avatar: user.user.image,
        });
        await newUser.save();
      }
      return true;
    },
    async session({ session }) {
      if (!conn) {
        await connect();
      }
      const sessionUser = await User.findOne({ email: session.user.email });
      console.log("sessionUser", sessionUser);
      session.user.id = sessionUser._id.toString();
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
});

export { handler as GET, handler as POST };
