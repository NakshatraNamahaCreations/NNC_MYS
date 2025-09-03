import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "./Video.module.css";

import VideoFeaturedCard from "../VideoFeaturedCard";
import DesignVideoSection from "../DesignVideoSection";
import SeoRoleSection from "../SeoRoleSection";
import InfoSection from "../../components/InfoSection";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import FloatingActions from "../FloatingActions";
import MobileBottomBar from "../MobileBottomBar";
import { useState } from "react";
import axios from "axios";
import styles1 from "./mobile-app-development.module.css";  

const faqs = [
  {
    id: 1,
    question: "What types of corporate videos do you produce?",
    answer:
      "We create a wide range of corporate videos including promotional videos, brand stories, explainer videos, testimonial videos, and event coverage.",
  },
  {
    id: 2,
    question: "Do you offer scriptwriting and concept development?",
    answer:
      "Yes, we assist with complete pre-production services including scriptwriting, storyboarding, and creative direction based on your goals.",
  },
  {
    id: 3,
    question:
      "Can the video be tailored for different platforms like YouTube, Instagram, and LinkedIn?",
    answer:
      "Absolutely. We optimize videos in various aspect ratios and formats suitable for social media platforms, websites, or internal corporate use.",
  },
  {
    id: 4,
    question: "Do you provide voiceovers and background music?",
    answer:
      "Yes, we offer multilingual voiceovers and royalty-free background music to align with your brand tone and target audience.",
  },
  {
    id: 5,
    question: "Can we include drone shots or event coverage in our corporate video?",
    answer:
      "Yes, we provide drone videography and multi-camera coverage for events and large-scale productions upon request.",
  },
  {
    id: 6,
    question:
      "Will we be able to review and suggest changes during the editing phase?",
    answer:
      "Definitely. We provide draft previews for client feedback and revisions before final delivery to ensure the video aligns with your vision.",
  },
];

export default function Video() {
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

  const services = [
    {
      icon: "/images/video.png",
      title: "Video Strategy",
      points: [
        "Craft compelling video strategies for impactful storytelling.",
        "Enhance brand visibility through innovative video solutions.",
        "Enhance brand visibility through innovative video solutions.",
        "Create videos that connect, inspire and influence your audience.",
      ],
    },
    {
      icon: "/images/open-book.png",
      title: "Photoshoots",
      points: [
        "Professional photoshoots that capture your brands essence.",
        "High-quality visuals for websites, ads and social media.",
        "Memorable portraits that tell your story authentically.",
        "Delivering sharp, impactful photos for business use.",
      ],
    },
    {
      icon: "/images/new-product.png",
      title: "Brand Storytelling Videos",
      points: [
        "Share your brand’s journey with captivating storytelling videos.",
        "Highlight key benefits and functionalities in a professional and engaging way.",
        "Simplify complex ideas with clear visuals and step-by-step explanations.",
        "Drive more sales by showcasing your product’s value through compelling visuals.",
      ],
    },
    {
      icon: "/images/calendar.png",
      title: "Product Demonstration Videos",
      points: [
        "Showcase your product’s features effectively with our demonstration videos.",
        "Highlight key benefits and functionalities in a professional and engaging way.",
        "Simplify complex ideas with clear visuals and step-by-step explanations.",
        "Drive more sales by showcasing your product’s value through compelling visuals.",
      ],
    },
    {
      icon: "/images/calendar.png",
      title: "Event Coverage and Highlights",
      points: [
        "Capture the essence of your events with professional video coverage.",
        "Perfect for corporate events, celebrations and memorable occasions.",
        "Preserve your event’s impact with videos that tell a compelling story.",
        "Relive your special moments with expertly crafted event highlight reels.",
      ],
    },
    {
      icon: "/images/bullhorn.png",
      title: "Marketing and Promotional Videos",
      points: [
        "Highlight your products or services through dynamic video storytelling.",
        "Attract customers with visually engaging promotional content.",
        "Create impactful content that drives your marketing goals.",
        "Strengthen brand identity with cohesive and polished production.",
      ],
    },
  ];

  const Service4Breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    {
      name: "Corporate Video Production",
      path: "/service/corporate-video-production-in-mysore",
    },
  ];

  return (
    <>
      <Head>
        <title>Corporate Video Production Company in Mysore, India</title>
        <meta
          name="description"
          content="Create engaging corporate videos in Mysore with professional filmmakers skilled in storytelling, branding, and video editing for marketing, events, and business"
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/corporate-video-production-in-mysore"
        />

        {/* Open Graph (OG) Tags */}
        <meta
          property="og:title"
          content="Corporate Video Production Company in Mysore, India"
        />
        <meta
          property="og:description"
          content="Create engaging corporate videos in Mysore with professional filmmakers skilled in storytelling, branding, and video editing for marketing, events, and business"
        />
        <meta
          name="keywords"
          content="Corporate Video Production Company in Mysore"
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/corporate-video-production-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Corporate Video Production Company in Mysore, India"
        />
        <meta
          name="twitter:description"
          content="Create engaging corporate videos in Mysore with professional filmmakers skilled in storytelling, branding, and video editing for marketing, events, and business"
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />

        {/* Schemas */}
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
        }
      `}</script>

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
        }
      `}</script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Corporate Video Production",
          "provider": {
            "@id": "https://nakshatranamahacreations.in/#localbusiness"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Mysuru"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://nakshatranamahacreations.in/service/corporate-video-production-in-mysore",
            "availableLanguage": "English"
          },
          "description": "Create engaging corporate videos in Mysore with professional filmmakers skilled in storytelling, branding, and video editing for marketing, events, and business."
        }
      `}</script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of corporate videos do you produce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We create a wide range of corporate videos including promotional videos, brand stories, explainer videos, testimonial videos, and event coverage."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer scriptwriting and concept development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we assist with complete pre-production services including scriptwriting, storyboarding, and creative direction based on your goals."
              }
            },
            {
              "@type": "Question",
              "name": "Can the video be tailored for different platforms like YouTube, Instagram, and LinkedIn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We optimize videos in various aspect ratios and formats suitable for social media platforms, websites, or internal corporate use."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide voiceovers and background music?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer multilingual voiceovers and royalty-free background music to align with your brand tone and target audience."
              }
            },
            {
              "@type": "Question",
              "name": "Can we include drone shots or event coverage in our corporate video?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide drone videography and multi-camera coverage for events and large-scale productions upon request."
              }
            },
            {
              "@type": "Question",
              "name": "Will we be able to review and suggest changes during the editing phase?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Definitely. We provide draft previews for client feedback and revisions before final delivery to ensure the video aligns with your vision."
              }
            }
          ]
        }
      `}</script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nakshatranamahacreations.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://nakshatranamahacreations.in/service"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Corporate Video Production Company",
              "item": "https://nakshatranamahacreations.in/service/corporate-video-production-in-mysore"
            }
          ]
        }
      `}</script>
      </Head>

      <MyBreadcrumb crumbs={Service4Breadcrumbs} />

 <div className={`${styles1["website-hero"]}`}>
  <div className={`${styles1["website-overlay"]}`}>
    <div className="container">
   <div className="row align-items-center justify-content-center g-4">
        {/* === Left Content === */}
        <div className="col-12 col-lg-7">
          <div className={styles1["website-content"]}>
            <h2>
              Corporate Video Production in Mysore, bringing your brand’s vision
              to life.
            </h2>
            <p>
              Elevate your brand&apos;s impact with innovative corporate video
              production, crafted for powerful engagement and growth.
            </p>

            <motion.a
              href="/contact-us"
              className={styles1["talk-btn"]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className={styles1["text"]}>Talk to our expert</span>
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className={styles1["icon"]}
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
      <div className={styles["videoapp-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles["videoapp-title"]}>
            Corporate Video Production Company in Mysore
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         
            <p className={styles["videoapp-description"]}>
              Corporate video production is an essential tool for businesses
              looking to communicate their vision, values, and services
              effectively. Whether it&apos;s showcasing your brand story,
              creating training videos, or delivering impactful client
              presentations, a well-crafted corporate video can leave a lasting
              impression. As the best corporate video production company in
              Mysore, we focus on creativity and precision, ensuring every video
              aligns with your business goals and resonates with your audience.
              Our team specializes in producing high-quality corporate videos
              designed to meet your specific needs. Every step is managed with
              attention to detail and professionalism. We combine innovative
              techniques and modern equipment to deliver videos that are
              visually engaging and convey your message clearly, helping you
              build trust and connection with your audience.
            </p>
         
        </motion.div>
      </div>

      <div className={styles["videocard-wrapper"]}>
        {services.map((card, i) => (
          <motion.div
            key={i}
            className={styles["videocard"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className={styles["videocard-icon-bg"]}>
              <img src={card.icon} alt={card.title} />
            </div>
            <h3 className={styles["videocard-title"]}>{card.title}</h3>
            <ul className={styles["videocard-list"]}>
              {card.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <SeoRoleSection />
      {/* <VideoTimeline /> */}
      <VideoFeaturedCard />

      <section className={styles["whychooseus-section"]}>
        <div className={styles["whychooseus-container"]}>
          <div className={styles["whychooseus-text"]}>
            <h2>
              Why choose Nakshatra Namaha Creations as a Corporate Video
              Production Company in Mysore?
            </h2>
            <div className={styles["corporate-video-wrapper"]}>
              <p className={styles["corporate-video-description"]}>
                Corporate video production is an essential tool for businesses
                looking to communicate their vision, values, and services
                effectively. Whether it&apos;s showcasing your brand story,
                creating training videos, or delivering impactful client
                presentations, a well-crafted corporate video can leave a
                lasting impression. As the best corporate video production
                company in Mysore, we focus on creativity and precision,
                ensuring every video aligns with your business goals and
                resonates with your audience. Our team specializes in producing
                high-quality corporate videos designed to meet your specific
                needs. Every step is managed with attention to detail and
                professionalism. We combine innovative techniques and modern
                equipment to deliver videos that are visually engaging and
                convey your message clearly, helping you build trust and
                connection with your audience.
              </p>
            </div>
          </div>

          <div className={styles["whychooseus-visual"]}>
            <img
              src="/images/video1img.webp"
              alt="Camera setup"
              className={styles["whychooseus-image"]}
            />
          </div>
        </div>
      </section>

      <DesignVideoSection />

      <div className={styles["industriesSection-wrapper"]}>
        <div className={styles["industriesSection-left"]}>
          <h2>Industries we serve</h2>
          <p>
            We offer innovative digital solutions as a leading Mobile App and
            Website Development Company in Mysore, catering to industries such
            as service, education, entertainment, real estate, etc. Our
            expertise helps businesses enhance efficiency, engage their audience
            and achieve their goals seamlessly.
          </p>
          <div className={styles["industriesSection-list"]}>
            <ul>
            <strong> <li>Service Industry</li></strong> 
            <strong><li>Education Industry</li></strong>  
            <strong><li>Finance</li></strong>  
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
        <div className={styles["industriesSection-right"]}>
          <img src="/images/rock22.webp" alt="Industries Mockup" />
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
