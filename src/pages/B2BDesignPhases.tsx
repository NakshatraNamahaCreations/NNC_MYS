import React from "react";
import styles from "./B2BDesignPhases.module.css";
import {
  LuLightbulb,
  LuMegaphone,
  LuHeadset,
  LuTrendingUp,
  LuSearch,
  LuClock,
} from "react-icons/lu";
import type { IconType } from "react-icons";

type Phase = {
  title: string;
  description: string;
  icon: IconType;
  color?: string;
};

const designPhases: Phase[] = [
  {
    title: "Strategic Business Solutions",
    description:
      "We design strategies aligned with your goals to deliver measurable results and growth.",
    icon: LuLightbulb,
    color: "blue",
  },
  {
    title: "Innovative Marketing Campaigns",
    description:
      "We craft impactful campaigns that connect your brand with the right audience effectively.",
    icon: LuMegaphone,
    color: "blue",
  },
  {
    title: "Dedicated Support Team",
    description:
      "Our team is committed to assisting you with timely solutions and reliable guidance.",
    icon: LuHeadset,
    color: "blue",
  },
  {
    title: "Scalable and Future-Ready Strategies",
    description:
      "Our solutions grow with your business and adapt to changing market trends seamlessly.",
    icon: LuTrendingUp,
    color: "blue",
  },
  {
    title: "SEO-Optimized Solutions",
    description:
      "Our websites and content are crafted to rank better and increase online visibility.",
    icon: LuSearch,
    color: "blue",
  },
  {
    title: "Timely Project Delivery",
    description:
      "Your projects are completed on schedule without compromising on quality or performance.",
    icon: LuClock,
    color: "blue",
  },
];

export default function B2BDesignPhases() {
  return (
    <div className={styles["b2b-section-wrapper11"]}>
      <h2 className={styles["b2b-section-title"]}>
        What can you expect from Nakshatra Namaha Creations?
      </h2>

      <div className={styles["b2b-section-grid"]}>
        {designPhases.map((item, idx) => {
          const Icon = item.icon;
          const colorClass =
            styles[`color-${(item.color || "default").toLowerCase()}`] || "";

          return (
            <div key={idx} className={`${styles["b2b-section-card"]} ${colorClass}`}>
              <div className={styles["b2b-section-icon"]}>
                <Icon size={40} />
              </div>
              <h3 className={styles["b2b-section-heading"]}>{item.title}</h3>
              <p className={styles["b2b-section-description"]}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
