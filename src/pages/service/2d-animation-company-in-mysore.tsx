// src/pages/AnimationDevelopment.tsx
'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from './AnimationDevelopment.module.css';
import styles1 from './B2BMarket.module.css';
import {
  MdOutlineVideoLibrary,
  MdOutlineSlowMotionVideo,
  MdOutlineDraw,
  MdAnimation,
  MdAutoStories,
  MdHighQuality,
  MdAccessTime,
} from 'react-icons/md';
import { GiPerson, GiPuppet, GiFilmStrip } from 'react-icons/gi';
import { LuSettings2 } from 'react-icons/lu';

import styles2 from "./mobile-app-development.module.css";  
import FloatingActions from '@/pages/FloatingActions';
import MobileBottomBar from '@/pages/MobileBottomBar';
import InfoSection from '@/components/InfoSection';
import TwoDAnimationFeatureCard from '@/pages/TwoDAnimationFeatureCard';
import MyBreadcrumb from '@/components/MyBreadcrumb';
import { useState } from "react";
import axios from "axios";

type FAQ = { id: number; question: string; answer: string };
type Service = { title: string; icon: React.ReactNode; points: string[] };
type Card = { title: string; icon: React.ReactNode; text: string };

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What types of 2D animation services do you offer?',
    answer:
      'We offer explainer videos, animated product demos, corporate animations, educational videos, animated ads, and visual storytelling content for social media and websites.',
  },
  {
    id: 2,
    question: 'Do you provide scriptwriting and voiceover along with animation?',
    answer:
      'Yes, we handle the full process—scriptwriting, storyboarding, animation, voiceover recording, sound design, and final delivery in your preferred format.',
  },
  {
    id: 3,
    question: 'Can animations be customized to match my brand identity?',
    answer:
      'Absolutely. We tailor every animation to match your brand guidelines, including color palette, tone of voice, typography, and visual style.',
  },
  {
    id: 4,
    question: 'Which industries benefit from 2D animation?',
    answer:
      '2D animation works well across industries—technology, healthcare, education, e-commerce, real estate, finance, and startups use it for marketing and communication.',
  },
  {
    id: 5,
    question: 'Do you deliver animations in multiple formats for web and social media?',
    answer:
      'Yes. We export animations in various formats like MP4, MOV, and GIF, optimized for YouTube, Instagram, LinkedIn, and your website.',
  },
  {
    id: 6,
    question: 'Can I request revisions after the first draft is delivered?',
    answer:
      'Yes, our packages include structured revision rounds to make sure the final animation aligns perfectly with your vision and business goals.',
  },
];

export default function AnimationDevelopment() {

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

  const Service11Breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: '2D Animation', path: '/service/2d-animation-company-in-mysore' },
  ];

  const services: Service[] = [
    {
      title: 'Explainer Videos',
      icon: <MdOutlineVideoLibrary size={28} color="#26abe1" />,
      points: [
        'Simplify your marketing efforts with engaging explainer video content.',
        'Transform complex ideas into clear and engaging messages with explainer videos.',
        'Deliver your brand message effectively with visually appealing and clear animations.',
        'Reach wider audiences across platforms with adaptable and optimized explainer videos.',
      ],
    },
    {
      title: 'Character Animation',
      icon: <GiPerson size={28} color="#26abe1" />,
      points: [
        'Custom-designed characters to suit your brand’s vision and message.',
        'Showcase emotions, actions and personalities through expertly designed character animations.',
        'Trust our experts to design unique and professional character animations.',
        'Delivering high-quality animations that add value to your brand or project.',
      ],
    },
    {
      title: 'Puppet Animation',
      icon: <GiPuppet size={28} color="#26abe1" />,
      points: [
        "Custom-designed animations that match your brand's unique vision and message.",
        'Deliver your message effectively with detailed and audience-friendly puppet animations.',
        'Create memorable content with unique characters and movements using professional puppet animation.',
        'Engage viewers with lifelike movements and compelling narratives through our puppet animation.',
      ],
    },
    {
      title: 'Storyboard & Pre-visualization',
      icon: <GiFilmStrip size={28} color="#26abe1" />,
      points: [
        'Our animation process begins with clear storyboards and scene planning.',
        'Helps align creative vision and client expectations before production.',
        'Ensures each shot, transition, and element is accounted for early.',
        'Reduces revision cycles and improves final animation quality.',
      ],
    },
    {
      title: 'Motion Graphics',
      icon: <MdOutlineSlowMotionVideo size={28} color="#26abe1" />,
      points: [
        'Enhance your brand identity with creative and dynamic motion graphics.',
        'Create promotional videos that leave a lasting impression on viewers.',
        'Bring static visuals to life with vibrant and meaningful motion graphics.',
        'Capture audience attention with engaging designs and smooth transitions.',
      ],
    },
    {
      title: 'Storyboard and Concept Design',
      icon: <MdOutlineDraw size={28} color="#26abe1" />,
      points: [
        'Ensuring seamless flow and clarity in every stage of the storyboard process.',
        'Bringing concepts to life with attention to detail and innovative techniques.',
        'Designing storyboards that connect with your audience and leave a memorable impact.',
        'Turning abstract concepts into structured visual stories for better communication.',
      ],
    },
  ];

  const cards: Card[] = [
    {
      title: 'Expertise in Diverse Animation Styles',
      icon: <MdAnimation size={28} color="#26abe1" />,
      text: `We offer a wide range of animation services, including character animation, puppet animation and more. Each project is crafted to reflect your unique requirements and vision. Our team ensures the animations are dynamic and visually appealing. This versatility sets us apart as a trusted animation partner.`,
    },
    {
      title: 'Focus on Storytelling',
      icon: <MdAutoStories size={28} color="#26abe1" />,
      text: `Every animation we create is designed to tell a compelling story that engages viewers. We take the time to understand your ideas and translate them into captivating visuals. Through creative design and seamless motion, we bring your narrative to life. Our storytelling approach ensures your audience remains invested.`,
    },
    {
      title: 'High-Quality Visuals',
      icon: <MdHighQuality size={28} color="#26abe1" />,
      text: `We prioritize quality in every frame, ensuring crisp and engaging animations. Using modern tools and techniques, we deliver animations that meet industry standards. From vibrant motion graphics to intricate stop-motion, every detail is refined. This commitment to excellence makes us a reliable choice for your animation needs.`,
    },
    {
      title: 'Timely Delivery and Support',
      icon: <MdAccessTime size={28} color="#26abe1" />,
      text: `We understand the importance of deadlines and ensure timely delivery of every project. Our team works efficiently without compromising on quality or creativity. We also provide post-delivery support to make adjustments if required. This dedication to client satisfaction is a key reason to choose us.`,
    },
    {
      title: 'Customized Solutions for Every Client',
      icon: <LuSettings2 size={28} color="#26abe1" />,
      text: `Every animation project is unique and we adapt to meet your specific goals. Whether it’s for branding, advertising or education, our animations align with your objectives. We collaborate closely with you throughout the process to ensure the best results. Our personalized approach ensures every project stands out.`,
    },
  ];

  return (
    <>
      <Head>
        <title>Creative 2D Animation Company in Mysore for Brands</title>
        <meta
          name="description"
          content="Bring your ideas to life with expert 2D animation services in Mysore—perfect for explainer videos, product demos, ads, and visual storytelling for brands."
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/2d-animation-company-in-mysore"
        />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Creative 2D Animation Company in Mysore for Brands" />
        <meta
          property="og:description"
          content="Bring your ideas to life with expert 2D animation services in Mysore—perfect for explainer videos, product demos, ads, and visual storytelling for brands."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/2d-animation-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        <meta name="keywords" content="2D Animation Company in Mysore" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Creative 2D Animation Company in Mysore for Brands" />
        <meta
          name="twitter:description"
          content="Bring your ideas to life with expert 2D animation services in Mysore—perfect for explainer videos, product demos, ads, and visual storytelling for brands."
        />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/logo.png" />
        <meta name="twitter:site" content="@nncbengaluru" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://nakshatranamahacreations.in/#organization',
              name: 'Nakshatra Namaha Creations',
              url: 'https://nakshatranamahacreations.in',
              logo: 'https://nakshatranamahacreations.in/images/image.png',
              sameAs: [
                'https://www.facebook.com/Nakshatranamahacreations/',
                'https://www.instagram.com/nnc.digitalbengaluru/',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://nakshatranamahacreations.in/#localbusiness',
              name: 'Nakshatra Namaha Creations',
              image: 'https://nakshatranamahacreations.in/images/image.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block',
                addressLocality: 'Mysuru',
                addressRegion: 'Karnataka',
                postalCode: '570008',
                addressCountry: 'IN',
              },
              url: 'https://nakshatranamahacreations.in',
              telephone: '+91-9900566466',
              email: 'info@nakshatranamahacreations.in',
              areaServed: 'Mysuru',
              priceRange: '₹₹',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: '2D Animation Services',
              provider: { '@id': 'https://nakshatranamahacreations.in/#localbusiness' },
              areaServed: { '@type': 'Place', name: 'Mysuru' },
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl:
                  'https://nakshatranamahacreations.in/service/2d-animation-company-in-mysore',
                availableLanguage: 'English',
              },
              description:
                'Bring your ideas to life with expert 2D animation services in Mysore—perfect for explainer videos, product demos, ads, and visual storytelling for brands.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nakshatranamahacreations.in/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nakshatranamahacreations.in/service' },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: '2D Animation',
                  item:
                    'https://nakshatranamahacreations.in/service/2d-animation-company-in-mysore',
                },
              ],
            }),
          }}
        />
      </Head>

      <MyBreadcrumb crumbs={Service11Breadcrumbs} />

      {/* HERO */}
  
 <div className={`${styles2["website-hero"]}`}>
  <div className={`${styles2["website-overlay"]}`}>
    <div className="container">
   <div className="row align-items-center justify-content-center g-4">
        {/* === Left Content === */}
        <div className="col-12 col-lg-7">
          <div className={styles2["website-content"]}>
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


      {/* INTRO */}
      <div className={styles['animation-section']}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles['animation-title']}>2D Animation Company in Mysore</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles['animation-wrapper']}>
            <p className={styles['animation-description']}>
              By using professional graphics, we bring ideas to life through impact and engaging
              visuals as a reliable 2D Animation Company in Mysore. Our staff consists of creatives
              and specialists who work with clients to create business-oriented animation for
              education, entertainment and many more. The objective here is storytelling and design.
              Each animation here is created to leave behind long-lasting impressions while meeting
              the diverse needs of their clients. Whether you are talking about explainer videos,
              animated ads, puppet animation or character animations, our 2D animation services help
              in effectively communicating with the masses and capturing audience attention. We make
              sure that each project is unique, using modern tools and techniques set to your vision
              because we are based in Mysore.
            </p>
          </div>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className={styles['animation-services']}>
        <h2 className={styles['animation-services-title']}>2D Animation Service We Offer</h2>
        <div className={styles['animation-services-grid']}>
          {services.map((service, idx) => (
            <div className={styles['animation-services-card']} key={idx}>
              <div className={styles['animation-services-icon']}>{service.icon}</div>
              <h3 className={styles['animation-services-heading']}>{service.title}</h3>
              <ul className={styles['animation-services-list']}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <TwoDAnimationFeatureCard />

      {/* WHY CHOOSE */}
      <div className={styles['animation-industry']}>
        <div className={styles['animation-industry-left']}>
          <h2>Why choose Nakshatra Namaha Creations as a 2D Animation Company in Mysore?</h2>
          <p>
            Choosing the right partner for your animation needs is crucial for impactful
            storytelling. As a 2D Animation Company in Mysore, we specialize in character
            animation, puppet animation, stop-motion and motion graphics. Our team is dedicated to
            delivering engaging visuals that elevate your brand. We combine creativity with
            technical expertise to craft animations that connect with your audience. Here’s why
            Nakshatra Namaha Creations is the ideal choice for your 2D animation projects.
          </p>
        </div>
        <div className={styles['animation-industry-right']}>
          <img src="/images/rajanna1.png" alt="2D Animation Showcase" />
        </div>
      </div>

      {/* CARDS */}
      <div className={styles['animation-card-wrapper']}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles['animation-card']}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles['animation-card-icon']}>{card.icon}</div>
            <h3 className={styles['animation-card-title']}>{card.title}</h3>
            <p className={styles['animation-card-desc']}>{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* INDUSTRIES */}
  
  <div className={styles1["b2b-industries-wrapper"]}>
        <div className={styles1["b2b-industries-left"]}>
          <h2>Industries We Serve</h2>
          <p>
            We offer innovative digital solutions as a leading Mobile App and Website Development Company in Mysore,
            catering to industries such as service, education, entertainment, real estate, etc. Our expertise helps
            businesses enhance efficiency, engage their audience and achieve their goals seamlessly.
          </p>
          <div className={styles1["b2b-industries-list"]}>
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
            <strong> <li>Logistics</li></strong> 
            </ul>
          </div>
        </div>
        <div className={styles1["b2b-industries-right"]}>
          <img src="/images/rock22.webp" alt="Industries" />
        </div>
      </div>
      <FloatingActions />
      <MobileBottomBar />

      {/* FAQ (keeps Bootstrap classes; module-scoped wrapper for your custom bits) */}
      <div className={styles['faq-wrapper']} style={{width:"69%", margin:"0 auto"}}>
        <div className={`${styles['faq-container']} my-5`}>
          <div className="text-center mb-4">
            <h2 className={styles['sec_title']}>Frequently Asked Questions (FAQ)</h2>
          </div>

          <div className="accordion accordion-flush" id="faqAccordion">
            {faqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header" id={`flush-heading-${faq.id}`}>
                  <button
                    className={`accordion-button ${faq.id !== 1 ? 'collapsed' : ''}`}
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
                  className={`accordion-collapse collapse ${faq.id === 1 ? 'show' : ''}`}
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
