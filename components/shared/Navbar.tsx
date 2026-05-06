"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, HelpCircle } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home Page", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Product Page", href: "/products" },
  { name: "Shope", href: "/shop" },
  { name: "New Arrival", href: "/new-arrival" },
  { name: "Partner with Us", href: "/partner" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        
        {/* Search */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-[280px]">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-1">
          <Image
            src="/logo.png" // put your logo in public folder
            alt="logo"
            width={140}
            height={40}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <HelpCircle className="cursor-pointer text-gray-600" />
          <User className="cursor-pointer text-gray-600" />
          <ShoppingCart className="cursor-pointer text-gray-600" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="hidden md:flex justify-center gap-10 py-3 text-sm lg:text-xl font-semibold text-gray-700">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:text-blue-600 transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}