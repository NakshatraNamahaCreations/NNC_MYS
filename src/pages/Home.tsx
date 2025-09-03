import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

// Move these files to src/components/* so they don't become routes
import OurClientsSays from "@/pages/OurClientsSays";
import ProcessTimeline from "@/pages/ProcessTimeline";
import CTASection from "@/pages/CTASection";
import FaqAccordion from "@/pages/FaqAccordion";
import InfoSection from "@/components/InfoSection";
// import StickyServices from "@/pages/StickyServices";
// import AllServices from "@/pages/AllServices";
import OurClients from "@/pages/OurClients";
// import Buissness from "@/pages/Buissness";
import TopWeb from "@/pages/TopWeb";
import Portfolio from "@/pages/PortFolio";
// import ClientsSay from "@/pages/ClientsSay";
import OurProcessScroll from "@/pages/OurProcessScroll";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import styles from "@/pages/Home.module.css";

// src/pages/_app.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from "@/components/HeroBanner";
import Specializations from "@/components/Specializations";
import MarketingHero from "@/components/MarketingHero";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "./TechnologySection";
import ClientsShowcase from "./ClientsShowcase";
import ZeroSection from "./ZeroSection";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { motion, Variants} from "framer-motion";
import FaqSection from "./FaqSection";

gsap.registerPlugin(ScrollTrigger);



type Product = {
  title: string;
  img: string;
  href: string;
  blurb: string;
};  





const products: Product[] = [
  {
    title: "Why Mobile-Optimized Websites Are Crucial Today",
    img: "/images/blog5.webp",
    href: "/blogs/why-mobile-optimized-websites-are-crucial",
    blurb:
      "Scrolling, tapping, and swiping have become second nature. In this mobile-first world, websites can no longer afford to be designed solely for desktops. People expect websites to work seamlessly on their smartphones—whether they’re shopping, reading, booking, or just browsing.",
  },
  {
    title: "How 2D Animation Can Simplify Sales Communication",
    img: "/images/blog6.webp",
    href: "/blogs/2d-animation-sales-communication",
    blurb:
      "Trying to explain your product to a potential customer can be tough—especially when the product is complex or technical. People have limited attention spans, and they won’t stick around for a lengthy explanation. This is where 2D animation steps in.",
  },
  {
    title: "How Website Speed Optimization Impacts Conversion",
    img: "/images/blog3.webp",
    href: "/blogs/how-website-speed-optimization-impacts-conversion",
    blurb:
      "Website visitors are not a patient crowd. In a world where every second matters, the speed at which your website loads directly affects whether someone stays, explores, buys—or walks away. Speed optimization isn’t just a backend concern for developers. It’s a real business factor that can make or break a customer’s decision to convert.",
  },
 
];


type Industry = { label: string };

const industries = [
  { label: "Service Industry" },
  { label: "Education" },
  { label: "Entertainment" },
  { label: "Automobile" },
  { label: "Finance" },
  { label: "Fitness" },
  { label: "Health" },
  { label: "Hospitality" },
  { label: "Real Estate" },
  { label: "Logistics" },
];



const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Nakshatra Namaha Creations",
      alternateName: "Website Development Company in Mysore",
      url: "https://nakshatranamahacreations.in/",
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
      url: "https://nakshatranamahacreations.in/",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name:
            "What services does Nakshatra Namaha Creations offer as a Web Development Company in Mysore?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "We provide web development, e-commerce solutions, mobile app development, UI/UX design, and ongoing website maintenance to meet a variety of business needs.",
          },
        },
        {
          "@type": "Question",
          name:
            "What is the typical timeline for website development projects at Nakshatra Namaha Creations?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The timeline varies based on project size and requirements, but most websites are completed within a few weeks to a few months.",
          },
        },
        {
          "@type": "Question",
          name:
            "How does Nakshatra Namaha Creations approach website security during development?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "We focus on securing your website by using SSL certificates, conducting regular security checks, and following best practices for safe coding.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can Nakshatra Namaha Creations create a website that aligns with our brand identity?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, we ensure your website reflects your brand through custom design, branding elements, and a seamless user experience.",
          },
        },
        {
          "@type": "Question",
          name:
            "What is the cost structure for web development services at Nakshatra Namaha Creations?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Costs depend on the scope of the project. We offer different pricing options to fit your budget while maintaining quality service.",
          },
        },
      ],
    },
  ],
};



const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]  , // ✅ cast fixes TS
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] , // ✅ fixed
    },
  },
};

// Parent + item for form animations
const parent: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] , // ✅ fixed
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] , // ✅ fixed
    },
  },
};


function Home() {
 const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef   = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const trackEl   = trackRef.current;
    if (!sectionEl || !trackEl) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mq = window.matchMedia("(min-width: 1025px)");
    let st: ScrollTrigger | null = null;

    const setup = () => {
      st?.kill();
      gsap.killTweensOf(trackEl);

      if (!mq.matches) {
        gsap.set(trackEl, { clearProps: "all" });
        ScrollTrigger.refresh();
        return;
      }

      // full horizontal distance the row needs to travel
      const total = Math.max(trackEl.scrollWidth - window.innerWidth, 0);

      // ultra-smooth interpolation
      const setX = gsap.quickTo(trackEl, "x", {
        duration: 0.45,
        ease: "power3.out",
      });

      st = ScrollTrigger.create({
        trigger: sectionEl,      // pin the whole section
        start: "top top",
        end: `+=${total}`,       // vertical distance equals horizontal overflow
        pin: true,
        scrub: false,            // smoothing is done by quickTo
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setX(-total * self.progress);
        },
      });

      ScrollTrigger.refresh();
    };

    setup();

    // re-setup on resize + breakpoint change
    const ro = new ResizeObserver(() => setup());
    ro.observe(document.body);
    mq.addEventListener?.("change", setup);

    return () => {
      ro.disconnect();
      mq.removeEventListener?.("change", setup);
      st?.kill();
      gsap.killTweensOf(trackEl);
    };
  }, []);


  const parent = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

  return (


    <div>

     <Head>
        <link rel="canonical" href="https://nakshatranamahacreations.in" />

        <title>
          Website Development Company in Mysore | Nakshatra Namaha Creations
        </title>
        <meta
          name="description"
          content="Nakshatra Namaha Creations offers expert website design and mobile app development in Mysore, delivering user-friendly, SEO-optimized solutions since 2015."
        />
        <meta
          name="keywords"
          content="Website Development Company in Mysore, Mobile App Development company in Mysore, Mobile App Development, Mobile App Development company, WordPress Website development, React JS website Development, Ecommerce Website development, Node JS Website Development, Corporate Video Production, Graphic Design Services, B2B Marketing Services"
        />
        <meta property="og:title" content="Website Development Company in Mysore" />
        <meta
          property="og:description"
          content="Nakshatra Namaha Creations offers expert website design and mobile app development in Mysore, delivering user-friendly, SEO-optimized solutions since 2015."
        />
        <meta property="og:url" content="https://nakshatranamahacreations.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Website Development Company in Mysore" />
        <meta
          name="twitter:description"
          content="Nakshatra Namaha Creations offers expert website design and mobile app development in Mysore, delivering user-friendly, SEO-optimized solutions since 2015."
        />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/logo.png" />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* JSON-LD via next/script */}
      <Script id="home-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>


   <div className={styles["baya"]}>
  
       <HeroBanner/>
      </div>
      
      <Specializations/>
       <FloatingActions />
      <MobileBottomBar />

      <ServicesSection/>
   
        <br />
       
      <TechnologySection/>
      {/* <Buissness /> */}
      <MarketingHero/>
      <ClientsShowcase/>
      <ZeroSection/>
   <section ref={sectionRef} className={styles.industriesSection} style={{backgroundColor:"#e9e9e9"}}> 
  {/* Full width container */}
  <div className={styles.fullWidth}>
    {/* Heading stays centered in a container */}
    <div className="container">
      <div className={styles.industriesHead}>
        <h3 className={styles.industriesTitle}>
          Industries We <span>Serve</span>
        </h3>
        <p className={styles.industriesSub}>
          We partner with businesses across domains to build digital solutions that drive growth.
        </p>
      </div>
    </div>

    {/* Track is now full width */}
    <div ref={trackRef} className={styles.industriesTrack}>
      {industries.map((ind, i) => (
        <div className={styles.industryGearWrap} key={ind.label}>
          <div className={styles.industryGear}>
            <div className={styles.industryGearInner}>
              <span className={styles.industryText}>{ind.label}</span>
            </div>
          </div>
          {i !== industries.length - 1 && (
            <span className={styles.industryConnector} />
          )}
        </div>
      ))}
    </div>
  </div>
</section>
   <br />

 <motion.section
      className={styles.productsShowcase}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          className={styles.productsShowcaseHead}
          variants={containerVariants}
        >
          <h2 className={styles.productsShowcaseTitle}>
            <span className={styles.gradient}>Insights &amp; Ideas</span>
            <br />
            <span>Fresh Perspectives on Tech, Design &amp; Marketing</span>
          </h2>
        </motion.div>

        {/* Grid with stagger */}
        <motion.div
          className="row g-4"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="col-md-6 col-lg-4"
              variants={cardVariants}
            >
              <motion.article
                className={styles.productsShowcaseCard}
                whileHover={{
                  y: -4,
                  boxShadow: "0 18px 36px rgba(0,0,0,0.12)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <motion.div
                  className={styles.productsShowcaseImgWrap}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={820}
                    height={520}
                    className="img-fluid"
                    priority={i < 3}
                  />
                </motion.div>

                <div className={styles.productsShowcaseContent}>
                  <h3 className={styles.productsShowcaseCardTitle}>{p.title}</h3>
                  <p className={styles.productsShowcaseCardText}>{p.blurb}</p>
                  <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
                    <Link href={p.href} className={styles.productsShowcaseCta}>
                      <span>Know More</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
     
 <TestimonialsCarousel/>
      {/* <CTASection /> */}
 
 <section className={styles.contactConsultHero} style={{ padding: "50px 0px" }}>
  {/* Background image */}
  <div className={styles.contactConsultHeroBg}>
    <Image
      src="/images/contact.jpg"
      alt="Developer consulting"
      fill
      priority
      className={styles.contactConsultHeroImg}
    />
    <div className={styles.contactConsultHeroVignette} />
  </div>

  {/* Right floating form */}
  <motion.div className={styles.contactConsultHeroCard}>
    <h2 className={styles.contactConsultHeroTitle}>
      Consult with our professionals
    </h2>

    <form
      className={styles.contactConsultHeroForm}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.contactConsultHeroRow}>
        <label className={styles.contactConsultHeroField}>
          <span>Name *</span>
          <input type="text" name="name" required placeholder="Your name" />
        </label>

        <label className={styles.contactConsultHeroField}>
          <span>Phone *</span>
          <input type="tel" name="phone" required placeholder="Phone No" />
        </label>
      </div>

      <label className={styles.contactConsultHeroField}>
        <span>Email *</span>
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
        />
      </label>

      <label className={styles.contactConsultHeroField}>
        <span>Your Message *</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project…"
        />
      </label>

      <motion.button
        type="submit"
        className={styles.contactConsultHeroCta}
        whileHover={{ x: 2, boxShadow: "0 10px 28px rgba(0,0,0,.25)" }}
        whileTap={{ scale: 0.98 }}
      >
        Get free consultation
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
          <path
            d="M4 10h10M10 4l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </form>
  </motion.div>
</section>

     <FaqSection/>
      <InfoSection /> 
    </div>
  );
}

export default Home;
