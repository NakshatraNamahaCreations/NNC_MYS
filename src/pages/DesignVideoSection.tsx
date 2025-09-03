import React from "react";
import styles from "./DesignVideoSection.module.css";
import {
  LuListTodo,
  LuRocket,
  LuUserCheck,
  LuUserRound,
  LuLightbulb,
} from "react-icons/lu";

type Phase = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
};

const designPhases: Phase[] = [
  {
    title: "End-to-End Support",
    description:
      "Every step of the video production process is managed with care and precision. From planning and scripting to editing and final delivery, we ensure the process is smooth and aligned with your expectations, saving you time and effort.",
    icon: <LuListTodo size={40} className={styles["section-icon"]} />,
    color: "blue",
  },
  {
    title: "Custom Solutions",
    description:
      "We create videos that reflect your business goals and engage your target audience effectively. By understanding your unique requirements, we deliver videos that truly represent your brand’s identity and purpose.",
    icon: <LuRocket size={40} className={styles["section-icon"]} />,
    color: "blue",
  },
  {
    title: "Experienced Professionals",
    description:
      "Our team of skilled experts ensures high-quality production at every stage. With years of experience, we deliver visually appealing and meaningful videos that communicate your message clearly and professionally.",
    icon: <LuUserCheck size={40} className={styles["section-icon"]} />,
    color: "blue",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Our primary focus is understanding your business objectives and unique requirements. We work closely with you to ensure every aspect of the video aligns with your vision and goals. This collaborative process allows us to create content that not only looks professional but also effectively communicates your message to your target audience.",
    icon: <LuUserRound size={40} className={styles["section-icon"]} />,
    color: "blue",
  },
  {
    title: "Creative Vision",
    description:
      "We focus on producing videos that inspire and inform, creating a strong and memorable impact. Every video is designed to communicate your brand’s message effectively, ensuring it connects with the audience on a meaningful level.",
    icon: <LuLightbulb size={40} className={styles["section-icon"]} />,
    color: "blue",
  },
];

export default function DesignVideoSection() {
  return (
    <div className={styles["phase-section-wrapper"]}>
      <h2 className={styles["phase-section-title"]}>Our App Development Phases</h2>
      <div className={styles["phase-section-grid"]}>
        {designPhases.map((item, idx) => (
          <div className={styles["phase-section-card"]} key={idx}>
            <div className={styles["phase-section-icon"]}>{item.icon}</div>
            <h4 className={styles["phase-section-heading"]}>{item.title}</h4>
            <p className={styles["phase-section-description"]}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
