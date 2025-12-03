"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import WhyUnique5 from "../../components/WhyUnique5";
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
    text: "Every business has its own goals, and your app should reflect that. With our Flutter App Development expertise, we design unique workflows, reusable components, and custom features that align perfectly with your requirements giving you an app that feels truly built for your users.",
  },
  {
    icon: "/images/icons/ux.png",
       title: "Multi-Platform App Delivery",
    text: "Whether your audience is on Android, iOS, web, or desktop, our Flutter development process ensures consistent performance and seamless design across every platform. One codebase, unified experience, and faster releases all without compromising quality.",
  },
  {
    icon: "/images/icons/growth-chart.png",
      title: "Agile Development Approach",
    text: "We follow an agile process that keeps your project flexible, transparent, and on track. Frequent iterations, regular demos, and collaborative planning help us deliver your Flutter app faster, while also making room for improvements and future enhancements.",
  },
  {
    icon: "/images/icons/project-launch.png",
    title: "End-to-End Support",
    text: "From idea validation and UI/UX design to development, testing, deployment, and long-term maintenance, we stay with you throughout the entire app lifecycle. Our support ensures your Flutter app remains secure, updated, and optimized for real-world performance.",
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
    question: "What is Flutter app development and why is it so popular?",
    answer:
      "Flutter app development uses Google’s UI framework to build high-quality mobile applications for Android and iOS using a single codebase. It’s popular because it offers faster development, native-like performance, beautiful UI, and cost efficiency.",
  },
  {
    id: 2,
  question: "Why should I choose a Flutter app development company for my project?",
    answer:
      "A professional Flutter app development company ensures clean architecture, scalable code, optimized performance, and a polished user experience. Expert developers also help you reduce development time and deliver a stable cross-platform app.",
  },
  {
    id: 3,
    question: "Can Flutter apps deliver native-like performance?",
    answer:
      "Yes. Flutter uses a high-performance rendering engine and compiles to native ARM code, resulting in smooth animations, fast load times, and near-native performance on both Android and iOS.",
  },
  {
    id: 4,
    question: "How long does it take to develop a Flutter app?",
    answer:
      "The timeline depends on features, design complexity, backend integrations, and customizations. Simple Flutter apps may take 4–8 weeks, while advanced applications may require 3–6 months. A development team will give an accurate estimate after requirement analysis.",
  },
  {
    id: 5,
    question: "Can you migrate my existing app to Flutter?",
    answer:
      "Absolutely. We offer complete migration services to rebuild or upgrade your existing Android/iOS application using Flutter. The migration process preserves your app’s core features while improving performance, UI, and scalability.",
  },
  {
    id: 6,
    question: "What types of apps can be built using Flutter?",
    answer:
      "Flutter supports a wide range of applications, including e-commerce apps, healthcare apps, finance apps, booking apps, educational platforms, social media apps, real-time tracking apps, and enterprise solutions.",
  },
    {
    id: 7,
    question: "How much does Flutter app development cost?",
    answer:
      "The cost depends on app features, UI complexity, backend requirements, APIs, and maintenance needs. Flutter is usually more affordable than native development because a single codebase supports both Android and iOS. A detailed project analysis provides an accurate cost.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/mobile (1).png",
    title: "Custom Flutter App Development",
    text: "We are experts in custom Flutter app development that is created specifically for your business requirements. Our proficient developers create high-performing applications from the ground up while using Flutter’s numerous powerful widgets and frameworks to accomplish scalable and user-friendly apps for Android and iOS.",
  },
  {
    icon: "/images/icons/ui.png",
       title: "Flutter UI/UX Design",
    text: "We are convinced that an excellent design is what attracts and retains customers. Our UI/UX unit comes up with brilliant, user-friendly design solutions that offer easy navigation, logical layouts, and impressive user experience. Each and every interface is designed to fit your branding, user behavior, and app goals.",
  },
  {
    icon: "/images/icons/app-development.png",
    title: "Migration to Flutter",
    text: "Maybe you want to elevate or move your existing mobile app somewhere else? Our service of migrating apps to Flutter guarantees that the change from outdated frameworks to Flutter will not affect performance, data, or user experience. We do the exact same thing for functionalities, we change the UI, and we make the app faster so that you can get a cool, up-to-date app.",
  },
  {
    icon: "/images/icons/app-settings.png",
    title: "Flutter App Testing & Quality Assurance",
    text: "We follow a strict testing approach to deliver stable, error-free Flutter apps. Our QA process covers functional checks, UI/UX evaluation, compatibility tests across devices, security validation, and performance assessment, ensuring your Flutter application runs reliably on every platform and delivers a seamless experience to users.",
  },
  {
    icon: "/images/icons/responsive-design.png",
    title: "Maintenance and Support",
    text: "We don’t just launch your product—we stay with you afterwards by offering ongoing maintenance and support that includes regular updates, bug fixes, feature improvements, performance tuning, and essential security patches, ensuring your application remains fast, secure, and fully up-to-date as technology evolves.",
  },

];

  return (
    <>
      <Head>
            <title>Flutter App Development Company | Cross-Platform Mobile App Solutions</title>
            <meta
              name="description"
              content="Build high-performance mobile apps with a trusted Flutter App Development Company. We create fast, secure, and scalable cross-platform applications for Android and iOS with clean UI, smooth performance, and end-to-end development support."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/flutter-app-development-company"
            />
           <meta name="keywords" content="flutter app development company, flutter development services, cross platform app development, flutter mobile app development, flutter developers india, flutter app agency, custom flutter applications, flutter app design and development, hire flutter developers, scalable flutter apps, mobile app development company, hybrid mobile development, flutter ui development, dart app development" />

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
                      Flutter App Development Company
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className={styles.title}>
                Flutter App Development Company
              </h1>
              <p className={styles.subtitle}>
            The​‍​‌‍​‍‌​‍​‌‍​‍‌ leading Flutter app development company delivering scalable, secure, and high-performance mobile applications. From UI/UX design to development, migration, testing, and long-term support.
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
            Top Flutter App Development Company for High-Performance Apps
            </h2>
            <p className={styles.aboutText}>
          Nakshatra Namaha Creations is a top-tier company in the field of Flutter app development. We are known for constructing rapid, stable, and feature-rich mobile applications. Our team of skilled Flutter app developers is broadly proficient in delivering strong apps for different industries and various use cases.
          </p>
            <p className={styles.aboutText}>
            As a trendy Flutter app development company, we implement a client-first strategy whereby we work closely with you, guarantee open communication, on-time delivery, and total accordance with your business objectives.
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
      Our<span> Flutter App Development </span> Services

    </h2>
    
    <p className={styles.sectionText}>
  Nakshatra Namaha Creations is into full-cycle Flutter app development and is ready to help businesses at every step of their digital journey. We provide the following services:
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
      Our <span>  Flutter App Development </span> Process
    </h2>
     
        <p className={styles.whychoose_intro}>
       We employ a tried-and-true manner that is also well-organized for bringing up the highest quality Flutter apps. The steps in our work process are.
          </p>


      </div>
    </section> 
    <WhyUnique5/>
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>Ready to Build a Flutter App That Fits Your Vision Perfectly?</h3>
        <p className={styles.ctaSubtitle}>
      Partner with a Flutter App Development Company that delivers speed, reliability, and long-term scalability. Whether you’re improving an existing app or creating a brand-new digital product, we help you streamline development, enhance performance, and deliver a seamless user experience across all platforms. Let’s turn your app idea into something powerful and production-ready.
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
       Our team works with the best of today’s mobile technologies, combining Flutter’s powerful framework with cloud integration, API-driven systems, and scalable backend architectures. This technical foundation ensures that every Flutter app we build performs smoothly, loads quickly, and adapts easily to future growth.
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
