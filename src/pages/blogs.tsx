import Head from "next/head";
import Script from "next/script";
import styles from "@/pages/Blogs.module.css";

// move these files into src/components/** and fix their exports if needed
import MyBreadcrumb from "@/components/MyBreadcrumb";
import BlogCard from "@/pages/BlogCard";
import ClientSlider from "@/pages/ClientSlider";
import InfoSection from "@/components/InfoSection";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";

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
    { name: "Blogs", path: "/blogs" },
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

      <MyBreadcrumb crumbs={crumbs} />

      {/* HERO (scoped with CSS module) */}
      <div className={styles["blogs-hero"]}>
        <div className={styles["blogs-overlay"]}>
          <div className={styles["blogs-content"]}>
            <h1>Our Blogs</h1>
            <p>Follow us and get updated on latest technologies and tools</p>
          </div>
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />
      <BlogCard />
      <ClientSlider />

      {/* FAQ (scoped) */}
      <div className={styles["faq"]} style={{width:"69%", margin:"0 auto"}}>
        <div className="container55 my-5">
          <div className="text-center mb-4">
            <h2 className={styles["sec_title"]}>Frequently Asked Questions (FAQ)</h2>
          </div>

          <div className="accordion accordion-flush" id="faqAccordion">
            {faqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header" id={`flush-heading-${faq.id}`}>
                  <button
                    className={`accordion-button ${faq.id !== 1 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${faq.id}`}
                    aria-expanded={faq.id === 1}
                    aria-controls={`flush-collapse-${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse-${faq.id}`}
                  className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
                  aria-labelledby={`flush-heading-${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InfoSection />
    </>
  );
}
