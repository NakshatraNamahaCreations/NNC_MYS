// src/pages/services/ECommerceScroll.tsx
import React from "react";
import styles from "./ECommerceScroll.module.css";

type Step = { title: string; description: string };

const steps: Step[] = [
  {
    title: "Client-centric eCommerce development",
    description: "Joint requirement analysis to achieve the best solutions.",
  },
  {
    title: "Platform selection",
    description:
      "Evaluating requirements for effective eCommerce development and choosing platforms such as Magento, Shopify, or WooCommerce.",
  },
  {
    title: "Frontend development",
    description:
      "Front-end developers design tailored templates based on client inputs.",
  },
  {
    title: "Backend application structuring",
    description:
      "The backend team converts the design into a fully functional eCommerce website.",
  },
  {
    title: "Modular segmentation",
    description:
      "Customizing eCommerce websites to meet the needs of super admins, admins, and users.",
  },
  {
    title: "Seamless integration",
    description:
      "Web developers seamlessly integrate eCommerce website modules with precision.",
  },
  {
    title: "Security analysis",
    description:
      "Thorough testing ensures eCommerce websites are protected against SQL injections and malware.",
  },
  {
    title: "Go Live",
    description:
      "Launching an eCommerce website with secure payment gateway integration and SSL certification.",
  },
];

export default function ECommerceScroll() {
  return (
    <div className={styles["process-grid-container"]}>
      {steps.map((step, index) => (
        <div className={styles["process-card11"]} key={index}>
          <div className={styles["process-number"]}>{index + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
