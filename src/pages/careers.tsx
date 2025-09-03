// src/pages/careers.tsx
import Head from "next/head";
import Script from "next/script";
import styles from "@/pages/Careers.module.css";
import Link from "next/link";
import React from "react";
// Adjust these imports to where your components actually live
import InfoSection from "@/components/InfoSection";
import ClientSlider from "@/pages/ClientSlider";
import MyBreadcrumb from "@/components/MyBreadcrumb";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import ApplyModal from "@/components/ApplyModal"; 

const faqs = [
  {
    id: 1,
    question:
      "What kind of roles does Nakshatra Namaha Creations usually hire for?",
    answer:
      "We hire for a variety of roles including web development, mobile app development, UI/UX design, digital marketing, animation, and content creation.",
  },
  {
    id: 2,
    question: "How can I apply for a job at Nakshatra Namaha Creations?",
    answer:
      "You can view open positions on our Careers page and submit your resume through the application form or email it to our HR team directly.",
  },
  {
    id: 3,
    question: "What is the interview process like?",
    answer:
      "Our process typically includes a screening call, a technical or skill-based assessment, and a final interview to evaluate cultural fit and project alignment.",
  },
  {
    id: 4,
    question:
      "Does Nakshatra Namaha Creations offer remote or hybrid job opportunities?",
    answer:
      "Yes, based on the role and project requirements, we offer flexible work options including on-site, hybrid, and remote positions.",
  },
  {
    id: 5,
    question: "What is the work culture like at Nakshatra Namaha Creations?",
    answer:
      "We foster a collaborative and growth-focused environment where creativity, learning, and ownership are encouraged at all levels.",
  },
  {
    id: 6,
    question: "Are there internship opportunities for students or freshers?",
    answer:
      "Absolutely. We offer internships in design, development, marketing, and content, with the possibility of full-time placement after successful completion.",
  },
];

export default function Careers() {
   const crumbs = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
  ];

  const jobs = [
    { title: "React Native Developer", type: "Full Time", jdLink: "/jobs/react-native-developer" },
    { title: "Mern Stack Developer", type: "Full Time", jdLink: "/jobs/mern-stack-developer" },
    { title: "Node JS Developer", type: "Full Time", jdLink: "/jobs/node-js-developer" },
    { title: "DevOps Engineer", type: "Full Time", jdLink: "/jobs/devops-engineer" },
    { title: "Automation (Selenium) Tester", type: "Full Time", jdLink: "/jobs/automation-tester" },
    { title: "BDM", type: "Full Time", jdLink: "/jobs/bdm" },
    { title: "WordPress Developer", type: "Full Time", jdLink: "/jobs/wordpress-developer" },
    { title: "Graphic Designer", type: "Full Time", jdLink: "/jobs/graphic-designer" },
  ];

 
  const [isApplyOpen, setIsApplyOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState<string>("");

  const openApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsApplyOpen(true);
  };

  const closeApply = () => setIsApplyOpen(false);


  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nakshatra Namaha Creations",
    alternateName: "Web & App Development Jobs | Careers in Mysore",
    url: "https://nakshatranamahacreations.in/careers",
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

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nakshatra Namaha Creations",
    image: "https://nakshatranamahacreations.in/images/image.png",
    url: "https://nakshatranamahacreations.in/careers",
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
        {/* Standard Meta Tags */}
        <title>Web & App Development Jobs | Careers in Mysore</title>
        <meta
          name="description"
          content="Explore career opportunities in web development, mobile app development, UI/UX design, and digital tech. Join a growing team of professionals based in Mysore."
        />
        <meta
          name="keywords"
          content="Web Development Jobs Mysore, App Development Careers, UI/UX Designer Jobs, Software Developer Hiring, IT Jobs Mysore, Careers in Tech, React Developer Jobs, Mobile App Jobs, Join Tech Team Mysore"
        />
        <link rel="canonical" href="https://nakshatranamahacreations.in/careers" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Web & App Development Jobs | Careers in Mysore"
        />
        <meta
          property="og:description"
          content="Explore career opportunities in web development, mobile app development, UI/UX design, and digital tech. Join a growing team of professionals based in Mysore."
        />
        <meta property="og:url" content="https://nakshatranamahacreations.in/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Web & App Development Jobs | Careers in Mysore"
        />
        <meta
          name="twitter:description"
          content="Explore career opportunities in web development, mobile app development, UI/UX design, and digital tech. Join a growing team of professionals based in Mysore."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* JSON-LD */}
      <Script id="careers-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgJsonLd)}
      </Script>
      <Script
        id="careers-local"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessJsonLd)}
      </Script>

      <MyBreadcrumb crumbs={crumbs} />

      {/* Hero */}
      <div className={styles["careers-hero"]}>
        <div className={styles["careers-overlay"]}>
          <div className={styles["careers-content"]}>
            <h1>Careers</h1>
            <p>Be Part of Something Bigger – Explore Exciting Career Opportunities!</p>
          </div>
        </div>
      </div>

      {/* Jobs */}
     <div className={`${styles["careers-list"]} container py-5`}>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`row align-items-center shadow-sm mb-4 p-4 rounded ${styles["job-card"]}`}
          >
            <div className="col-md-4">
              <h5 className={`fw-bold ${styles["job-title"]}`}>
                <Link href={job.jdLink} className={styles["job-link"]}>
                  {job.title}
                </Link>
              </h5>
              <p className="text-muted mb-0">
                <i className="fas fa-briefcase me-2" /> {job.type}
              </p>
            </div>

            <div className="col-md-8 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0">
              <div className={styles["button-wrap"]}>
                <Link href={job.jdLink} className="btn btn-outline-primary me-3">
                  Job Description
                </Link>

                {/* ✅ Apply opens the modal */}
            <Link href={`/apply?job=${encodeURIComponent(job.title)}`} className="btn btn-primary">
  Apply
</Link>

              </div>
            </div>
          </div>
        ))}
      </div>

      <FloatingActions />
      <MobileBottomBar />
      <ClientSlider />

      {/* FAQ – keep using your global classes; load FaqAccordion.css in _app.tsx */}
      <div className="rajanna" style={{width:"69%", margin:"0 auto"}}>
        <div className="container55 my-5">
          <div className="text-center mb-4">
            <h2 className="sec_title">Frequently Asked Questions (FAQ)</h2>
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
                  className={`accordion-collapse collapse ${
                    faq.id === 1 ? "show" : ""
                  }`}
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
    <ApplyModal
        isOpen={isApplyOpen}
        onClose={closeApply}
        jobTitle={selectedJob}
      />
      <InfoSection />
    </>
  );
}
