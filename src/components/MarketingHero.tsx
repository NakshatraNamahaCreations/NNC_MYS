"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants, useReducedMotion } from "framer-motion";
import styles from "./MarketingHero.module.css";

type Props = {
  imgSrc?: string;
  imgAlt?: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const imageWrapVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  show:   { opacity: 1, scale: 1,     y: 0,  transition: { duration: 0.5, ease: EASE } },
};

export default function MarketingHero({
  imgSrc = "/images/group.jpg",
  imgAlt = "Creative wings",
}: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      className={styles.section}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Title */}
          <div className="col-12">
            <motion.h2 className={styles.title} variants={itemUp}>
              Meet Our Passionate <br />
              <span className={styles.gradient}>Creative &amp; Development Team</span>
            </motion.h2>
          </div>

          {/* Left image */}
          <div className="col-lg-6">
            <motion.div
              className={styles.imgWrap}
              variants={imageWrapVariants}
              whileHover={
                prefersReduced
                  ? {}
                  : { y: -6, rotate: -0.4, boxShadow: "0 24px 60px rgba(0,0,0,.18)" }
              }
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={980}
                height={820}
                priority
                className="img-fluid"
              />
            </motion.div>
          </div>

          {/* Right copy */}
          <div className="col-lg-6">
            <motion.p
              className={styles.lead}
              variants={itemUp}
              transition={{ duration: 0.45, ease: EASE, delay: 0.05 }}
            >
              Check out our diverse collection of websites professionally designed and developed by our expert team. We are committed to completing projects within
              the stipulated timeline, ensuring full satisfaction for our clients. Browse through our portfolio and see firsthand how quality defines our Website Development
              Services. At Nakshatra Namaha Creations, we take pride in being the best website development company in Mysore, offering tailored services to help businesses
              establish a strong online presence. As the best website design company in Mysore, we specialize in creating visually appealing and user-friendly websites that
              resonate with your brand identity. Additionally, as the best mobile app development company in Mysore, we extend our expertise to crafting innovative,
              responsive mobile applications. Let us help you bring your vision to life with cutting-edge web and mobile development solutions in Mysore!
            </motion.p>

            <motion.div
              className="mt-4"
              variants={itemUp}
              whileHover={prefersReduced ? {} : { x: 2 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <Link href="/digital-marketing-company" className={styles.cta}>
                <span>Know more</span>
                <motion.svg
                  className={styles.arrow}
                  width="26"
                  height="12"
                  viewBox="0 0 26 12"
                  aria-hidden="true"
                  whileHover={prefersReduced ? {} : { x: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <path d="M0 6h23" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M18 1l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
