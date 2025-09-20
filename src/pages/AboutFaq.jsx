"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    question: "What is the core mission of Nakshatra Namaha Creations?",
    answer:
      "Our mission is to empower businesses through creative technology—delivering design, development, and marketing solutions that drive real growth.",
  },
  {
    question: "How long has Nakshatra Namaha Creations been in business?",
    answer:
      "We've been serving clients across industries with digital solutions for several years, building a reputation for reliability, creativity, and results.",
  },
  {
    question: "What industries does your team specialize in?",
    answer:
      "We work with a wide range of industries, including retail, healthcare, education, real estate, logistics, and professional services.",
  },
  {
    question: "What values guide your company culture and client relationships?",
    answer:
      "Transparency, collaboration, creativity, and accountability form the foundation of how we work—with both our team and our clients.",
  },
  {
    question: "Is your team in-house or do you outsource work?",
    answer:
      "We have a dedicated in-house team of developers, designers, marketers, and project managers to ensure quality control and efficient communication.",
  },
  {
    question: "How does Nakshatra Namaha Creations stay updated with industry trends?",
    answer:
      "Our team actively follows emerging trends in tech and design, attends workshops and conferences, and continuously experiments with modern tools and frameworks.",
  },
];

// ---------- Component ----------
function AboutFaq() {
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

export default AboutFaq;
