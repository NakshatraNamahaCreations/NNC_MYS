"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: "What SEO services do you offer in Mysore?",
    answer:
      "We provide on-page SEO, off-page SEO, technical SEO audits, local SEO optimization, keyword research, and content optimization services.",
  },
  {
    id: 2,
    question: "How do you improve Google rankings for websites?",
    answer:
      "We follow white-hat techniques including keyword optimization, high-quality content, backlink strategies, and website structure improvements.",
  },
  {
    id: 3,
    question: "Can you help with local SEO for businesses in Mysuru?",
    answer:
      "Yes, we optimize Google Business Profiles, manage local citations, and target location-based keywords to improve visibility in Mysuru.",
  },
  {
    id: 4,
    question: "Do you conduct SEO audits for existing websites?",
    answer:
      "Absolutely. We perform technical SEO audits to identify issues related to speed, crawlability, indexing, and content gaps.",
  },
  {
    id: 5,
    question: "Is content optimization part of your SEO strategy?",
    answer:
      "Yes, we improve meta tags, structure headings, optimize images, and create keyword-rich content to enhance page relevance and engagement.",
  },
  {
    id: 6,
    question: "Do you provide SEO reports and analytics tracking?",
    answer:
      "Yes, we offer monthly SEO performance reports that cover keyword rankings, organic traffic, backlink status, and conversion metrics.",
  },
];

// ---------- Component ----------
function SeoServiceFaq() {
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

export default SeoServiceFaq;
