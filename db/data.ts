export type ItemType = "Shirt" | "Pant" | "Shoes" | "Sports Gear";

export interface Item {
  _id: string;
  name: string;
  type: ItemType;
  description: string;
  coverImage: string; // URL
  additionalImages: string[]; // URLs
}

export const sampleItems: Item[] = [
  {
    _id: "1",
    name: "Classic White Shirt",
    type: "Shirt",
    description: "A timeless white shirt suitable for all occasions.",
    coverImage: "/images/img1.jpg",
    additionalImages: [
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img5.jpg",
    ],
  },

  {
    _id: "2",
    name: "Running Shoes Pro",
    type: "Shoes",
    description: "Lightweight running shoes designed for endurance.",
    coverImage: "/images/img2.jpg",
    additionalImages: ["/images/img3.jpg", "/images/img2.jpg"],
  },
  {
    _id: "3",
    name: "Running Shoes Pro",
    type: "Shoes",
    description: "Lightweight running shoes designed for endurance.",
    coverImage: "/images/img3.jpg",
    additionalImages: ["/images/img3.jpg", "/images/img2.jpg"],
  },
  {
    _id: "4",
    name: "Football Jersey",
    type: "Sports Gear",
    description:
      "Breathable and durable football jersey for training or match days.",
    coverImage: "/images/img4.jpg",
    additionalImages: ["/images/img1.jpg", "/images/img3.jpg"],
  },
  {
    _id: "5",
    name: "Running Shoes Pro",
    type: "Shoes",
    description: "Lightweight running shoes designed for endurance.",
    coverImage: "/images/img5.jpg",
    additionalImages: ["/images/img3.jpg", "/images/img2.jpg"],
  },
];
