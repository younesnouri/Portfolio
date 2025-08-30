"use client";

import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer-built">Built and designed by <span className="highlight">Younes Nouri</span></p>
        <p className="footer-rights">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>

      <style jsx>{`
        .footer {
          width: 100%;
          padding: 2rem 1.5rem;
          background-color: #1C1C1C;
          color: #E0F7FA;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-family: 'Fira Code', sans-serif;
          
        }

        .footer-built {
          font-size: 1rem;
          margin-top: 5.5rem;
        }

        .highlight {
          color: aquamarine;
          font-weight: 600;
        }

        .footer-rights {
          font-size: 0.875rem;
          color: #B0E0E6;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </>
  );
}
