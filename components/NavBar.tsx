import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-black text-white sticky flex items-center justify-end gap-4 h-3.5 p-8">
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/view-products">View Product</Link>
        <Link href="/add-items">Add Product</Link>
      </div>
    </div>
  );
};

export default NavBar;
