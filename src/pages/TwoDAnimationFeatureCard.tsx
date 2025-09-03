// src/components/TwoDAnimationFeatureCard.tsx
"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  LuMessagesSquare,
  LuLayoutTemplate,
  LuFileText,
  LuUser,
  LuClapperboard,
  LuAudioWaveform,
  LuCircleCheck,
  LuInbox,
} from "react-icons/lu";
import styles from "./TwoDAnimationFeatureCard.module.css";

type Card = {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  color?: string;
};

const cards: Card[] = [
  {
    icon: <LuMessagesSquare className={styles["twoD-section-icon"]} />,
    title: "Idea Discussion",
    paragraph: "Every great animation begins with a conversation. In this stage, we sit down with you to fully understand your vision, goals, and expectations. It’s all about aligning your ideas with our creative approach so the final animation reflects your brand and message.",
    color: "blue",
  },
  {
    icon: <LuLayoutTemplate className={styles["twoD-section-icon"]} />,
    title: "Concept Development",
    paragraph:
      "Once the vision is clear, our team creates initial concepts, storyboards, and rough sketches. This stage helps transform abstract ideas into a tangible direction, allowing you to visualize the flow of the animation before production begins.",
    color: "blue",
  },
  {
    icon: <LuFileText className={styles["twoD-section-icon"]} />,
    title: "Script Writing",
    paragraph: "A strong animation needs a solid foundation. We craft engaging scripts that communicate your story effectively, ensuring every word supports the visuals and drives your message forward with clarity and impact.",
    color: "blue",
  },
  {
    icon: <LuUser className={styles["twoD-section-icon"]} />,
    title: "Character Design",
    paragraph: "Characters bring personality and relatability to your animation. Our artists design unique characters that match your brand’s style and connect emotionally with your audience, making your story memorable.",
    color: "blue",
  },
  {
    icon: <LuClapperboard className={styles["twoD-section-icon"]} />,
    title: "Animation Creation",
    paragraph:
      "This is where the magic happens. We bring your concepts and characters to life using professional animation techniques, ensuring smooth movements, vibrant visuals, and a polished final look that captures attention.",
    color: "blue",
  },
  {
    icon: <LuAudioWaveform className={styles["twoD-section-icon"]} />,
    title: "Audio Integration",
    paragraph:
      "Great animation is more than just visuals—it’s an experience. We add carefully selected voiceovers, background music, and sound effects that elevate the narrative and make the animation immersive and engaging.",
    color: "blue",
  },
  {
    icon: <LuCircleCheck className={styles["twoD-section-icon"]} />,
    title: "Review and Feedback",
    paragraph: "Your input is valuable at every stage. We share progress drafts and incorporate your feedback to refine the animation, making sure the final output matches your expectations perfectly.",
    color: "blue",
  },
  {
    icon: <LuInbox className={styles["twoD-section-icon"]} />,
    title: "Final Delivery",
    paragraph: "Once everything is polished and approved, we deliver the completed animation in your preferred format, ready to be published across websites, social platforms, or presentations.",
    color: "blue",
  },
];

// Framer Motion variants with proper typing + easing (cubic-bezier array)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // ≈ easeOut
    },
  }),
};

const colorClass = (c?: string) =>
  styles[`color-${(c ?? "default").toLowerCase()}`] ?? "";

export default function TwoDAnimationFeatureCard() {
  return (
    <>
      <div className={styles["twoD-section-title"]}>
        <h2>Our 2D Animation Process: Animating Ideas with Excellence</h2>
        <p>
          Our 2D Animation Process transforms your ideas into engaging and
          precise visuals. Each step is crafted to ensure a smooth workflow,
          delivering captivating animations. We focus on bringing your vision to
          life with creativity and professionalism.
        </p>
      </div>

      <div className={styles["twoD-feature-grid"]}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`${styles["twoD-feature-card"]} ${colorClass(
              card.color
            )}`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles["twoD-feature-header"]}>
              <h3>{card.title}</h3>
              <div className={styles["twoD-icon-wrap"]}>{card.icon}</div>
            </div>
            <p className={styles["twoD-card-text"]}>{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
