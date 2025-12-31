"use client";

import styles from "./PremiumGrid.module.css";

const data = [
  {
    title: "Complete Website Development Expertise",
    desc:
      "We handle every aspect of website development, from planning and design to development and deployment. This ensures consistency, better performance, and a smooth experience throughout the project.",
    image: "/images/tech/webapp.jpg",
    type: "wide",
  },
  {
    title: "Client-Focused Collaboration",
    desc:
      "Our website development process is built around clear communication and collaboration. We work closely with businesses to ensure requirements are understood and implemented accurately.",
    type: "narrow",
  },
  {
    title: "Data Security & Confidentiality",
    desc:
      "We follow strict security practices to protect business data and project information. Every website development project is handled with complete confidentiality and responsible data management.",
    type: "narrow",
  },
  {
    title: "Responsive Communication & Delivery",
    desc:
      "Timely communication and reliable execution are core to our website development services. We ensure quick responses and steady progress without compromising quality.",
    image: "/images/tech/webapp1.jpg",
    type: "wide",
    reverse: true,
  },
  {
    title: "Performance-Driven Website Development",
    desc:
      "Our websites are built to perform efficiently across devices and platforms. We focus on speed, usability, and scalability to support long-term business growth. Fast-loading and optimized websites, Mobile-friendly and user-focused design and Future-ready development standards.",
   image: "/images/tech/webapp2.jpg",
    type: "full",
  },
];

export default function PremiumGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
       5 Factors That Make Us a Trusted Website Development Company
      </h2>

      <div className={styles.grid}>
        {data.map((item, i) => (
          <div
            key={i}
            className={`${styles.card} 
              ${styles[item.type]} 
              ${item.reverse ? styles.reverse : ""}`}
          >
            {item.image && (
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
              </div>
            )}

            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
