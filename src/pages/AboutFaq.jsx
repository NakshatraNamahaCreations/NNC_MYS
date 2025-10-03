"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    question: "Why choose Nakshatra Namaha Creations for website development services in Mysore?",
    answer:
      "We started our journey in 2015 in Bangalore and expanded our services to Mysore in November 2024. With years of experience and hundreds of successful projects, we focus on building SEO-friendly, user-focused websites that help businesses in Mysore grow their online presence and achieve real results.",
  },
  {
    question: "Do you provide mobile app development services in Mysore along with website solutions?",
    answer:
      "Yes. We are a full-service mobile app development company in Mysore, offering Android app development, iOS app development, Flutter app development, and React Native app development alongside professional website solutions.",
  },
  {
    question: "Can you develop e-commerce websites for startups and small businesses in Mysore?",
    answer:
      "Absolutely. We specialize in e-commerce website development in Mysore, delivering secure, scalable, and conversion-focused online stores that help businesses increase sales and improve the customer experience.",
  },
  {
    question: "What values guide your company culture and client relationships?",
    answer:
      "Transparency, collaboration, creativity, and accountability form the foundation of how we work—with both our team and our clients.",
  },
  {
    question: "Do you offer custom app development services for unique business needs?",
    answer:
      "Yes. As a leading custom mobile app development company in Mysore, we design and develop tailored apps to meet the specific requirements of startups, enterprises, and niche industries.",
  },
   {
    question: "What technologies do you use for website and app development?",
    answer:
      "Our experts use modern technologies like React JS, Flutter, React Native, and advanced e-commerce platforms to ensure every project is future-ready, scalable, and easy to manage.",
  },
    {
    question: "Do you offer post-launch support and maintenance for websites and apps?",
    answer:
      "Yes. We provide end-to-end support and maintenance including bug fixes, performance optimization, security updates, and ongoing enhancements to ensure your platforms run smoothly after launch.",
  },
    {
    question: "How can Nakshatra Namaha Creations help my business grow online?",
    answer:
      "We combine SEO-friendly website development in Mysore with high-performing mobile app development in Mysore to improve online visibility, engage customers effectively, and drive higher conversions. ",
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
