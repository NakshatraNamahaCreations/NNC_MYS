"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: 'What types of 2D animation services do you offer?',
    answer:
      'We offer explainer videos, animated product demos, corporate animations, educational videos, animated ads, and visual storytelling content for social media and websites.',
  },
  {
    id: 2,
    question: 'Do you provide scriptwriting and voiceover along with animation?',
    answer:
      'Yes, we handle the full process—scriptwriting, storyboarding, animation, voiceover recording, sound design, and final delivery in your preferred format.',
  },
  {
    id: 3,
    question: 'Can animations be customized to match my brand identity?',
    answer:
      'Absolutely. We tailor every animation to match your brand guidelines, including color palette, tone of voice, typography, and visual style.',
  },
  {
    id: 4,
    question: 'Which industries benefit from 2D animation?',
    answer:
      '2D animation works well across industries—technology, healthcare, education, e-commerce, real estate, finance, and startups use it for marketing and communication.',
  },
  {
    id: 5,
    question: 'Do you deliver animations in multiple formats for web and social media?',
    answer:
      'Yes. We export animations in various formats like MP4, MOV, and GIF, optimized for YouTube, Instagram, LinkedIn, and your website.',
  },
  {
    id: 6,
    question: 'Can I request revisions after the first draft is delivered?',
    answer:
      'Yes, our packages include structured revision rounds to make sure the final animation aligns perfectly with your vision and business goals.',
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
