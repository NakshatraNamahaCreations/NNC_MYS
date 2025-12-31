"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import WhyUnique3 from "../../components/WhyUnique3";
import NewHeroBanner from "../../landing/NewHeroBanner";
import CounterSection from "../../landing/CounterSection";
import ServicesGrid from "../../landing/ServicesGrid";
import ServicesParallax from "../../landing/ServicesParallax";
import AboutRevealSection from "../../landing/AboutRevealSection";
import TestimonialsSection from "../../landing/TestimonialsSection";
import PricingSection from "../../landing/PricingSection";
import FAQ from "../../landing/FAQ";
import PremiumGrid from "../../landing/PremiumGrid";
import BrandSlider from "../../landing/BrandSlider";
import ConsultationSection from "../../landing/ConsultationSection";
import TechStackTabs from "../../landing/TechStackTabs";


export default function WebsiteDeveloper() {
  // 🔹 State for form fields
  
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((curr) => (curr === index ? null : index));
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    service: "",
  });

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // TODO: Replace with API call
    alert("Thank you! We will contact you soon.");

    // Reset form
    setFormData({
      name: "",
      phoneNo: "",
      email: "",
      service: "",
    });
  };


const websiteDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://nakshatranamahacreations.in/website-development-company#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nakshatranamahacreations.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Professional Website Development Company | Business Websites",
          "item": "https://nakshatranamahacreations.in/website-development-company"
        }
      ]
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://nakshatranamahacreations.in/website-development-company#localbusiness",
      "name": "Professional Website Development Company | Business Websites",
      "url": "https://nakshatranamahacreations.in/website-development-company",
      "description":
        "Professional website development services designed to build fast, secure, and scalable business websites. Get expert solutions for long-term growth."
    },

    {
      "@type": "Service",
      "@id": "https://nakshatranamahacreations.in/website-development-company#service",
      "name": "Professional Website Development Company | Business Websites",
      "url": "https://nakshatranamahacreations.in/website-development-company",
      "description":
        "Professional website development services designed to build fast, secure, and scalable business websites. Get expert solutions for long-term growth.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://nakshatranamahacreations.in/website-development-company#localbusiness"
      }
    },

    {
      "@type": "FAQPage",
      "@id": "https://nakshatranamahacreations.in/website-development-company#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a website development company do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "A website development company designs, builds, and maintains websites that help businesses establish an online presence, attract users, and generate enquiries. This includes planning, design, development, testing, and ongoing support to ensure the website performs reliably."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The timeline depends on the scope, number of pages, and functionality required. A basic business website usually takes a few weeks, while more detailed or custom website development projects may take longer."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be mobile-friendly and responsive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. All our website development projects follow a mobile-first approach to ensure your website works smoothly across mobiles, tablets, and desktops."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide SEO-friendly website development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Our website development process includes SEO-friendly structure, clean code, fast loading performance, and proper page hierarchy."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign or improve an existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. We offer website redesign and improvement services to enhance performance, usability, and appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Will I be able to manage and update my website easily?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We build websites that are easy to manage and update with simple content management options."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer ongoing website maintenance and support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We provide website maintenance and support services to keep your site secure, updated, and running smoothly."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with your website development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "You can book a free consultation through the contact form, and our team will guide you through the process."
          }
        }
      ]
    }
  ]
};



  return (
    <>
     <Head>
            <title>Professional Website Development Company | Business Websites</title>
            <meta
              name="description"
              content="Professional website development services designed to build fast, secure, and scalable business websites. Get expert solutions for long-term growth."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/website-development-company"
            />
            <meta name="keywords" content="Website development company, Website development services, Professional website developers, Business website development, Custom website development, Web design and development, Website redesign services, Website maintenance services, SEO-friendly website development, Affordable website development company" />

  {/* OPEN GRAPH (FACEBOOK / LINKEDIN / WHATSAPP) */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Professional Website Development Company | Business Websites"
      />
      <meta
        property="og:description"
        content="Professional website development services designed to build fast, secure, and scalable business websites. Get expert solutions for long-term growth."
      />
      <meta
        property="og:url"
        content="https://nakshatranamahacreations.in/service/website-development-company"
      />
      <meta
        property="og:image"
        content="https://nakshatranamahacreations.in/og-image.jpg"
      />
      <meta property="og:site_name" content="Nakshatra Namaha Creations" />

      {/* TWITTER CARD */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Professional Website Development Company | Business Websites"
      />
      <meta
        name="twitter:description"
        content="Professional website development services designed to build fast, secure, and scalable business websites."
      />
      <meta
        name="twitter:image"
        content="https://nakshatranamahacreations.in/og-image.jpg"
      />


  <script
  id="website-development-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteDevelopmentSchema),
  }}
/>


    </Head>
  

<NewHeroBanner/>
<AboutRevealSection/>
<PricingSection/>

<ServicesParallax/>
 
<PremiumGrid/>
 <CounterSection/>
{/* <ServicesGrid/> */}

<TestimonialsSection/>
  <BrandSlider/>
  <TechStackTabs/>
    <ConsultationSection/>

      <FAQ/>

   
  <InfoSection/>

    </>
  );
}
