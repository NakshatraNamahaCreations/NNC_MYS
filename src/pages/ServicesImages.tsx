import React from "react";
import { motion } from "framer-motion";

const imageData = [
  { src: "/images/image.png", alt: "Image 1" },
  { src: "/images/nodejs.png", alt: "Node.js" },
  { src: "/images/reactjs.jpg", alt: "ReactJS" },
  { src: "/images/wp.jpeg", alt: "WordPress" },
];

const ServicesImages = () => {
  return (
    <div style={{ height: "500px", overflow: "hidden", width: "300px", margin: "0 auto" }}>
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* Duplicate the images to make loop smooth */}
        {Array(2).fill(
          imageData.map((img, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                padding: "10px",
                backgroundColor: "#fff",
                textAlign: "center",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>{img.alt}</p>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default ServicesImages;
