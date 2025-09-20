"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: "What industries do you develop custom software for?",
    answer:
      "We create custom software for a variety of industries including healthcare, retail, logistics, education, finance, and manufacturing.",
  },
  {
    id: 2,
    question:
      "Can the software be integrated with third-party APIs and platforms?  ",
    answer:
      "Yes, we specialize in building software that seamlessly integrates with CRMs, ERPs, payment gateways, analytics platforms, and third-party APIs.",
  },
  {
    id: 3,
    question: "Do you offer cloud-based and on-premise software development?",
    answer:
      "Absolutely. We develop both cloud-native applications hosted on AWS, Azure, GCP, as well as on-premise solutions tailored to your infrastructure.",
  },
  {
    id: 4,
    question: "What security standards do you follow during software development?",
    answer:
      "We follow secure coding practices, use role-based access control, encryption protocols, and conduct code reviews and vulnerability assessments.",
  },
  {
    id: 5,
    question: "Can you develop multi-platform software solutions?",
    answer:
      "Yes. We build solutions that run across desktop, mobile, and web using cross-platform frameworks like Flutter, Electron, or React Native when needed.",
  },
  {
    id: 6,
    question: "How do you ensure the scalability of custom software?",
    answer:
      "Our software architecture is designed to scale. We use microservices, containerization, and database optimization techniques to support growing users and data loads.",
  },
];

// ---------- Component ----------
function SoftwareFaq() {
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

export default SoftwareFaq;
