"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import WhyUnique6 from "../../components/WhyUnique6";
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
    title: "Fully Customized iOS Solutions",
    text: "Every business has unique goals, and your iOS app should reflect that. With our expertise in iOS App Development, we create custom workflows, reusable components, and feature-rich functionalities designed around your specific requirements ensuring your app feels intuitive, purposeful, and truly user-focused.",
  },
  {
    icon: "/images/apple.png",
    title: "Seamless Performance Across Apple Devices",
    text: "Whether your users are on iPhone, iPad, or macOS, our iOS development process ensures consistent performance, smooth navigation, and pixel-perfect design across all Apple platforms. One unified ecosystem, superior optimization, and faster performance without compromising quality.",
  },
  {
    icon: "/images/icons/growth-chart.png",
    title: "Agile iOS Development Approach",
    text: "We follow an agile methodology that keeps your project flexible, transparent, and aligned with your goals. With frequent iterations, regular updates, and collaborative planning, we build your iOS app faster while leaving space for refinements, scalability, and future enhancements.",
  },
  {
    icon: "/images/icons/project-launch.png",
    title: "End-to-End iOS App Support",
    text: "From idea validation and UI/UX design to coding, testing, App Store deployment, and long-term maintenance, we support you through every stage of the app lifecycle. Our team ensures your iOS app stays secure, updated, and optimized for real-world usage long after launch.",
  },


];

const faqs = [
 {
    id: 1,
    question: "What does an iOS App Development Company do?",
    answer:
      "An iOS App Development Company specializes in designing, developing, testing, and deploying apps for Apple devices such as iPhones, iPads, Apple Watch, and Apple TV. The company handles UI/UX design, coding, backend integrations, API development, App Store submission, and long-term maintenance.",
  },
  {
    id: 2,
    question: "Why should I choose an iOS App Development Company instead of freelance developers?",
    answer:
      "Working with an iOS App Development Company ensures you get a full team — developers, designers, testers, and project managers. This guarantees better quality, faster delivery, stronger security, and reliable long-term support compared to freelancers.",
  },
  {
    id: 3,
    question: "How long does it take to develop an iOS app?",
    answer:
      "The timeline depends on features, complexity, UI requirements, and integrations. Simple apps can take 4–8 weeks, while complex or enterprise-grade apps may take 3–6 months. A detailed requirements analysis helps determine the exact timeline.",
  },
  {
    id: 4,
    question: "How much does iOS app development cost?",
    answer:
      "Cost varies based on the app’s features, design complexity, backend requirements, integrations, and maintenance needs. A professional iOS App Development Company provides a customized quote after analyzing your project scope.",
  },
  {
    id: 5,
    question: "Do you build apps for both iPhone and iPad?",
    answer:
      "Yes. A reliable iOS App Development Company builds apps optimized for both iPhone and iPad, ensuring the layout and performance adapt perfectly to different screen sizes and device types.",
  },
  {
    id: 6,
    question: "Can you upgrade or redesign my existing iOS app?",
    answer:
      "Absolutely. We offer iOS app redesign, UI/UX improvement, feature enhancement, and full code refactoring. Whether your app needs modernization or migration to the latest iOS technologies, our iOS App Development Company can help.",
  },
    {
    id: 7,
    question: "What technologies do you use for iOS app development?",
    answer:
      "We use modern Apple technologies including Swift, SwiftUI, Objective-C, Xcode, Core Data, ARKit, CloudKit, and more. These tools help us deliver secure, fast, and user-friendly applications.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/icons/light-bulb.png",
    title: "Requirement Understanding",
    text: "Initially, we try to know the business goals, the vision, potential users and the necessary features through your information. Our team drafts a non-technical layout that gives an outline of the main functionality and the flow of your future iOS app. This understanding serves as a foundation for the whole project roadmap.",
  },
  {
    icon: "/images/icons/task.png",
    title: "Planning & Strategy",
    text: "During the planning and strategy stage, our iOS App Development Company carefully analyzes your target market, business challenges, key features, required technologies, timelines, milestones, and App Store guidelines to create a detailed action plan that ensures smooth and efficient project execution.",
  },
  {
   icon: "/images/icons/ui.png",
    title: "Designing the UI/UX",
    text: "The design is the main factor of the app's success. Our UI/UX team creates an eye-catching graphics, user flows that are easy to understand, and user-friendly interactions. Each and every screen is designed to be consistent with your brand identity while at the same time ensuring a great user experience.",
  },
  {
    icon: "/images/icons/app-settings.png",
    title: "Development & Coding",
    text: "Once the designs are finalized, our skilled iOS developers transform your concepts into fully functional applications, using the latest Apple technologies such as Swift/SwiftUI, Objective-C, Xcode, Apple APIs and SDKs, Core Data, CloudKit, ARKit, MLKit, and more.",
  },
  {
    icon: "/images/icons/responsive-design.png",
    title: "Testing & Quality Assurance",
    text: "Our QA team thoroughly tests every iOS app through functional testing, UI/UX testing, performance analysis, device compatibility checks, security audits, and detailed bug fixing and optimization to ensure the final product is stable, fast, and completely error-free for users.",
  },
    {
    icon: "/images/icons/customer-service (2).png",
    title: "Maintenance & Support",
    text: "After launch, our iOS App Development Company provides ongoing maintenance and support including app updates, OS compatibility upgrades, new feature additions, bug fixes, and continuous monitoring with analytics to ensure your app remains secure, high-performing, and consistently appealing to users.",
  },
];

  return (
    <>
      <Head>
            <title>iOS App Development Company | Custom iPhone App Developers</title>
            <meta
              name="description"
              content="Build powerful and user-friendly iOS apps with our expert iPhone app developers. We design, develop, and deploy secure, high-performance apps for startups and enterprises. Get a free consultation today."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/ios-app-development-company"
            />
           <meta name="keywords" content="iOS app development company, iPhone app development company, iOS app developers, iPhone app developers, hire iOS developers, iOS app development services, iOS application development, iPhone application development, custom iOS app development, Swift app development company, iOS app development agency, mobile app development for iOS, iOS app design and development, professional iOS developers, scalable iOS app solutions, iOS app UI/UX design, enterprise iOS app development, iOS app testing services, app store deployment services" />

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
                      iOS App Development Company
                    </span>
                  </li>
                </ol>
              </nav>

              <h2 className={styles.title}>
               Build iOS Apps With a Trusted iOS App Development Company
              </h2>
              <p className={styles.subtitle}>
            We design and develop fast, secure, and high-performance iPhone apps that help businesses grow. From idea to App Store launch, our team handles everything with precision and clean engineering.
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
            <h1 className={styles.aboutHeading}>
            iOS App Development Company
            </h1>
            <p className={styles.aboutText}>
        Are​‍​‌‍​‍‌​‍​‌‍​‍‌ you in need of a reliable iOS App Development Company that can help you create a secure, scalable, and feature-packed mobile application? We craft and build custom iOS applications that are delivered on time and are of great value to startups, growing brands, and enterprise businesses, in terms of the performance, stability, security, and user-friendliness of the app.
          </p>
            <p className={styles.aboutText}>
            Our team of iOS app developers is skilled in building robust applications by employing up-to-date Apple technologies, frameworks, and design standards - this is how we guarantee that your app will be a delight to every user.
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
      Our <span>  iOS App Development  </span> Process

    </h2>
    
    <p className={styles.sectionText}>
    As a highly reputable iOS App Development Company, we adhere to a well-organized and open method of constructing robust and scalable applications.
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
      The <span>  iOS App Development Services </span> We Provide
    </h2>
     
        <p className={styles.whychoose_intro}>
      As an iOS App Development Company, and with the experience of several years, we are able to deliver a wide range of services that are adaptable to the business requirements of different industries.
       </p>


      </div>
    </section> 
    <WhyUnique6/>
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>Ready to Build a High-Quality iOS App That Stands Out?</h3>
        <p className={styles.ctaSubtitle}>
     Partner with an iOS App Development Company that delivers precision, performance, and long-term scalability. Whether you're upgrading an existing iPhone app or launching a brand-new digital product, our team helps you streamline development, enhance speed, and create a seamless user experience across all Apple devices.
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
        Leading <span>  iOS App Development Company </span> for High-Performance Applications
    </h2>
       
        <p className={styles.whychoose_intro}>
      As a top iOS App Development Company, Nakshatra Namaha Creations develops custom iPhone and iPad apps that are distinguished by their quality, creativity, and durability. With millions of applications available in the Apple App Store, the creation of an app that is able to attract attention requires the expertise, carefulness, and conformity to Apple's standards.
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
