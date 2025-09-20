"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: "What types of websites do you develop?",
    answer:
      "We develop all kinds of websites including business sites, eCommerce stores, portfolio websites, CMS-based platforms, and custom web applications using technologies like WordPress, React, and Node.js.",
  },
  {
    id: 2,
    question: "Do you build mobile apps as well?",
    answer:
      "Yes, we develop Android, iOS, and cross-platform mobile apps using React Native and other modern frameworks based on your business requirements.",
  },
  {
    id: 3,
    question:
      "How long does it take to complete a typical web development project?",
    answer:
      "On average, a basic website can take 7–10 days. Larger or more complex websites may take 2–4 weeks depending on features, content, and revisions.",
  },
  {
    id: 4,
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer:
      "Absolutely. Every website we build is fully responsive for mobile devices and comes with essential SEO best practices like clean URLs, meta tags, and speed optimization.",
  },
  {
    id: 5,
    question: "Do you offer support and maintenance after launch?",
    answer:
      "Yes. We provide ongoing support packages that include updates, security monitoring, and content management after your site goes live.",
  },
  {
    id: 6,
    question: "What is your starting price for website development?",
    answer:
      "Our basic website development packages start from ₹14,499. Pricing varies based on design, features, number of pages, and platform.",
  },
];

// ---------- Component ----------
function ServicesFaq() {
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

export default ServicesFaq;
