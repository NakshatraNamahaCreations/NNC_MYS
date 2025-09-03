import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  LuScale,
  LuQuote,
  LuCamera,
  LuSmartphone,
  LuScissorsLineDashed,
  LuUserCog,
} from "react-icons/lu";

import styles from "./VideoFeaturedCard.module.css";

type Card = {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  color?: "blue" | "default";
};

const cards: Card[] = [
  {
    icon: <LuScale className={styles["section-icon"]} />,
    title: "Scalable Solutions",
    paragraph:
      "Our services are designed to accommodate businesses of all sizes, adapting to your specific requirements while maintaining quality and efficiency.",
    color: "blue",
  },
  {
    icon: <LuQuote className={styles["section-icon"]} />,
    title: "Creative Storytelling",
    paragraph:
      "We craft engaging narratives that effectively communicate your brand’s message, making it memorable and impactful for your audience.",
    color: "blue",
  },
  {
    icon: <LuCamera className={styles["section-icon"]} />,
    title: "High-Quality Visuals",
    paragraph:
      "Every video features professional-grade visuals and crisp sound, ensuring a polished and visually appealing final product.",
    color: "blue",
  },
  {
    icon: <LuSmartphone className={styles["section-icon"]} />,
    title: "Multi-Platform Compatibility",
    paragraph:
      "Videos are optimized to perform seamlessly across various platforms, including websites, social media and presentations.",
    color: "blue",
  },
  {
    icon: <LuScissorsLineDashed className={styles["section-icon"]} />,
    title: "Post-Production Excellence",
    paragraph:
      "We deliver refined videos with expert editing, sound enhancements and graphics to achieve a professional finish.",
    color: "blue",
  },
  {
    icon: <LuUserCog className={styles["section-icon"]} />,
    title: "Comprehensive Support",
    paragraph:
      "Our team manages every stage of the video production process, ensuring a seamless and stress-free experience.",
    color: "blue",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function VideoFeaturedCard() {
  return (
    <>
      <div className={styles["wpfeature-header"]} style={{marginTop:"5%"}}>
        <h2>What can you expect from Nakshatra Namaha Creations?</h2>
      </div>

      <div className={styles["wpfeature-grid"]}>
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className={`${styles["wpfeature-card"]} ${
              styles[`color-${card.color?.toLowerCase() || "default"}`]
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className={styles["wpfeature-card-top"]}>
              <h3>{card.title}</h3>
              <div className={styles["wpfeature-icon-wrap"]}>{card.icon}</div>
            </div>
            <p className={styles["wpfeature-desc"]}>{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
