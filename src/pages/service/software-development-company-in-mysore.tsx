// src/pages/service/software-development-company-in-mysore.tsx
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import styles from "./software-dev.module.css";
import { useState } from "react";
import axios from "axios";
import InfoSection from "@/components/InfoSection";
import SoftwareProcessTimeline from "@/pages/SoftwareProcessTimeline";
import ReasonsToChooseSoftware from "@/pages/ReasonsToChooseSoftware";
import MyBreadcrumb from "@/components/MyBreadcrumb";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa6";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { MdVerifiedUser, MdOutlineDashboardCustomize } from "react-icons/md";
import { BiShieldAlt2 } from "react-icons/bi";
import styles1 from "./wordpress.module.css";
import styles2 from "./mobile-app-development.module.css";
const faqs = [
  {
    id: 1,
    question: "What industries do you develop custom software for?",
    answer:
      "We create custom software for a variety of industries including healthcare, retail, logistics, education, finance, and manufacturing.",
  },
  {
    id: 2,
    question:
      "Can the software be integrated with third-party APIs and platforms?  ",
    answer:
      "Yes, we specialize in building software that seamlessly integrates with CRMs, ERPs, payment gateways, analytics platforms, and third-party APIs.",
  },
  {
    id: 3,
    question: "Do you offer cloud-based and on-premise software development?",
    answer:
      "Absolutely. We develop both cloud-native applications hosted on AWS, Azure, GCP, as well as on-premise solutions tailored to your infrastructure.",
  },
  {
    id: 4,
    question: "What security standards do you follow during software development?",
    answer:
      "We follow secure coding practices, use role-based access control, encryption protocols, and conduct code reviews and vulnerability assessments.",
  },
  {
    id: 5,
    question: "Can you develop multi-platform software solutions?",
    answer:
      "Yes. We build solutions that run across desktop, mobile, and web using cross-platform frameworks like Flutter, Electron, or React Native when needed.",
  },
  {
    id: 6,
    question: "How do you ensure the scalability of custom software?",
    answer:
      "Our software architecture is designed to scale. We use microservices, containerization, and database optimization techniques to support growing users and data loads.",
  },
];

export default function SoftwareDevelopmentPage() {

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
    { name: "Software Development", path: "/service" },
  ];

  const services = [
    {
      icon: "/images/app-development.png",
      title: "Customized software development",
      points: [
        "We ensure all your requirements are addressed and communicated for feedback.",
        "Leveraging the latest technologies, we create intuitive and innovative interfaces for your software.",
        "Our solutions are custom-built to effectively resolve your business challenges.",
        "Our developers deliver software with 100% excellence and precision.",
      ],
    },
    {
      icon: "/images/motion.webp",
      title: "Software consulting",
      points: [
        "You can consult with us and discuss your project at any time. We provide expert recommendations tailored to your industry based on your inputs.",
        "Adaptability and cost-effectiveness are key factors we prioritize for your business.",
        "We ensure consultation after each module is built for project approval.",
        "With our expertise, the developers at Webomindapps create the best-customized software to meet your specific needs.",
      ],
    },
    {
      icon: "/images/native.png",
      title: "Software integration",
      points: [
        "The developers at Nakshatra Namaha Creations are highly skilled in implementing the latest technologies into your software.",
        "We leverage APIs to seamlessly integrate applications.",
        "Our customized software is designed to tackle any integration challenges efficiently.",
        "We follow best practices in web app design, testing, and execution to ensure smooth and effective integration.",
      ],
    },
    {
      icon: "/images/crossplat.png",
      title: "Customized CRM development services",
      points: [
        "At Nakshatra Namaha Creations, we don’t just develop software—we also provide SRM services.",
        "We assist in enhancing your business processes by addressing all your requirements.",
        "Our services focus on automating operations to boost efficiency.",
        "With our CRM software solutions, we help strengthen your business’s relationship with customers.",
      ],
    },
    {
      icon: "/images/cms.png",
      title: "Software testing",
      points: [
        "Nakshatra Namaha Creations has a team of dedicated software testers to ensure the quality of every solution we develop.",
        "We thoroughly test each project to eliminate errors or bugs before delivery.",
        "Our goal is to provide high-performance, hassle-free, and error-free software.",
        "We also offer extended support at any stage of software usage.",
      ],
    },
    {
      icon: "/images/global.png",
      title: "Software maintenance and support",
      points: [
        "To meet our clients' needs, we offer comprehensive application maintenance and support.",
        "Our 24/7 instant support ensures quick resolution of any technical issues.",
        "If an application encounters an error, we prioritize resolving it immediately.",
        "Each module undergoes thorough testing, bug fixes, and rechecking before deployment.",
      ],
    },
  ];

  const cards = [
    {
      title: "Unique solutions for your business",
      icon: <HiAdjustmentsHorizontal size={28} color="#26abe1" />,
      text: `As your business grows and complexities arise, customized software adapts to your workflow, meets technological needs, and offers personalized solutions.`,
    },
    {
      title: "Customer-centric adaptability",
      icon: <FaUserCheck size={28} color="#26abe1" />,
      text: `Customers expect personalized solutions, and businesses can adapt based on feedback, enhancing value, loyalty, and retention—over 70% prefer customized software, according to McKinsey.`,
    },
    {
      title: "Improved flexibility and scalability",
      icon: <RiExpandDiagonalFill size={28} color="#26abe1" />,
      text: `Customized software offers scalability, flexibility for updates, cost-effective maintenance, and eliminates licensing risks compared to off-the-shelf solutions.`,
    },
    {
      title: "Reliability and consistency",
      icon: <MdVerifiedUser size={28} color="#26abe1" />,
      text: `Custom software ensures top performance, reliability, and dedicated support for seamless maintenance, security, and issue resolution.`,
    },
   
    {
      title: "Minimal interface problem",
      icon: <MdOutlineDashboardCustomize size={28} color="#26abe1" />,
      text: `With software tailored to your needs, interface issues are minimal, requiring little training as each department operates with familiar, customized features.`,
    },
    {
      title: "Additional security",
      icon: <BiShieldAlt2 size={28} color="#26abe1" />,
      text: `Generic software is vulnerable due to its open code, whereas custom-built software remains a secure, closed-code solution, minimizing intrusions to nearly zero.`,
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
    serviceType: "Custom Software Development",
    provider: { "@id": "https://nakshatranamahacreations.in/#localbusiness" },
    areaServed: { "@type": "Place", name: "Mysuru" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl:
        "https://nakshatranamahacreations.in/service/software-development-company-in-mysore",
      availableLanguage: "English",
    },
    description:
      "Build secure, scalable, and custom software solutions in Mysore with experienced developers focused on performance, integration, and business outcomes.",
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
        item: "https://nakshatranamahacreations.in/",
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
        name: "Software Development",
        item: "https://nakshatranamahacreations.in/service/software-development-company-in-mysore",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Reliable Software Development Company in Mysore</title>
        <meta
          name="description"
          content="Build secure, scalable, and custom software solutions in Mysore with experienced developers focused on performance, integration, and business outcomes."
        />
        <meta
          name="keywords"
          content="Reliable Software Development Company in Mysore"
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/software-development-company-in-mysore"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Reliable Software Development Company in Mysore"
        />
        <meta
          property="og:description"
          content="Build secure, scalable, and custom software solutions in Mysore with experienced developers focused on performance, integration, and business outcomes."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/software-development-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Reliable Software Development Company in Mysore"
        />
        <meta
          name="twitter:description"
          content="Build secure, scalable, and custom software solutions in Mysore with experienced developers focused on performance, integration, and business outcomes."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* JSON-LD */}
      <Script id="soft-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgLd)}
      </Script>
      <Script id="soft-biz" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(businessLd)}
      </Script>
      <Script id="soft-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="soft-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="soft-crumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(crumbLd)}
      </Script>

      <MyBreadcrumb crumbs={breadcrumbs} />

 <div className={`${styles2["website-hero"]}`}>
  <div className={`${styles2["website-overlay"]}`}>
    <div className="container">
   <div className="row align-items-center justify-content-center g-4">
        {/* === Left Content === */}
        <div className="col-12 col-lg-7">
          <div className={styles2["website-content"]}>
            <h2>
               A trusted software development company in Mysore, specializing in
              creating custom solutions tailored to your needs.
            </h2>
            <p>
              Maximize your digital potential with our software development
              expertise. We empower businesses across industries with
              cutting-edge UI/UX design, IoT integration, and AI-driven
              solutions, delivering versatile software tailored to any
              challenge.
            </p>

            <motion.a
              href="/contact-us"
              className={styles2["talk-btn"]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className={styles2["text"]}>Talk to our expert</span>
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className={styles2["icon"]}
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

      <div className={styles["software-develop-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles["software-develop-title"]}>
            Reliable Software Development Company in Mysore
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* <div className={styles["software-develop-wrapper"]}> */}
            <p className={styles["software-develop-description"]}>
              Nakshatra Namaha Creations is a leading software development
              company in Mysore, delivering exceptional, user-centric solutions
              tailored to meet your business objectives. Our team of experts
              develops high-performance, seamless, and user-friendly software
              across various platforms, ensuring smooth functionality and
              reliability. Committed to innovation and precision, we create
              solutions that empower businesses to enhance connectivity,
              streamline operations, and drive growth in the digital landscape.
              We also specialize in web development, providing comprehensive
              digital solutions to meet diverse business needs.
            </p>
          {/* </div> */}
        </motion.div>
      </div>

      <div className={styles1["wordpressservices-wrapper"]}>
        <h2 className={styles1["wordpressservices-title"]}>
          Software Development Services We Offer
        </h2>
        <div className={styles1["wordpressservices-grid"]}>
          {services.map((service, idx) => (
            <div className={styles1["wordpressservices-card"]} key={idx}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles1["wordpressservices-icon"]}
              />
              <h3 className={styles1["wordpressservices-heading"]}>
                {service.title}
              </h3>
              <ul className={styles1["wordpressservices-list"]}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <SoftwareProcessTimeline />

      <div className={styles["software-develop-card-wrapper"]}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles["software-develop-card"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles["software-develop-card-icon"]}>
              {card.icon}
            </div>
            <h3 className={styles["software-develop-card-title"]}>
              {card.title}
            </h3>
            <p className={styles["software-develop-card-desc"]}>{card.text}</p>
          </motion.div>
        ))}
      </div>

       <div className={styles["software-develop-industry"]}>
     <div className={styles["software-develop-industry-left"]}>
  <h2>
    Why Choose Nakshatra Namaha Creations for Software Development in Mysore?
  </h2>
  <p>
    At Nakshatra Namaha Creations, we specialize in creating robust, scalable, 
    and future-ready software solutions that empower businesses to operate 
    more efficiently. Our team combines technical expertise with innovative 
    thinking to deliver applications tailored to your unique requirements. 
    From custom enterprise software to automation tools, we ensure every 
    project is built with precision, performance, and security in mind.
    Whether you’re a startup or an established enterprise, we’re your trusted 
    partner in driving digital transformation through world-class software 
    development services in Mysore.
  </p>
</div>
<div className={styles["software-develop-industry-right"]}>
  <img src="/images/rajanna1.png" alt="Software Development in Mysore" />
</div>

      </div> 

      <FloatingActions />
      <MobileBottomBar />

      <ReasonsToChooseSoftware />

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
                    className={`accordion-button ${
                      faq.id !== 1 ? "collapsed" : ""
                    }`}
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
                  className={`accordion-collapse collapse ${
                    faq.id === 1 ? "show" : ""
                  }`}
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
