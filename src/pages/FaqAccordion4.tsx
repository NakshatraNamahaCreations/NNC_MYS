"use client";

import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    id: 1,
    question: "What type of businesses benefit most from mobile apps?",
    answer:
      "Any business that interacts with customers or has a distributed team—retail, logistics, healthcare, education, services—can benefit from a mobile app.",
  },
  {
    id: 2,
    question: "How much does it cost to develop a mobile app?",
    answer:
      "Costs vary based on complexity, features, and platforms, but simple apps start around ₹1.5L–₹3L, while more advanced solutions can go upwards of ₹10L.",
  },
  {
    id: 3,
    question: "Are there low-code or no-code platforms to build business apps?",
    answer:
      "Yes, platforms like Glide, Zoho Creator, and Appgyver allow businesses to build internal apps with minimal coding.",
  },
  {
    id: 4,
    question:
      "Should I invest in a mobile app or just optimize my website for mobile?",
    answer:
      "That depends on your goals. If you need features like offline access, push notifications, or deep device integration, an app is the way to go. For basic access, a mobile site may suffice.",
  },
  {
    id: 5,
    question: "How can I measure if the app is improving business operations?",
    answer:
      "Track KPIs like response time, sales conversion rate, task completion time, and customer retention before and after the app’s launch.",
  },
  {
    id: 6,
    question: "What if my customers don’t want to download an app?",
    answer:
      "That’s a fair concern. In such cases, ensure your website is mobile-optimized and consider building a Progressive Web App (PWA) as a lighter alternative.",
  },
];

export default function FaqAccordion4() {
  return (
    <div className={styles["rajanna"]} >
      <div className={`${styles["container55"]} my-5`}>
        <div className="text-center mb-4">
          <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
        </div>

        {/* Uses Bootstrap's accordion classes (make sure Bootstrap JS is loaded in _app.tsx) */}
        <div className="accordion accordion-flush" id="faqAccordion">
          {faqs.map((faq) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header" id={`flush-heading-${faq.id}`}>
                <button
                  className={`accordion-button ${faq.id !== 1 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse-${faq.id}`}
                  aria-expanded={faq.id === 1}
                  aria-controls={`flush-collapse-${faq.id}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`flush-collapse-${faq.id}`}
                className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
                aria-labelledby={`flush-heading-${faq.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
