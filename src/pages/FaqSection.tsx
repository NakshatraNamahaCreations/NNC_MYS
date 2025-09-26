"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// ---------- Types ----------
type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [

  {
    question: "What types of websites do companies in Mysore develop?",
    answer: "Website development companies in Mysore build corporate websites, e-commerce platforms, landing pages, portfolio sites, blogs, and web applications."
  },
  {
    question: "Do website developers in Mysore provide SEO-friendly solutions?",
    answer: "Yes. Most Mysore-based agencies follow modern SEO practices, ensuring optimized site structures, faster loading, and mobile responsiveness."
  },
  {
    question: "Can Mysore website developers customize designs for my brand?",
    answer: "Absolutely. They create custom UI/UX designs to align with your brand’s identity and provide a consistent look across all devices."
  },
  {
    question: "Do website development companies in Mysore offer maintenance and support?",
    answer: "Yes. Many agencies offer post-launch support including updates, bug fixes, backups, and performance monitoring."
  },
  {
    question: "How much does it cost to build a website in Mysore?",
    answer: "The cost depends on factors such as the type of website, number of pages, integrations, and design complexity. Most agencies provide customized quotes."
  },
  {
    question: "How long does it take to develop a website in Mysore?",
    answer: "A basic website typically takes 3–4 weeks, while more complex e-commerce or web applications may take 2–3 months depending on features and revisions."
  },
  {
    question: "Can Mysore agencies integrate third-party tools like payment gateways or CRMs?",
    answer: "Yes. Most website development companies in Mysore are experienced in integrating CRMs, ERPs, payment systems, and other third-party APIs."
  },


];


// ---------- Component ----------
const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqSection2}>
          <div className={styles.faqSection1}>
            <h3>FREQUENTLY ASKED QUESTION&apos;S</h3>
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
                  <span className={styles.icon}>
                    {activeIndex === i ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === i && (
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Queries Section */}

    </>
  );
};

export default FaqSection;
