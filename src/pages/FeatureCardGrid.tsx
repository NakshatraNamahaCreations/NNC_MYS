"use client";

import React from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaVideo,
  FaBullhorn,
  FaPaintBrush,
  FaBuilding,
} from "react-icons/fa";
import { SiAdobelightroom } from "react-icons/si";
import { motion, type Variants } from "framer-motion";
import styles from "./FeatureCardGrid.module.css";

type Card = {
  title: string;
  paragraph: string;
  icon: React.ComponentType<{ size?: number }>;
  color: "blue" | "red" | "green" | "yellow";
};

const cards: Card[] = [
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    paragraph:
      "High-performance Android & iOS apps with smooth UX and clean engineering — built to scale with your business.",
    color: "blue",
  },
  {
    title: "Website Development",
    icon: FaLaptopCode,
    paragraph:
      "Custom, SEO-ready, mobile-first websites that convert — fast, secure and crafted for growth.",
    color: "red",
  },
  {
    title: "Corporate Video Production",
    icon: FaVideo,
    paragraph:
      "Cinematic brand films, explainers and product videos that communicate clearly and elevate your identity.",
    color: "green",
  },
  {
    title: "Digital Marketing",
    icon: FaBullhorn,
    paragraph:
      "Performance campaigns, content and automation that attract the right audience and drive measurable ROI.",
    color: "yellow",
  },
  {
    title: "Graphic Design",
    icon: FaPaintBrush,
    paragraph:
      "Bold, consistent visuals across web and print — designed to make your brand unmistakable.",
    color: "green",
  },
  {
    title: "2D Animation",
    icon: SiAdobelightroom,
    paragraph:
      "Explainers and motion graphics that simplify complex ideas and boost engagement.",
    color: "blue",
  },
  {
    title: "B2B Marketing Services",
    icon: FaBuilding,
    paragraph:
      "Account-based strategies, funnels and nurturing to build relationships and generate qualified leads.",
    color: "red",
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: EASE,
    },
  },
};

export default function FeatureCardGrid() {
  return (
    <section className={`${styles.section} py-5`}>
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-12 col-lg-7 text-start">
            <h2 className={styles.heading}>Services that move your brand forward</h2>
            <p className={styles.sub}>
              Full-stack design, development and marketing — engineered for speed, polish and outcomes.
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="row g-4"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={item}
                className="col-12 col-md-6 col-lg-4"
              >
                <div className={styles.card}>
                  <div
                    className={`${styles.borderGlow} ${styles[`borderGlow--${card.color}`]}`}
                  />
                  <div className={styles.cardInner}>
                    <span
                      className={`${styles.iconBadge} ${styles[`iconBadge--${card.color}`]}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className={styles.title}>{card.title}</h3>
                    <p className={styles.text}>{card.paragraph}</p>
                    {/* <motion.span
                      className={styles.cta}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          d="M4 10h10M10 4l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
