"use client";

import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    id: 1,
    question: "Is 2D animation effective for B2B sales?",
    answer:
      " Yes. B2B buyers also want clarity and speed. Animation simplifies complex solutions and grabs attention better than documents or slides.",
  },
  {
    id: 2,
    question: "How long should a 2D animation be for a sales pitch?",
    answer:
      "Ideally between 30 to 90 seconds. Short enough to hold attention, long enough to cover the core message.",
  },
  {
    id: 3,
    question: "What kind of software or services can benefit from this?",
    answer:
      "Any product that’s hard to explain in words—SaaS tools, automation software, consulting frameworks, and even fintech services",
  },
  {
    id: 4,
    question:
      "Do 2D animations work on social media platforms for lead generation?",
    answer:
      "Yes. Short animations are shareable and often outperform text ads on platforms like LinkedIn and Instagram.",
  },
  {
    id: 5,
    question: "Can I customize the animation for different target audiences?",
    answer:
      "Absolutely. You can tweak the script, characters, or color themes to match each audience segment.",
  },
  {
    id: 6,
    question: "Is it expensive to create a good 2D animation?",
    answer:
      "It depends on length and style. But even a simple, well-scripted animation can bring more ROI than a traditional brochure or deck.",
  },
];

export default function FaqAccordion6() {
  return (
    <div className={styles["rajanna"]}>
      <div className={`${styles["container55"]} my-5`}>
        <div className="text-center mb-4">
          <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
        </div>

        {/* Ensure Bootstrap JS is loaded in _app.tsx for collapse to work */}
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
