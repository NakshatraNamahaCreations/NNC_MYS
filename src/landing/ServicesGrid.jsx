"use client";

import styles from "./ServicesGrid.module.css";

const services = [
  {
    title: "Website Design & Development",
    desc: "Crafting high-performance websites that blend design, technology, and conversion strategy.",
    icon: "/images/tech/ott.png",
    color: "purple",
  },
  {
    title: "Pay Per Click",
    desc: "Driving instant, measurable growth through precision-targeted paid advertising.",
    icon: "/images/app-development.png",
    color: "teal",
    dark: true,
  },
  {
    title: "OTT",
    desc: "Engaging diverse audiences with impactful, data-driven ads across OTT platforms.",
    icon: "/images/cms.png",
    color: "orange",
  },
  {
    title: "DV360",
    desc: "Advanced programmatic intelligence delivering scalable, data-driven results.",
    icon: "/images/online-store.png",
    color: "yellow",
  },
  {
    title: "META",
    desc: "Amplifying brand presence through performance-led Facebook & Instagram advertising.",
    icon: "/images/crossplat.png",
    color: "blue",
  },
  {
    title: "Social Media Marketing",
    desc: "Building meaningful connections and lasting brand loyalty through storytelling.",
    icon: "/images/vendor.png",
    color: "green",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What We Offer</h2>
      <p className={styles.subheading}>
        Comprehensive digital solutions designed to elevate your brand.
      </p>

      <div className={styles.grid}>
        {services.map((item, i) => (
         <div className={styles.card}>

            <img
              src={item.icon}
              alt={item.title}
              className={`${styles.icon} ${styles[item.color]}`}
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
