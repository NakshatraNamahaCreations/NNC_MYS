"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import WhyUnique4 from "../../components/WhyUnique4";
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
    title: "Fully Customized Solutions",
    text: "our business is special and so is our method. With our CMS Development Service, we construct custom workflows, content models, and integrations that fit your needs to the dot.",
  },
  {
    icon: "/images/icons/social-media (1).png",
    title: "Multi-Channel Content Delivery",
    text: "Be it mobile apps, kiosks, websites, or marketing tools — our CMS Development Service guarantees that content is delivered in a smooth manner at every touchpoint.",
  },
  {
    icon: "/images/icons/growth-chart.png",
    title: "Agile Development Approach",
    text: "The agile methods which we follow help us in delivering your CMS Development Service sooner, along with the possibility of scaling and future upgrades.",
  },
  {
    icon: "/images/icons/project-launch.png",
    title: "End-to-End Support",
    text: "Our CMS Development Service is there for you through the entire project lifecycle — from consulting and planning to development plus post-launch support.",
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
    question: "What is a CMS Development Service and why does my business need it?",
    answer:
      "A CMS Development Service helps you create, manage, and publish content efficiently without depending on developers for every update. If your business relies on regular content updates, product listings, blogs, landing pages, or multi-channel digital presence, a CMS gives you full control with zero coding.",
  },
  {
    id: 2,
  question: "What is the difference between traditional CMS and headless CMS development?",
    answer:
      "A traditional CMS handles both frontend and backend together, while a headless CMS separates content management from the presentation layer. Businesses choose headless CMS Development Services for faster performance, multi-channel delivery, and better scalability.",
  },
  {
    id: 3,
    question: "How do I know which CMS platform is right for my business?",
    answer:
      "Your ideal CMS depends on your content volume, workflow complexity, integrations, and future scalability. A professional CMS Development Service evaluates your requirements and suggests the best option—whether it’s a custom CMS, WordPress, Strapi, Contentful, Drupal, Sanity, or a fully headless platform.",
  },
  {
    id: 4,
   question: "Can a CMS integrate with my existing website or mobile app?",
    answer:
      "Yes. With an API-first CMS Development Service, your CMS can be integrated with websites, mobile apps, CRM systems, marketing automation tools, ERP software, or any third-party platform using secure APIs.",
  },
  {
    id: 5,
   question: "Will I have full control to update content without technical knowledge?",
    answer:
      "Absolutely. A core benefit of any CMS Development Service is giving owners and teams full access to update pages, publish content, manage media, and organize workflows — all without writing a single line of code.",
  },
  {
    id: 6,
  question: "Can you migrate my existing website to a new CMS without losing data or SEO?",
    answer:
      "Yes. A professional CMS Migration Service ensures all content, URLs, metadata, images, and SEO structure are transferred safely. We also set up redirects, optimize the new CMS, and ensure zero ranking loss.",
  },
    {
    id: 7,
    question: "Is a custom CMS better than an off-the-shelf CMS?",
    answer:
      "A custom-built CMS Development Service gives you full control, advanced security, tailored workflows, and unlimited scalability. Off-the-shelf platforms may be cheaper initially but limit long-term flexibility.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/mobile (1).png",
    title: "Custom CMS Development",
    text: "Through our Custom CMS Development Service, we build platforms that are not only safe but also expandable and adaptable. It doesn’t matter if you want a simple blogging platform, a marketing CMS with lots of features, or an enterprise-level solution; our development team is committed to making sure that the end product is an exact match with your objectives.",
  },
  {
    icon: "/images/icons/api.png",
    title: "API-First Architecture Implementation",
    text: "Our CMS Development Service is based on API-first ideas, which makes it easy for a website, mobile app, or any other device to get the content they need. With this method, you can expect a steady performance and quicker partnerships throughout your ecosystem.",
  },
  {
    icon: "/images/icons/cms (1).png",
  title: "Migration to CMS",
    text: "Are you planning to change your platform from a traditional one? We offer a CMS Development Service that features a safe and effective CMS migration. We move your content, assets, metadata, and SEO configurations while your operations are up and running.",
  },
  {
    icon: "/images/icons/app-settings.png",
   title: "CMS Integration Services",
    text: "With the help of our CMS Development Service, we connect your CMS to CRM systems, marketing automation tools, analytics platforms, and trendy front-end frameworks such as React, Vue, and Angular. This is the most crucial part of our CMS Development Service which guarantees that your complete digital environment functions as a single unit.",
  },
  {
    icon: "/images/icons/responsive-design.png",
  title: "Performance Optimization",
    text: "Your CMS ought to be quick, stable, and trustworthy. We, as a CMS Development company, carry out the task of performance optimization by tuning the cache, speeding up the API response, and beefing up the security to make sure that the system performance is at its peak level no matter what scale is used.",
  },
  {
    icon: "/images/icons/customer-service (2).png",
  title: "Ongoing Support and Maintenance",
    text: "The CMS Development Service that we offer is also supported with long-term assistance, frequent updates, version upgrades, monitoring, and technical help. We make sure that your system runs smoothly every day.",
  },
];

  return (
    <>
      <Head>
            <title>Custom CMS Development Services | Seamless Content Delivery</title>
            <meta
              name="description"
              content="Get custom CMS development services that simplify content management, improve and deliver faster performance. Build a scalable, secure, and easy-to-use CMS."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/cms-development-services"
            />
           <meta name="keywords" content="custom cms development, custom cms solutions, cms development services, seamless content delivery, content management system development, cms web development, enterprise cms solutions, headless cms development, custom website cms, cms integration services, scalable cms platform, bespoke cms development, custom content management system, cms design and development, content workflow automation" />

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
                      CMS Development Services
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className={styles.title}>
                Custom CMS Development Services for Seamless Content Delivery
              </h1>
              <p className={styles.subtitle}>
            Manage, update, and publish your content effortlessly with a CMS built around your workflow.
Our custom solutions help you deliver faster, stay organized, and keep full control of your website experience
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
             Why Custom CMS Development Matters for Your Business
            </h2>
            <p className={styles.aboutText}>
        Delivering​‍​‌‍​‍‌​‍​‌‍​‍‌ digital content successfully on different channels requires a system that is not only modern but also scalable and flexible. Our CMS Development Service is exactly what you need to achieve this. At Nakshatra Namaha Creations, we create smart, high-performance solutions that simplify content workflows, increase publishing speed, and are compatible with long-term digital growth.
             </p>
            <p className={styles.aboutText}>
            As a reliable CMS development company, we offer a full range of CMS Development Services such as headless architecture, custom CMS development, API-first systems, and enterprise-level integrations. Our strategy guarantees that your business will be able to deliver content quicker, interact with users more effectively, and remain future-ready in a rapidly changing digital world.
              </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/icons/tech32.jpg"
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
      Our <span>CMS Development </span>Services 
    </h2>
    
    <p className={styles.sectionText}>
   Nakshatra Namaha Creations is known for providing a powerful CMS Development Service that is specially designed to be a great support to businesses regardless of their size. We came up with a list of offerings, such as:

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
      Process of<span> Headless CMS Development </span>
    </h2>
     
        <p className={styles.whychoose_intro}>
        We have a well-organized and efficient procedure to accomplish any CMS Development Service which is in line with your business objectives.
         </p>


      </div>
    </section> 
    <WhyUnique4/>
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>Ready to Build a CMS That Works Exactly the Way You Need?</h3>
        <p className={styles.ctaSubtitle}>
        Unlock smoother content delivery with a custom CMS engineered for speed, control, and long-term scalability. Whether you're upgrading your current system or building a new platform from scratch, we’re here to help you streamline workflows and elevate your digital experience.
          </p>

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
       Expertise in<span> Modern Technologies</span> 
    </h2>
       
        <p className={styles.whychoose_intro}>
        Advanced frameworks, modern CMS platforms, cloud-based systems, and API-driven architecture are some of the things that our team knows inside out and these are all essentials for a successful CMS Development Service.
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
