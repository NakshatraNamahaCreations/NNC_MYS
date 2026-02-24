"use client";

import React, { useState } from "react";
import BlogContactForm from "@/components/BlogContactForm";
import styles from "./blog-details.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

type BlogProps = {
  blog: {
    title: string;
    descriptionHtml: string;
    bannerUrl: string;
    metaTitle: string;
    metaDescription: string;
    canonical: string;
    faqs: FaqItem[];
    slug: string;
  };
};

const BlogDetailsClient: React.FC<BlogProps> = ({ blog }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <main className={styles["blog-wrap"]}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className={styles["blog-breadcrumbs"]}>
        <a href="/" className={styles["blog-crumb"]}>Home</a>
        <span className={styles["blog-sep"]}> / </span>
        <a href="/blog" className={styles["blog-crumb"]}>Blog</a>
        <span className={styles["blog-sep"]}> / </span>
        <span aria-current="page" className={styles["blog-current"]}>
          {blog.title}
        </span>
      </nav>

      {/* Banner */}
      <div className={styles["blog-banner"]}>
        <img
          src={blog.bannerUrl}
          alt={blog.title}
          className={styles["blog-banner-img"]}
        />
        <h1 className={styles["blog-banner-title"]}>{blog.title}</h1>
      </div>

      {/* Layout */}
      <div className={styles["blog-layout"]}>
        <article className={styles["blog-content"]}>
          <div
            className={styles["blog-html"]}
            dangerouslySetInnerHTML={{ __html: blog.descriptionHtml }}
          />

          {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
            <section className={styles["blog-faq"]}>
              <h2 className={styles["blog-faq-title"]}>
                Frequently Asked Questions
              </h2>

              <div className={styles["blog-faq-list"]}>
                {blog.faqs.map((faq, index) => {
                  const open = openIdx === index;

                  return (
                    <div
                      key={index}
                      className={`${styles["blog-faq-item"]} ${
                        open ? styles["open"] : ""
                      }`}
                    >
                      <button
                        className={styles["blog-faq-q"]}
                        onClick={() => toggle(index)}
                      >
                        {faq.question}
                        <span className={styles["blog-faq-icon"]}>
                          {open ? "−" : "+"}
                        </span>
                      </button>

                      {open && (
                        <div className={styles["blog-faq-a"]}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </article>

        <aside className={styles["blog-right"]}>
          <BlogContactForm />
        </aside>
      </div>
    </main>
  );
};

export default BlogDetailsClient;