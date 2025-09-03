// src/pages/WordPressFeaturedCard.tsx
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlinePuzzlePiece,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { LuSearchCheck, LuRefreshCcwDot, LuPaintbrush } from "react-icons/lu";
import type { IconType } from "react-icons";
import styles from "./MobileFeaturedCard.module.css";

type Card = {
  title: string;
  paragraph: string;
  Icon: IconType;
  color?: string; // "blue" | "red" | "green" | "yellow" | "default"
};

export default function WordPressFeaturedCard() {
  const cards: Card[] = [
    {
      Icon: HiOutlineDevicePhoneMobile,
      title: "Mobile Responsive",
      paragraph:
        "WordPress is inherently mobile responsive, ensuring compatibility and adaptability across all devices.",
      color: "blue",
    },
    {
      Icon: HiOutlinePuzzlePiece,
      title: "Plenty of Widgets",
      paragraph:
        "Custom widgets in WordPress enhance user experience and allow seamless integration across pages.",
      color: "blue",
    },
    {
      Icon: HiOutlineWrenchScrewdriver,
      title: "Bulk Plugins",
      paragraph:
        "Access to a vast library of plugins makes WordPress highly versatile and easy to extend with new functionality.",
      color: "blue",
    },
    {
      Icon: LuSearchCheck,
      title: "SEO Friendly",
      paragraph:
        "WordPress provides powerful SEO tools and plugins to improve your site ranking on search engines quickly.",
      color: "blue",
    },
    {
      Icon: LuRefreshCcwDot,
      title: "Upgrade and Support",
      paragraph:
        "With frequent updates and community support, WordPress keeps your site secure and high-performing.",
      color: "blue",
    },
    {
      Icon: LuPaintbrush,
      title: "Theme Customization",
      paragraph:
        "WordPress themes are easily customizable, enabling users to edit design, layout, and content effortlessly.",
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
      <div className={styles["app-expect"]} style={{marginTop:"50px"}}>
        <h2>What can you expect from Nakshatra Namaha Creations?</h2>
      </div>

      <div className={styles["feature-grid"]}>
        {cards.map(({ Icon, title, paragraph, color }, i) => {
          const colorKey = `color-${(color || "default").toLowerCase()}`;
          const colorClass = styles[colorKey] || "";
          return (
            <motion.div
              key={i}
              className={`${styles["feature-card"]}  ${colorClass}`}
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
                <h3>{title}</h3>
              </div>
              <p className={styles["card-text"]}>{paragraph}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
