import Head from "next/head";
import Script from "next/script";
import styles from "@/pages/Blogs.module.css";
import Link from "next/link";
import Image from "next/image";
// move these files into src/components/** and fix their exports if needed
import MyBreadcrumb from "@/components/MyBreadcrumb";
import BlogCard from "@/pages/BlogCard";
import ClientSlider from "@/pages/ClientSlider";
import InfoSection from "@/components/InfoSection";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import BlogsFaq from "../BlogsFaq";
import styles1 from "../AboutUs.module.css";
import BlogClient from "./BlogClient";


const faqs = [
  { id: 1, question: "What topics does the Nakshatra Namaha Creations blog cover?",
    answer: "Our blog covers insights on website and mobile app development, digital marketing, UI/UX trends, SEO, 2D animation, and business tech strategies." },
  { id: 2, question: "Who writes the content for the blog?",
    answer: "Our articles are written by in-house experts and industry professionals with real-world experience in design, development, and marketing." },
  { id: 3, question: "How often is the blog updated with new content?",
    answer: "We regularly publish new blogs to keep our readers informed about the latest industry trends, tech tools, and project case studies." },
  { id: 4, question: "Can I request a blog topic or contribute as a guest writer?",
    answer: "Yes, we welcome suggestions and guest post inquiries. Please contact us through our website or email us your idea for consideration." },
  { id: 5, question: "Are your blogs beginner-friendly or more technical?",
    answer: "We offer a mix of both. Some articles break down complex concepts for beginners, while others provide advanced strategies for professionals." },
  { id: 6, question: "How can I stay updated with your latest blog posts?",
    answer: "You can bookmark our blog page or follow us on Instagram and LinkedIn where we share new article updates and insights." },
];



export default function Blogs() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How a Well-Designed Website Can Help Businesses Stand Out",
    description:
      "Discover how a thoughtfully designed website boosts visibility, enhances brand identity, improves user experience, and drives conversions.",
    author: {
      "@type": "Person",
      name: "Nakshatra Namaha Creations",
      url: "https://nakshatranamahacreations.in/blogs",
    },
    publisher: {
      "@type": "Organization",
      name: "Nakshatra Namaha Creations",
      logo: {
        "@type": "ImageObject",
        url: "https://nakshatranamahacreations.in/media/blogs/2.png",
      },
    },
    datePublished: "2025-05-15",
    dateModified: "2025-05-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://nakshatranamahacreations.in/blogs",
    },
  };
const HERO_TITLE = "EXPLORE THE NNC BLOG";
const HERO_SUBTITLE =
  "Stay ahead with insights, strategies, and stories from Nakshatra Namaha Creations. Discover expert tips on web development, mobile apps, UI/UX, marketing, and the latest trends shaping the digital world.";

  return (
    <>
      <Head>
        <link rel="canonical" href="https://nakshatranamahacreations.in/blogs" />
        <title>How a Well-Designed Website Can Help Businesses Stand Out</title>
        <meta
          name="description"
          content="Discover how a thoughtfully designed website boosts visibility, enhances brand identity, improves user experience, and drives conversions."
        />
        <meta
          name="keywords"
          content="business website design, website user experience, brand identity online, responsive website, web design benefits, conversion-focused website"
        />
        <meta property="og:title" content="How a Well-Designed Website Can Help Businesses Stand Out" />
        <meta
          property="og:description"
          content="Discover how a thoughtfully designed website boosts visibility, enhances brand identity, improves user experience, and drives conversions."
        />
        <meta property="og:url" content="https://nakshatranamahacreations.in/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="How a Well-Designed Website Can Help Businesses Stand Out" />
        <meta
          name="twitter:description"
          content="Discover how a thoughtfully designed website boosts visibility, enhances brand identity, improves user experience, and drives conversions."
        />
        <meta name="twitter:image" content="https://nakshatranamahacreations.in/media/blogs/2.png" />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* JSON-LD */}
      <Script id="blogs-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* <MyBreadcrumb crumbs={crumbs} /> */}

      {/* HERO (scoped with CSS module) */}
      <section className={styles1.heroBannerWrapper} id="about-hero">
        <Image
           src="/images/background.jpg"
          alt="Banner"
          width={1920}
          height={1080}
          priority
          className={styles1.carouselBgImage}
        />
        <div className={styles1.blackOverlay} />
        <div className={styles1.carouselBannerLeft}>
          <nav className={styles1.breadcrumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">
                <span className={styles1.breadcrumbsCurrent}>Blogs</span>
              </li>
            </ol>
          </nav>
          <h1 className={styles1.title}>{HERO_TITLE}</h1>
          <p className={styles1.subtitle}>{HERO_SUBTITLE}</p>
        </div>
        <div className={styles1.scrollExplore}>SCROLL TO EXPLORE</div>
      </section>

      <FloatingActions />
      <MobileBottomBar />
      <h2 className="text-center fw-bold" style={{margin:"40px"}}>Our Latest Blogs</h2>

      <BlogClient/>
      <ClientSlider />

      {/* FAQ (scoped) */}
      <BlogsFaq/>

      <InfoSection />
    </>
  );
}
