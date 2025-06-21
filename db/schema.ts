import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["Shirt", "Pant", "Shoes", "Sports Gear", "Other"],
      default: "Other",
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String, 
      required: true,
    },
    additionalImages: {
      type: [String], 
      default: [],
    },
  },
  {
    timestamps: true, 
  }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
