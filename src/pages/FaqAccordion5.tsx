"use client";

import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    id: 1,
    question: "What does it mean to have a mobile-optimized website?",
    answer:
      "A mobile-optimized website adjusts its design and functionality to perform well on smaller screens. This includes responsive layout, faster load times, and simplified navigation.",
  },
  {
    id: 2,
    question: "How do I test if my site is mobile-friendly?",
    answer:
      "You can use tools like Google’s Mobile-Friendly Test, or open your site on multiple devices and screen sizes to check layout, speed, and usability.",
  },
  {
    id: 3,
    question: "Does mobile optimization affect SEO?",
    answer:
      "Yes. Google prioritizes mobile versions of websites in its ranking system. A mobile-friendly site boosts visibility in search results",
  },
  {
    id: 4,
    question: "Why do mobile users bounce more on non-optimized sites?",
    answer:
      "Poor design, unreadable text, and hard-to-click buttons lead to frustration. This causes users to leave the site quickly, increasing bounce rate.",
  },
  {
    id: 5,
    question: "How can I make my site load faster on mobile?",
    answer:
      "Compress images, reduce unused scripts, enable caching, and use a content delivery network (CDN) to speed up mobile performance.",
  },
  {
    id: 6,
    question: "Is mobile optimization important for small businesses?",
    answer:
      "Absolutely. Many users discover small businesses via search or social media on their phones. A mobile-optimized website helps convert that interest into action.",
  },
];

export default function FaqAccordion5() {
  return (
    <div className={styles["rajanna"]}>
      <div className={`${styles["container55"]} my-5`}>
        <div className="text-center mb-4">
          <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
        </div>

        {/* Make sure Bootstrap JS is loaded in _app.tsx for collapse behavior */}
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
