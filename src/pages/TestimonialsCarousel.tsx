"use client";

import Image from "next/image";
import { useMemo } from "react";
import styles from "./TestimonialsCarousel.module.css";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ramesh Gowda",
    role: "Founder, Mysore AgroTech",
    rating: 5,
    text:
      "Nakshatra Namaha Creations built our complete website and mobile app for farmer services. The UI is clean, multilingual support works flawlessly, and their project management ensured we went live exactly as planned.",
    avatar: "/images/man.png",
  },
  {
    name: "Anjali Rao",
    role: "Marketing Head, Lavish Eventzz",
    rating: 5,
    text:
      "From branding to a full event booking platform, the team delivered beyond expectations. Their digital marketing strategy gave us strong local visibility on Google, and our customer inquiries doubled in just 3 months.",
    avatar: "/images/woman.png",
  },
  {
    name: "Vikram Shetty",
    role: "Operations Manager, The Mysore Oils",
    rating: 5,
    text:
      "Our e-commerce platform was seamlessly designed by Nakshatra Namaha Creations. The product catalog, checkout, and secure payment integration are smooth. Their support team is quick to resolve queries and keeps everything running stable.",
    avatar: "/images/man.png",
  },
  {
    name: "Shweta Nair",
    role: "HR Manager, Premium Movers Australia",
    rating: 4,
    text:
      "We needed a relocation services portal with booking and tracking features. Nakshatra Namaha Creations delivered a scalable solution with a sleek design. A few tweaks were needed post-launch, but the team was responsive and fixed them fast.",
    avatar: "/images/woman.png",
  },
  {
    name: "Abdul Rahman",
    role: "Director, Make My Documents",
    rating: 5,
    text:
      "The passport and visa service portal they developed is reliable and secure. Features like document uploads, status tracking, and payment gateway work perfectly. Clients find it user-friendly and professional.",
    avatar: "/images/man.png",
  },
  {
    name: "Neha Sharma",
    role: "Creative Head, Upskilliq Events",
    rating: 5,
    text:
      "Their graphic design and video production services helped us create impactful campaigns. From animations to social media creatives, the quality was consistent and aligned with our brand identity.",
    avatar: "/images/woman.png",
  },
  {
    name: "Karthik Reddy",
    role: "CEO, Sunshine Hospitality",
    rating: 5,
    text:
      "Nakshatra Namaha Creations built a custom room booking website for our hospitality business. The integration with payment systems and responsive design made it easier for our guests to book directly online.",
    avatar: "/images/man.png",
  },
  {
    name: "Priya Menon",
    role: "CFO, Coorg Eco Homes",
    rating: 5,
    text:
      "Their SEO and Google Ads campaign gave us measurable results. We saw a 65% increase in website traffic and significant boost in direct bookings. The transparency in reporting was much appreciated.",
    avatar: "/images/woman.png",
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className={styles.stars} aria-label={`${value} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`${styles.star} ${i < value ? styles.starFill : ""}`}
          aria-hidden
        >
          <path d="M10 1.6l2.5 5.1 5.7.8-4.1 4 1 5.9L10 15.8 4.9 17.4l1-5.9-4.1-4 5.7-.8L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {


  return (
    <article className={styles.card}>
      <div className={styles.profile}>
        <Image
          src={t.avatar}
          alt={t.name}
          width={44}
          height={44}
          className={styles.avatar}
        />
        <div className={styles.meta}>
          <h3 className={styles.name}>{t.name}</h3>
          <p className={styles.role}>Client • {t.role}</p>
        </div>
        <img
          src="/icons/quote.svg"
          alt=""
          aria-hidden
          className={styles.quoteMark}
        />
      </div>

    <p className={styles.text}>{t.text}</p>



      <Stars value={t.rating} />
    </article>
  );
}

export default function TestimonialsCarousel() {
  // duplicate arrays for seamless marquee
  const rowA = [...testimonials, ...testimonials];
  const rowB = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className={styles.section8}>
      <div className={styles.bg} />

      <div className="container">
        <h2 className={styles.sec8Heading}>Clients applaud us</h2>
        <p className={styles.sec8Text}>
          We’ve built websites and mobile apps that match our clients’ goals—here’s what
          they say about working with Nakshatra Namaha Creations.
        </p>

        {/* Row 1 – left-to-right */}
        <div className={styles.wrapper8}>
          <div className={`${styles.slider8} ${styles.isRunning}`}>
            <div className={`${styles.slidetrack8} ${styles.trackA}`}>
              {rowA.map((t, i) => (
                <div className={styles.slide8} key={`a-${i}-${t.name}`}>
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
                <br />
        {/* Row 2 – right-to-left */}
        <div className={styles.wrapper8}>
          <div className={`${styles.slider8} ${styles.isRunning}`}>
            <div className={`${styles.slidetrack8} ${styles.trackB}`}>
              {rowB.map((t, i) => (
                <div className={styles.slide8} key={`b-${i}-${t.name}`}>
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
