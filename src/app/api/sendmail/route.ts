import { IUser } from "@/types/user.interface";
import { codeGeneration } from "@/utils/codeGeneration";
import { sendEmail } from "@/utils/sendMail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user: IUser = await req.json();
  const code = codeGeneration();
  try {
    await sendEmail(user.email, code);
    NextResponse.json({ code });
  } catch (error) {
    NextResponse.json({ error: "Error send mail" });
  }
  NextResponse.json({ code });
}
