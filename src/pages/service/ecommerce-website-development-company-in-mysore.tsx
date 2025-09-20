// src/pages/service/ecommerce-website-development-company-in-mysore.tsx
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import styles from "./ecommerce.module.css";
import styles1 from "./wordpress.module.css";
import ECommerceScroll from "@/pages/ECommerceScroll";
import EcomTypesSection from "@/pages/EcomTypesSection";
import InfoSection from "@/components/InfoSection";
import Link from "next/link";
import Image from "next/image";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import EcommerceFaq from "./EcommerceFaq";
import { FaGlobe, FaPencilAlt, FaUsers, FaCheck } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const faqs = [
  {
    id: 1,
    question: "Do you support both B2B and B2C ecommerce development?",
    answer:
      "Yes, we build tailored ecommerce platforms for both B2B and B2C models, including features like bulk ordering, user segmentation, and custom pricing.",
  },
  {
    id: 2,
    question: "Can I integrate multiple payment gateways into my ecommerce site?",
    answer:
      "Absolutely. We integrate gateways like Razorpay, Paytm, Stripe, and more to give your customers a secure and convenient checkout experience.",
  },
  {
    id: 3,
    question: "Do you offer inventory and order management solutions? ",
    answer:
      "Yes, we build ecommerce platforms with built-in or integrated inventory tracking, order status management, stock alerts, and supplier syncing.",
  },
  {
    id: 4,
    question: "Is the ecommerce website mobile-optimized?",
    answer:
      "All our ecommerce websites are fully responsive and optimized for mobile shopping experiences across Android and iOS devices.",
  },
  {
    id: 5,
    question: "Can you integrate analytics and customer tracking tools?",
    answer:
      "Yes, we integrate tools like Google Analytics, Facebook Pixel, and Hotjar to help you track user behavior and optimize conversions.",
  },
  {
    id: 6,
    question: "Do you provide multi-language or multi-currency options?",
    answer:
      "Yes, we support multi-language and multi-currency ecommerce setups to help you sell globally with localized content and payment options.",
  },
];

export default function EcommercePage() {

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

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Ecommerce Website development", path: "/service" },
  ];

  const featureCards = [
    {
      title: "Global eCommerce development",
      icon: <FaGlobe size={28} color="#22abe2" />,
      text: `Nakshatra Namaha Creations breaks down geographical barriers, linking buyers and sellers across the globe to transform the online shopping experience.`,
    },
    {
      title: "Tailored solutions",
      icon: <FaPencilAlt size={28} color="#22abe2"  />,
      text: `Select us for tailored eCommerce development with Magento, WooCommerce, OpenCart, and Shopify platforms.`,
    },
    {
      title: "Engaging user experience",
      icon: <FaUsers size={28} color="#22abe2"  />,
      text: `Our skilled team designs visually attractive and intuitive retail websites.`,
    },
  ];

  const services = [
    {
      icon: "/images/vendor.png",
      title: "Single Vendor eCommerce Website",
      points: [
        "A seller providing products solely through their online store to a wide customer base.",
        "Reduces compatibility issues, ensures quick feature updates and deployment, streamlines staff training, and saves time in procurement.",
        "Offers a limited product range with potential reliance on a single vendor. Key benefits include compatibility, speed, efficient training, and time-saving.",
        "Compatibility, speed, training, time-saving.",
      ],
    },
    {
      icon: "/images/global.png",
      title: "Multivendor eCommerce Website",
      points: [
        "A marketplace where multiple vendors showcase and sell their products to a broad customer base.",
        "Wide product variety, enhanced competition, competitive pricing, and expanded customer reach.",
        "Ensuring quality standards, reliable shipping, and strong seller partnerships.",
        "Product variety, competitive pricing, broader market, and customer reach.",
      ],
    },
    {
      icon: "/images/cms.png",
      title: "Custom CMS-Based eCommerce Website",
      points: [
        "A tailored eCommerce website powered by a custom content management system.",
        "Customizable features, enhanced functionality, seamless content management, and full control over your eCommerce website.",
        "Longer development time, higher costs, potential technical challenges, and continuous maintenance needs.",
        "Customization, flexibility, content management, control.",
      ],
    },

    {
      icon: "/images/native.png",
      title: "E-commerce app development",
      points: [
        "Developing a mobile app for e-commerce to boost customer engagement and streamline shopping experiences.",
        "Enhanced usability, seamless mobile access, promotional push notifications, and strengthened customer loyalty.",
        "Development expenses, multi-device compatibility, and continuous maintenance with updates.",
        "Improved aesthetics, seamless usability, streamlined navigation, and higher conversion rates.",
      ],
    },
    {
      icon: "/images/crossplat.png",
      title: "Redesigning e-commerce store",
      points: [
        "Redesigning an e-commerce website to improve aesthetics, usability, and performance for a better user experience.",
        "Enhanced design, improved usability, streamlined navigation, and higher conversion potential for increased sales.",
        "Requires time and cost investment, smooth data migration, SEO compatibility, and seamless system integration.",
        "Boosted aesthetics, seamless usability, and streamlined navigation with cutting-edge eCommerce web design solutions.",
      ],
    },
    {
      icon: "/images/crossplat.png",
      title: "eCommerce SEO",
      points: [
        "Optimizing e-commerce websites with targeted SEO strategies to enhance visibility and boost organic rankings.",
        "Boosting organic traffic, enhancing search rankings, increasing product visibility, and driving higher conversion rates.",
        "Organic traffic growth, higher rankings, product visibility, improved conversions.",
        "Conducting keyword research, optimizing pages and products, implementing technical SEO, and analyzing performance for continuous improvement.",
      ],
    },
  ];

  const orgLd = {
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
  };

  const businessLd = {
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
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Website Development",
    provider: { "@id": "https://nakshatranamahacreations.in/#localbusiness" },
    areaServed: { "@type": "Place", name: "Mysuru" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl:
        "https://nakshatranamahacreations.in/service/ecommerce-website-development-company-in-mysore",
      availableLanguage: "English",
    },
    description:
      "Launch powerful eCommerce stores in Mysore with expert developers skilled in responsive design, secure payment gateways, and scalable online shopping solutions.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const crumbLd = {
    "@context": "https://schema.org",
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
        name: "Ecommerce Development Mysore",
        item: "https://nakshatranamahacreations.in/service/ecommerce-website-development-company-in-mysore",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Best Ecommerce Development Company in Mysore</title>
        <meta
          name="description"
          content="Launch powerful eCommerce stores in Mysore with expert developers skilled in responsive design, secure payment gateways, and scalable online shopping solutions."
        />
        <meta
          name="keywords"
          content="Best Ecommerce Development Company in Mysore"
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/ecommerce-website-development-company-in-mysore"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Ecommerce Development Company in Mysore"
        />
        <meta
          property="og:description"
          content="Launch powerful eCommerce stores in Mysore with expert developers skilled in responsive design, secure payment gateways, and scalable online shopping solutions."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/ecommerce-website-development-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Best Ecommerce Development Company in Mysore"
        />
        <meta
          name="twitter:description"
          content="Launch powerful eCommerce stores in Mysore with expert developers skilled in responsive design, secure payment gateways, and scalable online shopping solutions."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* JSON-LD */}
      <Script id="ecom-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgLd)}
      </Script>
      <Script id="ecom-biz" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(businessLd)}
      </Script>
      <Script id="ecom-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="ecom-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="ecom-crumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(crumbLd)}
      </Script>

      {/* <MyBreadcrumb crumbs={breadcrumbs} /> */}



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
      <span className={styles1.breadcrumbsCurrent}>E-commerce Development</span>
    </li>
  </ol>
</nav>

              <h1 className={styles1.title}>E-COMMERCE WEBSITE DEVELOPMENT COMPANY IN MYSORE</h1>
<p className={styles1.subtitle}>
  Transform your business with a high-performance e-commerce platform built for growth.
  Nakshatra Namaha Creations delivers feature-rich online stores with intuitive navigation,
  secure payment gateways, and mobile-friendly designs that maximize conversions.
  From startups to large-scale enterprises, we provide scalable solutions that empower
  your brand to sell seamlessly and deliver a smooth shopping experience to your customers.
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

      <div className={styles["ecom-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles["ecom-title-wrapper"]}>
            <h1 className={styles["ecom-title"]}>
              Best E-Commerce Development Company In Mysore
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["ecom-section-wrapper"]}>
            <p className={styles["ecom-description"]}>
              Nakshatra Namaha Creations believes in delivering clean and
              efficiently functioning e-commerce solutions to our clients
              worldwide. We create mobile responsive online store and apps which
              are compatible across all the platforms including iOS and Android
              platforms. Our highly skilled team of experienced ecommerce
              developers who work closely with the clients on their requirements
              to provide scalable and robust online stores for both web and
              mobile. We offer comprehensive custom ecommerce services to
              various SMEs and large-scale businesses across the globe which
              help them offer their products and services vividly on the
              internet and outshine in the digital marketplace. We have
              substantial experience in every aspect of E-Commerce development
              which gives you a significant off-the-shelf solution to your
              Ecommerce requirements. From simple Ecommerce website development
              to complex B2B, B2C Ecommerce portal development, shopping cart
              development and payment gateway integration, we have competency to
              cater to all your Ecommerce needs.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles["ecom-service-wrapper"]}>
        <h2 className={styles["ecom-service-title"]}>
          E-Commerce Website Development Services We Offer
        </h2>
        <div className={styles["ecom-service-grid"]}>
          {services.map((service, idx) => (
            <div className={styles["ecom-service-card"]} key={idx}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles["ecom-service-icon"]}
              />
              <h3 className={styles["ecom-service-heading"]}>
                {service.title}
              </h3>
              <ul className={styles["ecom-service-list"]}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`scroll-panel ${styles["ecommerce-process-wrapper"]}`}>
        <motion.h2
          className={styles["ecommerce-process-title"]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our E-Commerce Website Development Process
        </motion.h2>

        <motion.p
          className={styles["ecommerce-process-subtitle"]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <strong>Cutting-Edge E-Commerce Web Development</strong>
        </motion.p>

        <motion.div
          className={styles["ecommerce-process-desc"]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            At Nakshatra Namaha Creations, our e-commerce website development
            process is focused on efficiency, quality, and user experience. We
            follow a structured approach to transform your vision into a fully
            functional online store.
          </p>
        </motion.div>
      </div>

      <ECommerceScroll />
      <EcomTypesSection />



    <div className={styles1["industry-section-wrapper"]}>
        <div className={styles1["industry-section-left"]}>
          <h2>Why choose Nakshatra Namaha Creations as Ecommerce development
            company in mysore?</h2>
          <p>
              As the most trusted ecommerce development company in Mysore,
            Nakshatra Namaha Creations has highly experienced ecommerce
            developers in Mysore, who are knowledgeable and well versed with the
            latest technologies that helps in attractive ui/ux design, quick
            loading, enhanced mobile responsiveness, and device compatibility
            for the website.
          </p>

          <div className={styles1["industry-section-list"]}>
            <ul>
            <strong><li>High Compatibility</li></strong>  
             <strong><li>Shopping Cart Development</li>  </strong>
           <strong>   <li>Great Flexibility</li></strong>  
           <strong> <li>Omnichannel Solutions</li> </strong>   
           <strong> <li>Integrated CMS / ERP / CRM / PIM</li></strong>   
             
            </ul>
            <ul>
           <strong> <li>Multichannel Presence</li></strong>   
            <strong><li>New Modules Development</li> </strong>  
           <strong><li>E-commerce for All Industries</li> </strong>   
             <strong> <li>Progressive Web Application (PWA)</li> </strong> 
            
            </ul>
          </div>
        </div>

        <div className={styles1["industry-section-right"]}>
           <img src="/images/ecmg.png" alt="Industries Mockup" />
        </div>
      </div>





      <div className={styles["ecommerce-feature-wrapper"]}>
        {featureCards.map((card, i) => (
          <motion.div
            key={i}
            className={styles["ecommerce-feature-card"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles["ecommerce-feature-icon"]}>{card.icon}</div>
            <h3 className={styles["ecommerce-feature-title"]}>{card.title}</h3>
            <p className={styles["ecommerce-feature-desc"]}>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles["wp-intro-wrapper"]}>
        <div className={styles["wp-intro-left"]}>
          <h2>Different Ecommerce platforms and frameworks</h2>

          <ul className={styles["wp-feature-list"]}>
            <li>
              <FaCheck /> Harness the power of WooCommerce with its detailed
              analytics, customizable design, extensive extension library, and
              strong security features to ensure a successful and secure online
              store.
            </li>
            <li>
              <FaCheck /> Unlock the potential of Magento development to build
              scalable and customizable e-commerce websites, featuring advanced
              functionalities, seamless integrations, and outstanding
              performance for your business.
            </li>
            <li>
              <FaCheck /> We harness the versatility of OpenCart to create
              feature-rich online stores, utilizing its user-friendly interface,
              wide range of plugins, and efficient management of products,
              orders, and customer data.
            </li>
            <li>
              <FaCheck /> BigCommerce is an excellent platform to propel your
              business, offering enterprise-grade features, flexible
              customization, seamless integrations, and dependable performance
              for a successful eCommerce venture.
            </li>
          </ul>
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />

      <EcommerceFaq/>

      <InfoSection />
    </>
  );
}
