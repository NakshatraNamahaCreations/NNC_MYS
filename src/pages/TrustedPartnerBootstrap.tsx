// components/SpecializationsMarquee.tsx
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* Reuse your existing modules */
import leftStyles from "../components/Specializations.module.css";

import rightStyles from "./TrustedPartnerBootstrap.module.css";

/* Left-side animations (same as Specializations) */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
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

type CardProps = { title: string; text: string; ariaHidden?: boolean };

function Card({ title, text, ariaHidden }: CardProps) {
  return (
    <article
      className={rightStyles.trustedPartner__card}
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      <div className={rightStyles.trustedPartner__cardTitle}>{title}</div>
      <div className={rightStyles.trustedPartner__cardCopy}>{text}</div>
    </article>
  );
}

export default function TrustedPartnerBootstrap() {
  return (
    <motion.section
      className={`position-relative overflow-hidden bg-white`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* subtle colored glow from the right-side module */}
      <div className={rightStyles.trustedPartner__glow} />

      <div className="container py-5 py-lg-5">
        <div className="row g-4 align-items-start">
          {/* LEFT: from Specializations */}
          <motion.div
            className="col-lg-5"
            variants={leftWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* <motion.p className={leftStyles.kicker} variants={leftItem}>
              Our
            </motion.p> */}

            <motion.h2 className={leftStyles.heading} variants={leftItem}>
              Our Specializati<span>ons</span>
            </motion.h2>

            <motion.p className={leftStyles.lead} variants={leftItem}>
             Since 2015, our team has been shaping digital experiences, serving over 890+ clients across 4 countries. As the best mobile app development company in Mysore, we offer a comprehensive range of services to help businesses grow in the online space. As the best website development company in Mysore, we specialize in everything from website design and web applications to mobile app development. We provide user-friendly, high-performing solutions tailored to meet your unique needs. Whether you are looking to enhance your web presence or improve customer engagement, our solutions ensure practical and effective results for your business. Partner with us to explore new possibilities for your business online.
            </motion.p>

            <motion.div variants={leftItem}>
              <Link
                href="/contact-us"
                className="btn btn-outline-dark fw-bold text-uppercase px-4 py-2"
              >
                Request Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: from TrustedPartnerBootstrap (two marquee columns) */}
          <div className="col-lg-7">
            <div className={`d-grid gap-3 ${rightStyles.trustedPartner__marqueeWrap}`}>
              {/* Left list (scrolls up) */}
              <div
                className={`${rightStyles.trustedPartner__marquee} ${rightStyles.trustedPartner__marqueeUp}`}
                aria-label="Key strengths"
              >
                <div className={rightStyles.trustedPartner__stack}>
                  <Card title="Custom Solutions" text="Tailored engineering to match your business goals." />
                  <Card title="Responsive Support" text="Ongoing, reliable post-launch assistance." />
                  <Card title="Innovation at Every Step" text="We keep you ahead with the latest tech." />
                  {/* duplicates for seamless loop */}
                  <Card title="Custom Solutions" text="Tailored engineering to match your business goals." ariaHidden />
                  <Card title="Responsive Support" text="Ongoing, reliable post-launch assistance." ariaHidden />
                  <Card title="Innovation at Every Step" text="We keep you ahead with the latest tech." ariaHidden />
                </div>
              </div>

              {/* Right list (scrolls down) */}
              <div
                className={`${rightStyles.trustedPartner__marquee} ${rightStyles.trustedPartner__marqueeDown}`}
                aria-label="Proof points"
              >
                <div className={rightStyles.trustedPartner__stack}>
                  <Card title="Strategic SEO Mastery" text="Search-friendly builds that boost visibility." />
                  <Card title="Engineering Expertise" text="Experienced professionals crafting solutions." />
                  <Card title="Proven Track Record" text="Years of success built on client satisfaction." />
                  {/* duplicates for seamless loop */}
                  <Card title="Strategic SEO Mastery" text="Search-friendly builds that boost visibility." ariaHidden />
                  <Card title="Engineering Expertise" text="Experienced professionals crafting solutions." ariaHidden />
                  <Card title="Proven Track Record" text="Years of success built on client satisfaction." ariaHidden />
                </div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </motion.section>
  );
}
