// src/pages/services/seo-development.tsx
'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
} from 'react-icons/fa';

import styles from './SeoService.module.css';


import FaqAccordion from './FaqAccordion';
import InfoSection from '@/components/InfoSection';
import SeoTypesSection from './SeoTypesSection';
import SeoFeatureCardGrid from './SeoFeatureCardGrid';
import MyBreadcrumb from '../components/MyBreadcrumb';
import FloatingActions from './FloatingActions';
import MobileBottomBar from './MobileBottomBar';

export default function SeoDevelopment() {
  const cards = [
    {
      title: 'Studying Your Business',
      icon: <FaClipboardCheck size={28} color="#0072b1" />,
      text:
        'Analyze the client’s requisition document and key business aspects to establish priorities effectively.',
    },
    {
      title: 'Website SEO Audit',
      icon: <FaSearch size={28} color="#0072b1" />,
      text:
        'Perform a thorough SEO audit and implement strategic improvements to enhance search engine rankings.',
    },
    {
      title: 'Keyword Analysis',
      icon: <FaKey size={28} color="#0072b1" />,
      text:
        'Perform keyword research and refine website content for better search engine optimization.',
    },
    {
      title: 'Content Optimization',
      icon: <FaFileAlt size={28} color="#0072b1" />,
      text:
        'Integrate high-quality content with targeted keywords to boost organic search traffic.',
    },
    {
      title: 'On-Page Optimization',
      icon: <FaEdit size={28} color="#0072b1" />,
      text:
        'Improve website readability by optimizing URLs, titles, meta descriptions, and image tags.',
    },
    {
      title: 'Schema Optimization',
      icon: <FaCode size={28} color="#0072b1" />,
      text:
        'Implement schema markup including business, article, blog, video, and product schemas.',
    },
    {
      title: 'Mobile Optimization (AMP)',
      icon: <FaMobileAlt size={28} color="#0072b1" />,
      text:
        'Enhance mobile loading speed using Accelerated Mobile Pages (AMP) for better performance.',
    },
    {
      title: 'Off-Page Optimization',
      icon: <FaLink size={28} color="#0072b1" />,
      text:
        'Acquire backlinks from authoritative sources and increase brand visibility on external platforms.',
    },
    {
      title: 'Driving Website Traffic',
      icon: <FaChartLine size={28} color="#0072b1" />,
      text:
        'Utilize advanced SEO strategies to improve rankings and attract high-quality traffic.',
    },
  ];

  const services = [
    {
      icon: '/images/motion.webp',
      title: 'Custom Web Development',
      points: [
        'Develop fully customized websites to match business needs and goals.',
        'Ensure high performance, security and seamless user experience.',
        'Build scalable web solutions for long-term growth.',
      ],
    },
    {
      icon: '/images/application.png',
      title: 'WordPress Development',
      points: [
        'Create professional and responsive WordPress websites for businesses.',
        'Develop SEO-friendly websites for better online visibility',
        'Offer easy-to-manage solutions with customizable features.',
      ],
    },
    {
      icon: '/images/cms.png',
      title: 'E-Commerce Website Development',
      points: [
        'Design feature-rich online stores for better shopping experiences.',
        'Integrate secure payment gateways and inventory management.',
        'Ensure mobile-friendly and fast-loading E-Commerce platforms.',
      ],
    },
    {
      icon: '/images/native.png',
      title: 'Landing Page Design',
      points: [
        'Create high-converting landing pages for better lead generation.',
        'Design visually appealing and responsive layouts.',
        'Optimize pages for speed, SEO friendly and user engagement.',
      ],
    },
    {
      icon: '/images/crossplat.png',
      title: 'Static Website Development',
      points: [
        'Develop fast-loading and secure static websites for businesses.',
        'Ensure simple, clean and professional web designs.',
        'Suitable for small businesses and informational websites.',
      ],
    },
    {
      icon: '/images/crossplat.png',
      title: 'Dynamic Website Development',
      points: [
        'Build interactive and database-driven websites with real-time updates.',
        'Provide user-friendly and scalable solutions for businesses.',
        'Ensure smooth navigation and engaging user experience.',
      ],
    },
    {
      icon: '/images/crossplat.png',
      title: 'Website Re-Designing',
      points: [
        'Improve the design and functionality of existing websites.',
        'Optimize websites for SEO friendly, speed and responsiveness.',
        'Enhance the overall user experience and modernize the look.',
      ],
    },
    {
      icon: '/images/crossplat.png',
      title: 'CMS Website Development',
      points: [
        'Develop easy-to-manage CMS websites for effortless content updates.',
        'Provide user-friendly dashboards for non-technical users.',
        'Optimize for security, speed and SEO-friendly structure.',
      ],
    },
  ];

  const Service6Breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'Web Design', path: '/service' },
  ];

  return (
    <>
      <Head>
        <title>Website Development & App Development Services, Mysore</title>
        <meta
          name="description"
          content="Discover expert services in website development, mobile app creation, UI/UX design, digital marketing, and video production for growing businesses in Mysore."
        />
        <link rel="canonical" href="https://nakshatranamahacreations.in/service" />
      </Head>

      <MyBreadcrumb crumbs={Service6Breadcrumbs} />

      <div className={styles['seo-hero']}>
        <div className={styles['seo-overlay']}>
          <div className={styles['seo-content']}>
            <h2>
              Trusted mobile app development company in Mysore, specializing in creating custom
              applications.
            </h2>
            <p>
              Maximize your digital potential with our mobile app development expertise. We equip
              businesses across industries with advanced UI/UX designs, IoT integration, and
              AI-driven solutions, creating versatile apps for any challenge.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact" className={styles['talk-btn']}>
                <span className="text">Talk to our expert</span>
                <svg
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles['seo-section']}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles['seo-title-wrapper']}>
            <h1 className={styles['seo-title']}>
              Website Design excellence delivered by one of Mysore Top Dev Shops
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles['seo-section-wrapper1']}>
            <p className={styles['seo-description']}>
              Nakshatra Namaha Creations Inc is a web design company operating in Mysore, that
              offers full-service portfolio of design and development of web and mobile presence for
              businesses, cloud, managed IT services, Internet marketing and marketing automation to
              businesses of all sizes operating across industries.We drive your digital success
            </p>
            <p className={styles['seo-description']}>
              Regardless of the stage of operation of your business, our team of expert web
              designers and internet marketers provide you with one-off web designs powered by
              impactful marketing practices to take your web presence to the next level. This does
              not only effectively help you increase the customer-base for your business but also
              helps you build a memorable presence across the web leading to a stronger recall for
              your brand.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles['seo-solutions-wrapper2']}>
        <h2 className={styles['seo-solutions-title']}>
          Website Development Services We Offer In Mysore
        </h2>
        <div className={styles['seo-solutions-grid']}>
          {services.map((service, idx) => (
            <div className={styles['seo-solutions-card']} key={idx}>
              <img src={service.icon} alt={service.title} className={styles['seo-solutions-icon']} />
              <h4 className={styles['seo-solutions-heading']}>{service.title}</h4>
              <ul className={styles['seo-solutions-list']}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles['scroll-panel']} ${styles['seo-process-wrapper']}`}>
        <motion.h2
          className={styles['seo-process-title']}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Website Development Process: Innovative Web Solutions
        </motion.h2>

        <motion.p
          className={styles['seo-process-subtitle']}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <strong>Cutting-Edge SEO Web Development</strong>
        </motion.p>

        <motion.div
          className={styles['seo-process-desc']}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            At Nakshatra Namaha Creations, our SEO-focused website development process is built
            around performance, visibility, and user experience. We follow a structured approach to
            bring your vision to life with strategic, search-engine-ready solutions.
          </p>
        </motion.div>
      </div>

      <div className={styles['seo-feature-wrapper']}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles['seo-feature-card']}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles['seo-feature-icon']}>{card.icon}</div>
            <h3 className={styles['seo-feature-title']}>{card.title}</h3>
            <p className={styles['seo-feature-desc']}>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <SeoTypesSection />

      <div className={styles['seo-section-wrapper']}>
        <div className={styles['seo-section-left']}>
          <h2>
            Why choose Nakshatra Namaha Creations as ecommerce development company in Mysore?
          </h2>
          <p>
            As the most trusted ecommerce development company in Mysore, Nakshatra Namaha Creations
            has highly experienced ecommerce developers in Mysore, who are knowledgeable and well
            versed with the latest technologies that helps in attractive ui/ux design, quick
            loading, enhanced mobile responsiveness, and device compatibility for the website.
          </p>
        </div>
      </div>

      <SeoFeatureCardGrid />

      <div className={styles['industry-section-wrapper']}>
        <div className={styles['industry-section-left']}>
          <h2>High-ROI SEO strategies tailored for diverse industries.</h2>
          <br />
          <div className={styles['industry-section-list']}>
            <ul>
              <li>SEO for healthcare websites</li>
              <li>SEO for technology websites</li>
              <li>SEO for digital product/SaaS companies</li>
              <li>SEO for education websites</li>
            </ul>
            <ul>
              <li>SEO for NGO services</li>
              <li>SEO for small businesses/sole proprietorship</li>
              <li>SEO for professional services</li>
            </ul>
          </div>
        </div>
        <div className={styles['industry-section-right']}>
          <img src="/images/rak.webp" alt="Industries Mockup" />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />
      <FaqAccordion />
      <InfoSection />
    </>
  );
}
