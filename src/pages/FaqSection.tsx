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
    question: "What services does Nakshatra Namaha Creations provide?",
    answer: "We offer website development, mobile app development, UI/UX design, digital marketing, eCommerce solutions, video production, and SEO services tailored for businesses."
  },
  {
  question: "Do you serve clients only in Mysore or across India?",
    answer: "While we're based in Mysore, we work with clients across India and globally through digital collaboration tools and remote project management."
  },
  {
  question: "What makes Nakshatra Namaha Creations different from other agencies?",
    answer: "We combine creative design with robust development, ensuring that each solution we build is user-friendly, performance-driven, and aligned with your business goals." 
  },
  {
   question: "Can I hire your team for just design or just development?",
    answer: "Yes, we offer modular services—whether you need only UI/UX design, development support, or marketing services, we’re flexible to your needs."
  },
  {
   question: "Do you provide ongoing support after project delivery?",
    answer: "Yes, we offer ongoing support, maintenance, and performance monitoring to keep your digital products secure, fast, and updated."
  },
  {
  question: "How do I get started with a project at Nakshatra Namaha Creations?",
    answer: "You can contact us via phone, email, or our contact form. We’ll schedule a discovery call to understand your needs and provide a custom proposal. "
  },
  {
 question: "Do website development companies in Mysore offer maintenance and support?",
    answer: "Yes. Many agencies offer post-launch support including updates, bug fixes, backups, and performance monitoring."
  
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
