import { NextResponse } from "next/server";
import connectDB from "@/lib/connect-db";
import { User } from "@/models/user";
import { IUser } from "@/types/user.interface";

export async function GET(req: Request) {
  await connectDB();
  const users = await User.find();

  return NextResponse.json(users);
}

export async function POST(req: Request, res: Response) {
  const user: IUser = await req.json();

  await connectDB();

  try {
    const users: IUser[] = await User.find();

    for (let i = 0; i < users.length; i++) {
      if (users[i].email.toLowerCase() === user.email.toLowerCase()) {
        throw new Error("This user already exists");
      }
    }

    await User.create(user);
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json("Register is success");
}
