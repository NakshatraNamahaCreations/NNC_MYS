// src/pages/ReasonsToChooseSoftware.tsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./ReasonsToChooseSoftware.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Card = {
  title: string;
  description: string;
  iconTag: React.ReactNode;
  color?: string;
};

const cards: Card[] = [
  {
    title: "Best skilled developers",
    description:
      "At Nakshatra Namaha Creations, our expert developers create customized software tailored to your business needs. They carefully analyze provided data and meticulously develop each module to deliver feature-rich solutions for your company.",
    iconTag: <i className="fa-solid fa-laptop-code" />,
  },
  {
    title: "Robust security",
    description:
      "We provide highly secure and fully customized software, conducting thorough security checks during testing to assess risks. At Nakshatra Namaha Creations, security remains our top priority in software development.",
    iconTag: <i className="fa-solid fa-shield-halved" />,
  },
  {
    title: "100% Transparency",
    description:
      "At Nakshatra Namaha Creations, we believe transparency is key to success. We keep the software development process open to clients, discussing and implementing any suggestions or requirements promptly.",
    iconTag: <i className="fa-solid fa-eye" />,
  },
  {
    title: "24/7 Maintenance and support",
    description:
      "The support team at Nakshatra Namaha Creations is always available to assist you throughout your software journey, even after delivery. Our developers not only provide guidance but also ensure complete software maintenance. Any issues are promptly addressed and resolved to enhance performance and accelerate your business growth.",
    iconTag: <i className="fa-solid fa-headset" />,
  },
];

export default function ReasonsToChooseSoftware() {
  return (
    <div className={styles["software-feature-grid"]}>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`${styles["software-feature-card"]} ${
            styles[`color-${card.color?.toLowerCase?.() || "default"}`]
          }`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles["software-feature-header"]}>
            <div className={styles["software-icon-wrap"]}>{card.iconTag}</div>
            <h3>{card.title}</h3>
          </div>
          <p className={styles["software-card-text"]}>{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
