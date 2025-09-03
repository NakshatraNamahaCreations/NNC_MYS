"use client";

import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    id: 1,
    question:
      "What services does Nakshatra Namaha Creations offer as a Web Development Company in Mysore?",
    answer:
      "We provide web development, e-commerce solutions, mobile app development, UI/UX design and ongoing website maintenance to meet a variety of business needs.",
  },
  {
    id: 2,
    question:
      "What is the typical timeline for website development projects at Nakshatra Namaha Creations?",
    answer:
      "The timeline varies based on project size and requirements, but most websites are completed within a few weeks to a few months.",
  },
  {
    id: 3,
    question:
      "How does Nakshatra Namaha Creations approach website security during development?",
    answer:
      "We focus on securing your website by using SSL certificates, conducting regular security checks and following best practices for safe coding.",
  },
  {
    id: 4,
    question:
      "Can Nakshatra Namaha Creations create a website that aligns with our brand identity?",
    answer:
      "Yes, we ensure your website reflects your brand through custom design, branding elements and a seamless user experience.",
  },
  {
    id: 5,
    question:
      "What is the cost structure for web development services at Nakshatra Namaha Creations.?",
    answer:
      "Costs depend on the scope of the project. We offer different pricing options to fit your budget while maintaining quality service.",
  },
];

export default function FaqAccordion() {
  return (
    <div className={styles["rajanna"]}>
      <div className={`${styles["container55"]} my-5`}>
        <div className="text-center mb-4">
          <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
        </div>

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
