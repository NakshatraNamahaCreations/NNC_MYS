// src/pages/service/mobile-app-development-company-in-mysore.tsx
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import styles from "./mobile-app-development.module.css";
import { useState } from "react";
import axios from "axios";
// keep these paths as you have them (adjust if you moved files)
import MyBreadcrumb from "@/components/MyBreadcrumb";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import InfoSection from "@/components/InfoSection";
import MobileProcessTimeline from "@/pages/MobileProcessTimeline";
import MobileFeaturedCard from "@/pages/MobileFeaturedCard";
import DesignTypesSection from "@/pages/DesignTypesSection";

const faqs = [
  {
    id: 1,
    question: "What platforms do you support for mobile app development?",
    answer:
      "We build apps for Android, iOS, and cross-platform environments using frameworks like React Native and Flutter.",
  },
  {
    id: 2,
    question: "Can I integrate my app with existing backend systems?",
    answer:
      "Yes, we specialize in backend integrations including APIs, CRMs, payment gateways, and third-party services.",
  },
  {
    id: 3,
    question: "Do you provide UI/UX design for mobile apps?",
    answer:
      "Absolutely. Our in-house UI/UX team ensures your app is intuitive, user-friendly, and visually consistent with your brand.",
  },
  {
    id: 4,
    question: "Will the app be published on Google Play and Apple App Store?",
    answer:
      "Yes, we offer complete assistance with app submission, store compliance, and release on both Android and iOS platforms.",
  },
  {
    id: 5,
    question: "Can you develop apps with real-time features like chat or tracking?",
    answer:
      "Yes, we can implement real-time chat, live location tracking, notifications, and more depending on your requirements.",
  },
  {
    id: 6,
    question: "Do you provide ongoing support and app maintenance?",
    answer:
      "Yes, we offer long-term maintenance and support plans that include version updates, performance monitoring, and security patches.",
  },
];

const services = [
  {
    icon: "/images/android.png",
    title: "Android App Development",
    points: [
      "Expert in selecting the best technologies and tools for robust Android solutions.",
      "Customized Android apps designed to elevate your business and drive success.",
      "Deep understanding of essential tech choices to ensure app reliability and performance.",
      "Years of experience delivering seamless Android apps that meet market demands.",
    ],
  },
  {
    icon: "/images/apple.png",
    title: "iOS App Development",
    points: [
      "Focus on high-quality, user-friendly design and flawless functionality in every iOS app.",
      "Proven experience in delivering innovative iOS apps that support business growth and engagement.",
      "Expertise in developing iOS apps for iPhones, iPads and other Apple devices.",
      "Skilled in choosing the right technologies and tools for optimal iOS app performance.",
    ],
  },
  {
    icon: "/images/app-development.png",
    title: "Hybrid App Development",
    points: [
      "Broad platform compatibility to reach users on both iOS and Android.",
      "Delivers a seamless and consistent experience across all devices.",
      "Perfect for brands aiming to expand their reach with limited resources.",
      "Ensures faster updates and streamlined app management for evolving needs.",
    ],
  },
  {
    icon: "/images/native.png",
    title: "Native App Development",
    points: [
      "Native apps aligned with design standards for top-tier performance and reliability.",
      "Leveraging the latest OS features to keep your app innovative and up-to-date.",
      "Delivering smooth, intuitive user experiences tailored to each platform.",
      "Supporting business growth with reliable, platform-optimized app solutions.",
    ],
  },
  {
    icon: "/images/crossplat.png",
    title: "Cross Platform App Development",
    points: [
      "Reliable performance backed by our expert cross-platform development team.",
      "Expert in React Native and Flutter for dynamic, high-performance apps.",
      "Efficiently designed apps that ensure consistency across all devices and platforms.",
      "Improved ROI by reaching users on both platforms effortlessly.",
    ],
  },
];

export default function MobileAppPage() {

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
    {
      name: "Mobile App Development",
      path: "/service/mobile-app-development-company-in-mysore",
    },
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
        serviceType: "Mobile App Development",
        provider: {
          "@id": "https://nakshatranamahacreations.in/#localbusiness",
        },
        areaServed: { "@type": "Place", name: "Mysuru" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl:
            "https://nakshatranamahacreations.in/service/mobile-app-development-company-in-mysore",
          availableLanguage: "English",
        },
        description:
          "Build Android, iOS, and cross-platform apps in Mysore with a skilled team focused on performance, UI/UX, and scalable architecture.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.slice(0, 5).map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://nakshatranamahacreations.in" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mobile App Development Mysore",
            item: "https://nakshatranamahacreations.in/service/mobile-app-development-company-in-mysore",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Best Mobile App Development Company in Mysore</title>
        <meta
          name="description"
          content="Build feature-rich Android, iOS, and cross-platform apps in Mysore with skilled developers focused on performance, user experience, and business growth."
        />
        <meta name="keywords" content="Best Mobile App Development Company in Mysore" />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/mobile-app-development-company-in-mysore"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Best Mobile App Development Company in Mysore" />
        <meta
          property="og:description"
          content="Build feature-rich Android, iOS, and cross-platform apps in Mysore with skilled developers focused on performance, user experience, and business growth."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/mobile-app-development-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Best Mobile App Development Company in Mysore" />
        <meta
          name="twitter:description"
          content="Build feature-rich Android, iOS, and cross-platform apps in Mysore with skilled developers focused on performance, user experience, and business growth."
        />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/logo.png" />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      <Script id="mobile-app-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(ld)}
      </Script>

      <MyBreadcrumb crumbs={breadcrumbs} />

   <div className={`${styles["website-hero"]}`}>
  <div className={`${styles["website-overlay"]}`}>
    <div className="container">
   <div className="row align-items-center justify-content-center g-4">
        {/* === Left Content === */}
        <div className="col-12 col-lg-7">
          <div className={styles["website-content"]}>
            <h2>
              Trusted mobile app development company in Mysore, specializing in creating custom applications.
            </h2>
            <p>
              Maximize your digital potential with our mobile app development expertise. 
              We equip businesses across industries with advanced UI/UX designs, IoT integration, 
              and AI-driven solutions, creating versatile apps for any challenge.
            </p>

            <motion.a
              href="/contact-us"
              className={styles["talk-btn"]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className={styles["text"]}>Talk to our expert</span>
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className={styles["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* === Right Form === */}
        <div className="col-12 col-lg-4">
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 18,
              padding: "22px 22px 18px",
              boxShadow: "0 20px 60px rgba(0,0,0,.35)",
              color: "rgba(20,20,20,0.85)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              zIndex: 2,
            }}
          >
            <h3
              style={{
                margin: "0 0 14px",
                fontWeight: 800,
                letterSpacing: "0.2px",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              Let’s Connect
            </h3>

            <form onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <input
        name="name"
        type="text"
        placeholder="Your Name *"
        required
        value={formData.name}
        onChange={handleChange}
        className="form-control mb-3"
      />

      {/* Phone */}
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

      {/* Email */}
      <input
        name="email"
        type="email"
        placeholder="Email *"
        required
        value={formData.email}
        onChange={handleChange}
        className="form-control mb-3"
      />

      {/* Service */}
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

      {/* Submit */}
      <button
        type="submit"
        className="btn w-100"
        style={{
          height: 46,
          borderRadius: 12,
          fontWeight: 700,
          background:
            "linear-gradient(135deg, rgba(255,90,90,1) 0%, rgba(255,64,64,1) 100%)",
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
  </div>
</div>


      <div className={styles["website-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles["website-title"]}>Best Mobile App Development Company in Mysore</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["website-section-wrapper"]}>
            <p className={styles["website-description"]}>
              Are you looking to develop a stunning and flawless mobile app for your business? Then, Nakshatra Namaha
              Creations is an ideal choice. Nakshatra Namaha Creations is the top app development company in Mysore,
              having a clear idea of how to develop your mobile application, as it makes deep research about your product
              requirements and completely focuses on turning your mobile app idea successful. With a team of
              highly-skilled tech enthusiasts, we have developed mobile apps in multiple industries and platforms to meet
              your business requirements. We use advanced technologies in developing mobile Apps for iOS, Android, and
              React Native cross-platform applications which helps in increasing your revenue.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles["app-dev-wrapper"]}>
        <h2 className={styles["app-dev-title"]}>Mobile Application Development Services We Offer</h2>

        <div className={styles["app-dev-grid"]}>
          {services.map((service, idx) => (
            <div className={styles["app-dev-card"]} key={idx}>
              <img src={service.icon} alt={service.title} className={styles["app-dev-icon"]} />
              <h3 className={styles["app-dev-heading"]}>{service.title}</h3>
              <ul className={styles["app-dev-list"]}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <MobileProcessTimeline />
      <MobileFeaturedCard />

      <div className={styles["website-section1"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles["website-title"]}>
            Why choose Nakshatra Namaha Creations as a Mobile App Development Company in Mysore?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["website-section-wrapper"]}>
            <p className={styles["website-description"]}>
              At Nakshatra Namaha Creations, we specialize in Mobile App Development in Mysore that delivers a seamless
              and engaging experience. With a focus on quality and client satisfaction, we combine expertise with
              creativity to help businesses succeed in the digital space. Here’s why we’re Mysore’s trusted choice for
              mobile app development.
            </p>
          </div>
        </motion.div>
      </div>

      <DesignTypesSection />

      <div className={styles["industries-wrapper"]}>
        <div className={styles["industries-left"]}>
          <h2>Industries we serve</h2>
          <p>
            We offer innovative digital solutions as a leading Mobile App and Website Development Company in Mysore,
            catering to industries such as service, education, entertainment, real estate, etc. Our expertise helps
            businesses enhance efficiency, engage their audience and achieve their goals seamlessly.
          </p>

          <div className={styles["industries-list"]}>
            <ul>
             <strong> <li>Service Industry</li></strong>
            <strong><li>Education Industry</li></strong>  
             <strong> <li>Finance</li></strong>
             <strong><li>Health</li></strong> 
             <strong><li>Real Estate</li></strong> 
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

        <div className={styles["industries-right"]}>
          <img src="/images/rak.webp" alt="Industries Mockup" />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />

      <div className={styles["rajanna"]} style={{width:"69%", margin:"0 auto"}}>
        <div className={`${styles["container55"]} my-5`}>
          <div className="text-center mb-4">
            <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
          </div>

          <div className="accordion accordion-flush" id="faqAccordion">
            {faqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header" id={`flush-heading-${faq.id}`}>
                  <button
                    className={`accordion-button ${faq.id !== 1 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${faq.id}`}
                    aria-expanded={faq.id === 1}
                    aria-controls={`flush-collapse-${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse-${faq.id}`}
                  className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
                  aria-labelledby={`flush-heading-${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InfoSection />
    </>
  );
}
