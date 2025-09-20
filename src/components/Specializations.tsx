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

/* Easings */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.45, 0, 0.55, 1];

/* Section motion variants */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

/* Left text animation */
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
    title: "Custom Web Development",
    blurb: "We stand as the best web app development company in Bangalore...",
    href: "/custom-web-development.html",
  },
  {
    img: "/images/our4.jpg",
    title: "Android Development",
    blurb: "No.1 Mobile App Development Company located in Bangalore...",
    href: "/android-apps-bangalore.html",
  },
  {
    img: "/images/our6.jpg",
    title: "Ecommerce Solutions",
    blurb: "Create secure, high-performance ecommerce platforms...",
    href: "/ecommerce-solutions-bangalore.html",
  },
  {
    img: "/images/ecom.jpg",
    title: "iOS App Development",
    blurb: "No.1 iOS app development team in Bangalore...",
    href: "/ios-apps-bangalore.html",
  },
];

/* Right slider animation variants */
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
        <div className="row g-4 align-items-center">
          {/* LEFT: Intro Text */}
          <motion.div
            className="col-lg-5"
            variants={leftWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* <motion.p className={styles.kicker} variants={leftItem}>
              Our
            </motion.p> */}
            <motion.h2 className={styles.heading} variants={leftItem}>
              Specializati<span>ONS</span>
            </motion.h2>
            <motion.p className={styles.lead} variants={leftItem}>
              At Nakshatra Namaha Creations, we deliver world-class solutions in
              web, app, and software development. By combining deep expertise
              with a client-first approach, we help brands thrive in the digital
              age.
            </motion.p>
            <motion.div variants={leftItem}>
              <Link
                href="/contact-us"
                className="btn btn-outline-light fw-bold text-uppercase px-4 py-2"
              >
                Request Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: Rotating Image Banner */}
          <div className="col-lg-7">
            <motion.div
              className={styles.heroSlider}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className={styles.heroSlide}
                  style={{ backgroundImage: `url(${slides[index].img})` }}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: EASE_OUT }}
                >
                  <div className={styles.overlay} />
                  <div className={styles.heroContent}>
                    <h3>{slides[index].title}</h3>
                    <p>{slides[index].blurb}</p>
                    <Link
                      href={slides[index].href}
                      className="btn btn-light fw-bold text-uppercase"
                    >
                      {slides[index].cta ?? "Know More"}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots Navigation */}
              <div className={styles.heroDots}>
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${
                      i === index ? styles.dotActive : ""
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
