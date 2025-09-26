"use client";

import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import WebDesignServices from "@/pages/WebDesignService";
import CTASection from "@/pages/CTASection";
import InfoSection from "@/components/InfoSection";
// import MyBreadcrumb from "@/components/MyBreadcrumb";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";

import styles from "./AboutUs.module.css";
import AboutFaq from "./AboutFaq";

const CounterWithLottie = dynamic(
  () => import("@/components/CounterWithLottie"),
  { ssr: false }
);

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What is the core mission of Nakshatra Namaha Creations?",
    answer:
      "Our mission is to empower businesses through creative technology—delivering design, development, and marketing solutions that drive real growth.",
  },
  {
    question: "How long has Nakshatra Namaha Creations been in business?",
    answer:
      "We've been serving clients across industries with digital solutions for several years, building a reputation for reliability, creativity, and results.",
  },
  {
    question: "What industries does your team specialize in?",
    answer:
      "We work with a wide range of industries, including retail, healthcare, education, real estate, logistics, and professional services.",
  },
  {
    question: "What values guide your company culture and client relationships?",
    answer:
      "Transparency, collaboration, creativity, and accountability form the foundation of how we work—with both our team and our clients.",
  },
  {
    question: "Is your team in-house or do you outsource work?",
    answer:
      "We have a dedicated in-house team of developers, designers, marketers, and project managers to ensure quality control and efficient communication.",
  },
  {
    question: "How does Nakshatra Namaha Creations stay updated with industry trends?",
    answer:
      "Our team actively follows emerging trends in tech and design, attends workshops and conferences, and continuously experiments with modern tools and frameworks.",
  },
];

// Hero constants
const HERO_TITLE = "ABOUT NAKSHATRA NAMAHA CREATIONS";
const HERO_SUBTITLE =
  "We are a creative tech studio dedicated to building websites, apps, and content that move brands forward.";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://nakshatranamahacreations.in/about-us" />
        <title>Mobile App Development Services in Mysore</title>
        <meta
          name="description"
          content="Get professional web development, mobile app solutions, and UI/UX design services in Mysore. Build fast, responsive, and user-focused digital experiences."
        />
        <meta
          name="keywords"
          content="Web Development Mysore, App Development Mysore, Website Design Company, Mysore Digital Experts, Custom Web Apps, Mobile App Company Mysore, SEO Website Developers, Full Stack Developers Mysore, Trusted IT Company Mysore"
        />
        <meta property="og:title" content="Mobile App Development Services in Mysore" />
        <meta
          property="og:description"
          content="Get professional web development, mobile app solutions, and UI/UX design services in Mysore. Build fast, responsive, and user-focused digital experiences."
        />
        <meta property="og:url" content="https://nakshatranamahacreations.in/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mobile App Development Services in Mysore" />
        <meta
          name="twitter:description"
          content="Get professional web development, mobile app solutions, and UI/UX design services in Mysore. Build fast, responsive, and user-focused digital experiences."
        />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/logo.png" />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* HERO Section */}
      <section className={styles.heroBannerWrapper} id="about-hero">
        <Image
          src="/images/background.jpg"
          alt="Banner"
          width={1920}
          height={1080}
          priority
          className={styles.carouselBgImage}
        />
        <div className={styles.blackOverlay} />
        <div className={styles.carouselBannerLeft}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">
                <span className={styles.breadcrumbsCurrent}>About Us</span>
              </li>
            </ol>
          </nav>
          <h2 className={styles.title}>{HERO_TITLE}</h2>
          <p className={styles.subtitle}>{HERO_SUBTITLE}</p>
        </div>
        <div className={styles.scrollExplore}>SCROLL TO EXPLORE</div>
      </section>

      {/* About Section */}
      <section className={styles["design-section"]}>
        <div className={styles["design-container"]}>
          <div className={styles["visual-left"]}>
            <div className={styles["circle"]}>
              <div className={styles["arrow-line"]} />
            </div>
          </div>
          <div className={styles["content-right"]}>
            <h1>
              What makes Nakshatra Namaha Creations the Leading <br />
              <strong>Mobile App and Website Development Company in Mysore?</strong>
            </h1>
            <div className={styles["image-wrapper7"]}>
              <img
                src="/images/team.jpg"
                alt="Web design team"
                className={styles["rounded-img"]}
              />
              <div className={styles["floating-text-box"]}>
                <h2>
                  <strong>ABOUT Nakshatra Namaha Creations</strong>
                </h2>
                <p>
                  At Nakshatra Namaha Creations, we take pride in being the best website
                  development company in Mysore, offering a wide range of web services,
                  including website development, app development, E-Commerce website
                  development, WordPress website development, Flutter App development, React
                  Native Website Development, and React JS Website Development. With over 8
                  years of experience, we deliver unique, high-performance solutions
                  tailored to each client’s specific needs. Recognized as the best website
                  design company in Mysore, our skilled team blends creativity with the
                  latest technologies to craft visually appealing and seamless websites. As
                  the best mobile app development company in Mysore, we also specialize in
                  building intuitive, high-quality mobile apps. From initial planning to
                  final execution, we provide comprehensive services, ensuring timely
                  delivery and continued support to help businesses thrive in the digital
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section 2 */}
      <section className={styles["about-nnc-section"]}>
        <div className={styles["about-nnc-container"]}>
          <div className={styles["about-left"]}>
            <h2>Nakshatra Namaha Creations is a Reliable Website Development Company</h2>
          </div>
          <div className={styles["about-divider"]} />
          <div className={styles["about-right"]}>
            <p>
              Since 2015, our team has been shaping digital experiences, serving over 890+
              clients. As the best mobile app and website development company in Mysore, we
              offer a comprehensive range of services to help businesses grow in the online
              space.
            </p>
            <p>
              We specialize in everything from website design and web applications to
              mobile app development, providing user-friendly, high-performing solutions
              that meet your needs. Whether you’re looking to improve your web presence or
              enhance customer engagement, our expertise ensures that we deliver practical,
              effective results.
            </p>
            <p>
              Partner with us to explore new possibilities for your business online. Let us
              help you achieve your goals with a strategy that focuses on growth and
              success in the digital world. As a result, we are a top choice for
              entrepreneurs seeking web design services for numerous reasons:
            </p>
          </div>
        </div>
      </section>

      {/* Floating Actions & Components */}
      <FloatingActions />
      <MobileBottomBar />
      <WebDesignServices />
      {/* <CounterWithLottie /> */}
      <CTASection />

      {/* FAQ Section */}
      <AboutFaq/>
      <InfoSection/>
      </>
  );
}
