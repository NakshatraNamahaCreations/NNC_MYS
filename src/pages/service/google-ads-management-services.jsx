"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import WhyUnique8 from "../../components/WhyUnique8";
export default function MobileAppDevelopmentBanner() {
  // 🔹 State for form fields
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((curr) => (curr === index ? null : index));
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    service: "",
  });

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // TODO: Replace with API call
    alert("Thank you! We will contact you soon.");

    // Reset form
    setFormData({
      name: "",
      phoneNo: "",
      email: "",
      service: "",
    });
  };


const features = [
  {
    icon: "/images/icons/light-bulb.png",
    title: " Expertise in Diverse Industries",
    text: "Our team has extensive experience managing Google Ads campaigns across various industries, ensuring that your ads reach the right audience.",
  },
  {
    icon: "/images/icons/ux.png",
    title: "Data-Driven Strategies",
    text: "We utilize advanced analytics and performance data to continuously refine your campaigns, maximizing ROI.",
  },
  {
    icon: "/images/icons/growth-chart.png",
    title: "Transparent Reporting",
    text: "Receive detailed reports that clearly show how your ad spend is translating into business results.",
  },
  {
    icon: "/images/icons/task.png",
    title: "Clear Insights",
    text: "Receive transparent, detailed reports that provide actionable insights into how your advertising dollars are being effectively utilized.",
  },
//   {
//     icon: "/images/icons/coding.png",
//      title: "",
//     text: "",
//   },

];

const faqs = [
 {
    id: 1,
    question: "What is Google Ads Management?",
    answer:
      "Google Ads Management involves the strategic creation, optimization, and ongoing management of Google Ads campaigns to help businesses reach their target audience effectively. It includes tasks like keyword research, ad creation, bid management, and performance tracking to maximize ROI.",
  },
  {
    id: 2,
  question: "How does Google Ads help my business?",
    answer:
      "Google Ads allows your business to appear at the top of search results, reaching potential customers who are actively searching for your products or services. It also provides detailed targeting options, ensuring your ads reach the right audience, which helps increase brand visibility, drive traffic, and boost sales.",
  },
  {
    id: 3,
    question: "What types of ads can I run with Google Ads?",
    answer:
      "With Google Ads, you can run various types of ads, including Search Ads, Display Ads, Shopping Ads, YouTube Ads, and Remarketing Ads. Each type serves a different purpose, from capturing intent-driven search traffic to engaging users across the web and re-engaging previous visitors.",
  },
  {
    id: 4,
    question: "How does Nakshatra Namaha Creations optimize Google Ads campaigns?",
    answer:
      "Nakshatra Namaha Creations uses advanced analytics and performance data to continuously refine your campaigns. We focus on improving ad targeting, enhancing ad copy, adjusting bids, and optimizing budget allocation to ensure your ads deliver the possible ROI.",
  },
  {
    id: 5,
    question: "What is the minimum budget required for Google Ads?",
    answer:
      "There is no minimum budget for Google Ads; however, the effectiveness of your campaign depends on the competitiveness of your industry and the goals of your campaign. Nakshatra Namaha Creations works with you to determine an optimal budget that aligns with your objectives and delivers meaningful results.",
  },
  {
    id: 6,
    question: "How do I track the performance of my Google Ads campaign?",
    answer:
      "Nakshatra Namaha Creations provides detailed, transparent reporting that includes key metrics such as click-through rates (CTR), conversion rates, cost per click (CPC), and overall ROI. We also offer insights and recommendations to help you understand how your campaign is performing and where improvements can be made.",
  },
    {
    id: 7,
    question: "What industries do you manage Google Ads for?",
    answer:
      "We manage Google Ads campaigns for a wide range of industries including e-commerce, healthcare, education, real estate, hospitality, professional services, and more. Our strategies adapt to your specific market conditions and competition to deliver the best results.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/mobile (1).png",
    title: "Search Ads",
    text: "Target potential customers who are actively searching for your products or services on Google.",
  },
  {
    icon: "/images/icons/ui.png",
    title: "Display Ads",
    text: "Reach your audience on millions of websites and apps with visually engaging ads.",
  },
  {
    icon: "/images/icons/app-development.png",
    title: "Remarketing",
    text: "Re-engage previous visitors to your site and guide them back to complete their purchase.",
  },
  {
    icon: "/images/icons/shopping.png",
    title: "Shopping Ads",
    text: "Showcase your products directly on Google Search results, complete with images, prices, and merchant information.",
  },
  {
    icon: "/images/icons/youtube.png",
    title: "YouTube Ads",
    text: "Advertise your brand through video ads on YouTube, targeting specific demographics and interests.",
  },
  {
    icon: "/images/icons/responsive-design.png",
    title: "App Promotion Ads",
    text: "Drive app downloads and engagement by promoting your mobile app across Google’s vast network.",
  },
];

  return (
    <>
      <Head>
            <title>Google Ads Management Services | Certified PPC Experts for ROI Growth</title>
            <meta
              name="description"
              content="Boost conversions with expert Google Ads management. Our PPC specialists optimize campaigns, reduce costs, and maximize ROI with smart, data-driven strategies."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/google-ads-management-services"
            />
           <meta name="keywords" content="google ads management, ppc management services, google ads agency, google ads experts, ppc specialists, google ads optimization, adwords management, ppc services, paid advertising services, google ads campaign management, google ads consultant, google ads marketing, roi focused ppc, google ads for lead generation, sem services" />

      </Head>
    <section className={styles.heroBannerWrapper} id="contact-hero">
      {/* Banner Image */}
      <Image
        src="/images/mobileappbanner.png"
        alt="Banner"
        width={1920}
        height={1080}
        priority
        className={styles.carouselBgImage}
      />
      <div className={styles.blackOverlay} />

      <div className={`container position-relative ${styles.inner}`}>
        <div className="row h-100 align-items-center">
          {/* Left Text */}
          <div className="col-12 col-lg-8">
            <div className={styles.carouselBannerLeft}>
              <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                  <li aria-current="page">
                    <span className={styles.breadcrumbsCurrent}>
                     Google Ads Management 
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className={styles.title}>
               Google Ads Management Services
              </h1>
              <p className={styles.subtitle}>
            Maximize ROI with Nakshatra Namaha Creations expert Google Ads management services.
             </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="col-12 col-lg-4 mt-4 mt-lg-0 mb-3">
         <ContactForm/>
          </div>
        </div>
      </div>

      <div className={styles.scrollExplore}>SCROLL TO EXPLORE</div>
    </section>
    <section className={styles.aboutWrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
           Google Ads Management
            </h2>
            <p className={styles.aboutText}>
         Nakshatra Namaha Creations Google Ads Management Services are designed to optimize your online advertising efforts, ensuring that your campaigns reach the right audience at the right time. Our expert team creates and manages targeted ad campaigns that are continuously refined for maximum ROI. By leveraging advanced analytics, we ensure that your ad spend is used effectively to drive conversions and boost brand visibility. Partner with Nakshatra Namaha Creations to elevate your Google Ads strategy and achieve measurable business growth.
          </p>
       
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/tech31.jpg"
                alt="Mobile app & website development illustration"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                priority
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2 className={styles.sectionIntro}>
      Google <span> Ads Services </span> We Offer

    </h2>
    
    <p className={styles.sectionText}>
  We provide complete Google Ads services designed to help your business grow faster. From campaign setup and keyword strategy to optimization and performance tracking, our team ensures your ads reach the right audience and deliver measurable results.
    </p>
    
    </section>
      <section className={styles.section}>
  <div className={styles.cards}>
    {cards.map((card, i) => (
      <article className={styles.cardItem} key={i}>
        <div className={styles.cardIcon}>
          <Image src={card.icon} alt={card.title} fill sizes="70px" />
        </div>
        <h6 className={styles.cardTitle}>{card.title}</h6>
        <p className={styles.cardText}>{card.text}</p>
      </article>
    ))}
  </div>
</section>
   <section className={styles.whychoose}>
      <div className="container">
           <h2 className={styles.sectionIntro}>
      Our <span>  Google Ads Management </span> Process 
    </h2>
     
        <p className={styles.whychoose_intro}>
       Our Google Ads management process is designed to deliver consistent, measurable results. We begin with a deep analysis of your business goals, create high-performing campaigns, and continuously optimize them using real-time data. Every stage is focused on improving conversions, reducing ad spend, and maximizing ROI.
        </p>


      </div>
    </section> 
    <WhyUnique8/>
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>Looking for Reliable Google Ads Management That Delivers Results?</h3>
        <p className={styles.ctaSubtitle}>
     Our specialists fine-tune your campaigns using proven strategies and real-time data to boost visibility, conversions, and growth. Book a Free Consultation and Start Improving Your Ad Performance.    </p>

        <div className={styles.ctaButtons}>
          <Link
            href="/contact-us"
            target="_blank"
            rel="noreferrer"
            className={`${styles.ctaBtn} ${styles.whiteBtn}`}
          >
            <Image
              src="/images/icons/customer-review.png"
              alt="Schedule Appointment"
              width={20}
              height={20}
            />
            Schedule Appointment!!
          </Link>

          <Link
            href="tel:+91-9900566466"
            className={`${styles.ctaBtn} ${styles.redBtn}`}
          >
            <Image
              src="/images/icons/phone-call.png"
              alt="Call us"
              width={20}
              height={20}
            />
            Call: +91 9900566466
          </Link>
        </div>
      </div>
    </section>

    <section className={styles.whychoose}>
      <div className="container">
           <h2 className={styles.sectionIntro}>
        Why Choose <span> Nakshatra Namaha Creations</span> for Google Ads Management?
    </h2>
       
        <p className={styles.whychoose_intro}>
       Nakshatra Namaha Creations combines deep industry experience with data-driven strategies to deliver Google Ads campaigns that truly perform. Our team focuses on measurable results higher conversions, lower ad costs, and consistent growth. With transparent reporting, expert optimization, and a commitment to your business goals, we ensure every rupee you spend works smarter and delivers maximum impact.
        </p>

        <div
  className={`row g-4 ${styles.whychoose_grid}`}
  style={{ width: "90%", margin: "0 auto" }}
>
  {features.map((f, i) => (
    <div className="col-md-6" key={i}>
      <div className={styles.whychoose_item}>
        <div className={styles.whychoose_icon}>
          <Image src={f.icon} alt={f.title} width={64} height={64} />
        </div>
        <div className={styles.whychoose_content}>
          <h4 className={styles.whychoose_cardTitle}>{f.title}</h4>
          <p className={styles.whychoose_cardText}>{f.text}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section> 
     <section className={styles1.faqSection}>
      <div className={styles1.faqSection2}>
        <div className={styles1.faqSection1}>
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
        </div>

        <div className={styles1.faqRight}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles1.faqItem}>
              <div
                className={styles1.faqHeader}
                onClick={() => toggleFAQ(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleFAQ(i)}
              >
                <h3>
                  <span className={styles1.number}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {faq.question}
                </h3>
                <span className={styles1.icon}>{activeIndex === i ? "−" : "+"}</span>
              </div>

              {activeIndex === i && (
                <p className={styles1 .faqAnswer}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  <InfoSection/>

    </>
  );
}
