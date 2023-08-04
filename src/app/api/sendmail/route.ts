import { IUser } from "@/types/user.interface";
import { codeGeneration } from "@/utils/codeGeneration";
import { sendEmail } from "@/utils/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user: IUser = await req.json();

  const code = await codeGeneration();

  try {
    await sendEmail(user.email, code);
    return NextResponse.json({ code: code });
  } catch (error) {
    return NextResponse.json(error);
  }
}
