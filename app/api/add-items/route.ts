// app/api/add/route.ts
import connectionFunction from "@/db/db";
import { Product } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {name, type, description,coverImage, additionalImages} = body;

    // TODO: Save to DB or push to a file/mock array
    await connectionFunction()
    const newUser = new Product({name, type, description, coverImage, additionalImages})

    await newUser.save();
    return NextResponse.json({ message: "Product added", product: newUser });
  } catch (error) {
    console.error("Error in /api/add:", error);
    return new Response("Failed to add product", { status: 500 });
  }
}
