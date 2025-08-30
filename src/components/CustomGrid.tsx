"use client";
import React from "react";

export default function CustomGrid() {
  return (
    <section className="custom-grid-section">
      <div className="custom-grid">
        {/* Left column */}
        <div className="left-column">
          <div className="left-top">
            <img src="/movieGuy.jpg" alt="Left Top 1" />
            <img src="/movieGuy2.jpg" alt="Left Top 2" />
          </div>
          <div className="left-bottom">
            <img src="/movieGuy.jpg" alt="Left Bottom" />
          </div>
        </div>

        {/* Right column */}
        <div className="right-column">
          <img src="/movieGuy2.jpg" alt="Right Big" />
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .custom-grid-section {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .custom-grid {
          display: grid;
          grid-template-columns: 2fr 1fr; /* left wider, right smaller */
          gap: 15px;
        }

        /* Left column layout */
        .left-column {
          display: grid;
          grid-template-rows: 1fr 1fr; /* top and bottom halves */
          gap: 15px;
        }

        .left-top {
          display: grid;
          grid-template-columns: 1fr 1fr; /* two images side by side */
          gap: 15px;
        }

        .left-top img,
        .left-bottom img,
        .right-column img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        .left-bottom {
          display: flex;
        }

        /* Right column */
        .right-column {
          display: flex;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .custom-grid {
            grid-template-columns: 1fr; /* stack vertically */
          }

          .left-column {
            grid-template-rows: 1fr 1fr;
          }

          .left-top {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
