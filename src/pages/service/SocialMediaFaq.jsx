"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
    {
    id: 1,
    question:
      "What platforms do you cover in your social media marketing services?",
    answer:
      "We offer marketing services across major platforms including Facebook, Instagram, LinkedIn, Twitter, and YouTube.",
  },
  {
    id: 2,
    question: "Do you create custom content for each platform?",
    answer:
      "Yes, we tailor posts, reels, ads, and stories to suit each platform's format and audience for maximum engagement.",
  },
  {
    id: 3,
    question: "Can you help with ad campaigns and paid promotions?",
    answer:
      "Absolutely. We create and manage paid ad campaigns with strategic targeting, creative design, and conversion tracking.",
  },
  {
    id: 4,
    question: "Do you provide analytics and performance reports?",
    answer:
      "Yes, we offer detailed reports that track engagement, reach, follower growth, and conversions to measure ROI.",
  },
  {
    id: 5,
    question:
      "Can social media marketing improve my local business visibility?",
    answer:
      "Yes, with location-based targeting, hashtags, and community engagement, we help boost your visibility within Mysore and nearby areas.",
  },
  {
    id: 6,
    question: "Is graphic design included in your social media packages?",
    answer:
      "Yes, we include professional graphic design for posts, banners, carousel ads, and more as part of our packages.",
  },
];

// ---------- Component ----------
function SocialMediaFaq() {
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

export default SocialMediaFaq;
