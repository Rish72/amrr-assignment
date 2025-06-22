import { NextResponse } from "next/server";
import { Product } from "@/db/schema";
import connectionFunction from "@/db/db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectionFunction();

    const deletedItem = await Product.findByIdAndDelete(await params.id);

    if (!deletedItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
