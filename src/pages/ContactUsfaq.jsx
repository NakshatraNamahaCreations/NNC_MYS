"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: "What is the best way to reach Nakshatra Namaha Creations?",
    answer:
      "You can contact us via phone at +91-9900566466, email us at info@nakshatranamahacreations.in, or use the contact form on this page for quick responses.",
  },
  {
    id: 2,
    question: "What are your working hours?",
    answer:
      "We are available from Monday to Saturday, 10:00 AM to 6:30 PM IST. For urgent queries, please drop an email and we’ll respond as soon as possible.",
  },
  {
    id: 3,
    question: "Do I need an appointment before visiting your office?",
    answer:
      "Yes, we recommend scheduling an appointment so that the right team member is available to assist you efficiently.",
  },
  {
    id: 4,
    question: "Where is your office located?",
    answer:
      "Our office is located at SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block, Mysuru – 570008.",
  },
  {
    id: 5,
    question: "Can I get a free consultation for my project?",
    answer:
      "Yes, we offer an initial consultation to understand your requirements and suggest the best approach. Use the form on this page to request a callback.",
  },
  {
    id: 6,
    question: "How soon can I expect a response after contacting you?",
    answer:
      "We usually respond within 24 business hours. For quicker support, you can reach us directly on our contact number.",
  },
];

// ---------- Component ----------
function ContactUsfaq() {
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

export default ContactUsfaq;
