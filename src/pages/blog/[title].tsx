// src/pages/blog/[title].tsx

import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";
import BlogDetailsClient from "../../components/BlogDetailsClient";

const API = "https://api.nakshatranamahacreations.in";

const stripHtml = (html: string = "") =>
  html.replace(/<[^>]*>/g, "");

type FaqItem = {
  question: string;
  answer: string;
};

type BlogPageData = {
  title: string;
  descriptionHtml: string;
  bannerUrl: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  faqs: FaqItem[];
  slug: string;
};

type BlogPageProps = {
  blog: BlogPageData | null;
};

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async (ctx) => {
  const routeSlug = String(ctx.params?.title || "");

  if (!routeSlug) {
    return { notFound: true };
  }

  try {
    const res = await fetch(
      `${API}/api/blogs/blog/slug/${routeSlug}`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const json = await res.json();
    const found = json?.data;

    if (!found) {
      return { notFound: true };
    }

    const canonical = `https://www.nakshatranamahacreations.in/blog/${routeSlug}`;

    const bannerUrl =
      found.bannerImage?.startsWith?.("http")
        ? found.bannerImage
        : found.bannerImage
        ? `${API}/uploads/${found.bannerImage}`
        : "https://www.nakshatranamahacreations.in/media/blogs/placeholder.png";

    return {
      props: {
        blog: {
          title: found.title || "Blog",
          descriptionHtml: found.description || "",
          bannerUrl,
          metaTitle: found.metaTitle || found.title || "Blog",
          metaDescription:
            found.metaDescription ||
            stripHtml(found.description || "").slice(0, 160),
          canonical,
          faqs: Array.isArray(found.faqs) ? found.faqs : [],
          slug: routeSlug,
        },
      },
    };
  } catch {
    return { notFound: true };
  }
};

const BlogDetailsPage: NextPage<BlogPageProps> = ({ blog }) => {
  if (!blog) return null;

  return (
    <>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="canonical" href={blog.canonical} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:url" content={blog.canonical} />
        <meta property="og:image" content={blog.bannerUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.bannerUrl} />
      </Head>

      <BlogDetailsClient blog={blog} />
    </>
  );
};

export default BlogDetailsPage;