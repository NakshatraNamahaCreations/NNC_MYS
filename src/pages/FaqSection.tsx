"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Types ----------
type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What are the benefits of hiring a mobile app development company in Bangalore?",
    answer: "Bangalore offers skilled developers, advanced infrastructure, and innovative solutions for businesses of all sizes.",
  },
  {
    question: "What industries do mobile app development companies in Bangalore cater to?",
    answer: "They serve industries like healthcare, e-commerce, education, logistics, real estate, fintech, and more.",
  },
  {
    question: "Do mobile app development companies in Bangalore offer post-launch support?",
    answer: "Yes, most companies provide regular updates, bug fixes, maintenance, and performance monitoring.",
  },
  {
    question: "How can I ensure my app idea remains confidential?",
    answer: "Sign an NDA (Non-Disclosure Agreement) with the company before sharing your project details.",
  },
  {
    question: "Can app development companies in Bangalore integrate advanced features like AI and IoT?",
    answer: "Yes, leading companies specialize in implementing AI, IoT, AR/VR, and other emerging technologies.",
  },
];


// ---------- Component ----------
const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqSection2}>
          <div className={styles.faqSection1}>
            <h3>FREQUENTLY ASKED QUESTION&apos;S</h3>
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
                  <span className={styles.icon}>
                    {activeIndex === i ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === i && (
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Queries Section */}

    </>
  );
};

export default FaqSection;
