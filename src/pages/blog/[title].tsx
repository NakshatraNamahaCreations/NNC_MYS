"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import BlogDetailsClient from "@/components/BlogDetailsClient";

const API = "https://api.nakshatranamahacreations.in";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.title;

  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${API}/api/blogs/blog/title/${slug}`
        );

        if (!res.ok) {
          setError("Blog not found");
          setLoading(false);
          return;
        }

        const json = await res.json();
        const found = json?.data;

        if (!found) {
          setError("Blog not found");
          setLoading(false);
          return;
        }

        const bannerUrl =
          found.bannerImage?.startsWith("http")
            ? found.bannerImage
            : `${API}/uploads/${found.bannerImage}`;

        setBlog({
          title: found.title,
          descriptionHtml: found.description || "",
          bannerUrl,
          metaTitle: found.metaTitle || found.title,
          metaDescription:
            found.metaDescription ||
            stripHtml(found.description || "").slice(0, 160),
          faqs: found.faqs || [],
          slug,
        });

        setError(null);
      } catch (err) {
        setError("Fetch error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error || !blog) return <p>{error || "Blog not found"}</p>;

  const canonical = `https://www.nakshatranamahacreations.in/blog/${blog.slug}`;

  return (
    <>
      {/* ✅ SEO Head Section */}
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={blog.bannerUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.bannerUrl} />
      </Head>

      {/* Blog Content */}
      <BlogDetailsClient blog={blog} />
    </>
  );
}