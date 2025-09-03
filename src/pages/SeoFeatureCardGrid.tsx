import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaShoppingCart,
  FaUserPlus,
  FaTools,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";
import styles from "./SeoFeatureCardGrid.module.css";

type Card = {
  title: string;
  icon: React.ReactNode;
  paragraph: string;
};

export default function SeoFeatureCardGrid() {
  const seoCards: Card[] = [
    {
      title: "Improved Rankings",
      icon: <FaChartLine className={styles["seo11-icon"]} />,
      paragraph:
        "We provide SEO services tailored to boost your search rankings across any sector. Our reselling service enhances SERP performance in any industry.",
    },
    {
      title: "Increased Sales",
      icon: <FaShoppingCart className={styles["seo11-icon"]} />,
      paragraph:
        "Broaden your customer base and boost sales with our cutting-edge marketing strategies. A minimal initial investment can drive rapid growth and significantly increase your sales in no time.",
    },
    {
      title: "Multiply Your Leads",
      icon: <FaUserPlus className={styles["seo11-icon"]} />,
      paragraph:
        "Collaborate with Bangalore’s top SEO agency to drive lead generation and boost conversion rates. Reach potential customers actively searching for your products or services, leading to higher sales and business expansion.",
    },
    {
      title: "Access to Top SEO Tools",
      icon: <FaTools className={styles["seo11-icon"]} />,
      paragraph:
        "Achieve faster results, smarter decision-making, and optimized strategies with advanced SEO tools. Gain valuable insights seamlessly without relying on multiple platforms, ensuring efficient and data-driven success.",
    },
    {
      title: "Global Presence",
      icon: <FaGlobe className={styles["seo11-icon"]} />,
      paragraph:
        "Our dynamic digital marketing team specializes in expanding your global reach. With expertise in tailoring campaigns for specific markets, we ensure maximum ROI and impactful customer engagement worldwide.",
    },
    {
      title: "Deep Expertise",
      icon: <FaLightbulb className={styles["seo11-icon"]} />,
      paragraph:
        "With eight years of experience in website optimization, we have mastered the ever-evolving traffic landscape. Our proven insights drive success, making Nakshatra Namaha Creations the ideal choice for exceptional SEO results.",
    },
  ];

  return (
    <>
      <div className={styles["seo-expect"]} style={{marginTop:"5%"}}>
        <h2>What can you expect from Nakshatra Namaha Creations?</h2>
      </div>

      <div className={styles["seo11-wrapper"]}>
        {seoCards.map((card, i) => (
          <motion.div
            key={i}
            className={styles["seo11-card"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles["seo11-icon-bg"]}>{card.icon}</div>
            <h3 className={styles["seo11-title"]}>{card.title}</h3>
            <p className={styles["seo11-desc"]}>{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
