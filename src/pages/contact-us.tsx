// src/pages/contact-us.tsx
import Head from "next/head";
import Script from "next/script";
import styles from "./contact-us.module.css";
import Image from "next/image";
// keep these paths as you have them (adjust if you moved files)
import ContactUsfaq from "./ContactUsfaq";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import InfoSection from "@/components/InfoSection";
import ContactUs from "@/pages/ContactUs"; // ← the Next.js client component version
import Link from "next/link";
import React from "react";
import styles1 from "./AboutUs.module.css";

const faqs = [
  {
    id: 1,
    question: "What is the best way to reach Nakshatra Namaha Creations?",
    answer:
      "You can contact us via phone at +91-9900566466, email us at info@nakshatranamahacreations.in, or use the contact form on this page for quick responses.",
  },
  {
    id: 2,
    question: "What are your working hours?",
    answer:
      "We are available from Monday to Saturday, 10:00 AM to 6:30 PM IST. For urgent queries, please drop an email and we’ll respond as soon as possible.",
  },
  {
    id: 3,
    question: "Do I need an appointment before visiting your office?",
    answer:
      "Yes, we recommend scheduling an appointment so that the right team member is available to assist you efficiently.",
  },
  {
    id: 4,
    question: "Where is your office located?",
    answer:
      "Our office is located at SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block, Mysuru – 570008.",
  },
  {
    id: 5,
    question: "Can I get a free consultation for my project?",
    answer:
      "Yes, we offer an initial consultation to understand your requirements and suggest the best approach. Use the form on this page to request a callback.",
  },
  {
    id: 6,
    question: "How soon can I expect a response after contacting you?",
    answer:
      "We usually respond within 24 business hours. For quicker support, you can reach us directly on our contact number.",
  },
];

const HERO_TITLE = "LET’S CONNECT WITH NAKSHATRA NAMAHA CREATIONS";
const HERO_SUBTITLE =
  "Have a project in mind or need expert advice? Nakshatra Namaha Creations is here to help. Whether you're looking for a custom website, mobile app, marketing strategy, or creative content, our team is just a message away. Get in touch to discuss your ideas, ask questions, or explore collaboration opportunities — we’ll respond within 24 hours and guide you every step of the way.";

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nakshatra Namaha Creations",
    alternateName: "Contact Web & App Developers | Digital Services Mysore",
    url: "https://nakshatranamahacreations.in/contact-us",
    logo: "https://nakshatranamahacreations.in/images/image.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919900566466",
      contactType: "Sales",
      areaServed: "IN",
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.linkedin.com/company/nakshatra-namaha-creation/",
      "https://x.com/nncbengaluru",
      "https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/",
      "https://www.instagram.com/nnc.digitalmysuru/",
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nakshatra Namaha Creations",
    image: "https://nakshatranamahacreations.in/images/image.png",
    url: "https://nakshatranamahacreations.in/contact-us",
    telephone: "+919900566466",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block,",
      addressLocality: "Mysuru",
      postalCode: "570008",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.264048232752891,
      longitude: 76.64441759371324,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/nakshatra-namaha-creation/",
      "https://x.com/nncbengaluru",
      "https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/",
      "https://www.instagram.com/nnc.digitalmysuru/",
    ],
  };

  return (
    <>
      <Head>
        <title>Contact Web & App Developers | Digital Services Mysore</title>
        <meta
          name="description"
          content="Connect with expert web and mobile app developers in Mysore. Share your project goals and get custom solutions for websites, apps, and digital experiences."
        />
        <meta
          name="keywords"
          content="Contact Web Developers Mysore, App Developers Contact, Website Quote Mysore, Tech Team Mysore, UI/UX Designers Contact, Digital Services Mysore"
        />
        <link rel="canonical" href="https://nakshatranamahacreations.in/contact-us" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Web & App Developers | Digital Services Mysore"
        />
        <meta
          property="og:description"
          content="Connect with expert web and mobile app developers in Mysore. Share your project goals and get custom solutions for websites, apps, and digital experiences."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Contact Web & App Developers | Digital Services Mysore"
        />
        <meta
          name="twitter:description"
          content="Connect with expert web and mobile app developers in Mysore. Share your project goals and get custom solutions for websites, apps, and digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgLd)}
      </Script>
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessLd)}
      </Script>

      {/* <MyBreadcrumb crumbs={crumbs} /> */}

  <section className={styles1.heroBannerWrapper} id="about-hero">
        <Image
          src="/images/background.jpg"
          alt="Banner"
          width={1920}
          height={1080}
          priority
          className={styles1.carouselBgImage}
        />
        <div className={styles1.blackOverlay} />
        <div className={styles1.carouselBannerLeft}>
          <nav className={styles1.breadcrumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">
                <span className={styles1.breadcrumbsCurrent}>Contact Us </span>
              </li>
            </ol>
          </nav>
          <h1 className={styles1.title}>{HERO_TITLE}</h1>
          <p className={styles1.subtitle}>{HERO_SUBTITLE}</p>
        </div>
        <div className={styles1.scrollExplore}>SCROLL TO EXPLORE</div>
      </section>

      <ContactUs />

      <div className={styles["map-wrapper"]}>
        <div className={styles["map-frame"]}>
          <iframe
            loading="lazy"
            title="Nakshatra Namaha Creations"
            src="https://maps.google.com/maps?q=Nakshatra%20Namaha%20Creations%207J7V%2BJQ9%2C%20Akkamahadevi%20Rd%2C%20JP%20Nagar%202nd%20Stage%2C%20C-Block%2C%20JP%20Nagar%2C%20Mysuru%2C%20Karnataka%20570008&t=m&z=10&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />

      <ContactUsfaq/>

      <InfoSection />
    </>
  );
}
