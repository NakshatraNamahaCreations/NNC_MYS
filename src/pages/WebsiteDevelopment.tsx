// src/pages/website-development.tsx
'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import styles from './SeoRoleSection.module.css';

export default function WebsiteDevelopment() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const imageNames: string[] = [
    'editing1seo.jpg',
    'goalseo1.jpg',
    'concept1.jpg',
    'scripting.jpg',
    'video11.jpg',
    'edit11.jpg',
  ];

  const sectionContent: { title: string; description: string }[] = [
    {
      title: 'Final Review and Delivery',
      description:
        'Ensure the video aligns with your vision before delivering the final product.',
    },
    { title: 'Understanding Your Goals', description: 'We begin by discussing your ideas and objectives in detail.' },
    { title: 'Concept Development', description: 'Crafting a clear concept that aligns with your business vision.' },
    { title: 'Scriptwriting', description: 'Writing compelling scripts to convey your message effectively.' },
    {
      title: 'High-Quality Filming',
      description:
        'Capturing stunning visuals using modern equipment and expert techniques.',
    },
    {
      title: 'Professional Editing',
      description:
        'Refining footage to create seamless and engaging final videos.',
    },
  ];

  return (
    <div className={styles['seo-section']}>
      <Head>
        <title>Top Website Development Companies in Mysore</title>
        <meta
          name="description"
          content="Get custom websites built in Mysore with expert developers focused on responsive design, fast performance, SEO, and business-ready functionality."
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/website-developers-mysorere"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Top Website Development Companies in Mysore" />
        <meta
          property="og:description"
          content="Get custom websites built in Mysore with expert developers focused on responsive design, fast performance, SEO, and business-ready functionality."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/website-developers-mysorere"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Top Website Development Companies in Mysore" />
        <meta
          name="twitter:description"
          content="Get custom websites built in Mysore with expert developers focused on responsive design, fast performance, SEO, and business-ready functionality."
        />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/logo.png" />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      <div className="container">
        <div className="col-12">
          <div className="row mb-5">
            <div className="col-md-13">
              <h2 className={styles['sec_title11']}>
                Our Corporate Video Production Process: Your Story, Our Expertise
              </h2>
            </div>
            <div className="col-lg-13">
              <p>
                Creating impactful corporate videos involves a streamlined approach that focuses on
                quality and creativity. Here&apos;s how we ensure your vision comes to life:
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Image block */}
          <div className={`col-lg-4 ${styles['sticky-img-area']}`}>
            <div className={styles['image-wrapper']}>
              <div className={styles['why_us-img']}>
                {imageNames.map((imgName, i) => (
                  <img
                    key={i}
                    src={`/images/${imgName}`}
                    alt={`Visual ${i + 1}`}
                    width={280}
                    height={200}
                    className={`${styles['why-img']} ${activeIndex === i ? styles['active'] : ''}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text list block */}
          <div className={`col-lg-8 ${styles['why-us_list']}`}>
            <ul className={`${styles['point_list']} ${styles['list-styled']}`}>
              {sectionContent.map((item, i) => (
                <li
                  key={i}
                  className={styles['w-list-item']}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
