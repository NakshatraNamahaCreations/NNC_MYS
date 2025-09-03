// src/pages/services/MobileFeaturedCard.tsx
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaPalette,
  FaCogs,
  FaRocket,
  FaHandshake,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import styles from "./MobileFeaturedCard.module.css";

type Card = {
  title: string;
  icon: IconType;
  paragraph: string;
  color?: string; // "blue" | "red" | "green" | "yellow" | "default"
};

export default function MobileFeaturedCard() {
  const cards: Card[] = [
    {
      title: "Design",
      icon: FaPalette,
      paragraph:
        "Our team crafts visually stunning designs that capture your brand’s essence. We focus on user-friendly layouts that engage visitors and create a lasting impression.",
      color: "blue",
    },
    {
      title: "Customization",
      icon: FaCogs,
      paragraph:
        "Every business is unique, so we tailor each solution to fit your specific needs. From functionality to aesthetic details, we ensure every element aligns with your vision.",
      color: "blue",
    },
    {
      title: "Performance",
      icon: FaRocket,
      paragraph:
        "Our websites are optimized for speed and efficiency, enhancing user experience and improving SEO. We build to ensure smooth performance on all devices and platforms.",
      color: "blue",
    },
    {
      title: "Transparency",
      icon: FaHandshake,
      paragraph:
        "We believe in open communication and honesty at every step. Our clients stay informed and involved, from project milestones to cost estimates and timelines.",
      color: "blue",
    },
    {
      title: "Security",
      icon: FaShieldAlt,
      paragraph:
        "Data protection is our priority. We implement the latest security protocols to safeguard your business and user information, creating a secure online environment.",
      color: "blue",
    },
    {
      title: "End-to-End Support",
      icon: FaHandsHelping,
      paragraph:
        "Our dedicated team ensures your project is managed seamlessly, offering guidance and assistance whenever needed.",
      color: "blue",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <div className={styles["app-expect"]}>
        <h2>What can you expect from Nakshatra Namaha Creations?</h2>
      </div>

      <div className={styles["feature-grid"]}>
        {cards.map((card, i) => {
          const Icon = card.icon;
          const colorKey = `color-${(card.color || "default").toLowerCase()}`;
          const colorClass = styles[colorKey] || "";
          return (
            <motion.div
              key={i}
              className={`${styles["feature-card"]} ${colorClass}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles["feature-header"]}>
              
                <div className={styles["icon-wrap"]}>
                  <Icon className={styles["section-icon"]} />
                </div>
                  <h3>{card.title}</h3>
              </div>
              <p className={styles["card-text"]}>{card.paragraph}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
