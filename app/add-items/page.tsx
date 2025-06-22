"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Shirt");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      name: title,
      type,
      description,
      coverImage: "/images/img1.jpg",
      additionalImages: [
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
      ],
    };

    try {
      await axios.post("/api/add-items", newProduct);
      toast.success("Product added successfully!");

      setTitle("");
      setType("Shirt");
      setDescription("");
      router.push("/view-products");
    } catch (error) {
      console.error(" Error adding product:", error);
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add your Product</CardTitle>
          <CardDescription>
            Add name, description and upload images for cover and display
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Title */}
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Classic White Shirt"
                  required
                />
              </div>

              {/* Type */}
              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="border p-2 rounded-lg"
                >
                  <option value="Shirt">Shirt</option>
                  <option value="Pant">Pant</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Sports Gear">Sports Gear</option>
                </select>
              </div>

              {/* Description */}
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A timeless white shirt suitable for all occasions."
                  required
                />
              </div>

              {/* TODO: Image upload UI (not now) */}
            </div>

            <CardFooter className="flex-col gap-2 mt-4">
              <Button type="submit" className="w-full">
                Add
              </Button>
              <Link href="/view-products">
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </Link>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProduct;
