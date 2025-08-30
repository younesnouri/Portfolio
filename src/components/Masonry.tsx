"use client";
import React, { useEffect, useRef } from "react";

const images = [
  "/movieGuy.jpg",
  "/movieGuy2.jpg",
  "/movieGuy3.jpg",
  "/monetaa.jpg",
  "/alten1.jpg",
  "/alten1.jpg",
  "/movieGuy2.jpg",
  "/movieGuy2.jpg",
];

export default function Masonry() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const resizeGridItem = (item: HTMLElement) => {
    const grid = gridRef.current;
    if (!grid) return;

    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    const img = item.querySelector("img");

    if (img && img.complete && img.naturalHeight > 0) {
      const imgHeight = img.getBoundingClientRect().height;
      const rowSpan = Math.ceil((imgHeight + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = `span ${rowSpan}`;
    }
  };

  const resizeAllGridItems = () => {
    if (!gridRef.current) return;
    const allItems = gridRef.current.getElementsByClassName("masonry-item");
    for (let i = 0; i < allItems.length; i++) {
      resizeGridItem(allItems[i] as HTMLElement);
    }
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const item = (event.target as HTMLImageElement).closest(
      ".masonry-item"
    ) as HTMLElement;
    if (item) {
      resizeGridItem(item);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeAllGridItems);
    const timer = setTimeout(resizeAllGridItems, 100);
    return () => {
      window.removeEventListener("resize", resizeAllGridItems);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <section className="masonry-section">
        <div className="masonry-grid" ref={gridRef}>
          {images.map((src, index) => (
            <div className="masonry-item" key={index}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                onLoad={handleImageLoad}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .masonry-section {
          padding: 2rem;
          margin: 0 auto;
          max-width: 1200px;
        }

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-auto-rows: 10px;
          gap: 15px;
        }

        .masonry-item {
          display: block;
          overflow: hidden;
          border-radius: 10px;
          transition: box-shadow 0.3s ease;
          cursor: pointer;
          position: relative; /* fixed for skeleton */
        }

        .masonry-item:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }

        /* Skeleton loading effect */
        .masonry-item::before {
          content: '';
          display: block;
          width: 100%;
          height: 200px;
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
          border-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }

        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
          }
          .masonry-section {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }
      `}</style>
    </>
  );
}
