"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: "Why should I choose WordPress for my business website?",
    answer:
      "WordPress is flexible, scalable, and easy to manage. It supports custom design, SEO optimization, and plugin integrations to meet your unique business needs.",
  },
  {
    id: 2,
    question: "Do you offer custom WordPress theme development?",
    answer:
      "Yes, we design and develop fully custom WordPress themes tailored to your brand, functionality requirements, and user experience goals.",
  },
  {
    id: 3,
    question: "Can you redesign an existing WordPress website?",
    answer:
      "Absolutely. We can revamp your current WordPress website with a modern design, improved performance, mobile responsiveness, and updated content structure.",
  },
  {
    id: 4,
    question: "Is the WordPress website SEO-friendly?",
    answer:
      "Yes. We build SEO-ready WordPress sites with clean code, fast load times, structured data, and optimized meta tags to help your site rank better on search engines.",
  },
  {
    id: 5,
    question: "Will I be able to update content on my own after the site is live?",
    answer:
      "Yes. We provide a user-friendly admin panel and training so you can easily update text, images, blogs, and products without needing technical knowledge.",
  },
  {
    id: 6,
    question: "Do you provide WordPress maintenance and support?",
    answer:
      "Yes, we offer ongoing WordPress maintenance, backups, plugin updates, security monitoring, and technical support to keep your website running smoothly.",
  },
];

// ---------- Component ----------
function WordpressFaq() {
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

export default WordpressFaq;
