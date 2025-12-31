"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [

    {
    q: "What does a website development company do?",
    a: "A website development company designs, builds, and maintains websites that help businesses establish an online presence, attract users, and generate enquiries. This includes planning, design, development, testing, and ongoing support to ensure the website performs reliably."
  },
  {
    q: "How long does it take to develop a website?",
    a: "The timeline depends on the scope, number of pages, and functionality required. A basic business website usually takes a few weeks, while more detailed or custom website development projects may take longer based on requirements and approvals."
  },
    {
    q: "Will my website be mobile-friendly and responsive?",
    a: "Yes. All our website development projects follow a mobile-first approach to ensure your website works smoothly across mobiles, tablets, and desktops. Responsive design is essential for user experience and search visibility."
  },
    {
    q: "Do you provide SEO-friendly website development?",
    a: "Yes. Our website development process includes SEO-friendly structure, clean code, fast loading performance, and proper page hierarchy. This helps search engines understand your website better and supports long-term visibility."
  },
       {
    q: "Can you redesign or improve an existing website?",
    a: "Absolutely. We offer website redesign and improvement services to enhance performance, usability, and appearance. Whether you need layout updates, speed optimization, or structural improvements, we can help modernize your website"
  },
  {
    q: "Will I be able to manage and update my website easily?",
    a: "Yes. We build websites that are easy to manage and update. Based on your requirements, we provide simple content management options so you can handle basic updates without technical difficulty."
  },
    {
    q: "Do you offer ongoing website maintenance and support?",
    a: "Yes. We provide website maintenance and support services to keep your site secure, updated, and running smoothly. This includes performance monitoring, updates, and technical assistance when needed"
  },
    {
    q: "How do I get started with your website development services?",
    a: "Getting started is simple. You can book a free consultation through the contact form, and our team will understand your requirements and guide you through the website development process step by step."
  },
   

];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<section className={styles.faqSection}>

  <div className={styles.faqWrapper}>
        <div className={styles.header}>
      <span className={styles.tag}>FAQs</span>
      <h2>
        Frequently Asked Questions
      </h2>
    </div>

    <div className={styles.faqList}>
      {faqs.map((item, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <button
            className={styles.question}
            onClick={() => toggleFAQ(index)}
          >
            {item.q}
            <span className={styles.icon}>+</span>
          </button>

          <div className={styles.answer}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
