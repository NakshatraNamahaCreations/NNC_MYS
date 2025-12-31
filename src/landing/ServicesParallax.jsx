"use client";

import { FiPlus } from "react-icons/fi";
import styles from "./ServicesParallax.module.css";

const services = [
  {
    title: "Domain & Hosting Services",
    desc: "We provide reliable domain and hosting solutions that ensure your website remains fast, secure, and accessible at all times. Our infrastructure is designed to support business websites with consistent uptime and performance.",
    img: "/images/tech/webdev1.jpg",
  },
  {
    title: "Web Design & Development",
    desc: "Our web design and development services focus on building professional, responsive, and conversion-ready websites. Every website is developed with clean structure, modern UI, and performance-driven functionality.",
    img: "/images/tech/seo.jpg",
  },
  {
    title: "Website Maintenance & Support",
    desc: "We offer ongoing website maintenance to keep your site updated, secure, and running smoothly. Our support ensures your website stays reliable as your business grows.",
     img: "/images/tech/webdev2.jpg",
  },
];

export default function ServicesParallax() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        {/* <span className={styles.kicker}>OUR AWESOME SERVICES</span> */}
        <h2 className={styles.heading}>
           Business Focused <br /> Digital Solutions

        </h2>

        <div className={styles.grid}>
          {services.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.img} alt={item.title} />

                {/* CENTER ICON */}
                <div className={styles.iconWrap}>
                  <FiPlus className={styles.icon} />
                </div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
