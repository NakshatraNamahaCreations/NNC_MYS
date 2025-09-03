"use client";

import styles from "./FaqAccordion.module.css";

type FAQ = { id: number; question: string; answer: string };

const faqs: FAQ[] = [
  { id: 1, question: "What’s considered a “fast” website in 2025?", answer: "Ideally, your site should load within 2 seconds. Google recommends aiming for under 2.5 seconds for key page metrics." },
  { id: 2, question: "How can I test my website speed?", answer: "Tools like Google PageSpeed Insights, GTmetrix, or Lighthouse help you evaluate load time, server response, and performance scores." },
  { id: 3, question: "What are common speed bottlenecks on websites?", answer: "Unoptimized images, excessive JavaScript, third-party plugins, poor hosting, and lack of caching are major culprits." },
  { id: 4, question: "Does speed optimization help SEO?", answer: "Absolutely. Google uses site speed as a ranking factor, especially on mobile. Faster sites tend to perform better in organic results." },
  { id: 5, question: "Will improving speed increase conversions right away?", answer: "It often does. Many businesses report improved bounce rates and better conversion rates after resolving performance issues." },
  { id: 6, question: "Can I improve speed without redesigning the whole site?", answer: "Yes. Simple fixes like image compression, better hosting, reducing unused scripts, and enabling caching can yield major gains." },
];

export default function FaqAccordion3() {
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
