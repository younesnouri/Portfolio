"use client";

import { useState } from "react";
import Hero from "./Hero";
import About from "./About";

export default function SlidePages() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [Hero, About]; // Store components, not JSX

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
    } else {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          transition: "transform 0.7s ease",
          transform: `translateY(-${currentPage * 150}vh)`,
        }}
      >
        {pages.map((Page, i) => (
          <div key={i} style={{ height: "150vh" }}>
            <Page />
          </div>
        ))}
      </div>
    </div>
  );
}
