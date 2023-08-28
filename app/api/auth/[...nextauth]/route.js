import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../libs/models/user";
import dbConn from "@/libs/mongo/dbconn";
import CredentialsProvider from "next-auth/providers/credentials";
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

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!conn) {
          await connect();
        }
        const userData = await User.findOne({
          email: credentials.email,
        });
        if (!userData) {
          throw new Error("User not found");
        }
        const isMatch = await bcrypt.compare(
          credentials.password,
          userData.password
        );
        if (!isMatch) {
          throw new Error("Something went wrong");
        }
        return userData;
      },
    }),
  ],
  callbacks: {
    async signIn(user) {
      if (!conn) {
        await connect();
      }
      const userExist = await User.findOne({ email: user.user.email });
      console.log("userExist", userExist);
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
      session.user.id = sessionUser._id.toString();
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    jwt: true,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
});

export { handler as GET, handler as POST };
