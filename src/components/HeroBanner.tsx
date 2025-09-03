// components/HeroBanner.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./HeroBanner.module.css";
import Link from "next/link";
import { Playfair_Display, Montserrat } from "next/font/google";
import { AnimatePresence, motion, Variants } from "framer-motion";

/* TS-safe bezier tuples (avoid typing errors) */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.45, 0, 0.55, 1];

/* Slide container variants (crossfade + slight scale) */
const slideVariants: Variants = {
  enter:  { opacity: 0, scale: 1.03 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE_IN_OUT } },
  exit:   { opacity: 0, scale: 1.03, transition: { duration: 0.6, ease: EASE_IN_OUT } },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-serif",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

type Slide = {
  image: string;
  eyebrow?: string;
  title: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  cta2Label?: string;
  cta2Href?: string;
};

const navLabels = [
  "MOBILE APP DEVELOPMENT",
  "UI/UX DESIGN",
  "SOFTWARE DEVELOPMENT",
  "QUALITY ASSURANCE",
  "DEPLOYMENT & SUPPORT",
];

const slides: Slide[] = [
  {
    image: "/images/banner12.jpg",
    eyebrow: "MOBILE APP DEVELOPMENT",
    title: "Transforming Ideas into High-Impact Mobile Apps",
    subtext:
      "We build intuitive Android and iOS apps that deliver seamless user experiences and drive business growth. From concept to launch, we make your app stand out.",
    ctaLabel: "Know more",
    ctaHref: "/services/mobile-app-development",
    cta2Label: "Contact us",
    cta2Href: "/contact-us",
  },
  {
    image: "/images/banner13.jpg",
    eyebrow: "UI/UX DESIGN",
    title: "Designs That Delight and Engage",
    subtext:
      "Our design team crafts visually stunning, user-friendly interfaces that enhance usability, improve engagement, and strengthen your brand identity.",
    ctaLabel: "View portfolio",
    ctaHref: "/portfolio",
    cta2Label: "Get started",
    cta2Href: "/contact-us",
  },
  {
    image: "/images/banner16.jpg",
    eyebrow: "SOFTWARE DEVELOPMENT",
    title: "Custom Software Tailored to Your Vision",
    subtext:
      "We engineer robust web and enterprise software solutions designed for scalability, security, and performance to meet your unique business needs.",
    ctaLabel: "Our solutions",
    ctaHref: "/services/software-development",
    cta2Label: "Let's discuss",
    cta2Href: "/contact-us",
  },
  {
    image: "/images/banner21.jpg",
    eyebrow: "QUALITY ASSURANCE",
    title: "Reliable Testing for a Flawless Product",
    subtext:
      "Our QA experts ensure bug-free, high-performance applications through rigorous testing processes, covering functionality, security, and user experience.",
    ctaLabel: "See QA process",
    ctaHref: "/services/quality-assurance",
    cta2Label: "Talk to us",
    cta2Href: "/contact-us",
  },
  {
    image: "/images/banner17.jpg",
    eyebrow: "DEPLOYMENT & SUPPORT",
    title: "Seamless Launch and Ongoing Support",
    subtext:
      "We handle hassle-free deployment and provide continuous maintenance to keep your software secure, optimized, and future-ready.",
    ctaLabel: "Learn more",
    ctaHref: "/services/deployment-support",
    cta2Label: "Request a quote",
    cta2Href: "/contact-us",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  // auto-rotate
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className={`${styles.hero} ${playfair.variable} ${montserrat.variable}`}>
      {/* ONE active slide with AnimatePresence */}
      <div className={styles.trackWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.slide}
            style={{ backgroundImage: `url(${slides[current].image})` }}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className={styles.overlay} />

            <div className={styles.container}>
              {slides[current].eyebrow && (
                <motion.p
                  className={styles.eyebrow}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: EASE_OUT }}
                >
                  {slides[current].eyebrow}
                </motion.p>
              )}

              <motion.h1
                className={styles.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: EASE_OUT }}
              >
                {slides[current].title}
              </motion.h1>

              {slides[current].subtext && (
                <motion.p
                  className={styles.copy}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: EASE_OUT }}
                >
                  {slides[current].subtext}
                </motion.p>
              )}

              <motion.div
                className={styles.ctas}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE_OUT }}
              >
                {slides[current].ctaHref && slides[current].ctaLabel && (
                  <Link href={slides[current].ctaHref} className={`${styles.btn} ${styles.btnPrimary}`}>
                    {slides[current].ctaLabel}
                  </Link>
                )}
                {slides[current].cta2Href && slides[current].cta2Label && (
                  <Link href={slides[current].cta2Href} className={`${styles.btn} ${styles.btnGhost}`}>
                    {slides[current].cta2Label}
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation (unchanged) */}
      <nav className={styles.bottomNav} aria-label="Hero navigation">
        {navLabels.map((label, i) => (
          <button
            key={label}
            onClick={() => setCurrent(i)}
            aria-current={current === i ? "true" : "false"}
            className={`${styles.navItem} ${current === i ? styles.activeNav : ""}`}
          >
            <span className={styles.navLabel}>{label}</span>
          </button>
        ))}
      </nav>
    </section>
  );
}
