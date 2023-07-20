import { NextResponse } from "next/server";
import { users } from "./users";

export async function GET(req: Request) {
  return NextResponse.json(users);
}
