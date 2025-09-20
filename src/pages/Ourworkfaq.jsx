"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Data ----------
const faqs = [
 { id: 1, question: "What types of projects does Nakshatra Namaha Creations typically showcase?",
    answer: "Our portfolio includes mobile apps, websites, eCommerce platforms, branding videos, UI/UX designs, and digital marketing campaigns across various industries." },
  { id: 2, question: "How do you ensure the quality of the projects you deliver?",
    answer: "Each project undergoes multiple rounds of testing, internal reviews, and client feedback to ensure it meets both technical standards and business objectives." },
  { id: 3, question: "Can I request a demo or walkthrough of a past project?",
    answer: "Yes, we’re happy to walk you through select case studies to demonstrate how we approached challenges and delivered solutions." },
  { id: 4, question: "Are the designs and code fully custom for each project?",
    answer: "Absolutely. Every solution we build is tailored to our client’s brand, audience, and functional requirements—no templates or shortcuts." },
  { id: 5, question: "Do you work with startups as well as large companies?",
    answer: "Yes, our portfolio includes startups, SMEs, and established enterprises. We scale our approach to fit your budget and goals." },
  { id: 6, question: "How is performance measured after project completion?",
    answer: "We track performance through analytics, user engagement, conversion rates, and client feedback to ensure long-term success." },
];

// ---------- Component ----------
function Ourworkfaq() {
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

export default Ourworkfaq;
