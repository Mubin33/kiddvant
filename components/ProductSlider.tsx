"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "best" | "new";
};

const products: Product[] = [
  {
    id: 1,
    name: "Rainbow Stacker",
    price: 10.99,
    rating: 4.3,
    reviews: 315,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/30123_Rainbow_Stacker_2880x1200.jpg",
    badge: "best",
  },
  {
    id: 2,
    name: "Wooden Shape Sorting Grocery Cart",
    price: 81.99,
    rating: 4.5,
    reviews: 63,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/30607_Cool_Scoops_Ice_Creamery_052423-8643_2880x1200_1.jpg",
    badge: "best",
  },
  {
    id: 3,
    name: "Early Learning Puzzle Bundle",
    price: 44.99,
    oldPrice: 58.97,
    rating: 4.6,
    reviews: 418,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/MD_CommunityProgram_Banners_A_ALT_02_Educator_Mobile_1.jpg",
    badge: "new",
  },
  {
    id: 4,
    name: "Kids Wooden Toy",
    price: 29.99,
    rating: 4.4,
    reviews: 120,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/30608_Deluxe_Grill_Pizza_Oven_051223-7071_2880x1200_2.jpg",
  },
  {
    id: 1,
    name: "Rainbow Stacker",
    price: 10.99,
    rating: 4.3,
    reviews: 315,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/30123_Rainbow_Stacker_2880x1200.jpg",
    badge: "best",
  },
  {
    id: 2,
    name: "Wooden Shape Sorting Grocery Cart",
    price: 81.99,
    rating: 4.5,
    reviews: 63,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/30607_Cool_Scoops_Ice_Creamery_052423-8643_2880x1200_1.jpg",
    badge: "best",
  },
  {
    id: 3,
    name: "Early Learning Puzzle Bundle",
    price: 44.99,
    oldPrice: 58.97,
    rating: 4.6,
    reviews: 418,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/MD_CommunityProgram_Banners_A_ALT_02_Educator_Mobile_1.jpg",
    badge: "new",
  },
  {
    id: 4,
    name: "Kids Wooden Toy",
    price: 29.99,
    rating: 4.4,
    reviews: 120,
    image:
      "https://www.melissaanddoug.com/cdn/shop/files/30608_Deluxe_Grill_Pizza_Oven_051223-7071_2880x1200_2.jpg",
  },
];

export default function ProductSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        EDUCATIONAL TOYS
      </h2>

      {/* Slider */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* Product List */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] bg-white rounded-2xl border flex flex-col justify-between"
            >
                    

              {/* Image */}
              <div className="relative h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

<div className="p-4">
              {/* Name */}
              <h3 className="font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span>
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-lg font-bold text-blue-900">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-full">
                  More info
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
</div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}