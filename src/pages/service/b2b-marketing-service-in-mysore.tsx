import React from "react";
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import {
  FaChessBoard,
  FaMagnet,
  FaPenNib,
  FaUserTie,
  FaBullseye,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import B2BFaq from "./B2BFaq";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import InfoSection from "@/components/InfoSection";
import B2BDesignPhases from "@/pages/B2BDesignPhases";
import B2BFeatureGrid from "@/pages/B2BFeatureGrid";
import { useState } from "react";
import axios from "axios";
import styles from "./B2BMarket.module.css";
import styles1 from "./ecommerce.module.css";

import styles2 from "./mobile-app-development.module.css";  

const faqs = [
  {
    id: 1,
    question: "What makes B2B marketing different from B2C marketing?",
    answer:
      "B2B marketing focuses on building long-term relationships and trust between businesses, using strategies like account-based marketing, email campaigns, and LinkedIn outreach, whereas B2C marketing typically aims for quicker conversions and broader emotional appeal.",
  },
  {
    id: 2,
    question: "How can LinkedIn outreach help generate qualified B2B leads?",
    answer:
      "LinkedIn is a powerful platform for B2B lead generation. Our team builds optimized profiles, sends strategic connection requests, and nurtures leads through personalized messages to convert them into meetings or demos.",
  },
  {
    id: 3,
    question: "What kind of email marketing strategies are used in B2B?",
    answer:
      "We implement drip email campaigns, cold email outreach, retargeting sequences, and personalized content strategies aimed at key decision-makers to keep your brand top of mind and drive engagement.",
  },
  {
    id: 4,
    question: "Can you create industry-specific B2B content strategies?",
    answer:
      "Yes. We analyze your target audience, competition, and buyer journey to craft tailored B2B content strategies including blogs, whitepapers, case studies, and webinars that resonate with industry stakeholders.",
  },
  {
    id: 5,
    question: "Do you offer lead scoring and CRM integration?",
    answer:
      "Absolutely. We can implement lead scoring models and integrate your CRM (like HubSpot, Zoho, or Salesforce) to streamline lead tracking, qualification, and nurturing across your marketing pipeline.",
  },
  {
    id: 6,
    question: "What KPIs do you focus on for B2B marketing success?",
    answer:
      "We measure KPIs like cost per lead (CPL), marketing qualified leads (MQLs), conversion rates, engagement metrics, email open/click rates, and overall ROI to evaluate and optimize every campaign.",
  },
];

const services = [
  {
    icon: <FaChessBoard />,
    title: "Strategic Planning",
    points: [
      "Develop focused strategies to align your business goals with market opportunities.",
      "Identify key objectives and create actionable plans for measurable results.",
      "Build impactful campaigns that connect with the right audience effectively.",
      "Ensure efficient resource utilization for maximizing productivity and profitability.",
    ],
  },
  {
    icon: <FaMagnet />,
    title: "Lead Generation",
    points: [
      "Generate high-quality leads with strategies designed to connect with your target audience.",
      "Increase conversion rates by connecting with the right prospects at the right time.",
      "Optimize your outreach efforts to ensure consistent business growth and long-term success.",
      "Strengthen your market presence with impactful and scalable lead generation solutions.",
    ],
  },
  {
    icon: <FaPenNib />,
    title: "Content Marketing",
    points: [
      "Create engaging and relevant content to capture your audience's attention effectively.",
      "Build trust and credibility through consistent and high-quality content delivery.",
      "Enhance SEO performance with content designed to improve search engine rankings.",
      "Establish authority in your industry through insightful articles, blogs and case studies.",
    ],
  },
  {
    icon: <FaUserTie />,
    title: "Account-Based Marketing",
    points: [
      "Design strategies focused on engaging high-value business accounts.",
      "Connect directly with decision-makers to achieve meaningful business outcomes.",
      "Prioritize high-potential accounts to maximize ROI effectively.",
      "Use direct channels to ensure your message reaches the right audience.",
    ],
  },
  {
    icon: <FaBullseye />,
    title: "Brand Positioning",
    points: [
      "Create a strong and consistent message that reflects your business values.",
      "Build trust and credibility through effective brand positioning strategies.",
      "Strengthen your market presence with innovative approaches to branding.",
      "Highlight your unique strengths to differentiate your brand from competitors.",
    ],
  },
];

const steps = [
  { number: 1, title: "Understanding Your Goals", text: "Analyze your business needs to create a focused marketing strategy." },
  { number: 2, title: "Strategic Planning", text: "Develop a comprehensive plan that aligns with your growth objectives." },
  { number: 3, title: "Audience Targeting", text: "Identify and connect with the right businesses and decision-makers." },
  { number: 4, title: "Content Creation", text: "Craft compelling materials to engage your target audience effectively." },
  { number: 5, title: "Lead Generation", text: "Implement proven methods to generate valuable leads for your business." },
  { number: 6, title: "Account-Based Marketing", text: "Personalize campaigns to strengthen connections with key clients." },
  { number: 7, title: "Brand Positioning", text: "Build trust and credibility to enhance your market presence." },
];

export default function B2BMarketPage() {

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    service: "",
    referenceFrom: "quickform", // static value to identify this form
    city: "Mysore",             // static
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        formData
      );
      if (res.status === 200 || res.status === 201) {
        alert("Thank you! Your enquiry has been sent.");
        setFormData({
          name: "",
          phoneNo: "",
          email: "",
          service: "",
          referenceFrom: "quickform",
          city: "Mysore",
        });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending form.");
    }
  };


  const Service7Breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "B2B Marketing Services", path: "/service/b2b-marketing-service-in-mysore" },
  ];

  return (
    <>
      <Head>
        <title>Effective B2B Marketing Services in Mysore</title>
        <meta
          name="description"
          content="Drive qualified leads and grow your business with expert B2B marketing services in Mysore including LinkedIn outreach, email campaigns, and content strategies."
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/b2b-marketing-service-in-mysore"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Effective B2B Marketing Services in Mysore" />
        <meta
          property="og:description"
          content="Drive qualified leads and grow your business with expert B2B marketing services in Mysore including LinkedIn outreach, email campaigns, and content strategies."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/b2b-marketing-service-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Effective B2B Marketing Services in Mysore" />
        <meta
          name="twitter:description"
          content="Drive qualified leads and grow your business with expert B2B marketing services in Mysore including LinkedIn outreach, email campaigns, and content strategies."
        />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/logo.png" />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* JSON-LD */}
      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://nakshatranamahacreations.in/#organization",
          name: "Nakshatra Namaha Creations",
          url: "https://nakshatranamahacreations.in",
          logo: "https://nakshatranamahacreations.in/images/image.png",
          sameAs: [
            "https://www.facebook.com/Nakshatranamahacreations/",
            "https://www.instagram.com/nnc.digitalbengaluru/",
          ],
        })}
      </Script>

      <Script id="localbusiness-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
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
        })}
      </Script>

      <Script id="service-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "B2B Marketing Services",
          provider: {
            "@id": "https://nakshatranamahacreations.in/#localbusiness",
          },
          areaServed: { "@type": "Place", name: "Mysuru" },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl:
              "https://nakshatranamahacreations.in/service/b2b-marketing-service-in-mysore",
            availableLanguage: "English",
          },
          description:
            "Drive qualified leads and grow your business with expert B2B marketing services in Mysore including LinkedIn outreach, email campaigns, and content strategies.",
        })}
      </Script>

      <Script id="faq-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        })}
      </Script>

      <Script id="breadcrumb-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nakshatranamahacreations.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://nakshatranamahacreations.in/service" },
            { "@type": "ListItem", position: 3, name: "B2B Marketing Services", item: "https://nakshatranamahacreations.in/service/b2b-marketing-service-in-mysore" },
          ],
        })}
      </Script>

     

      

<section className={styles1.heroBannerWrapper} id="contact-hero">
      <Image
        src="/images/background.jpg"
        alt="Banner"
        width={1920}
        height={1080}
        priority
        className={styles1.carouselBgImage}
      />
      <div className={styles1.blackOverlay} />

      <div className={`container position-relative ${styles.inner}`}>
        <div className="row h-100 align-items-center">
          {/* Left Text */}
          <div className="col-12 col-lg-8">
            <div className={styles1.carouselBannerLeft}>
           <nav className={styles1.breadcrumbs} aria-label="Breadcrumb">
  <ol>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/service">Services</Link>
    </li>
    <li aria-current="page">
      <span className={styles1.breadcrumbsCurrent}>B2B Marketing</span>
    </li>
  </ol>
</nav>

<h1 className={styles1.title}>B2B MARKETING SERVICES COMPANY IN MYSORE</h1>
<p className={styles1.subtitle}>
  Scale your business with strategic B2B marketing solutions designed to generate quality leads, 
  strengthen brand positioning, and drive long-term growth. At Nakshatra Namaha Creations, 
  we specialize in account-based marketing, targeted campaigns, and personalized outreach 
  to help businesses build meaningful connections with decision-makers, achieve measurable ROI, 
  and grow sustainably in competitive industries.
</p>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="col-12 col-lg-4 mt-4 mt-lg-0 mb-3">
            <div className={styles1.contactCard}>
              <h3 className={styles1.contactHeading}>Let’s Connect</h3>
              <form onSubmit={handleSubmit} noValidate>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
                <input
                  name="phoneNo"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  pattern="[0-9+\s()-]{7,}"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select mb-3"
                >
                  <option value="" disabled>
                    Select Service *
                  </option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Ecommerce</option>
                  <option>Other</option>
                </select>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    height: 46,
                    borderRadius: 12,
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg, rgba(255,90,90,1), rgba(255,64,64,1))",
                    color: "#fff",
                    boxShadow: "0 8px 18px rgba(255,64,64,.35)",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles1.scrollExplore}>SCROLL TO EXPLORE</div>
    </section>



      {/* INTRO */}
  <div className={styles1["ecom-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles1["ecom-title-wrapper"]}>
            <h1 className={styles1["ecom-title"]}>
              B2B Marketing Services in Mysore.
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles1["ecom-section-wrapper"]}>
            <p className={styles1["ecom-description"]}>
              B2B Marketing Services in Mysore are designed to help businesses achieve growth
              through strategic planning and focused execution. With expertise in lead generation,
              account-based marketing and brand positioning, we create campaigns that connect you
              with the right audiences. Our solutions enable your business to build meaningful
              relationships and achieve measurable success in competitive markets. Through content
              marketing, account-based strategies and targeted lead generation, our B2B Marketing
              Services in Mysore deliver results that align with your business objectives. We focus
              on enhancing your brand&apos;s visibility and credibility using effective and reliable
              approaches. Whether it’s strategic planning or positioning your brand for success,
              our methods are aimed at creating value and driving sustainable business growth.
            </p>
          </div>
        </motion.div>
      </div>

      {/* SERVICE CARDS */}
<div className={styles1["ecom-service-wrapper"]}>
  <h2 className={styles1["ecom-service-title"]}>
    B2B Services We Offer
  </h2>
  <div className={styles1["ecom-service-grid"]}>
    {services.map((card, i) => (
      <div key={i} className={styles1["ecom-service-card"]}>
        <div className={styles1["ecom-service-icon"]} style={{fontSize:"1.7rem"}}>
          {typeof card.icon === "string" ? (
            <img src={card.icon} alt={card.title} />
          ) : (
            card.icon
          )}
        </div>
        <h3 className={styles1["ecom-service-heading"]}>
          {card.title}
        </h3>
        <ul className={styles1["ecom-service-list"]}>
          {card.points.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>



      {/* PROCESS */}
      <div className={styles["b2b-process-header11"]}>
        <h2>Our B2B Marketing Services Process: The Path to Success</h2>
        <p>
          Our B2B Marketing Services Process is designed to deliver effective solutions that drive growth.
          Each step is strategically planned to meet your business goals with measurable results.
        </p>
      </div>

      <div className={styles["process-grid"]}>
        {steps.map((step) => (
          <div className={styles["process-card"]} key={step.number}>
            <div className={styles["process-badge"]}>{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <B2BDesignPhases />
      <section className={styles["b2b-whychoose-section"]}>
        <div className={styles["b2b-whychoose-container"]}>
          
          <div className={styles["b2b-whychoose-text"]}>
            <h2>Why choose Nakshatra Namaha Creations for B2B Video Services?</h2>
          </div>
          
            <p className={styles["b2b-description"]}>
              Choosing the right partner for B2B Marketing Services in Mysore can significantly impact your
              business growth. At Nakshatra Namaha Creations, we specialize in strategic planning, lead
              generation, content marketing, account-based marketing and brand positioning. Our goal is to help
              your business connect with the right partners and achieve measurable success. With a focus on
              innovative solutions and results-driven strategies, we ensure your marketing efforts deliver
              impactful outcomes.
            </p>
          </div>
      
      </section>

      <B2BFeatureGrid />

      {/* INDUSTRIES */}
      <div className={styles["b2b-industries-wrapper"]}>
        <div className={styles["b2b-industries-left"]}>
          <h2>Industries We Serve</h2>
          <p>
            We offer innovative digital solutions as a leading Mobile App and Website Development Company in Mysore,
            catering to industries such as service, education, entertainment, real estate, etc. Our expertise helps
            businesses enhance efficiency, engage their audience and achieve their goals seamlessly.
          </p>
          <div className={styles["b2b-industries-list"]}>
            <ul>
            <strong><li>Service Industry</li></strong>  
              <strong><li>Education Industry</li></strong>  
             <strong><li>Finance</li></strong>   
             <strong><li>Healthcare</li></strong>   
             <strong> <li>Real Estate</li></strong>  
            </ul>
            <ul>
             <strong><li>Entertainment</li></strong>   
             <strong><li>Automobile</li></strong>   
             <strong><li>Fitness</li></strong>   
              <strong><li>Hospitality</li></strong>  
              <strong><li>Logistics</li></strong>  
            </ul>
          </div>
        </div>
        <div className={styles["b2b-industries-right"]}>
          <img src="/images/rock22.webp" alt="Industries" />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />

        <B2BFaq/>

      <InfoSection />
    </>
  );
}
