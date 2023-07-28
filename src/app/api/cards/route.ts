import { NextResponse } from "next/server";
// import { cards } from "./cards";
import { Card } from "@/models/card";
import connectDB from "@/lib/connect-db";

export async function GET(req: Request, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  const start = searchParams.get("_start");
  const end = searchParams.get("_end");

  await connectDB();

  const cards = await Card.find();

  let data = [];

  if (cards) {
    for (let i = Number(start); i < Number(end); i++) {
      if (cards[i]) {
        data.push(cards[i]);
      }
    }
  }

  if (start?.length && end?.length) {
    return NextResponse.json(data);
  }

  return NextResponse.json(cards);
}
