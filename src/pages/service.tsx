// src/pages/service.tsx
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import styles from "./service.module.css";
import Link from "next/link";
import Image from "next/image";
// keep these paths as you have them (adjust if you moved files)
import FeatureCardGrid from "@/pages/FeatureCardGrid";
import ClientSlider from "@/pages/ClientSlider";
import InfoSection from "@/components/InfoSection";
import ServicesFaq from "./ServicesFaq";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import styles1 from "./AboutUs.module.css";

const faqs = [
  {
    id: 1,
    question: "What types of websites do you develop?",
    answer:
      "We develop all kinds of websites including business sites, eCommerce stores, portfolio websites, CMS-based platforms, and custom web applications using technologies like WordPress, React, and Node.js.",
  },
  {
    id: 2,
    question: "Do you build mobile apps as well?",
    answer:
      "Yes, we develop Android, iOS, and cross-platform mobile apps using React Native and other modern frameworks based on your business requirements.",
  },
  {
    id: 3,
    question:
      "How long does it take to complete a typical web development project?",
    answer:
      "On average, a basic website can take 7–10 days. Larger or more complex websites may take 2–4 weeks depending on features, content, and revisions.",
  },
  {
    id: 4,
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer:
      "Absolutely. Every website we build is fully responsive for mobile devices and comes with essential SEO best practices like clean URLs, meta tags, and speed optimization.",
  },
  {
    id: 5,
    question: "Do you offer support and maintenance after launch?",
    answer:
      "Yes. We provide ongoing support packages that include updates, security monitoring, and content management after your site goes live.",
  },
  {
    id: 6,
    question: "What is your starting price for website development?",
    answer:
      "Our basic website development packages start from ₹14,499. Pricing varies based on design, features, number of pages, and platform.",
  },
];

export default function Services() {
  const ServiceBreadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nakshatranamahacreations.in/#organization",
        name: "Nakshatra Namaha Creations",
        url: "https://nakshatranamahacreations.in",
        logo: "https://nakshatranamahacreations.in/images/image.png",
        sameAs: [
          "https://www.facebook.com/Nakshatranamahacreations/",
          "https://www.instagram.com/nnc.digitalbengaluru/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nakshatranamahacreations.in/#localbusiness",
        name: "Nakshatra Namaha Creations",
        image: "https://nakshatranamahacreations.in/images/image.png",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block",
          addressLocality: "Mysuru",
          addressRegion: "Karnataka",
          postalCode: "570008",
          addressCountry: "IN",
        },
        url: "https://nakshatranamahacreations.in",
        telephone: "+91-9900566466",
        email: "info@nakshatranamahacreations.in",
        areaServed: "Mysuru",
        priceRange: "₹₹",
      },
      {
        "@type": "Service",
        serviceType: "WordPress Website Development",
        provider: {
          "@id": "https://nakshatranamahacreations.in/#localbusiness",
        },
        areaServed: { "@type": "Place", name: "Mysuru" },
        availableLanguage: "English",
        description:
          "Professional WordPress website development services in Mysore for business websites, portfolios, eCommerce stores, and custom CMS solutions.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of websites do you develop?",
            acceptedAnswer: {
              "@type": "Answer",
              text: faqs[0].answer,
            },
          },
          {
            "@type": "Question",
            name: "Do you build mobile apps as well?",
            acceptedAnswer: {
              "@type": "Answer",
              text: faqs[1].answer,
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to complete a typical web development project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: faqs[2].answer,
            },
          },
          {
            "@type": "Question",
            name: "Will my website be mobile-friendly and SEO optimized?",
            acceptedAnswer: {
              "@type": "Answer",
              text: faqs[3].answer,
            },
          },
          {
            "@type": "Question",
            name: "Do you offer support and maintenance after launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: faqs[4].answer,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nakshatranamahacreations.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://nakshatranamahacreations.in/service",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "WordPress Website Development",
            item: "https://nakshatranamahacreations.in/services",
          },
        ],
      },
    ],
  };

const HERO_TITLE = "OUR SERVICES";
const HERO_SUBTITLE =
  "Discover a complete suite of digital solutions designed to help your business thrive. From web and mobile app development to UI/UX design, branding, and digital marketing, Nakshatra Namaha Creations delivers innovative, scalable, and results-driven services tailored to your goals.";


  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service"
        />
        <title>Website Development & App Development Services, Mysore</title>
        <meta
          name="description"
          content="Discover expert services in website development, mobile app creation, UI/UX design, digital marketing, and video production for growing businesses in Mysore."
        />
        <meta
          name="keywords"
          content="Website Development Mysore, App Development Mysore, UI/UX Design Services, E-commerce Website Development, Mobile App Developers Mysore, Web Application Development, Corporate Video Production, B2B Marketing Services Mysore, Full Stack Development Mysore, Digital Services for Business"
        />
        <meta
          property="og:title"
          content="Website Development & App Development Services, Mysore"
        />
        <meta
          property="og:description"
          content="Discover expert services in website development, mobile app creation, UI/UX design, digital marketing, and video production for growing businesses in Mysore."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Website Development & App Development Services, Mysore"
        />
        <meta
          name="twitter:description"
          content="Discover expert services in website development, mobile app creation, UI/UX design, digital marketing, and video production for growing businesses in Mysore."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      <Script id="services-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(ld)}
      </Script>

      {/* <MyBreadcrumb crumbs={ServiceBreadcrumbs} /> */}

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
                <span className={styles1.breadcrumbsCurrent}>Our Services</span>
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

 
     <section className="py-5 ">
      <div className="container">
        <div className="row justify-content-start">
          {/* <div className="col-lg-8 col-md-10"> */}
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="fw-bold mb-4">
                Amplify Your Brand with Professional Digital Solutions
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                At Nakshatra Namaha Creations, we specialize in helping brands
                reach new heights with cutting-edge digital solutions. Whether
                you’re looking to build a strong online presence, engage your
                audience, or drive business growth, our team of experts is here
                to create tailored strategies that align with your vision. From
                web development and app design to digital marketing and branding,
                we offer a comprehensive range of services to amplify your brand
                and connect with your customers effectively.
              </p>
            </motion.div>
          {/* </div> */}
        </div>
      </div>
    </section>



      <FloatingActions />
      <MobileBottomBar />

      <FeatureCardGrid />
      <ClientSlider />
    <ServicesFaq/>

      <InfoSection />
    </>
  );
}
