"use client";

import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import WebDesignServices from "@/pages/WebDesignService";
// import CounterWithLottie from "@/components/CounterWithLottie";
import CTASection from "@/pages/CTASection";
import InfoSection from "@/components/InfoSection";
import MyBreadcrumb from "@/components/MyBreadcrumb";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";

import styles from "./AboutUs.module.css"; // ⬅️ create this CSS module

const faqs = [
  {
    id: 1,
    question: "What is the core mission of Nakshatra Namaha Creations?",
    answer:
      "Our mission is to empower businesses through creative technology—delivering design, development, and marketing solutions that drive real growth.",
  },
  {
    id: 2,
    question: "How long has Nakshatra Namaha Creations been in business?",
    answer:
      "We've been serving clients across industries with digital solutions for several years, building a reputation for reliability, creativity, and results.",
  },
  {
    id: 3,
    question: "What industries does your team specialize in?",
    answer:
      "We work with a wide range of industries, including retail, healthcare, education, real estate, logistics, and professional services.",
  },
  {
    id: 4,
    question: "What values guide your company culture and client relationships?",
    answer:
      "Transparency, collaboration, creativity, and accountability form the foundation of how we work—with both our team and our clients.",
  },
  {
    id: 5,
    question: "Is your team in-house or do you outsource work?",
    answer:
      "We have a dedicated in-house team of developers, designers, marketers, and project managers to ensure quality control and efficient communication.",
  },
  {
    id: 6,
    question: "How does Nakshatra Namaha Creations stay updated with industry trends?",
    answer:
      "Our team actively follows emerging trends in tech and design, attends workshops and conferences, and continuously experiments with modern tools and frameworks.",
  },
];

const CounterWithLottie = dynamic(() => import("@/components/CounterWithLottie"), { ssr: false });


export default function AboutUs() {
  const aboutUsBreadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "#about" },
  ];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Nakshatra Namaha Creations",
                  "alternateName": "Mobile App Development Services in Mysore",
                  "url": "https://nakshatranamahacreations.in/about",
                  "logo": "https://nakshatranamahacreations.in/images/image.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+919900566466",
                    "contactType": "Sales",
                    "areaServed": "IN",
                    "availableLanguage": "en"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/nakshatra-namaha-creation/",
                    "https://x.com/nncbengaluru",
                    "https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/",
                    "https://www.instagram.com/nnc.digitalmysuru/"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Nakshatra Namaha Creations",
                  "image": "https://nakshatranamahacreations.in/images/image.png",
                  "url": "https://nakshatranamahacreations.in/about",
                  "telephone": "+919900566466",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block,",
                    "addressLocality": "Mysuru",
                    "postalCode": "570008",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 12.264048232752891,
                    "longitude": 76.64441759371324
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:30",
                    "closes": "19:00"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/nakshatra-namaha-creation/",
                    "https://x.com/nncbengaluru",
                    "https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/",
                    "https://www.instagram.com/nnc.digitalmysuru/"
                  ]
                }
              ]
            }`,
          }}
        />
      </Head>

      <MyBreadcrumb crumbs={aboutUsBreadcrumbs} />

      <div className={styles["hero-section"]}>
        <div className={styles["overlay"]}>
          <div className={styles["content55"]}>
            <h2>We Innovate, We Build, We Transform</h2>
            <p>Cutting-edge web solutions to tackle your most complex business challenges!</p>
          </div>
        </div>
      </div>

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
              <img src="/images/team.jpg" alt="Web design team" className={styles["rounded-img"]} />
              <div className={styles["floating-text-box"]}>
                <h2>
                  <strong>ABOUT Nakshatra Namaha Creations</strong>
                </h2>
                <p>
                  At Nakshatra Namaha Creations, we take pride in being the best website development company in Mysore, offering a wide range of
                  web services, including website development, app development, E-Commerce website development, WordPress website development,
                  Flutter App development, React Native Website Development, and React JS Website Development. With over 8 years of experience,
                  we deliver unique, high-performance solutions tailored to each client’s specific needs. Recognized as the best website design
                  company in Mysore, our skilled team blends creativity with the latest technologies to craft visually appealing and seamless
                  websites. As the best mobile app development company in Mysore, we also specialize in building intuitive, high-quality mobile
                  apps. From initial planning to final execution, we provide comprehensive services, ensuring timely delivery and continued support
                  to help businesses thrive in the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["about-nnc-section"]}>
        <div className={styles["about-nnc-container"]}>
          <div className={styles["about-left"]}>
            <h2>Nakshatra Namaha Creations is a Reliable Website Development Company</h2>
          </div>
          <div className={styles["about-divider"]} />
          <div className={styles["about-right"]}>
            <p>
              Since 2015, our team has been shaping digital experiences, serving over 890+ clients. As the best mobile app and website
              development company in Mysore, we offer a comprehensive range of services to help businesses grow in the online space.
            </p>
            <p>
              We specialize in everything from website design and web applications to mobile app development, providing user-friendly,
              high-performing solutions that meet your needs. Whether you’re looking to improve your web presence or enhance customer
              engagement, our expertise ensures that we deliver practical, effective results.
            </p>
            <p>
              Partner with us to explore new possibilities for your business online. Let us help you achieve your goals with a strategy that
              focuses on growth and success in the digital world. As a result, we are a top choice for entrepreneurs seeking web design services
              for numerous reasons:
            </p>
          </div>
        </div>
      </section>

          <FloatingActions />
          <MobileBottomBar />
          <WebDesignServices />
          <CounterWithLottie />
          <CTASection />

      <div className={styles["rajanna"]} style={{width:"69%", margin:"0 auto"}}>
        <div className={`${styles["container55"]} my-5`}>
          <div className="text-center mb-4">
            <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
          </div>

          {/* Bootstrap Accordion (ensure Bootstrap JS is loaded in app/layout.tsx) */}
          <div className="accordion accordion-flush" id="faqAccordion">
            {faqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header" id={`flush-heading-${faq.id}`}>
                  <button
                    className={`accordion-button ${faq.id !== 1 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${faq.id}`}
                    aria-expanded={faq.id === 1}
                    aria-controls={`flush-collapse-${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse-${faq.id}`}
                  className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
                  aria-labelledby={`flush-heading-${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <InfoSection /> */}
    </>
  );
}
