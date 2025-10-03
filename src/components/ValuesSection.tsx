"use client";

import React from "react";
import Image from "next/image";
import styles from "./ValuesSection.module.css";

interface CardData {
  icon: string;      // image path
  title: string;
  text: string;
}

const cards: CardData[] = [

  {
    icon: "/images/mobile (1).png",
    title: "Website Development in Mysore",
    text: "Websites professionally designed to display your business clearly.",
  },
    {
    icon: "/images/icons/shopping (1).png",
    title: "Our E-commerce Website Development in Mysore",
    text: "Services offers safe and scalable online stores that encourage the growth of your business and the trust of your customers.",
  },
    {
    icon: "/images/icons/responsive-design.png",
    title: "Custom Web Application Development in Mysore",
    text: "It is again a challenge and knowing this we aim to create dynamic web applications as per your requirements and workflow for your customer satisfaction.",
  },
    {
    icon: "/images/icons/wordpress.png",
    title: "WordPress Website Development in Mysore",
    text: "The development of flexible and easy-to-manage websites that are based on the most popular CMS in the world.",
  },
    {
    icon: "/images/icons/atom.png",
    title: "React JS Website Development in Mysore",
    text: "We design and build high-performance websites using React JS, delivering super-fast loading speeds, highly interactive interfaces, and future-ready architecture that scales with your business needs.",
  },
    {
    icon: "/images/icons/search-engine-optimization.png",
    title: "SEO-Friendly Website Design in Mysore",
    text: "We create and optimize websites with SEO-focused design and clean coding practices, improving search engine visibility, driving more organic traffic, and supporting your brand’s online growth.",
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className={styles.wrap} aria-label="Mission, Values, Approach">
        <h2 className="d-flex justify-content-center align-items-center ">
  Our Website Development Expertise
</h2>
<br />

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <article className={styles.card} key={i}>
            <div className={styles.icon}>
              <Image
                src={card.icon}
                alt={card.title}
                fill
                sizes="44px"
              />
            </div>
            <h6 className={styles.title}>{card.title}</h6>
            <p className={styles.text}>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
