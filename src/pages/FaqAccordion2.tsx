"use client";

import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    id: 1,
    question: "Isn’t custom development more expensive than using templates?",
    answer:
      "Yes, initially. But in the long run, you’ll save money on plugin licenses, rebuilds, and scalability issues. Think of it like building a long-term asset, not a quick fix.",
  },
  {
    id: 2,
    question: "How long does it take to build a custom website?",
    answer:
      "Depending on the complexity, most custom websites take between 4 to 12 weeks, including design, development, and testing. The timeline can be shorter for smaller builds and longer for integrations-heavy platforms.",
  },
  {
    id: 3,
    question: "Do I need technical knowledge to manage a custom website?",
    answer:
      "No. A good developer will integrate a CMS (like WordPress, Strapi, or custom admin panel) so that you can manage content easily without coding",
  },
  {
    id: 4,
    question:
      "What’s the difference between a custom website and one built on WordPress?",
    answer:
      "While WordPress can be used for custom sites too, many WordPress themes are prebuilt. A true custom website is built from scratch or with a lightweight framework, giving you full design and code control.",
  },
  {
    id: 5,
    question: "Is custom development better for e-commerce websites?",
    answer:
      "If you're planning a unique shopping experience or expecting growth, yes. Platforms like Shopify are great for simple needs, but custom development gives you more flexibility with cart logic, payment gateways, and integrations.",
  },
  {
    id: 6,
    question: "Can I start small and scale later with a custom website?",
    answer:
      "Absolutely. One of the biggest advantages is that you can build a strong core and add modules as needed—without starting over.",
  },
];

export default function FaqAccordion2() {
  return (
    <div className={styles["rajanna"]}>
      <div className={`${styles["container55"]} my-5`}>
        <div className="text-center mb-4">
          <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
        </div>

        {/* Keep Bootstrap classes; add module class alongside when you want */}
        <div
          className={`accordion accordion-flush ${styles["accordionWrap"]}`}
          id="faqAccordion"
        >
          {faqs.map((faq) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header" id={`flush-heading-${faq.id}`}>
                <button
                  className={`accordion-button ${
                    faq.id !== 1 ? "collapsed" : ""
                  } ${styles["bottom-btn"]}`}
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
                className={`accordion-collapse collapse ${
                  faq.id === 1 ? "show" : ""
                }`}
                aria-labelledby={`flush-heading-${faq.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className={`accordion-body ${styles["accordionBody"]}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
