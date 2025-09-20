"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
 {
    id: 1,
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) focuses on the visual elements of a product like buttons and layout, while UX (User Experience) is about how users interact with the product to ensure a smooth and intuitive journey.",
  },
  {
    id: 2,
    question: "Do you conduct user research before designing?",
    answer:
      "Yes, we conduct stakeholder interviews, user persona creation, and competitor analysis to ensure the UI/UX design is data-driven and aligns with user expectations.",
  },
  {
    id: 3,
    question: "Can you redesign my existing website or app interface?",
    answer:
      "Absolutely. We specialize in UI/UX redesigns that modernize interfaces, improve usability, and enhance engagement without compromising brand identity.",
  },
  {
    id: 4,
    question: "Do you create design prototypes before development?",
    answer:
      "Yes, we deliver interactive prototypes and wireframes using tools like Figma, Adobe XD, and InVision so clients can test flows before development begins.",
  },
  {
    id: 5,
    question: "Is your design approach mobile responsive?",
    answer:
      "Yes, we design interfaces that adapt seamlessly to mobile, tablet, and desktop screens using responsive and adaptive UI techniques.",
  },
  {
    id: 6,
    question: "Do you follow accessibility and usability standards?",
    answer:
      "We follow WCAG guidelines to ensure accessibility for all users, and we focus on usability testing to identify and fix friction points in the user journey.",
  },
];

// ---------- Component ----------
function UiuxFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((curr) => (curr === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqSection2}>
        <div className={styles.faqSection1}>
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
        </div>

        <div className={styles.faqRight}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <div
                className={styles.faqHeader}
                onClick={() => toggleFAQ(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleFAQ(i)}
              >
                <h3>
                  <span className={styles.number}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {faq.question}
                </h3>
                <span className={styles.icon}>{activeIndex === i ? "−" : "+"}</span>
              </div>

              {activeIndex === i && (
                <p className={styles.faqAnswer}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UiuxFaq;
