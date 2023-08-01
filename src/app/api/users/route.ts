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

  await User.create(user);

  return NextResponse.json(user);
}
