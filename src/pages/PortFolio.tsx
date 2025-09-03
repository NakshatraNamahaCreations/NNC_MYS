"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.css"; // ✅ CSS Module

export default function Portfolio() {
  const [projects] = useState([
    {
      image: "/images/portfoilo3.webp",
      name: "RAJATHADRI ROYALINN",
      category: "Hotel Management",
      link: "https://rajathadriroyalinn.com/",
    },
    {
      image: "/images/portfolio4.webp",
      name: "SK DEVELOPERS",
      category: "Real Estate",
      link: "https://skdevelopers.in/",
    },
    {
      image: "/images/portfolio2.webp",
      name: "PURAN INTERIORS",
      category: "Interior Design",
      link: "https://puraninteriors.com/",
    },
    {
      image: "/images/portfolio1.webp",
      name: "NESARA AYURVEDA",
      category: "Health Care",
      link: "https://nesaraayurveda.com/",
    },
  ]);

  return (
    <div className={styles["portfolio-wrapper"]}>
      <section className={styles["portfolio-section"]}>
        <div className={`${styles["container-fluid1"]} px-0`}>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className={styles["portfolio-heading-main"]}>Our Portfolio</h2>
              <h2 className={styles["portfolio-heading-sub"]}>Our Creative Portfolio</h2>
            </div>
            <div className="col-lg-6 mb-4">
              <p className={styles["portfolio-description"]}>
              Explore our portfolio of websites crafted by our experienced team, where thoughtful design meets reliable engineering. We deliver every project within agreed timelines, keeping quality and communication at the forefront to ensure client satisfaction. See how our attention to UX, performance, and SEO drives better results across industries. At Nakshatra Namaha Creations, we’re recognized as a leading website development company in Mysore, providing tailored solutions that strengthen your brand online. From responsive layouts to scalable architecture, we build user-friendly, business-ready websites designed around your goals, so your digital presence looks polished and performs flawlessly.
              </p>
            </div>
          </div>

         <div className="container-xxl px-0">
  {/* headings + intro can stay as-is */}

  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-4">
    {projects.map((project, index) => (
      <div className="col" key={index}>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none d-block h-100"
        >
          <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
            {/* uniform image area */}
            <div className="ratio ratio-4x3 position-relative">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width:1200px) 25vw, (min-width:992px) 33vw, (min-width:576px) 50vw, 100vw"
                className="object-fit-cover"
                priority={index < 4}
              />
            </div>

            <div className="card-body text-center">
              <h4 className={`${styles["portfolio-client-name"]} mb-1 clamp-2`}>
                {project.name}
              </h4>
              <p className={`${styles["portfolio-client-category"]} mb-0 text-muted`}>
                {project.category}
              </p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>


</div>


          <motion.div
            className={styles["portfolio-cta-button-wrapper"]}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles["portfolio-cta"]}>
              <Link href="/our-work">
                <button type="button" className={styles["portfolio-cta-button"]}>
                  Explore Our Projects <FaArrowRight className="ms-2" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
