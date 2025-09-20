"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: "What types of corporate videos do you produce?",
    answer:
      "We create a wide range of corporate videos including promotional videos, brand stories, explainer videos, testimonial videos, and event coverage.",
  },
  {
    id: 2,
    question: "Do you offer scriptwriting and concept development?",
    answer:
      "Yes, we assist with complete pre-production services including scriptwriting, storyboarding, and creative direction based on your goals.",
  },
  {
    id: 3,
    question:
      "Can the video be tailored for different platforms like YouTube, Instagram, and LinkedIn?",
    answer:
      "Absolutely. We optimize videos in various aspect ratios and formats suitable for social media platforms, websites, or internal corporate use.",
  },
  {
    id: 4,
    question: "Do you provide voiceovers and background music?",
    answer:
      "Yes, we offer multilingual voiceovers and royalty-free background music to align with your brand tone and target audience.",
  },
  {
    id: 5,
    question: "Can we include drone shots or event coverage in our corporate video?",
    answer:
      "Yes, we provide drone videography and multi-camera coverage for events and large-scale productions upon request.",
  },
  {
    id: 6,
    question:
      "Will we be able to review and suggest changes during the editing phase?",
    answer:
      "Definitely. We provide draft previews for client feedback and revisions before final delivery to ensure the video aligns with your vision.",
  },
];

// ---------- Component ----------
function VideoFaq() {
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

export default VideoFaq;
