import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center gap-4">
        <Link href="/view-products">
          <Button className="cursor-pointer">View Products</Button>
        </Link>

        <Link href="/add">
          <Button className="cursor-pointer">Add Product</Button>
        </Link>
      
    </div>
  );
}
