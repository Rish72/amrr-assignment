// app/api/delete-item/[id]/route.ts
import { NextResponse } from "next/server";
import { Product } from "@/db/schema"; // Assuming Product is your Mongoose model
import connectionFunction from "@/db/db"; // Assuming this connects to your MongoDB

export async function DELETE(req : Request , {params} : {params : Promise<{id : string}>}) {
  await connectionFunction(); // Establish database connection
  try {
    const { id } = await params;

    const deletedItem = await Product.findByIdAndDelete(id);

    if (!deletedItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      {
        message: "Server error",
        error: (error as Error).message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
