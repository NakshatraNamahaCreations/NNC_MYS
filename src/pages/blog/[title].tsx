// src/pages/blog/[title].tsx
import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";
import BlogDetailsClient from "../../components/BlogDetailsClient"; // <-- use the client component

const API = "https://api.nakshatranamahacreations.in";
const CITY = "Mysore";

const stripHtml = (html: string = "") => html.replace(/<[^>]*>/g, "");
const slugify = (s: string = "") =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

type FaqItem = { question: string; answer: string };

type Blog = {
  _id?: string;
  slug?: string;
  title?: string;
  description?: string;      // HTML
  metaTitle?: string;
  metaDescription?: string;
  bannerImage?: string;
  faqs?: FaqItem[];
};

type ApiResponse = { data?: Blog[] };

export type BlogPageProps = {
  blog: {
    title: string;
    descriptionHtml: string;
    bannerUrl: string;
    metaTitle: string;
    metaDescription: string;
    canonical: string;
    faqs: FaqItem[];
    slug: string;
  } | null;
  error?: string | null;
};

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async (ctx) => {
  const routeSlug = String(ctx.params?.title || "");
  const canonical = `https://nakshatranamahacreations.in/blog/${routeSlug}`;

  try {
    // fetch including city=Mysore so it matches your grid list
    const res = await fetch(`${API}/api/blogs?city=${encodeURIComponent(CITY)}`, {
      cache: "no-store",
    });
    if (!res.ok) return { props: { blog: null, error: `Upstream ${res.status}` } };

    const json: ApiResponse = await res.json();
    const blogs = Array.isArray(json?.data) ? json.data : [];

    const found =
      blogs.find((b) => b?.slug === routeSlug) ||
      blogs.find((b) => slugify(b?.title || "") === routeSlug);

    if (!found) return { props: { blog: null, error: "Not found" } };

    const title = found.title || "Blog";
    const metaTitle = found.metaTitle || title;
    const metaDescription =
      found.metaDescription || stripHtml(found.description || "").slice(0, 160);

    const bannerUrl =
      found.bannerImage?.startsWith?.("http")
        ? found.bannerImage!
        : found.bannerImage
        ? `${API}/uploads/${found.bannerImage}`
        : "https://nakshatranamahacreations.in/media/blogs/placeholder.png";

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
  } catch (e: any) {
    return { props: { blog: null, error: e?.message || "Fetch error" } };
  }
};

const BlogDetailsPage: NextPage<BlogPageProps> = ({ blog, error }) => {
  if (!blog) {
    return (
      <main style={{ padding: 24, marginTop: 100 }}>
        <h2>Blog not found.</h2>
        {error && <p style={{ color: "crimson" }}>Reason: {error}</p>}
      </main>
    );
  }

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

      {/* Hand off actual rendering to the client component */}
      <BlogDetailsClient blog={blog} />
    </>
  );
};

export default BlogDetailsPage;
