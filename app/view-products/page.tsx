"use client";

import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import axios from "axios";  
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

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="p-4 flex gap-4 flex-wrap">
      {products.length > 0 ? (
        products.map((item) => <Cards key={item._id || item._id} item={item} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Products;
