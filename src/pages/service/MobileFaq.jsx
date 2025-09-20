"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
 {
    id: 1,
    question: "What platforms do you support for mobile app development?",
    answer:
      "We build apps for Android, iOS, and cross-platform environments using frameworks like React Native and Flutter.",
  },
  {
    id: 2,
    question: "Can I integrate my app with existing backend systems?",
    answer:
      "Yes, we specialize in backend integrations including APIs, CRMs, payment gateways, and third-party services.",
  },
  {
    id: 3,
    question: "Do you provide UI/UX design for mobile apps?",
    answer:
      "Absolutely. Our in-house UI/UX team ensures your app is intuitive, user-friendly, and visually consistent with your brand.",
  },
  {
    id: 4,
    question: "Will the app be published on Google Play and Apple App Store?",
    answer:
      "Yes, we offer complete assistance with app submission, store compliance, and release on both Android and iOS platforms.",
  },
  {
    id: 5,
    question: "Can you develop apps with real-time features like chat or tracking?",
    answer:
      "Yes, we can implement real-time chat, live location tracking, notifications, and more depending on your requirements.",
  },
  {
    id: 6,
    question: "Do you provide ongoing support and app maintenance?",
    answer:
      "Yes, we offer long-term maintenance and support plans that include version updates, performance monitoring, and security patches.",
  },
];

// ---------- Component ----------
function MobileFaq() {
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

export default MobileFaq;
