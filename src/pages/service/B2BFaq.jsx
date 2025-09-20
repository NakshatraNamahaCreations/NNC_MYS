"use client";

import React, { useState } from "react";
import styles from "../FaqSection.module.css";

// ---------- Data ----------
const faqs = [
{
    id: 1,
    question: "What makes B2B marketing different from B2C marketing?",
    answer:
      "B2B marketing focuses on building long-term relationships and trust between businesses, using strategies like account-based marketing, email campaigns, and LinkedIn outreach, whereas B2C marketing typically aims for quicker conversions and broader emotional appeal.",
  },
  {
    id: 2,
    question: "How can LinkedIn outreach help generate qualified B2B leads?",
    answer:
      "LinkedIn is a powerful platform for B2B lead generation. Our team builds optimized profiles, sends strategic connection requests, and nurtures leads through personalized messages to convert them into meetings or demos.",
  },
  {
    id: 3,
    question: "What kind of email marketing strategies are used in B2B?",
    answer:
      "We implement drip email campaigns, cold email outreach, retargeting sequences, and personalized content strategies aimed at key decision-makers to keep your brand top of mind and drive engagement.",
  },
  {
    id: 4,
    question: "Can you create industry-specific B2B content strategies?",
    answer:
      "Yes. We analyze your target audience, competition, and buyer journey to craft tailored B2B content strategies including blogs, whitepapers, case studies, and webinars that resonate with industry stakeholders.",
  },
  {
    id: 5,
    question: "Do you offer lead scoring and CRM integration?",
    answer:
      "Absolutely. We can implement lead scoring models and integrate your CRM (like HubSpot, Zoho, or Salesforce) to streamline lead tracking, qualification, and nurturing across your marketing pipeline.",
  },
  {
    id: 6,
    question: "What KPIs do you focus on for B2B marketing success?",
    answer:
      "We measure KPIs like cost per lead (CPL), marketing qualified leads (MQLs), conversion rates, engagement metrics, email open/click rates, and overall ROI to evaluate and optimize every campaign.",
  },
];

// ---------- Component ----------
function B2BFaq() {
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

export default B2BFaq;
