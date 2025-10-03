// src/pages/services/SeoDevelopment.tsx
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

// CSS Module (all your custom classes live here)
import styles from "./SeoService.module.css";
import { useState } from "react";
import axios from "axios";
import styles1 from "./mobile-app-development.module.css";  
// Adjust these paths if your project structure differs
import InfoSection from "@/components/InfoSection";
import SeoTypesSection from "@/pages/SeoTypesSection";
import SeoFeatureCardGrid from "@/pages/SeoFeatureCardGrid";
import SeoServiceFaq from "./SeoServiceFaq";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import Link from "next/link";
import Image from "next/image";
import {
  FaClipboardCheck,
  FaSearch,
  FaKey,
  FaFileAlt,
  FaEdit,
  FaCode,
  FaMobileAlt,
  FaLink,
  FaChartLine,
} from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const faqs = [
  {
    id: 1,
    question: "What SEO services do you offer in Mysore?",
    answer:
      "We provide on-page SEO, off-page SEO, technical SEO audits, local SEO optimization, keyword research, and content optimization services.",
  },
  {
    id: 2,
    question: "How do you improve Google rankings for websites?",
    answer:
      "We follow white-hat techniques including keyword optimization, high-quality content, backlink strategies, and website structure improvements.",
  },
  {
    id: 3,
    question: "Can you help with local SEO for businesses in Mysuru?",
    answer:
      "Yes, we optimize Google Business Profiles, manage local citations, and target location-based keywords to improve visibility in Mysuru.",
  },
  {
    id: 4,
    question: "Do you conduct SEO audits for existing websites?",
    answer:
      "Absolutely. We perform technical SEO audits to identify issues related to speed, crawlability, indexing, and content gaps.",
  },
  {
    id: 5,
    question: "Is content optimization part of your SEO strategy?",
    answer:
      "Yes, we improve meta tags, structure headings, optimize images, and create keyword-rich content to enhance page relevance and engagement.",
  },
  {
    id: 6,
    question: "Do you provide SEO reports and analytics tracking?",
    answer:
      "Yes, we offer monthly SEO performance reports that cover keyword rankings, organic traffic, backlink status, and conversion metrics.",
  },
];

type Card = { title: string; icon: React.ReactNode; text: string };
const cards: Card[] = [
  {
    title: "Studying Your Business",
    icon: <FaClipboardCheck size={28} color="#22abe2" />,
    text: `Analyze the client’s requisition document and key business aspects to establish priorities effectively.`,
  },
  {
    title: "Website SEO Audit",
    icon: <FaSearch size={28} color="#22abe2"  />,
    text: `Perform a thorough SEO audit and implement strategic improvements to enhance search engine rankings.`,
  },
  {
    title: "Keyword Analysis",
    icon: <FaKey size={28} color="#22abe2"  />,
    text: `Perform keyword research and refine website content for better search engine optimization.`,
  },
  {
    title: "Content Optimization",
    icon: <FaFileAlt size={28} color="#22abe2"  />,
    text: `Integrate high-quality content with targeted keywords to boost organic search traffic.`,
  },
  {
    title: "On-Page Optimization",
    icon: <FaEdit size={28} color="#22abe2"  />,
    text: `Improve website readability by optimizing URLs, titles, meta descriptions, and image tags.`,
  },
  {
    title: "Schema Optimization",
    icon: <FaCode size={28} color="#22abe2"  />,
    text: `Implement schema markup including business, article, blog, video, and product schemas.`,
  },
  {
    title: "Mobile Optimization (AMP)",
    icon: <FaMobileAlt size={28} color="#22abe2"  />,
    text: `Enhance mobile loading speed using Accelerated Mobile Pages (AMP) for better performance.`,
  },
  {
    title: "Off-Page Optimization",
    icon: <FaLink size={28} color="#22abe2"  />,
    text: `Acquire backlinks from authoritative sources and increase brand visibility on external platforms.`,
  },
  {
    title: "Driving Website Traffic",
    icon: <FaChartLine size={28} color="#22abe2"  />,
    text: `Utilize advanced SEO strategies to improve rankings and attract high-quality traffic.`,
  },
];

type Service = { icon: string; title: string; points: string[] };
const services: Service[] = [
  {
    icon: "/images/vendor.png",
    title: "On-page SEO",
    points: [
      "Comprehensive keyword research and strategic implementation to improve search engine rankings.",
      "Optimized title tags and meta descriptions to boost click-through rates.",
      "Creating engaging, high-quality, and valuable content for both users and search engines.",
      "Clear and concise URLs to help search engine crawlers index your website efficiently.",
    ],
  },
  {
    icon: "/images/global.png",
    title: "Off-page SEO",
    points: [
      "Identifying high-authority domains and pages to secure quality backlinks and enhance credibility.",
      "Developing engaging and valuable social media content to drive traffic and improve search engine rankings.",
      "Crafting high-quality guest posts on reputable industry websites to establish authority and build strong backlinks.",
    ],
  },
  {
    icon: "/images/cms.png",
    title: "Technical SEO",
    points: [
      "Enhancing design, images, and website elements to improve speed and user experience",
      "Setting up XML sitemaps to assist search engine bots in understanding website structure.",
      "Ensuring mobile responsiveness to meet user demand and improve search engine rankings.",
    ],
  },
  {
    icon: "/images/native.png",
    title: "Local SEO",
    points: [
      "Boosting local search rankings by listing your business on local directories and top review platforms.",
      "Setting up and optimizing Google My Business to enhance local visibility and attract more customers.",
    ],
  },
  {
    icon: "/images/crossplat.png",
    title: "International SEO",
    points: [
      "Reach international audiences with top-notch SEO services in Bangalore from Nakshatra Namaha Creations.",
      "Optimize your business website for multiple countries, regions, and languages to enhance global search rankings.",
    ],
  },
  {
    icon: "/images/crossplat.png",
    title: "E-Commerce SEO",
    points: [
      "Optimize your e-commerce website on platforms like Shopify, Magento, and WooCommerce to boost sales.",
      "Implement conversion strategies by enhancing product pages and site navigation for better visibility and higher conversions.",
    ],
  },
];

export default function SeoDevelopment() {

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

  const Service6Breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "SEO Service", path: "/service/seo-service-company-in-mysore" },
  ];

  return (
    <>
      <Head>
        <title>Top-Rated SEO Service Company in Mysore for Ranking</title>
        <meta
          name="description"
          content="Improve your website’s Google ranking with expert SEO services in Mysore—covering on-page, off-page, local SEO, audits, and keyword optimization strategies."
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/seo-service-company-in-mysore"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Top-Rated SEO Service Company in Mysore for Ranking"
        />
        <meta
          property="og:description"
          content="Improve your website’s Google ranking with expert SEO services in Mysore—covering on-page, off-page, local SEO, audits, and keyword optimization strategies."
        />
        <meta
          name="keywords"
          content="SEO Service Company in Mysore"
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/seo-service-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Top-Rated SEO Service Company in Mysore for Ranking"
        />
        <meta
          name="twitter:description"
          content="Improve your website’s Google ranking with expert SEO services in Mysore—covering on-page, off-page, local SEO, audits, and keyword optimization strategies."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />

        {/* JSON-LD (leave as-is if you prefer) */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://nakshatranamahacreations.in/#organization",
          "name": "Nakshatra Namaha Creations",
          "url": "https://nakshatranamahacreations.in",
          "logo": "https://nakshatranamahacreations.in/images/image.png",
          "sameAs": [
            "https://www.facebook.com/Nakshatranamahacreations/",
            "https://www.instagram.com/nnc.digitalbengaluru/"
          ]
        }`}</script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://nakshatranamahacreations.in/#localbusiness",
          "name": "Nakshatra Namaha Creations",
          "image": "https://nakshatranamahacreations.in/images/image.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block",
            "addressLocality": "Mysuru",
            "addressRegion": "Karnataka",
            "postalCode": "570008",
            "addressCountry": "IN"
          },
          "url": "https://nakshatranamahacreations.in",
          "telephone": "+91-9900566466",
          "email": "info@nakshatranamahacreations.in",
          "areaServed": "Mysuru",
          "priceRange": "₹₹"
        }`}</script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SEO Services",
          "provider": {
            "@id": "https://nakshatranamahacreations.in/#localbusiness"
          },
          "areaServed": { "@type": "Place", "name": "Mysuru" },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://nakshatranamahacreations.in/service/seo-service-company-in-mysore",
            "availableLanguage": "English"
          },
          "description": "Improve your website’s Google ranking with expert SEO services in Mysore—covering on-page, off-page, local SEO, audits, and keyword optimization strategies."
        }`}</script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": ${JSON.stringify(
            faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            }))
          )}
        }`}</script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nakshatranamahacreations.in/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nakshatranamahacreations.in/service" },
            { "@type": "ListItem", "position": 3, "name": "SEO Service Company", "item": "https://nakshatranamahacreations.in/service/seo-service-company-in-mysore" }
          ]
        }`}</script>
      </Head>

        <section className={styles.heroBannerWrapper} id="contact-hero">
           <Image
             src="/images/background.jpg"
             alt="Banner"
             width={1920}
             height={1080}
             priority
             className={styles.carouselBgImage}
           />
           <div className={styles.blackOverlay} />
     
           <div className={`container position-relative ${styles.inner}`}>
             <div className="row h-100 align-items-center">
               {/* Left Text */}
               <div className="col-12 col-lg-8">
                 <div className={styles.carouselBannerLeft}>
              <nav className={styles1.breadcrumbs} aria-label="Breadcrumb">
  <ol>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/service">Services</Link>
    </li>
    <li aria-current="page">
      <span className={styles1.breadcrumbsCurrent}>SEO Services</span>
    </li>
  </ol>
</nav>

<h2 className={styles1.title}>SEO SERVICES COMPANY IN MYSORE</h2>
<p className={styles1.subtitle}>
  Boost your online visibility and attract the right audience with our proven SEO services. 
  At Nakshatra Namaha Creations, we specialize in on-page, off-page, and technical SEO 
  strategies tailored to your business goals. From keyword research and competitor analysis 
  to content optimization and link-building, our team ensures your website ranks higher, 
  loads faster, and delivers measurable results.
</p>

     
                 </div>
               </div>
     
               {/* Right Contact Form */}
               <div className="col-12 col-lg-4 mt-4 mt-lg-0 mb-3">
                <ContactForm/>
               </div>
             </div>
           </div>
     
           <div className={styles.scrollExplore}>SCROLL TO EXPLORE</div>
         </section>


      <div className={styles["seo-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles["seo-title-wrapper"]}>
            <h1 className={styles["seo-title"]}>
              Reliable SEO Service Company in Mysore
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["seo-section-wrapper1"]}>
            <p className={styles["seo-description"]}>
              Nakshatra Namaha Creations is a leading SEO services company in
              Mysore, delivering exceptional, results-driven strategies tailored
              to meet your business objectives. Our team of professionals
              optimizes websites for higher search rankings, enhanced visibility,
              and seamless user experiences across all digital platforms.
              Committed to innovation and precision, we help businesses
              strengthen their online presence, drive organic traffic, and
              achieve sustainable growth in the digital landscape.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles["seo-solutions-wrapper2"]}>
        <h2 className={styles["seo-solutions-title"]}>
          Performance-focused SEO Services We Offer
        </h2>
        <div className={styles["seo-solutions-grid"]}>
          {services.map((service, idx) => (
            <div className={styles["seo-solutions-card"]} key={idx}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles["seo-solutions-icon"]}
              />
              <h4 className={styles["seo-solutions-heading"]}>
                {service.title}
              </h4>
              <ul className={styles["seo-solutions-list"]}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${styles["scroll-panel"]} ${styles["seo-process-wrapper"]}`}
      >
        <motion.h2
          className={styles["seo-process-title"]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our SEO Website Development Process
        </motion.h2>

        <motion.p
          className={styles["seo-process-subtitle"]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <strong>Cutting-Edge SEO Web Development</strong>
        </motion.p>

        <motion.div
          className={styles["seo-process-desc"]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            At Nakshatra Namaha Creations, our SEO-focused website development
            process is built around performance, visibility, and user
            experience. We follow a structured approach to bring your vision to
            life with strategic, search-engine-ready solutions.
          </p>
        </motion.div>
      </div>

      <div className={styles["seo-feature-wrapper"]}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles["seo-feature-card"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles["seo-feature-icon"]}>{card.icon}</div>
            <h3 className={styles["seo-feature-title"]}>{card.title}</h3>
            <p className={styles["seo-feature-desc"]}>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <SeoTypesSection />

      {/* <div className={styles["seo-section-wrapper"]}>
        <div className={styles["seo-section-left"]}>
          <h2>
            Why choose Nakshatra Namaha Creations as ecommerce development
            company in Mysore?
          </h2>
          <p>
            As the most trusted ecommerce development company in Mysore,
            Nakshatra Namaha Creations has highly experienced ecommerce
            developers in Mysore, who are knowledgeable and well versed with the
            latest technologies that helps in attractive ui/ux design, quick
            loading, enhanced mobile responsiveness, and device compatibility
            for the website.
          </p>
        </div>
      </div> */}

      <SeoFeatureCardGrid />

      <div className={styles["industry-section-wrapper"]}>
        <div className={styles["industry-section-left"]}>
          <h2>High-ROI SEO strategies tailored for diverse industries.</h2>
          <br />
          <div className={styles["industry-section-list"]}>
            <ul>
            <strong> <li>SEO for healthcare websites</li></strong> 
            <strong> <li>SEO for technology websites</li></strong> 
            <strong> <li>SEO for digital product/SaaS companies</li></strong> 
             <strong><li>SEO for education websites</li></strong> 
            </ul>
            <ul>
            <strong> <li>SEO for NGO services</li></strong> 
           <strong><li>SEO for small businesses/sole proprietorship</li></strong>   
             <strong> <li>SEO for professional services</li></strong>
            </ul>
          </div>
        </div>
        <div className={styles["industry-section-right"]}>
          <img src="/images/rak.webp" alt="Industries Mockup" />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />

     <SeoServiceFaq/>

      <InfoSection />
    </>
  );
}
