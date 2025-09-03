// src/components/FaqAccordion.tsx
import styles from "./FaqAccordion.module.css";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  { id: 1, question: "What’s the most important feature in website design?", answer: "A good balance of user experience and branding. If people can navigate easily and the site reflects your brand well, you’re on the right track." },
  { id: 2, question: "How often should businesses update their website design?", answer: "Ideally every 2–3 years, or sooner if technology shifts, user behavior changes, or your business repositions." },
  { id: 3, question: "Can small businesses compete with big brands using good design?", answer: "Yes. A clean, fast, and professional site levels the playing field. It can give the impression of scale and trust—even on a budget." },
  { id: 4, question: "How does design affect SEO?", answer: "Design affects mobile-friendliness, page speed, content structure, and usability—all of which are SEO ranking factors." },
  { id: 5, question: "What tools are used in modern web design?", answer: "Popular tools include Figma, Adobe XD, Webflow, WordPress (with page builders), and front-end frameworks like Bootstrap or Tailwind CSS." },
  { id: 6, question: "Is it worth investing in professional design for a basic site?", answer: "Yes. Even a simple site can create a powerful impression if it’s thoughtfully designed and aligned with your audience’s expectations." },
];

export default function FaqAccordion() {
  return (
    <div className={styles.rajanna}>
      <div className={`${styles.container55} my-5`}>
        <div className="text-center mb-4">
          <h2 className={styles.sec_title}>Frequently Asked Questions (FAQ)</h2>
        </div>

        {/* Keep Bootstrap classes as-is (they’re global) */}
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
