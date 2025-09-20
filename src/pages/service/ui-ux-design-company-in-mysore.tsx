import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  MdAnalytics,
  MdVisibility,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaVials } from "react-icons/fa";
import InfoSection from "../../components/InfoSection";
import UIUXProcessTimeline from "../UIUXProcessTimeline";
import UiuxFaq from "./UiuxFaq";
import FloatingActions from "../FloatingActions";
import MobileBottomBar from "../MobileBottomBar";
import styles1 from "./mobile-app-development.module.css";  
import styles from "./UIUXDevelopment.module.css";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) focuses on the visual elements of a product like buttons and layout, while UX (User Experience) is about how users interact with the product to ensure a smooth and intuitive journey.",
  },
  {
    id: 2,
    question: "Do you conduct user research before designing?",
    answer:
      "Yes, we conduct stakeholder interviews, user persona creation, and competitor analysis to ensure the UI/UX design is data-driven and aligns with user expectations.",
  },
  {
    id: 3,
    question: "Can you redesign my existing website or app interface?",
    answer:
      "Absolutely. We specialize in UI/UX redesigns that modernize interfaces, improve usability, and enhance engagement without compromising brand identity.",
  },
  {
    id: 4,
    question: "Do you create design prototypes before development?",
    answer:
      "Yes, we deliver interactive prototypes and wireframes using tools like Figma, Adobe XD, and InVision so clients can test flows before development begins.",
  },
  {
    id: 5,
    question: "Is your design approach mobile responsive?",
    answer:
      "Yes, we design interfaces that adapt seamlessly to mobile, tablet, and desktop screens using responsive and adaptive UI techniques.",
  },
  {
    id: 6,
    question: "Do you follow accessibility and usability standards?",
    answer:
      "We follow WCAG guidelines to ensure accessibility for all users, and we focus on usability testing to identify and fix friction points in the user journey.",
  },
];

type Service = {
  icon: string;
  title: string;
  points: string[];
};

const services: Service[] = [
  {
    icon: "/images/apple.png",
    title: "Android app UI/UX",
    points: [
      "Nakshatra Namaha Creations is known for its high-quality, seamless integration across platforms.",
      "We ensure a consistent user experience on all devices with our expert UI/UX designs.",
      "Our Android mobile applications are crafted for smooth performance and high quality.",
      "As one of the best UI/UX companies in Bangalore, we prioritize delivering exceptional user experiences.",
    ],
  },
  {
    icon: "/images/android.png",
    title: "iOS app UI/UX",
    points: [
      "iOS app designs follow Apple's Human Interface Guidelines (HIG) for consistency.",
      "We ensure robust, well-crafted app designs that prioritize clarity and precision.",
      "Our designs maintain a 1X resolution for optimal quality across all devices.",
      "Vector-based designs ensure no-loss clarity, even on high-resolution displays.",
    ],
  },
  {
    icon: "/images/app-development.png",
    title: "Hybrid app UI/UX",
    points: [
      "Companies today require apps on both Android and iOS platforms for broader reach.",
      "Our expert designers create seamless Hybrid App UI/UX for optimal cross-platform performance.",
      "Hybrid app designs offer greater convenience and accessibility for users across devices.",
      "This approach makes mobile apps more advantageous, enhancing customer satisfaction.",
    ],
  },
  {
    icon: "/images/crossplat.png",
    title: "Web app design",
    points: [
      "Nakshatra Namaha Creations is a top UI/UX design company in Mysore, providing standout digital experiences.",
      "We focus on web app design that enhances user interaction and brand connection.",
      "Our strategic use of UI/UX design helps create lasting positive impressions.",
      "This approach drives higher customer engagement, making your brand memorable.",
    ],
  },
  {
    icon: "/images/native.png",
    title: "Website design",
    points: [
      "Nakshatra Namaha Creations, a leading UI/UX design company in Mysore, delivers exceptional web app experiences.",
      "We design web apps that seamlessly connect users with your brand.",
      "Our UI/UX strategy focuses on creating memorable, positive impressions.",
      "This approach significantly boosts customer engagement and brand loyalty.",
    ],
  },
  {
    icon: "/images/cms.png",
    title: "Usability testing",
    points: [
      "Nakshatra Namaha Creations conducts thorough usability tests during web application and website design.",
      "We perform cross-platform usability checks across various devices for optimal performance.",
      "Our design process ensures error-free outputs with smooth navigation.",
      "We guarantee no bug reports after delivery, ensuring a seamless user experience.",
    ],
  },
];

type Card = {
  title: string;
  icon: React.ReactNode;
  text: string;
};

const cards: Card[] = [
  {
    title: "The best design solutions for B2B and B2C",
    icon: <MdOutlineDesignServices size={28} color="#26abe1" />,
    text: `Whether for a large enterprise or a budding startup, we uphold professional integrity to deliver excellence in every project. We craft innovative solutions tailored to your specific needs while ensuring your involvement in every discussion about your website or mobile app design.`,
  },
  {
    title: "Our result in UI/UX designing services",
    icon: <MdAnalytics size={28} color="#26abe1" />,
    text: `Every design we create is result-oriented, aligning with the client's perspective to deliver impactful outcomes. By transforming your requirements into strategic solutions, we ensure better-driven results. Our approach is rooted in research-based design, considering both your brand identity and user needs.`,
  },
  {
    title: "Visual design",
    icon: <MdVisibility size={28} color="#26abe1" />,
    text: `The visual design (UX) is the first impression your application makes on users. At Webomindapps, we create interactive and intuitive designs that captivate and engage customers. Our designs effectively communicate your brand, products, and services while ensuring a seamless user experience.`,
  },
  {
    title: "User testing",
    icon: <FaVials size={28} color="#26abe1" />,
    text: `As a leading UI/UX design agency in Mysore, we prioritize user-centric design by identifying real-world usability challenges and addressing them effectively. By analyzing user interactions, we refine and enhance website experiences to ensure seamless navigation and engagement.`,
  },
];

export default function UIUXDevelopment() {

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

  const Service9Breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "UI/UX Design", path: "/service/ui-ux-design-company-in-mysore" },
  ];

  return (
    <>
      <Head>
        <title>Best UI/UX Design Company in Mysore for Digital Brands</title>
        <meta
          name="description"
          content="Enhance your digital experience with top UI/UX designers in Mysore—crafting user-friendly, responsive, and visually appealing interfaces for web and mobile."
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/ui-ux-design-company-in-mysore"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best UI/UX Design Company in Mysore for Digital Brands"
        />
        <meta
          property="og:description"
          content="Enhance your digital experience with top UI/UX designers in Mysore—crafting user-friendly, responsive, and visually appealing interfaces for web and mobile."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/ui-ux-design-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        <meta name="keywords" content="Best UI/UX Design Company in Mysore" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Best UI/UX Design Company in Mysore for Digital Brands"
        />
        <meta
          name="twitter:description"
          content="Enhance your digital experience with top UI/UX designers in Mysore—crafting user-friendly, responsive, and visually appealing interfaces for web and mobile."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
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
        }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
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
        }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "UI/UX Design Services",
          "provider": { "@id": "https://nakshatranamahacreations.in/#localbusiness" },
          "areaServed": { "@type": "Place", "name": "Mysuru" },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://nakshatranamahacreations.in/service/ui-ux-design-company-in-mysore",
            "availableLanguage": "English"
          },
          "description": "Enhance your digital experience with top UI/UX designers in Mysore—crafting user-friendly, responsive, and visually appealing interfaces for web and mobile."
        }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": ${JSON.stringify(
            faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            }))
          )}
        }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nakshatranamahacreations.in/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nakshatranamahacreations.in/service" },
            { "@type": "ListItem", "position": 3, "name": "UI/UX Design", "item": "https://nakshatranamahacreations.in/service/ui-ux-design-company-in-mysore" }
          ]
        }`,
          }}
        />
      </Head>

      {/* <MyBreadcrumb
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/service" },
          { name: "UI/UX Design", path: "/service/ui-ux-design-company-in-mysore" },
        ]}
      /> */}

 

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
      <span className={styles1.breadcrumbsCurrent}>UI/UX Design</span>
    </li>
  </ol>
</nav>

<h1 className={styles1.title}>UI/UX DESIGN COMPANY IN MYSORE</h1>
<p className={styles1.subtitle}>
  Create digital experiences that are not only beautiful but also intuitive and user-friendly. 
  At Nakshatra Namaha Creations, our UI/UX design experts combine research, strategy, and creativity 
  to design interfaces that enhance user engagement and drive conversions. 
  From wireframes to fully polished designs, we ensure every interaction feels seamless and impactful.
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
    
      <div className={styles["uiux-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles["uiux-title"]}>
            Best UI/UX Design Company in Mysore
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["uiux-wrapper"]}>
            <p className={styles["uiux-description"]}>
              A well-crafted, user-friendly UI/UX design is crucial for building
              a strong digital presence. As the leading UI/UX design company in
              Mysore, we create personalized solutions that align with your
              business goals. Our designs are meticulously crafted to ensure
              they are visually stunning and offer seamless functionality across
              all devices, providing an optimal user experience. As the top
              UI/UX design company in Mysore, our team focuses on blending
              aesthetics, usability, and accessibility to create designs that
              elevate your business. With a keen eye for detail and a commitment
              to quality, we ensure that every design is both visually appealing
              and highly functional, helping your brand leave a lasting
              impression in the digital space.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles["uiux-services"]}>
        <h2 className={styles["uiux-services-title"]}>
          UI/UX Development Services We Offer
        </h2>
        <div className={styles["uiux-services-grid"]}>
          {services.map((service) => (
            <div className={styles["uiux-services-card"]} key={service.title}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles["uiux-services-icon"]}
              />
              <h4 className={styles["uiux-services-heading"]}>
                {service.title}
              </h4>
              <ul className={styles["uiux-services-list"]}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <UIUXProcessTimeline />

      <div className={styles["uiux-industry"]}>
        <div className={styles["uiux-industry-left"]}>
          <h2>
            Why choose Nakshatra Namaha Creations as a UI/UX Design Company in
            Mysore?
          </h2>
          <p>
            As a leading UI/UX design company in Mysore, Nakshatra Namaha
            Creations combines expertise, creativity, and a user-centric
            approach in every project. We specialize in crafting visually
            compelling and highly functional designs that enhance user
            experience and boost online engagement. Whether for innovative
            startups or established brands, we deliver tailored UI/UX solutions
            focused on aesthetics, usability, and seamless interaction to
            elevate your digital presence.
          </p>
        </div>
        <div className={styles["uiux-industry-right"]}>
          <img src="/images/rajanna1.png" alt="Industries Mockup" />
        </div>
      </div>

      <div className={styles["uiux-card-wrapper"]}>
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className={styles["uiux-card"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles["uiux-card-icon"]}>{card.icon}</div>
            <h3 className={styles["uiux-card-title"]}>{card.title}</h3>
            <p className={styles["uiux-card-desc"]}>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <FloatingActions />
      <MobileBottomBar />

    <UiuxFaq/>

      <InfoSection />
    </>
  );
}
