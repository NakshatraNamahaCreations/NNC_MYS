"use client";
import Link from "next/link";
import styles from "./PricingSection.module.css";
import { FaArrowRight } from "react-icons/fa";

const plans = [
  {
    title: "Starter Website Package",
    desc: "Ideal for small businesses, professionals, and early-stage startups looking to establish an online presence.",
    price: "₹9,999",
    icon: "/images/tech/mobile.png",
    variant: "blue",
  },
  {
    title: "Business Website Package",
    desc: "Designed for growing businesses that need better visibility, structured content, and SEO-ready pages.",
    price: "₹14,999",
    icon: "/images/tech/web.png",
    variant: "purple",
    popular: true,
  },
  {
    title: "Advanced Website Package",
    desc: "Suitable for businesses requiring detailed service pages, stronger branding, and expansion-ready structure",
    price: "₹24,999",
    icon: "/images/tech/web-apps.png",
      variant: "blue",
  },
];

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Pick Your Plan</h2>
      <p className={styles.subheading}>
        Simple pricing designed for different stages of your business
      </p>

      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`${styles.card} ${styles[plan.variant]} ${
              plan.popular ? styles.popular : ""
            }`}
          >
            {plan.popular && <span className={styles.badge}>Most Popular</span>}

            <div className={styles.iconWrap}>
              <img src={plan.icon} alt={plan.title} />
            </div>

            <h3>{plan.title}</h3>
            <p className={styles.desc}>{plan.desc}</p>

            <div className={styles.priceBox}>
              <span>Starting from</span>
              <strong>{plan.price}</strong>
            </div>

           <Link href="/contact-us" className={styles.contactBtn}>
  Contact <FaArrowRight />
</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
