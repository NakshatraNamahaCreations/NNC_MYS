"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
  {
    id: 1,
    question: "Do you support both B2B and B2C ecommerce development?",
    answer:
      "Yes, we build tailored ecommerce platforms for both B2B and B2C models, including features like bulk ordering, user segmentation, and custom pricing.",
  },
  {
    id: 2,
    question: "Can I integrate multiple payment gateways into my ecommerce site?",
    answer:
      "Absolutely. We integrate gateways like Razorpay, Paytm, Stripe, and more to give your customers a secure and convenient checkout experience.",
  },
  {
    id: 3,
    question: "Do you offer inventory and order management solutions? ",
    answer:
      "Yes, we build ecommerce platforms with built-in or integrated inventory tracking, order status management, stock alerts, and supplier syncing.",
  },
  {
    id: 4,
    question: "Is the ecommerce website mobile-optimized?",
    answer:
      "All our ecommerce websites are fully responsive and optimized for mobile shopping experiences across Android and iOS devices.",
  },
  {
    id: 5,
    question: "Can you integrate analytics and customer tracking tools?",
    answer:
      "Yes, we integrate tools like Google Analytics, Facebook Pixel, and Hotjar to help you track user behavior and optimize conversions.",
  },
  {
    id: 6,
    question: "Do you provide multi-language or multi-currency options?",
    answer:
      "Yes, we support multi-language and multi-currency ecommerce setups to help you sell globally with localized content and payment options.",
  },
];

// ---------- Component ----------
function EcommerceFaq() {
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

export default EcommerceFaq;
