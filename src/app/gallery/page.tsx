"use client";

import Image from "next/image";
import Link from "next/link";

const images = [
  "image.png", "image2.png", "image3.png", "image4.png",
  "image5.png", "image6.png", "image7.png", "image8.png",
  "image9.png", "image10.png", "image11.png", "image12.png",
];

export default function Gallery() {
  return (
    <>
      {/* Background glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 40% at 20% 10%, rgba(0,240,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(157,0,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, paddingTop: "100px" }}>
        <div className="container">
          {/* Back link */}
          <Link
            href="/"
            className="btn"
            style={{
              display: "inline-flex",
              marginBottom: "2rem",
              border: "1px solid var(--glass-border)",
              color: "var(--text-muted)",
            }}
          >
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>

          {/* Title */}
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>
            Photo Gallery
          </h2>

          {/* Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {images.map((img, i) => (
              <div
                key={img}
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  aspectRatio: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                className="gallery-item"
              >
                <Image
                  src={`/gallery/Photos/${img}`}
                  alt={`Gallery photo ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-item:hover {
          transform: scale(1.03);
          border-color: rgba(0, 240, 255, 0.4);
        }
      `}</style>
    </>
  );
}
