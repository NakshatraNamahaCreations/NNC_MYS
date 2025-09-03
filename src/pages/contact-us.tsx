// src/pages/contact-us.tsx
import Head from "next/head";
import Script from "next/script";
import styles from "./contact-us.module.css";

// keep these paths as you have them (adjust if you moved files)
import MyBreadcrumb from "@/components/MyBreadcrumb";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import InfoSection from "@/components/InfoSection";
import ContactUs from "@/pages/ContactUs"; // ← the Next.js client component version

const faqs = [
  {
    id: 1,
    question: "What is the best way to reach Nakshatra Namaha Creations?",
    answer:
      "You can contact us via phone at +91-9900566466, email us at info@nakshatranamahacreations.in, or use the contact form on this page for quick responses.",
  },
  {
    id: 2,
    question: "What are your working hours?",
    answer:
      "We are available from Monday to Saturday, 10:00 AM to 6:30 PM IST. For urgent queries, please drop an email and we’ll respond as soon as possible.",
  },
  {
    id: 3,
    question: "Do I need an appointment before visiting your office?",
    answer:
      "Yes, we recommend scheduling an appointment so that the right team member is available to assist you efficiently.",
  },
  {
    id: 4,
    question: "Where is your office located?",
    answer:
      "Our office is located at SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block, Mysuru – 570008.",
  },
  {
    id: 5,
    question: "Can I get a free consultation for my project?",
    answer:
      "Yes, we offer an initial consultation to understand your requirements and suggest the best approach. Use the form on this page to request a callback.",
  },
  {
    id: 6,
    question: "How soon can I expect a response after contacting you?",
    answer:
      "We usually respond within 24 business hours. For quicker support, you can reach us directly on our contact number.",
  },
];

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nakshatra Namaha Creations",
    alternateName: "Contact Web & App Developers | Digital Services Mysore",
    url: "https://nakshatranamahacreations.in/contact-us",
    logo: "https://nakshatranamahacreations.in/images/image.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919900566466",
      contactType: "Sales",
      areaServed: "IN",
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.linkedin.com/company/nakshatra-namaha-creation/",
      "https://x.com/nncbengaluru",
      "https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/",
      "https://www.instagram.com/nnc.digitalmysuru/",
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nakshatra Namaha Creations",
    image: "https://nakshatranamahacreations.in/images/image.png",
    url: "https://nakshatranamahacreations.in/contact-us",
    telephone: "+919900566466",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block,",
      addressLocality: "Mysuru",
      postalCode: "570008",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.264048232752891,
      longitude: 76.64441759371324,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/nakshatra-namaha-creation/",
      "https://x.com/nncbengaluru",
      "https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/",
      "https://www.instagram.com/nnc.digitalmysuru/",
    ],
  };

  return (
    <>
      <Head>
        <title>Contact Web & App Developers | Digital Services Mysore</title>
        <meta
          name="description"
          content="Connect with expert web and mobile app developers in Mysore. Share your project goals and get custom solutions for websites, apps, and digital experiences."
        />
        <meta
          name="keywords"
          content="Contact Web Developers Mysore, App Developers Contact, Website Quote Mysore, Tech Team Mysore, UI/UX Designers Contact, Digital Services Mysore"
        />
        <link rel="canonical" href="https://nakshatranamahacreations.in/contact-us" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Web & App Developers | Digital Services Mysore"
        />
        <meta
          property="og:description"
          content="Connect with expert web and mobile app developers in Mysore. Share your project goals and get custom solutions for websites, apps, and digital experiences."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Contact Web & App Developers | Digital Services Mysore"
        />
        <meta
          name="twitter:description"
          content="Connect with expert web and mobile app developers in Mysore. Share your project goals and get custom solutions for websites, apps, and digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgLd)}
      </Script>
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessLd)}
      </Script>

      <MyBreadcrumb crumbs={crumbs} />

      <div className={styles["contact-hero"]}>
        <div className={styles["contact-overlay"]}>
          <div className={styles["contact-content"]}>
            <h1>Contact Us</h1>
            <p>
              We&apos;d love to hear from you! Reach out for queries, collaborations, or
              just a hello.
            </p>
          </div>
        </div>
      </div>

      <ContactUs />

      <div className={styles["map-wrapper"]}>
        <div className={styles["map-frame"]}>
          <iframe
            loading="lazy"
            title="Nakshatra Namaha Creations"
            src="https://maps.google.com/maps?q=Nakshatra%20Namaha%20Creations%207J7V%2BJQ9%2C%20Akkamahadevi%20Rd%2C%20JP%20Nagar%202nd%20Stage%2C%20C-Block%2C%20JP%20Nagar%2C%20Mysuru%2C%20Karnataka%20570008&t=m&z=10&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />

      <div className={styles["rajanna"]} style={{width:"69%", margin:"0 auto"}}>
        <div className={`${styles["container55"]} my-5`}>
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
