"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function KioskPage() {
  useEffect(() => {
    // Set kiosk=1 in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem("kiosk", "1");
    }
  }, []);

  const handleShopifyClick = () => {
    // Set kiosk=1 in localStorage when clicking
    if (typeof window !== 'undefined') {
      localStorage.setItem("kiosk", "1");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-center bg-gray-50">
      {/* Navigation Button - Centered at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <Link 
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Switch to Normal Mode
        </Link>
      </div>

      {/* Main Content - Centered Shopify Button */}
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Kiosk Mode</h1>
        <a
          href="https://quickstart-d8039cf9.myshopify.com/?kiosk=1"
          onClick={handleShopifyClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-3 text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Go to Shopify Store (Kiosk Mode)
        </a>
      </div>
    </div>
  );
}
