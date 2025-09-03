"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./BlogCard.module.css";

type Blog = {
  image: string;
  title: string;
  date: string;
  day: string;
  month: string;
  link: string; // e.g. /blogs/my-post
};

const blogs: Blog[] = [
  {
    image: "/images/blog.webp",
    title: "How a Well-Designed Website Can Help Businesses Stand Out",
    date: "October 22, 2024",
    day: "22",
    month: "Oct",
    link: "/blogs/well-designed-website-benefits",
  },
  {
    image: "/images/blog1.webp",
    title: "How Custom Website Development Can Drive Growth",
    date: "October 22, 2024",
    day: "22",
    month: "Oct",
    link: "/blogs/custom-website-development-growth",
  },
  {
    image: "/images/blog3.webp",
    title: "How Website Speed Optimization Impacts Conversion",
    date: "October 12, 2024",
    day: "12",
    month: "Oct",
    link: "/blogs/how-website-speed-optimization-impacts-conversion",
  },
  {
    image: "/images/blog4.webp",
    title: "The Role of Mobile Apps in Business Operations",
    date: "October 10, 2024",
    day: "10",
    month: "Oct",
    link: "/blogs/role-of-mobile-apps-in-business",
  },
  {
    image: "/images/blog5.webp",
    title: "Why Mobile-Optimized Websites Are Crucial Today",
    date: "October 9, 2024",
    day: "09",
    month: "Oct",
    link: "/blogs/why-mobile-optimized-websites-are-crucial",
  },
  {
    image: "/images/blog6.webp",
    title: "How 2D Animation Can Simplify Sales Communication",
    date: "October 5, 2024",
    day: "05",
    month: "Oct",
    link: "/blogs/2d-animation-sales-communication",
  },
];

export default function BlogCard() {
  return (
    <section className={styles["blog-wrapper"]}>
      <div className={styles["container19"]}>
        <h2 className={styles["section-title17"]}>Latest Blog Insights</h2>

        <div className={styles["blog-grid"]}>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.link}
              className={styles["blog-card"]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={blog.link} className={styles["blog-link"]}>
                <div className={styles["blog-image-wrap"]}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={640}
                    height={420}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                    className={styles["blog-img"]}
                    priority={index < 2}
                  />
                  <div className={styles["date-badge"]}>
                    <span className={styles["day"]}>{blog.day}</span>
                    <span className={styles["month"]}>{blog.month}</span>
                  </div>
                </div>

                <div className={styles["blog-body"]}>
                  <span className={styles["blog-date-text"]}>📅 {blog.date}</span>
                  <h4 className={styles["blog-title"]}>{blog.title}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
