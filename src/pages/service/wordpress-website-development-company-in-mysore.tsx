// src/pages/service/wordpress-website-development-company-in-mysore.tsx
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "./wordpress.module.css";

import InfoSection from "@/components/InfoSection";
import WordpressFaq from "./WordpressFaq";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
// keep this path as-is if your file lives there; adjust if you moved it
import WordPressFeaturedCard from "@/pages/WordPressFeaturedCard";
import styles1 from "./mobile-app-development.module.css";
import { FaVectorSquare, FaChartLine, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";


const faqs = [
  {
    id: 1,
    question: "Why should I choose WordPress for my business website?",
    answer:
      "WordPress is flexible, scalable, and easy to manage. It supports custom design, SEO optimization, and plugin integrations to meet your unique business needs.",
  },
  {
    id: 2,
    question: "Do you offer custom WordPress theme development?",
    answer:
      "Yes, we design and develop fully custom WordPress themes tailored to your brand, functionality requirements, and user experience goals.",
  },
  {
    id: 3,
    question: "Can you redesign an existing WordPress website?",
    answer:
      "Absolutely. We can revamp your current WordPress website with a modern design, improved performance, mobile responsiveness, and updated content structure.",
  },
  {
    id: 4,
    question: "Is the WordPress website SEO-friendly?",
    answer:
      "Yes. We build SEO-ready WordPress sites with clean code, fast load times, structured data, and optimized meta tags to help your site rank better on search engines.",
  },
  {
    id: 5,
    question: "Will I be able to update content on my own after the site is live?",
    answer:
      "Yes. We provide a user-friendly admin panel and training so you can easily update text, images, blogs, and products without needing technical knowledge.",
  },
  {
    id: 6,
    question: "Do you provide WordPress maintenance and support?",
    answer:
      "Yes, we offer ongoing WordPress maintenance, backups, plugin updates, security monitoring, and technical support to keep your website running smoothly.",
  },
];

export default function WordPress() {

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
  const Service2Breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    {
      name: "WordPress Website Development",
      path: "/service/wordpress-website-development-company-in-mysore",
    },
  ];

  const services = [
    {
      icon: "/images/motion.webp",
      title: "Custom WordPress Development",
      points: [
        "Expert in selecting the best tools and technologies for robust WordPress solutions.",
        "Customized WordPress websites designed to elevate your business and drive success.",
        "Deep understanding of key development choices to ensure website reliability and performance.",
        "Years of experience delivering seamless WordPress sites that meet market demand.",
      ],
    },
    {
      icon: "/images/online-store.png",
      title: "WordPress E-Commerce Development",
      points: [
        "Focus on high-quality, user-friendly design and flawless functionality in every e-commerce website.",
        "Proven experience in delivering innovative WordPress e-commerce sites that drive business growth and engagement.",
        "Expertise in developing online stores with WooCommerce and custom integrations.",
        "Skilled in selecting the right tools and technologies for optimal website performance and scalability.",
      ],
    },
    {
      icon: "/images/crossplat.png",
      title: "WordPress Headless Development",
      points: [
        "Broad platform compatibility to deliver content across websites, apps, and devices.",
        "Ensures a seamless and consistent experience with a decoupled WordPress backend.",
        "Ideal for brands looking to scale efficiently with minimal resources.",
        "Enables faster updates and streamlined content management for evolving business needs.",
      ],
    },
    {
      icon: "/images/application.png",
      title: "WordPress Migration",
      points: [
        "Effortlessly migrate your website to WordPress without data loss or downtime.",
        "Ensure secure transfer of databases, content, and media files with robust protection.",
        "Tailored migration plans for websites of all sizes and complexities.",
        "Retain search engine rankings by properly redirecting URLs and maintaining SEO settings.",
      ],
    },
    {
      icon: "/images/crossplat.png",
      title: "WordPress Maintenance and Support",
      points: [
        "Reliable performance backed by our expert WordPress maintenance and support team.",
        "Proficient in optimizing and maintaining WordPress sites for smooth functionality.",
        "Efficient support services to ensure your website remains secure and up-to-date.",
        "Improved site performance and reduced downtime through proactive maintenance and timely updates.",
      ],
    },
    {
      icon: "/images/lms.png",
      title: "WordPress LMS Development",
      points: [
        "LMS websites built with industry standards for top-tier performance and reliability.",
        "Leveraging the latest WordPress tools to keep your learning platform innovative and up-to-date.",
        "Delivering smooth, intuitive user experiences tailored for learners and educators.",
        "Supporting educational growth with reliable, feature-rich LMS solutions.",
      ],
    },
    {
      icon: "/images/native.png",
      title: "WordPress API Integration Services",
      points: [
        "Reliable performance backed by our expert WordPress API integration team.",
        "Proficient in integrating third-party APIs for dynamic, high-performance websites.",
        "Seamlessly designed integrations to ensure consistency across all platforms.",
        "Improved ROI by connecting your website with essential tools and services effortlessly.",
      ],
    },
    {
      icon: "/images/app-development.png",
      title: "WordPress Theme and Plugin Development",
      points: [
        "Tailor-made themes designed to align with your brand identity and business goals.",
        "Creating bespoke plugins to extend your websites functionality and enhance performance.",
        "Developing lightweight, responsive themes and plugins for faster load times.",
        "Providing maintenance and updates to keep your themes and plugins optimized.",
      ],
    },
  ];

  const cards = [
    {
      title: "Innovative evolution.",
      icon: <FaVectorSquare size={28}  color="#22abe2"/>,
      text: `We offer comprehensive WordPress theme customization tailored to your specific needs. 
Our team works closely with you to adjust and personalize themes, ensuring they align with 
your brand’s identity and functionality requirements.`,
    },
    {
      title: "Dynamic progression.",
      icon: <FaChartLine size={28} color="#22abe2"/>,
      text: `We ensure that every website we develop evolves with time. We focus on delivering 
flexible, innovative solutions that scale with your business, always staying ahead of the 
user-friendly WordPress websites that grow alongside your brand.`,
    },
    {
      title: "Tailored excellence.",
      icon: <FaLightbulb size={28} color="#22abe2" />,
      text: `We streamline our workflow by offering easy-to-use, SEO-friendly WordPress themes and 
plugins that are fully customizable. This ensures your website performs well in search rankings 
while providing flexibility for future updates and modifications.`,
    },
  ];

  return (
    <>
      <Head>
        <title>WordPress Website Development Company in Mysore</title>
        <meta
          name="description"
          content="Build fast, responsive, and SEO-friendly WordPress websites in Mysore with expert developers focused on custom design and business functionality."
        />
        <meta
          name="keywords"
          content="WordPress Website Development Mysore, WordPress Developers Mysore, CMS Website Services"
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/wordpress-website-development-company-in-mysore"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="WordPress Website Development Company in Mysore"
        />
        <meta
          property="og:description"
          content="Build fast, responsive, and SEO-friendly WordPress websites in Mysore with expert developers focused on custom design and business functionality."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/wordpress-website-development-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="WordPress Website Development Company in Mysore"
        />
        <meta
          name="twitter:description"
          content="Build fast, responsive, and SEO-friendly WordPress websites in Mysore with expert developers focused on custom design and business functionality."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* <MyBreadcrumb crumbs={Service2Breadcrumbs} /> */}


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
      <span className={styles1.breadcrumbsCurrent}>WordPress Development</span>
    </li>
  </ol>
</nav>

<h1 className={styles1.title}>WORDPRESS WEBSITE DEVELOPMENT COMPANY IN MYSORE</h1>
<p className={styles1.subtitle}>
  Build fast, secure, and SEO-ready WordPress websites that convert. Nakshatra Namaha
  Creations crafts custom themes, lightning-quick pages, and scalable CMS experiences—
  from corporate sites and blogs to eCommerce with WooCommerce—so you can manage
  content easily and grow with confidence.
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



      <div className={styles["wordpressapp-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles["wordpressapp-title"]}>
            Reliable WordPress Website Development Company in Mysore
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["wordpressapp-section-wrapper"]}>
            <p className={styles["wordpressapp-description"]}>
              Nakshatra Namaha Creations is a leading WordPress development
              company in Mysore, delivering exceptional, user-centric websites
              that align with your business objectives. Our team of
              professionals builds WordPress websites with seamless
              functionality, strong performance, and a refined, user-friendly
              experience. We specialize in custom themes, plugins, and
              responsive designs to ensure optimal performance across devices.
              Committed to innovation and precision, we create websites that
              enhance your brand’s online presence and foster meaningful
              connections in the digital landscape.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles["wordpressservices-wrapper"]}>
        <h2 className={styles["wordpressservices-title"]}>
          WordPress Website Development Services We Offer
        </h2>

        <div className={styles["wordpressservices-grid"]}>
          {services.map((service, idx) => (
            <div className={styles["wordpressservices-card"]} key={idx}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles["wordpressservices-icon"]}
              />
              <h4 className={styles["wordpressservices-heading"]}>
                {service.title}
              </h4>
              <ul className={styles["wordpressservices-list"]}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <WordPressFeaturedCard />

      <div className={styles["wordpressapp-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles["wordpressapp-title"]}>
            Why choose Nakshatra Namaha Creations as a WordPress Website
            Development Company in Mysore?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["wordpressapp-section-wrapper"]}>
            <p className={styles["wordpressapp-description"]}>
              At Nakshatra Namaha Creations, we specialize in WordPress website
              development in Mysore, delivering seamless and engaging user
              experiences. With a focus on quality and client satisfaction, we
              blend expertise with creativity to help businesses thrive in the
              digital world. Here's why we are Mysore's trusted choice for
              WordPress website development.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles["wpcard-wrapper"]}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles["wpcard"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles["wpcard-icon-bg"]}>{card.icon}</div>
            <h3 className={styles["wpcard-title"]}>{card.title}</h3>
            <p className={styles["wpcard-desc"]}>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles["industry-section-wrapper"]}>
        <div className={styles["industry-section-left"]}>
          <h2>Importance of WordPress websites</h2>
          <p>
            As a leading WordPress website development company in Mysore, we
            provide innovative digital solutions across industries like service,
            education, entertainment, real estate, and more. Our expertise
            enables businesses to improve efficiency, engage their audience, and
            seamlessly achieve their goals through custom WordPress websites
            tailored to their specific needs.
          </p>

          <div className={styles["industry-section-list"]}>
            <ul>
            <strong><li>Build a website with full customization</li></strong>  
             <strong> <li>Best user interface</li></strong>
           <strong><li>Content management website</li></strong>  
           <strong><li>Multiple theme options</li></strong>   
           <strong><li>Attractive design</li></strong>   
           <strong><li>Free and light-weighted plugins</li></strong>   
          <strong><li>Best blogging site</li></strong>    
            </ul>
            <ul>
           <strong><li>Fast loading and easy access</li></strong>   
            <strong><li>Cost-effective</li></strong>  
           <strong><li>Create multiple pages</li></strong>   
             <strong><li>Mobile responsive and browser compatibility</li></strong> 
           <strong><li>Search engine optimization</li></strong>   
            <strong><li>Social media integration</li></strong>  
            </ul>
          </div>
        </div>

        <div className={styles["industry-section-right"]}>
          <img src="/images/Kavu.webp" alt="Industries Mockup" />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />

     <WordpressFaq/>

      <InfoSection />
    </>
  );
}
