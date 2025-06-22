"use client";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export type ItemType = "Shirt" | "Pant" | "Shoes" | "Sports Gear";

export interface Item {
  _id: string;
  name: string;
  type: ItemType;
  description: string;
  coverImage: string; // URL
  additionalImages: string[]; // URLs
}

const Products = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/view-products");
        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="h-screen p-4 flex justify-center items-center">
        {" "}
        <ClipLoader
          color="white"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  return (
    <div className="overflow-hidden p-4 flex gap-4 flex-wrap bg-black">
      {products.length > 0 ? (
        products.map((item) => <Cards key={item._id || item._id} item={item} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Products;
