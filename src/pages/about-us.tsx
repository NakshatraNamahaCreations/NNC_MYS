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
import ValuesSection from "@/components/ValuesSection";
import WhyChooseUs from "@/components/WhyChooseUs";



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
    question: "Why choose Nakshatra Namaha Creations for website development services in Mysore?",
    answer:
      "We started our journey in 2015 in Bangalore and expanded our services to Mysore in November 2024. With years of experience and hundreds of successful projects, we focus on building SEO-friendly, user-focused websites that help businesses in Mysore grow their online presence and achieve real results.",
  },
  {
    question: "Do you provide mobile app development services in Mysore along with website solutions?",
    answer:
      "Yes. We are a full-service mobile app development company in Mysore, offering Android app development, iOS app development, Flutter app development, and React Native app development alongside professional website solutions.",
  },
  {
    question: "Can you develop e-commerce websites for startups and small businesses in Mysore?",
    answer:
      "Absolutely. We specialize in e-commerce website development in Mysore, delivering secure, scalable, and conversion-focused online stores that help businesses increase sales and improve the customer experience.",
  },
  {
    question: "What values guide your company culture and client relationships?",
    answer:
      "Transparency, collaboration, creativity, and accountability form the foundation of how we work—with both our team and our clients.",
  },
  {
    question: "Do you offer custom app development services for unique business needs?",
    answer:
      "Yes. As a leading custom mobile app development company in Mysore, we design and develop tailored apps to meet the specific requirements of startups, enterprises, and niche industries.",
  },
   {
    question: "What technologies do you use for website and app development?",
    answer:
      "Our experts use modern technologies like React JS, Flutter, React Native, and advanced e-commerce platforms to ensure every project is future-ready, scalable, and easy to manage.",
  },
    {
    question: "Do you offer post-launch support and maintenance for websites and apps?",
    answer:
      "Yes. We provide end-to-end support and maintenance including bug fixes, performance optimization, security updates, and ongoing enhancements to ensure your platforms run smoothly after launch.",
  },
    {
    question: "How can Nakshatra Namaha Creations help my business grow online?",
    answer:
      "We combine SEO-friendly website development in Mysore with high-performing mobile app development in Mysore to improve online visibility, engage customers effectively, and drive higher conversions. ",
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
const processSteps = [
  {
    title: "Proven Experience",
    description:
      "8+ years in IT services and 890+ completed projects.",
  },
  {
    title: "Focused Expertise",
    description:
      "Dedicated teams for website development in Mysore and mobile app development in Mysore.",
  },
  {
    title: "Tailored Solutions",
    description:
      "Every project is customized to align with your brand goals.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy to launch and post-launch maintenance.",
  },
  {
    title: "Transparent Process & Fair Pricing",
    description:
      "Quality services at competitive rates.",
  },
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

     
      {/* <AboutOverview/> */}
<section className={styles.aboutWrap}>
  <div className="container">
    <div className="row align-items-center g-5">
      {/* Left content */}
      <div className="col-lg-7">
        <h2 className={styles.aboutHeading}>
          About Our Mobile App and Website Development Services in Mysore
        </h2>
        <p className={styles.aboutText}>
         Nakshatra Namaha Creations is a top website development company Mysore and a Trusted website development company and mobile app development company in Mysore having more than 8+ years of experience in the this industry, We have been committed to providing client-centric digital solutions that uplift businesses and keep them competitive in the online market since 2015.
        </p>
        <p className={styles.aboutText}>
        We do this by integrating unique web designing strategies, up-to-date technologies, and targeted digital solutions, thus creating customer-friendly platforms that become the brands' tools for achieving tangible results. Each member of our team sticks to tough standards for quality and is fully dedicated to the development of websites and mobile apps that are not only safe and scalable but also efficiently-driven.
        </p>
      </div>

      {/* Right image */}
      <div className="col-lg-5">
        <div className={styles.aboutImageCard}>
          <Image
            src="/images/tech30.jpg"
            alt="Mobile app & website development illustration"
            fill
            sizes="(max-width: 992px) 100vw, 520px"
            priority
            className={styles.aboutImage}
          />
        </div>
      </div>
    </div>
  </div>
  <br />
  <h2 className={styles.sectionIntro}>
  Leading  <span>Website Development Company</span> in Mysore
</h2>

<p className={styles.sectionText}>
  We feel proud to be known as a <strong>trustworthy website creation company in Mysore</strong> and have been a major part of more than 890 companies' success in various fields., 
Our goal is to energize new businesses, small local businesses, and large enterprises with the power of the internet to attract customers, increase sales, and multiply profits. We do this through effective SEO-friendly website design and off-the-shelf website development services.
</p>

</section>

      {/* Floating Actions & Components */}
      <FloatingActions />
      <MobileBottomBar />
      <WebDesignServices />
      {/* <CounterWithLottie /> */}
      {/* <CTASection /> */}
        <ValuesSection/>
        <section className={styles.aboutWrap}>
  <div className="container">
    <div className="row align-items-center g-5">
      {/* Left content */}
         {/* Right image */}
      <div className="col-lg-5">
        <div className={styles.aboutImageCard}>
          <Image
            src="/images/icons/tech30jpg.jpg"
            alt="Mobile app & website development illustration"
            fill
            sizes="(max-width: 992px) 100vw, 520px"
            priority
            className={styles.aboutImage}
          />
        </div>
      </div>
      
      <div className="col-lg-7">
        <h2 className={styles.aboutHeading}>
         Trusted Mobile App Development Company in Mysore
        </h2>
        <p className={styles.aboutText}>
       A trusted mobile app development company in Mysore builds applications that combine smooth performance with practical functionality. The focus is on creating mobile apps that help businesses improve customer interaction, increase efficiency, and stay competitive in the digital space. By using modern frameworks and proven development practices, every app is built to be secure, fast, and reliable for daily business use.
          </p>
        <p className={styles.aboutText}>
       The team also works on cross-platform mobile app development in Mysore to deliver applications that run effectively on both Android and iOS. Each project is planned around real business needs, whether it is helping a startup launch its first app or supporting an established company to scale its digital services. The result is mobile applications that engage users, simplify processes, and support consistent business growth.
          </p>
      </div>

   
    </div>
  </div>
    {/* <br />
    <h2 className={styles.sectionIntro}>
    Leading  <span>Leading Website Development Company</span> in Mysore
  </h2>

  <p className={styles.sectionText}>
    We feel proud to be known as a <strong>trustworthy website creation company in Mysore</strong> and have been a major part of more than 890 companies' success in various fields., 
  Our goal is to energize new businesses, small local businesses, and large enterprises with the power of the internet to attract customers, increase sales, and multiply profits. We do this through effective SEO-friendly website design and off-the-shelf website development services.
  </p> */}

</section>
  <section className={styles.processWrap}>
      <div className="container">
        <div className={styles.processHeader}>
          <h2 className={styles.processHeading}>
            Why Choose <span>Nakshatra Namaha Creations</span>
          </h2>
          <p className={styles.processSubText}>
            We don’t just create websites or apps – we deliver digital experiences that enhance customer engagement, online visibility, and business growth.
          </p>
        </div>

        <div className={styles.processTimeline}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.processDot}></div>
              <div className={styles.processContent}>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<WhyChooseUs/>

      {/* FAQ Section */}
      <AboutFaq/>
      <InfoSection/>
      </>
  );
}
