"use client";
import { CldUploadWidget } from "next-cloudinary";

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
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Shirt");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const router = useRouter();

  type CloudinaryUploadWidgetInfo = {
    secure_url: string;
    url: string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      name: title,
      type,
      description,
      coverImage,
      additionalImages,
    };

    try {
      console.log("new product coverImage ", newProduct.additionalImages);

      await axios.post("/api/add-items", newProduct);
      toast.success("Product added successfully!");

      setTitle("");
      setType("Shirt");
      setDescription("");
      setCoverImage("");
      router.push("/view-products");
    } catch (error) {
      console.error(" Error adding product:", error);
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
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
              {/*  COver image */}
              <div className="grid gap-2">
                <Label htmlFor="coverImage">Cover Image</Label>
                <CldUploadWidget
                  uploadPreset="assignment-uploads"
                  onSuccess={({ info }) => {
                    const uploadedImageUrl =
                      (info as CloudinaryUploadWidgetInfo).secure_url ||
                      (info as CloudinaryUploadWidgetInfo).url;

                    console.log("infor", uploadedImageUrl);

                    setCoverImage(uploadedImageUrl);
                  }}
                  options={{ multiple: false }}
                >
                  {({ open }) => {
                    return (
                      <button type="button"
                        className="border border-gray-200 rounded-md"
                        onClick={() => open()}
                      >
                        Upload Images
                      </button>
                    );
                  }}
                </CldUploadWidget>
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
              <div className="grid gap-2">
                <Label htmlFor="additionalImages">
                  Upload additional Images
                </Label>
                <CldUploadWidget
                  uploadPreset="assignment-uploads"
                  onSuccess={({ info }) => {
                    const uploadedImageUrl =
                      (info as CloudinaryUploadWidgetInfo).secure_url ||
                      (info as CloudinaryUploadWidgetInfo).url;

                    setAdditionalImages((prevImages) => {
                      // Avoid duplicates
                      if (prevImages.includes(uploadedImageUrl))
                        return prevImages;

                      // Limit to 4 images
                      if (prevImages.length >= 4) {
                        toast.error("Maximum of 4 additional images allowed.");
                        return prevImages;
                      }

                      return [...prevImages, uploadedImageUrl];
                    });
                  }}
                  options={{ multiple: true }}
                >
                  {({ open }) => {
                    return (
                      <button
                      type="button"
                        className="border border-gray-200 rounded-md"
                        onClick={() => open()}
                      >
                        Upload Images
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
              {/* TODO: Image upload UI (not now) */}
            </div>

            <CardFooter className="flex-col gap-2 mt-4">
              <Button type="submit" className="w-full">
                Add
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProduct;
