// src/pages/service/mobile-app-development-company-in-mysore.tsx
import { useRouter } from "next/navigation";
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import styles from "./mobile-app-development.module.css";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import MobileFaq from "./MobileFaq";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import InfoSection from "@/components/InfoSection";
import MobileProcessTimeline from "@/pages/MobileProcessTimeline";
import MobileFeaturedCard from "@/pages/MobileFeaturedCard";
import DesignTypesSection from "@/pages/DesignTypesSection";
import ContactForm from "@/components/ContactForm";

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

const HERO_TITLE = "MOBILE APP DEVELOPMENT COMPANY IN MYSORE";
const HERO_SUBTITLE =
  "Empower your business with high-performing, feature-rich mobile apps designed to engage your audience and drive growth. Nakshatra Namaha Creations specializes in building custom Android, iOS, and cross-platform apps with seamless user experiences, ensuring your brand stays ahead in the digital era.";

export default function MobileAppPage() {
const router = useRouter();
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
       
        setFormData({
          name: "",
          phoneNo: "",
          email: "",
          service: "",
          referenceFrom: "quickform",
          city: "Mysore",
        });
         router.push("/thankyou");
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
       <meta name="keywords" content="mobile app development company in mysore, app developers in mysore, mobile application development mysore, android app development mysore, ios app development mysore, best mobile app developers in mysore, top app development company in mysore, custom mobile app development mysore, mobile app development services mysore, hybrid app development mysore, react native app development mysore, flutter app development mysore, enterprise mobile app development mysore, startup app development mysore, app development agency in mysore, mobile app designers in mysore, app development cost in mysore, mobile app maintenance services mysore, ecommerce app development mysore, local app developers in mysore" />
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
              <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
  <ol>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/service">Services</Link>
    </li>
    <li aria-current="page">
      <span className={styles.breadcrumbsCurrent}>
        Mobile App Development
      </span>
    </li>
  </ol>
</nav>

              <h2 className={styles.title}>MOBILE APP DEVELOPMENT COMPANY </h2>
              <p className={styles.subtitle}>
                Empower your business with high-performing, feature-rich mobile apps designed to engage your audience and drive growth. Nakshatra Namaha Creations specializes in building custom Android, iOS, and cross-platform apps with seamless user experiences, ensuring your brand stays ahead in the digital era.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="col-12 col-lg-4 mt-4 mt-lg-0 mb-3">
            {/* <div className={styles.contactCard}>
              <h3 className={styles.contactHeading}>Let’s Connect</h3>
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
            </div> */}

            <ContactForm/>
          </div>
        </div>
      </div>

      <div className={styles.scrollExplore}>SCROLL TO EXPLORE</div>
    </section>


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
          <MobileFaq/>
 

      <InfoSection />
    </>
  );
}
