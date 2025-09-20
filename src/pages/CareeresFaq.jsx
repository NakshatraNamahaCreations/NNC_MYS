"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question:
      "What kind of roles does Nakshatra Namaha Creations usually hire for?",
    answer:
      "We hire for a variety of roles including web development, mobile app development, UI/UX design, digital marketing, animation, and content creation.",
  },
  {
    id: 2,
    question: "How can I apply for a job at Nakshatra Namaha Creations?",
    answer:
      "You can view open positions on our Careers page and submit your resume through the application form or email it to our HR team directly.",
  },
  {
    id: 3,
    question: "What is the interview process like?",
    answer:
      "Our process typically includes a screening call, a technical or skill-based assessment, and a final interview to evaluate cultural fit and project alignment.",
  },
  {
    id: 4,
    question:
      "Does Nakshatra Namaha Creations offer remote or hybrid job opportunities?",
    answer:
      "Yes, based on the role and project requirements, we offer flexible work options including on-site, hybrid, and remote positions.",
  },
  {
    id: 5,
    question: "What is the work culture like at Nakshatra Namaha Creations?",
    answer:
      "We foster a collaborative and growth-focused environment where creativity, learning, and ownership are encouraged at all levels.",
  },
  {
    id: 6,
    question: "Are there internship opportunities for students or freshers?",
    answer:
      "Absolutely. We offer internships in design, development, marketing, and content, with the possibility of full-time placement after successful completion.",
  },
];

// ---------- Component ----------
function CareeresFaq() {
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

export default CareeresFaq;
