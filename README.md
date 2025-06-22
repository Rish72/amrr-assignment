# 🛍️ E-commerce Product Showcase (Next.js & Cloudinary)

## 📚 Table of Contents

1. [About the Project](#1-about-the-project)
2. [Features](#2-features)
3. [Tech Stack](#3-tech-stack)
4. [Getting Started](#4-getting-started)
5. [Project Structure](#5-project-structure)
6. [Usage](#6-usage)
7. [Contributing](#7-contributing)
8. [License](#8-license)
9. [Contact](#9-contact)

---

## 1. About the Project

This project is a modern, responsive e-commerce product showcase application built with **Next.js**. It allows users to view a list of products, explore their details in an interactive drawer, and provides an administrative interface for adding new products, complete with robust image uploads powered by **Cloudinary**. The application emphasizes a clean UI/UX and efficient data handling.

---

## 2. Features

- **Product Listing**: Browse a comprehensive list of products with key details.
- **Interactive Product Details**: Open a drawer displaying product descriptions and additional images.
- **Image Optimization**: Fast, responsive images via **Cloudinary**, with potential **ImageKit** support.
- **Product Addition (Admin)**:
  - Form for name, type, description.
  - Cloudinary upload widget for cover and additional images.
  - Automatic integration of uploaded image URLs into product data.
- **Responsive Design**: Mobile, tablet, and desktop ready.
- **Client-Side Data Fetching**: Uses `axios` and React Hooks.
- **Component-Based Architecture**: Reusable React components.
- **UI Library**: Styled with **Shadcn UI** and **Tailwind CSS**.

---

## 3. Tech Stack

- **Framework**: Next.js (React Framework)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (built on Radix UI)
- **Image Management**:
  - Cloudinary (`@cloudinary/next`)
  - (Optional) ImageKit (`@imagekit/next`)
- **HTTP Client**: Axios
- **Loading Spinner**: React Spinners
- **Data Storage**: Local JSON (`items.json`) as mock DB (easily extendable)

---

## 4. Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or Yarn

### Installation

```bash
git clone <your-repo-url>
cd <your-project-folder>
npm install
# or
yarn install
```

Environment Variables
Create a .env.local file in the root:

```bash
touch .env.local
```

Add:

```bash
env
# Cloudinary Credentials
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
NEXT_PUBLIC_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=assignment-uploads

# ImageKit Credentials (Optional)
NEXT_PUBLIC_MAGEKIT_URL=https://ik.imagekit.io/your_imagekit_id/
```

Configure next.config.js

```bash
js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/your_cloudinary_cloud_name/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/your_imagekit_id/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

Start the Dev Server

```bash
npm run dev
# or
yarn dev
Visit: http://localhost:3000
```

# 5. Project Structure

```bash
.
├── public/
├── app/
│   ├── api/
│   │   └── items/
│   │       └── route.ts
│   ├── add-product/
│   │   └── page.tsx
│   └── view-products/
│       └── page.tsx
├── components/
│   ├── ui/
│   ├── Cards.tsx
│   ├── ImageComponent.tsx
│   └── AddProduct.tsx
├── data/
│   └── items.json
├── lib/
│   └── items.ts
├── types/
├── .env.local
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

# 6. Usage

- View Products: Go to /view-products

- Add Product: Go to /add-product

- Upload cover image using Cloudinary widget

- Upload up to 4 additional images

- Data Storage: Product info saved in data/items.json

# 7. Contributing

```
   - Contributions are welcome!
  - Open an issue or PR for any bugs, features, or suggestions.
```

# 8. License

```
  Distributed under the MIT License. See LICENSE for details.
```

# 9. Contact

````
  Rishabh Goel
  GitHub: https://github.com/rish72/assignment
  ```
````
