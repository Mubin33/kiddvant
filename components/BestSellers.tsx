"use client";

import Image from "next/image";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "Rainbow Stacker Wooden Toy",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.8,
    reviews: 2156,
    image: "https://www.melissaanddoug.com/cdn/shop/files/30123_Rainbow_Stacker_2880x1200.jpg",
    sold: 5420,
    isNew: false,
  },
  {
    id: 2,
    name: "Deluxe Wooden Kitchen Set",
    price: 149.99,
    oldPrice: 199.99,
    rating: 4.9,
    reviews: 892,
    image: "https://www.melissaanddoug.com/cdn/shop/files/30607_Cool_Scoops_Ice_Creamery_052423-8643_2880x1200_1.jpg",
    sold: 3210,
    isNew: false,
  },
  {
    id: 3,
    name: "Jumbo Coloring Activity Pad",
    price: 9.99,
    oldPrice: 14.99,
    rating: 4.7,
    reviews: 3421,
    image: "https://www.melissaanddoug.com/cdn/shop/files/MD_CommunityProgram_Banners_A_ALT_02_Educator_Mobile_1.jpg",
    sold: 8900,
    isNew: false,
  },
  {
    id: 4,
    name: "Wooden Puzzle Bundle - 4 Pack",
    price: 29.99,
    oldPrice: 44.99,
    rating: 4.6,
    reviews: 1567,
    image: "https://www.melissaanddoug.com/cdn/shop/files/30608_Deluxe_Grill_Pizza_Oven_051223-7071_2880x1200_2.jpg",
    sold: 6780,
    isNew: true,
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Most Popular
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Best Sellers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Loved by parents and kids alike, these top-rated toys are flying off the shelves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative aspect-square bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      NEW
                    </span>
                  )}
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                </div>

                {/* Wishlist */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition group/heart">
                  <Heart size={18} className="group-hover/heart:fill-current" />
                </button>

                {/* Quick Actions */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex-1 bg-white text-gray-700 py-2 rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center gap-1 text-sm font-medium transition">
                    <Eye size={16} />
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>

                {/* Sold count */}
                <p className="text-xs text-gray-500 mb-3">{product.sold.toLocaleString()} sold</p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-blue-900">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition">
            View All Best Sellers
          </button>
        </div>
      </div>
    </section>
  );
}
