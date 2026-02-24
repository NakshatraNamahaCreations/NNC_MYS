// src/pages/blog/[title].tsx

import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";
import BlogDetailsClient from "../../components/BlogDetailsClient";

const API = "https://api.nakshatranamahacreations.in";
const CITY = "Mysore";

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
  error?: string | null;
};

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async (ctx) => {
  const routeSlug = String(ctx.params?.title || "");

  if (!routeSlug) {
    return { props: { blog: null, error: "Invalid slug" } };
  }

  const canonical = `https://www.nakshatranamahacreations.in/blog/${routeSlug}`;

  try {
    // ✅ Fetch directly by slug + city
    const res = await fetch(
      `${API}/api/blogs/blog/slug/${routeSlug}?city=${CITY}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return { props: { blog: null, error: "Blog not found" } };
    }

    const json = await res.json();
    const found = json?.data;

    if (!found || found.city !== CITY) {
      return { props: { blog: null, error: "Blog not found" } };
    }

    const title = found.title || "Blog";
    const metaTitle = found.metaTitle || title;
    const metaDescription =
      found.metaDescription ||
      stripHtml(found.description || "").slice(0, 160);

    const bannerUrl =
      found.bannerImage?.startsWith?.("http")
        ? found.bannerImage
        : found.bannerImage
        ? `${API}/uploads/${found.bannerImage}`
        : "https://www.nakshatranamahacreations.in/media/blogs/placeholder.png";

    return {
      props: {
        blog: {
          title,
          descriptionHtml: found.description || "",
          bannerUrl,
          metaTitle,
          metaDescription,
          canonical,
          faqs: Array.isArray(found.faqs) ? found.faqs : [],
          slug: routeSlug,
        },
        error: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        blog: null,
        error: error?.message || "Fetch error",
      },
    };
  }
};

const BlogDetailsPage: NextPage<BlogPageProps> = ({
  blog,
  error,
}) => {
  if (!blog) {
    return (
      <main style={{ padding: 40, marginTop: 100 }}>
        <h2>Blog not found.</h2>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
      </main>
    );
  }

  return (
    <>
      {/* ✅ SEO Section */}
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