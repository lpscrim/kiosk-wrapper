"use client";

import { useEffect } from "react";

export default function KioskPage() {
  useEffect(() => {
    // Set kiosk=1 in localStorage
    localStorage.setItem("kiosk", "1");
  }, []);

  const handleShopifyClick = () => {
    // Set kiosk=1 in localStorage when clicking
    localStorage.setItem("kiosk", "1");
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <a
        href="https://quickstart-d8039cf9.myshopify.com/?kiosk=1"
        onClick={handleShopifyClick}
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Shopify Store (Kiosk Mode)
      </a>
    </div>
  );
}
