import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center gap-4">

      <h1 className="sm:text-[80px] md:text-[120px] text-white">ASSIGNMENT</h1>
      <p className="mt-[-20px] text-gray-400">By Rishabh Goel</p>
      <div className="flex gap-4">
        <Link href="/view-products">
          <Button className="cursor-pointer">View Products</Button>
        </Link>

        <Link href="/add">
          <Button className="cursor-pointer">Add Product</Button>
        </Link>
      </div>
    </div>
  );
}
