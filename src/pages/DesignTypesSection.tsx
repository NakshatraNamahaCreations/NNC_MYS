// src/pages/services/DesignTypesSection.tsx
import React from "react";
import styles from "./DesignTypesSection.module.css";
import { FaCode } from "react-icons/fa";
import { MdBugReport, MdRocketLaunch } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import type { IconType } from "react-icons";

type Item = {
  title: string;
  description: string;
  Icon: IconType;
};

const designTypes: Item[] = [
  {
    title: "Development & Coding",
    description:
      "Skilled developers build a robust and scalable app, focusing on performance and seamless functionality.",
    Icon: FaCode,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We rigorously test the app for bugs, security and usability, guaranteeing a smooth user experience.",
    Icon: MdBugReport,
  },
  {
    title: "Launch & Support",
    description:
      "After launch, we provide ongoing support and updates to keep your app current and effective.",
    Icon: MdRocketLaunch,
  },
  {
    title: "Requirement Gathering & Analysis",
    description:
      "We collaborate with you to understand business goals and user needs, ensuring clarity in requirements.",
    Icon: BsClipboardCheck,
  },
  {
    title: "Design & Prototyping",
    description:
      "Our team creates intuitive designs and prototypes, providing a visual roadmap for the app's look and feel.",
    Icon: TbLayoutDashboard,
  },
];

export default function DesignTypesSection() {
  return (
    <div className={styles["design-types-wrapper"]}>
      <h2 className={styles["design-types-title"]}>
        Our App Development Process In Mysore
      </h2>

      <div className={styles["design-types-grid"]}>
        {designTypes.map(({ title, description, Icon }, idx) => (
          <div className={styles["design-types-card"]} key={idx}>
            <div className={styles["design-types-icon"]}>
              <Icon size={40} />
            </div>
            <h3 className={styles["design-types-heading"]}>{title}</h3>
            <p className={styles["design-types-description"]}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
