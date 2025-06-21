import { NextResponse } from "next/server";
import connectionFunction from "@/db/db";
import { Product } from "@/db/schema";

export async function GET() {
    try {
        await connectionFunction();
        const products = await Product.find()

        return NextResponse.json(products)
    } catch (error) {
        console.log("error in get ",error);
        return new Response("Cannot Get", {status : 500})
    }
}