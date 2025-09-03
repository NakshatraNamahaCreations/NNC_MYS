"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  Variants,
  useReducedMotion,
} from "framer-motion";
import styles from "./Specializations.module.css";

/* Easing as cubic-bezier tuples (TS-safe with motion-dom typings) */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.45, 0, 0.55, 1];

/* Slides */
type Slide = {
  img: string;
  title: string;
  blurb: string;
  href: string;
  cta?: string;
};

const slides: Slide[] = [
  {
    img: "/images/banner15.jpg",
    title: "Custom Web DevelopmENT",
    blurb:
      "We stand as the best web application development company in Bangalore SeekNEO...",
    href: "/custom-web-development.html",
  },
  {
    img: "/images/our1.jpg",
    title: "Graphics desIGN",
    blurb:
      "SeekNEO — graphic designing company in Bangalore providing a wide range of design services...",
    href: "/graphic-Design-Company.html",
  },
  {
    img: "/images/our2.jpg",
    title: "CMS website DevelopmENT",
    blurb:
      "Have a highly professional CMS website designer in Bangalore at a very reasonable price indeed!...",
    href: "/cms-website-development.html",
  },
  {
    img: "/images/our3.jpg",
    title: "Search engine OptimizatION",
    blurb:
      "Our SEO experts help you boost your brand’s potential and organic visibility…",
    href: "/search-engine-optimization.html",
  },
  {
    img: "/images/our4.jpg",
    title: "Android Development",
    blurb:
      "No.1 Mobile Application Development Company located in Bangalore. We are a team of passionate app developers…",
    href: "/android-apps-bangalore.html",
  },
  {
    img: "/images/our5.jpg",
    title: "Ionic app DevelopmENT",
    blurb:
      "Best Mobile App Development Company. Ionic framework with reusable UI components…",
    href: "/ionic-app-development-company.html",
  },
  {
    img: "/images/our6.jpg",
    title: "E-commerce solutiONS",
    blurb:
      "Create ingenious and secure ecommerce platforms with SeekNEO’s expert team…",
    href: "/ecommerce-solutions-bangalore.html",
  },
  {
    img: "/images/ecom.jpg",
    title: "IOS App DevelopmENT",
    blurb:
      "No.1 iOS app development team in Bangalore with dedicated engineers…",
    href: "/ios-apps-bangalore.html",
  },
];

/* Motion variants */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

const leftWrap: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const leftItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

const slideVariants: Variants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function Specializations() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

 useEffect(() => {
  if (paused) return;
  timerRef.current = setTimeout(next, 4200);
  return () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };
}, [index, paused]);


  return (
    <motion.section
      className={styles.section}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Left copy */}
          <motion.div
            className="col-lg-5"
            variants={leftWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p className={styles.kicker} variants={leftItem}>
              Our
            </motion.p>
            <motion.h2 className={styles.heading} variants={leftItem}>
              Specializati<span>ONS</span>
            </motion.h2>

            <motion.p className={styles.lead} variants={leftItem}>
              At Nakshatra Namaha Creations we have an unrivalled commitment to
              delivering world-class professional talent and staffing services to our
              clients. By building strong relationships, we work in partnership with
              our clients and business professionals to share our market insights and
              expertise locally and globally to provide an exceptional service.
            </motion.p>

            <motion.div variants={leftItem}>
              <Link
                href="/contact-us"
                className="btn btn-outline-light fw-bold text-uppercase px-4 py-2"
              >
                Request Quote !
              </Link>
            </motion.div>
          </motion.div>

          {/* Right slider card */}
          <div className="col-lg-7">
            <motion.div
              className={styles.frame}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              whileHover={{
                boxShadow:
                  "0 0 0 3px rgba(255,255,255,.25), 0 24px 60px rgba(0,0,0,.45)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: EASE_OUT }}
                >
                  <div className={styles.card}>
                    <div className={styles.imgBox}>
                      <motion.img
                        src={slides[index].img}
                        alt={slides[index].title}
                        initial={{ scale: 1.04 }}
                        animate={
                          prefersReduced ? { scale: 1.02 } : { scale: 1.08 }
                        }
                        transition={
                          prefersReduced
                            ? { duration: 0 }
                            : {
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: EASE_IN_OUT,
                              }
                        }
                      />
                    </div>

                    <motion.div
                      className={styles.copy}
                      key={`${index}-overlay`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: EASE_OUT, delay: 0.12 },
                      }}
                    >
                      <h3 className={styles.title}>{slides[index].title}</h3>
                      <p className={styles.blurb}>{slides[index].blurb}</p>
                      <Link
                        href={slides[index].href}
                        className="btn btn-light fw-bold text-uppercase"
                      >
                        {slides[index].cta ?? "Know More"}
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

           
          </div>
        </div>
      </div>
    </motion.section>
  );
}
