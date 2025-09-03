import React from "react";
import {
  FaBullseye,
  FaFileAlt,
  FaTools,
  FaQuoteRight,
  FaVideo,
  FaEye,
  FaFilter,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";
import styles from "./SeoTypesSection.module.css";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function SeoTypesSection() {
  const seoSteps: Step[] = [
    {
      title: "Keyword Optimization",
      description:
        "Thoroughly research target audience keywords, optimize website and product descriptions, and secure top search rankings to drive organic traffic to your online store.",
      icon: <FaBullseye className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Product Descriptions",
      description:
        "Craft engaging product descriptions that highlight unique features and benefits, enticing customers to explore and make a purchase.",
      icon: <FaFileAlt className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Technical Perfection",
      description:
        "Optimize website speed and mobile-friendliness to enhance user experience, improve search rankings, and build customer trust and engagement.",
      icon: <FaTools className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Social Validation and Testimonials",
      description:
        "Incorporate customer reviews and testimonials to showcase satisfaction, build trust, and drive more conversions.",
      icon: <FaQuoteRight className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Inspiring Video Experiences",
      description:
        "Create compelling videos demonstrating product functionality and real-world applications to engage customers and drive sales.",
      icon: <FaVideo className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Enhanced Visibility",
      description:
        "Boost search rankings to increase product visibility, enhance brand recognition, and attract potential buyers.",
      icon: <FaEye className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Targeted Conversion Funnel",
      description:
        "Align your SEO strategy with customer intent to attract relevant traffic and maximize conversion rates.",
      icon: <FaFilter className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Trust and Authority",
      description:
        "Secure top search rankings to enhance brand credibility and earn customer trust.",
      icon: <FaShieldAlt className={styles["seo-types-icon-svg"]} />,
    },
    {
      title: "Competitive Edge",
      description:
        "Implement strategic tactics to surpass competitors and establish a strong online presence.",
      icon: <FaTrophy className={styles["seo-types-icon-svg"]} />,
    },
  ];

  return (
    <div className={styles["seo-types-wrapper"]}>
      <h2 className={styles["seo-types-title"]}>Types of Web Design</h2>
      <div className={styles["seo-types-grid"]}>
        {seoSteps.map((item, idx) => (
          <div className={styles["seo-types-card"]} key={idx}>
            <div className={styles["seo-types-icon"]}>{item.icon}</div>
            <h3 className={styles["seo-types-heading"]}>{item.title}</h3>
            <p className={styles["seo-types-description"]}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
