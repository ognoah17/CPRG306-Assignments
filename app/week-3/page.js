import React from "react";
import Link from "next/link";
import ItemList from "./item-list";

/**
 * Page Component
 *
 * Renders the Week 3 Assignments page, which includes:
 * - A title
 * - A shopping list (ItemList component)
 * - A navigation link back to the homepage
 */
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#FFF7F1]">
      {/* Page Title Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Shopping List
      </h1>

      {/* Content Section: Shopping List and Navigation */}
      <div className="grid grid-cols-1 gap-4 max-w-lg">
        <ItemList />

        {/* Navigation Section */}
        <Link
          href="/"
          className="col-span-1 flex items-center justify-center p-6 rounded-2xl shadow-lg bg-[#A8E6CF] text-gray-800 text-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
