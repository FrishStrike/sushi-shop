import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { getAllUsers } from "@/services/users.service";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const users = await getAllUsers();

        const currentUser = (await getAllUsers()).data.find(
          (user) => user.email === credentials.email.toLowerCase()
        );

        if (!currentUser) {
          return null;
        }

        if (currentUser?.password === credentials.password) {
          const { password, ...userWithOutPass } = currentUser;
          return userWithOutPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
