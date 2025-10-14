"use client";

import React, { useEffect, useState, useMemo } from "react";
import axios, { AxiosResponse } from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ShimmerCard from "../ShimmerCard";
import BlogCard from "../../components/BlogCard";
import ViewAllBtn from "../ViewAllBtn";
import { useRouter } from "next/navigation";

// ===== API & ASSETS =====
const API_URL = "https://api.nakshatranamahacreations.in/api/blogs";
const ASSET_BASE = "https://api.nakshatranamahacreations.in";
const PAGE_SIZE = 10;
const CITY = "Mysore";

// ===== Types =====
interface ApiBlog {
  _id?: string;
  title?: string;
  bannerImage?: string;
  description?: string;
  services?: string[];
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  date?: string;
  category?: string;
}

interface ApiResponse {
  data?: ApiBlog[];
  totalPages?: number;
  currentPage?: number;
  totalDocuments?: number;
}

export interface BlogCardData {
  id: string;
  title: string;
  description: string;
  date: string; // already human-formatted for rendering
  category: string;
  link: string;
  banner: string;
}

// ===== Helpers =====
const slugify = (s = "") =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

const pickDate = (b: ApiBlog) =>
  new Date(
    b.publishedAt || b.createdAt || b.updatedAt || b.date || Date.now()
  ).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const normalizeApi = (blog: ApiBlog): BlogCardData => {
  const title = blog.title ?? "Untitled";
  const slug = slugify(title);
  const rawBanner = blog.bannerImage;

  const banner =
    typeof rawBanner === "string" && rawBanner.startsWith("http")
      ? rawBanner
      : rawBanner
      ? `${ASSET_BASE}/uploads/${rawBanner}`
      : "/media/blogs/placeholder.png";

  return {
    id: String(blog._id ?? slug),
    title,
    description: (blog.description || "").replace(/<[^>]+>/g, "").slice(0, 150),
    date: pickDate(blog),
    category: blog.services?.length ? blog.services.join(", ") : blog.category || "General",
    link: `/blog/${slug}`,
    banner,
  };
};

const buildUrl = ({ page = 1, limit = PAGE_SIZE }: { page?: number; limit?: number }) => {
  const u = new URL(API_URL);
  u.searchParams.set("page", String(page));
  u.searchParams.set("limit", String(limit));
  u.searchParams.set("city", CITY); // <-- Mysore only
  return u.toString();
};

// ===== Static Blogs (edit these as you like) =====
type StaticBlog = {
  id: number | string;
  title: string;
  description: string;
  date: string; // e.g., "April 30, 2025" or ISO string
  category: string;
  link: string;
  banner: string;
};

const STATIC_BLOGS: StaticBlog[] = [
  {
    id: 1001,
    title: "How a Well-Designed Website Can Help Businesses Stand Out",
    description:
      "A behind-the-scenes look at our discovery, design, and development workflow.",
    date: "October 22, 2024",
    category: "Process",
    link: "/blog/well-designed-website-benefits",
    banner: "/images/blog.webp",
  },
  {
    id: 1002,
    title: "How Custom Website Development Can Drive Growth",
    description:
      "A handy checklist to kickstart consistent branding across all channels.",
    date: "October 22, 2024",
    category: "Branding",
    link: "/blog/custom-website-development-growth",
    banner: "/images/blog1.webp",
  },

    {
    id: 1003,
    title: "How Website Speed Optimization Impacts Conversion",
    description:
      "",
    date: "October 12, 2024",
    category: "Branding",
    link: "/blog/how-website-speed-optimization-impacts-conversion",
    banner: "/images/blog3.webp",
  },
      {
    id: 1004,
    title: "The Role of Mobile Apps in Business Operations",
    description:
      "",
    date: "October 10, 2024",
    category: "Branding",
    link: "/blog/role-of-mobile-apps-in-business",
    banner:  "/images/blog4.webp",
  },
      {
    id: 1005,
    title: "Why Mobile-Optimized Websites Are Crucial Today",
    description:
      "",
    date: "October 9, 2024",
    category: "Branding",
    link: "/blog/why-mobile-optimized-websites-are-crucial",
    banner: "/images/blog5.webp",
  },
      {
    id: 1006,
    title: "How 2D Animation Can Simplify Sales Communication",
    description:
      "",
    date: "October 5, 2024",
    category: "Branding",
    link: "/blog/2d-animation-sales-communication",
    banner: "/images/blog6.webp",
  },
];

const normalizeStatic = (b: StaticBlog): BlogCardData => ({
  id: String(b.id),
  title: b.title,
  description: b.description,
  date: new Date(b.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
  category: b.category,
  link: b.link,
  banner: b.banner || "/media/blogs/placeholder.png",
});

// ===== Component =====
const BlogClient: React.FC = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState<BlogCardData[]>([]);
  const [staticBlogs] = useState<BlogCardData[]>(() =>
    STATIC_BLOGS.map(normalizeStatic)
  );

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // initial load
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const url = buildUrl({ page: 1 });
        const res: AxiosResponse<ApiResponse> = await axios.get(url);
        const list = Array.isArray(res.data?.data) ? res.data!.data! : [];
        setBlogs(list.map(normalizeApi));
        setTotalPages(res.data?.totalPages ?? 1);
        setCurrentPage(res.data?.currentPage ?? 1);
        setError(null);
      } catch (e) {
        console.error(e);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleViewMore = async () => {
    if (currentPage >= totalPages) return;
    setLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const url = buildUrl({ page: nextPage });
      const res: AxiosResponse<ApiResponse> = await axios.get(url);
      const list = Array.isArray(res.data?.data) ? res.data!.data! : [];
      setBlogs((prev) => [...prev, ...list.map(normalizeApi)]);
      setCurrentPage(nextPage);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMore(false);
    }
  };

  // Merge strategy: append static at the end AFTER the final API page is loaded
  const merged = useMemo(() => {
    const isLastPage = currentPage >= totalPages;
    return isLastPage ? [...blogs, ...staticBlogs] : blogs;
  }, [blogs, staticBlogs, currentPage, totalPages]);

  return (
    <Container style={{ marginTop: 24, marginBottom: 24 }}>
      {loading ? (
        <Row>
          {[...Array(9)].map((_, i) => (
            <Col sm={4} key={i} className="mb-4">
              <ShimmerCard />
            </Col>
          ))}
        </Row>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Row>
            {merged.map((card) => (
              <Col sm={4} key={card.id} className="mb-4">
                <div onClick={() => router.push(card.link)} style={{ cursor: "pointer" }}>
                  <BlogCard card={card} />
                </div>
              </Col>
            ))}
          </Row>

          {currentPage < totalPages && (
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <ViewAllBtn onClick={handleViewMore} disabled={loadingMore} />
              {loadingMore && (
                <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>
                  Loading more…
                </div>
              )}
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default BlogClient;
