"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Data ----------
const faqs = [

  { id: 1, question: "What topics does the Nakshatra Namaha Creations blog cover?",
    answer: "Our blog covers insights on website and mobile app development, digital marketing, UI/UX trends, SEO, 2D animation, and business tech strategies." },
  { id: 2, question: "Who writes the content for the blog?",
    answer: "Our articles are written by in-house experts and industry professionals with real-world experience in design, development, and marketing." },
  { id: 3, question: "How often is the blog updated with new content?",
    answer: "We regularly publish new blogs to keep our readers informed about the latest industry trends, tech tools, and project case studies." },
  { id: 4, question: "Can I request a blog topic or contribute as a guest writer?",
    answer: "Yes, we welcome suggestions and guest post inquiries. Please contact us through our website or email us your idea for consideration." },
  { id: 5, question: "Are your blogs beginner-friendly or more technical?",
    answer: "We offer a mix of both. Some articles break down complex concepts for beginners, while others provide advanced strategies for professionals." },
  { id: 6, question: "How can I stay updated with your latest blog posts?",
    answer: "You can bookmark our blog page or follow us on Instagram and LinkedIn where we share new article updates and insights." },

];

// ---------- Component ----------
function BlogsFaq() {
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

export default BlogsFaq;
