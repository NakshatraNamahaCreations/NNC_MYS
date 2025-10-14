"use client";

import React, { useState } from "react";
import type { BlogPageProps } from "./[title]";
import BlogContactForm from "@/components/BlogContactForm"; // must exist & have "use client"
import styles from "./blog-details.module.css"; // CSS Module import

type Props = NonNullable<BlogPageProps["blog"]>;

const BlogDetailsClient: React.FC<{ blog: Props }> = ({ blog }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx((p) => (p === i ? null : i));

  return (
    <main className={styles["blog-wrap"]}>
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className={styles["blog-breadcrumbs"]}>
        <a href="/" className={styles["blog-crumb"]}>Home</a>
        <span className={styles["blog-sep"]}> / </span>
        <a href="/blog" className={styles["blog-crumb"]}>Blog</a>
        <span className={styles["blog-sep"]}> / </span>
        <span aria-current="page" className={styles["blog-current"]}>{blog.title}</span>
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

      {/* Layout: content + sidebar */}
      <div className={styles["blog-layout"]}>
        <article className={styles["blog-content"]}>
          <div
            className={styles["blog-html"]}
            dangerouslySetInnerHTML={{ __html: blog.descriptionHtml }}
          />

          {/* FAQs */}
          {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
            <section className={styles["blog-faq"]}>
              <h2 className={styles["blog-faq-title"]}>Frequently Asked Questions</h2>
              <div className={styles["blog-faq-list"]}>
                {blog.faqs.map((f, i) => {
                  const open = openIdx === i;
                  return (
                    <div
                      key={i}
                      className={`${styles["blog-faq-item"]} ${open ? styles["open"] : ""}`}
                    >
                      <button
                        className={styles["blog-faq-q"]}
                        onClick={() => toggle(i)}
                      >
                        {f.question}
                        <span className={styles["blog-faq-icon"]}>
                          {open ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        className={styles["blog-faq-a"]}
                        style={{ display: open ? "block" : "none" }}
                      >
                        {f.answer}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside className={styles["blog-right"]}>
          {/* <div className={styles["blog-card"]}> */}
            {/* <h4 className={styles["blog-card-title"]}>Contact Us</h4> */}
            <BlogContactForm />
          {/* </div> */}
        </aside>
      </div>
    </main>
  );
};

export default BlogDetailsClient;
