"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    // Clear kiosk from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem("kiosk");
    }
  }, []);

  const handleShopifyClick = () => {
    // Clear kiosk from localStorage when clicking
    if (typeof window !== 'undefined') {
      localStorage.removeItem("kiosk");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-center bg-gray-50">
      {/* Navigation Button - Centered at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <Link 
          href="/kiosk"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Switch to Kiosk Mode
        </Link>
      </div>

      {/* Main Content - Centered Shopify Button */}
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Normal Mode</h1>
        <a
          href="https://quickstart-d8039cf9.myshopify.com/?kiosk=0"
          onClick={handleShopifyClick}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-3 text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Go to Shopify Store (Normal Mode)
        </a>
      </div>
    </div>
  );
}