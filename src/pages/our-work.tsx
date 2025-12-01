import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import styles from "@/pages/OurWork.module.css";
import Link from "next/link";
import Image from "next/image";
// ✅ make sure these live in src/components/**
import MyBreadcrumb from "@/components/MyBreadcrumb";
import OurWorkGallery from "@/pages/OurWorkGallery";
import ClientSlider from "@/pages/ClientSlider";
import InfoSection from "@/components/InfoSection";
import Ourworkfaq from "./Ourworkfaq";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import styles1 from "./AboutUs.module.css";
import ClientsShowcase from "./ClientsShowcase";

const faqs = [
  { id: 1, question: "What types of projects does Nakshatra Namaha Creations typically showcase?",
    answer: "Our portfolio includes mobile apps, websites, eCommerce platforms, branding videos, UI/UX designs, and digital marketing campaigns across various industries." },
  { id: 2, question: "How do you ensure the quality of the projects you deliver?",
    answer: "Each project undergoes multiple rounds of testing, internal reviews, and client feedback to ensure it meets both technical standards and business objectives." },
  { id: 3, question: "Can I request a demo or walkthrough of a past project?",
    answer: "Yes, we’re happy to walk you through select case studies to demonstrate how we approached challenges and delivered solutions." },
  { id: 4, question: "Are the designs and code fully custom for each project?",
    answer: "Absolutely. Every solution we build is tailored to our client’s brand, audience, and functional requirements—no templates or shortcuts." },
  { id: 5, question: "Do you work with startups as well as large companies?",
    answer: "Yes, our portfolio includes startups, SMEs, and established enterprises. We scale our approach to fit your budget and goals." },
  { id: 6, question: "How is performance measured after project completion?",
    answer: "We track performance through analytics, user engagement, conversion rates, and client feedback to ensure long-term success." },
];

export default function OurWorkPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Nakshatra Namaha Creations",
        alternateName: "Website & App Development Portfolio | Projects in Mysore",
        url: "https://nakshatranamahacreations.in/our-work",
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
      },
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        image: "https://nakshatranamahacreations.in/images/image.png",
        url: "https://nakshatranamahacreations.in/our-work",
        telephone: "+919900566466",
        address: {
          "@type": "PostalAddress",
          streetAddress: "SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block,",
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
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "09:30",
          closes: "19:00",
        },
        sameAs: [
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
          "https://x.com/nncbengaluru",
          "https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/",
          "https://www.instagram.com/nnc.digitalmysuru/",
        ],
      },
    ],
  };

const HERO_TITLE = "OUR WORK";
const HERO_SUBTITLE =
  "Take a look at how Nakshatra Namaha Creations transforms ideas into impactful digital experiences. From websites and mobile apps to branding and marketing campaigns, our portfolio showcases creativity, precision, and results.";

  return (
    <>
      <Head>
        <link rel="canonical" href="https://nakshatranamahacreations.in/our-work" />
        <title>Website & App Development Portfolio | Projects in Mysore</title>
        <meta name="description" content="Browse professional projects in website development, mobile apps, UI/UX, and branding. See real results crafted for businesses across industries in Mysore." />
        <meta name="keywords" content="Website Development Portfolio, App Development Projects, UI/UX Design Portfolio, Web Design Case Studies, Branding and Design Samples, Web Projects in Mysore, Mobile App Showcase, Ecommerce Website Examples, Custom Web Application Work, Digital Project Showcase" />
        <meta property="og:title" content="Website & App Development Portfolio | Projects in Mysore" />
        <meta property="og:description" content="Browse professional projects in website development, mobile apps, UI/UX, and branding. See real results crafted for businesses across industries in Mysore." />
        <meta property="og:url" content="https://nakshatranamahacreations.in/our-work" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Website & App Development Portfolio | Projects in Mysore" />
        <meta name="twitter:description" content="Browse professional projects in website development, mobile apps, UI/UX, and branding. See real results crafted for businesses across industries in Mysore." />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/logo.png" />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      <Script id="our-work-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* <MyBreadcrumb crumbs={crumbs} /> */}

      {/* HERO — now using CSS Module className={styles["hero-section"]} */}
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
                <span className={styles1.breadcrumbsCurrent}>Our Work</span>
              </li>
            </ol>
          </nav>
          <h2 className={styles1.title}>{HERO_TITLE}</h2>
          <p className={styles1.subtitle}>{HERO_SUBTITLE}</p>
        </div>
        <div className={styles1.scrollExplore}>SCROLL TO EXPLORE</div>
      </section>

      <section className="why-section container my-5">
        <div className="row align-items-start justify-content-center">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="why-heading">
              Our work reflects innovation and expertise, delivering strategies that drive real results
            </h1>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="sub-heading">Take a closer look at our excellence</h5>
            <p>
              Discover the stories behind our success. Our portfolio contains a variety of projects that were researched, designed and delivered to meet specific measurable objectives of our clients. Whether we&apos;ve developed a custom mobile app or a compelling corporate ad film or an SEO friendly website, our case studies present strategic thinking and creative execution that delivers our clients success. Browse through our work to see how we have turned ideas into tangible, impactful solutions to strengthen brands and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      <FloatingActions />
      <MobileBottomBar />
      <OurWorkGallery />
      <ClientsShowcase/>

    <Ourworkfaq/>

            <InfoSection/>
    </>
  );
}
