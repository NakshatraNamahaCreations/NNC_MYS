"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
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
    title: "Understanding",
    text: "Clients are approached for their opinions to ensure their unique requirements are built on the foundation of already existing knowledge. We, as a mobile app development company of global repute,line up, prepare, and interpret the business goals, vision, and targeted customer base of your company. At this moment, we design a non-technical layout of the Android application and its main features so that no confusion arises later. Setting the expectations right at this time guarantees that the stages will be well performed.",
  },
  {
    icon: "/images/icons/task.png",
    title: "Planning",
    text: "The planning stage is where we need to move next once all your requirements have been understood. We, the expert team of Nakshatra Namaha Creations, are the efficient representatives of the mobile app development company, who are capable of engineering a technical action plan which deals not only with the technical requirements but the extension of the project, timeframes, key events, etc. We take you along each step of the journey to maintain complete transparency and adaptability, hence steering the project clear of setbacks and unanticipated hurdles.",
  },
  {
    icon: "/images/icons/office-building.png",
    title: "Building",
    text: "The moment we have moved past the planning phase, we now start with the actual construction phase where your ideas start taking form. Our developers rigorously follow industry standards and employ proven techniques such as Agile or Waterfall for swift completion of the development cycle. Our mobile app development company provides routine progress reports and incorporates your ideas and suggestions while we are in the process of development. Incessant testing is part of the development cycle which aims at bug eradication and application efficiency, and in this case, it is your Android application that is being tested.",
  },
  {
    icon: "/images/icons/project-launch.png",
    title: "Deploying",
    text: "The point of deployment actually means that the app is now ready to be in direct contact with the user, the stage of the deployment ensures that this step is efficiently carried out. Basically, our mobile app development company takes care of the hosting, i.e., the Android platform is hosted on different marketplaces and app stores, while simultaneously checking if all the features work properly. We take care of all the minutest details involved in the process of making the app available to end users without any waiting time or problems in terms of handling.",
  },
  {
    icon: "/images/icons/coding.png",
    title: "Maintaining",
    text: "It is really important that even after its launch, a mobile app is given constant care and attention for it to stay competitive. Being a long-term partner and reliable mobile app development company, we are always there for you even after the product is launched, We constantly keep a check on the app's performance, give timely updates and install new features to ensure that your Android application keeps up with the changes in market trends and is always a step ahead of the user's expectations which eventually leads to you being the biggest beneficiary of the investment you have made.",
  },

];

const faqs = [
 {
    id: 1,
    question: "Why should I choose Nakshatra Namaha Creations as my mobile app development company?",
    answer:
      "Nakshatra Namaha Creations is a trusted mobile app development company known for delivering high-quality apps across industries. Our experience, agile approach, and client-first focus ensure smooth development and timely delivery.",
  },
  {
    id: 2,
    question: "What industries has Nakshatra Namaha Creations served in mobile app development?",
    answer:
      "As a versatile mobile app development company, Nakshatra Namaha Creations has built apps for e-commerce, healthcare, education, travel, food delivery, logistics, and other sectors, helping businesses of all sizes scale digitally.",
  },
  {
    id: 3,
    question: "Does Nakshatra Namaha Creations offer cross-platform mobile app development?",
    answer:
      "Yes. Our team at Nakshatra Namaha Creations, a full-service mobile app development company, builds robust cross-platform applications using React Native and Flutter to ensure wider reach and consistent performance.",
  },
  {
    id: 4,
    question: "How does Nakshatra Namaha Creations ensure the quality of the mobile apps it develops?",
    answer:
      "We follow strict quality assurance practices at every stage of development. As a customer-focused mobile app development company, Nakshatra Namaha Creations conducts rigorous testing to deliver bug-free, high-performance apps.",
  },
  {
    id: 5,
    question: "Can Nakshatra Namaha Creations maintain and upgrade mobile apps after launch?",
    answer:
      "Absolutely. Our role as a reliable mobile app development company extends beyond launch — we provide ongoing maintenance, updates, and feature enhancements to keep your app competitive in the market.",
  },
  {
    id: 6,
    question: "How much does it cost to hire a mobile app development company?",
    answer:
      "The cost of hiring a mobile app development company depends on factors like app complexity, features, platforms (iOS/Android), and timelines. We provide transparent pricing based on your specific requirements.",
  },
    {
    id: 7,
    question: "How long does it take to develop a mobile app?",
    answer:
      "The timeline varies depending on the project’s scope and features. A simple app may take 2–3 months, while a feature-rich app may take 6–8 months or more. Our team ensures timely delivery without compromising quality.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/mobile (1).png",
    title: "Custom Web-Based Mobile Apps",
    text: "Do you need a web-based application to be developed to streamline the daily business operations in your company? Share your requirements with our mobile app development company, and we will recommend the best web-based mobile app solution that is suitable for your needs.",
  },
  {
    icon: "/images/icons/ui (1).png",
    title: "Mobile UI/UX Designing",
    text: "At Nakshatra Namaha Creations, a trusted mobile app development company, the skilled UI/UX designers in our team are reputed for implementing fine UI/UX designs. We take the front stage in delivering engaging and interactive interfaces that guarantee a friction-less and user-friendly experience.",
  },
  {
    icon: "/images/icons/app-development.png",
    title: "App Porting",
    text: "Should you be interested in porting your mobile app from one platform to another such as iOS to Android, Android to iOS, or even a new framework, link with our mobile app development company right now. We have the qualifications to effortlessly change and make your app usable in any platform you desire.",
  },
  {
    icon: "/images/icons/app-settings.png",
    title: "App Testing",
    text: "As a mobile app development company focused on quality, we have a dedicated quality assurance team that conducts very detailed tests on every app. We aim to keep all projects free from bugs and thus provide highly efficient mobile solutions to clients everywhere. ",
  },
  {
    icon: "/images/icons/responsive-design.png",
    title: "App Consultation",
    text: "Would you like to clarify your project with a professional? Our trained consultants at Nakshatra Namaha Creations - a foremost mobile app development company - are the ones to give you the best solutions for your business ambitions.",
  },

];

  return (
    <>
      <Head>
            <title>Mobile App Development Company – Android & iOS App Services</title>
            <meta
              name="description"
              content="Professional mobile app development company delivering Android and iOS app design, development, integration, and support for high-quality, scalable applications"
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/mobile-app-development-company"
            />
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
                      Mobile App Development
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className={styles.title}>
                Mobile App Development Company
              </h1>
              <p className={styles.subtitle}>
             Looking for the mobile app development company, Hire our mobile app developers, as we design and develop custom mobile apps that basically known for scalability, security and robustness for all the startups and enterprise businesses. Contact us to get your free consultation for your app idea.
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
              Top mobile app development company
            </h2>
            <p className={styles.aboutText}>
            Are you looking to develop a stunning and flawless mobile app for your business? Then, Nakshatra Namaha Creations is the ideal choice. As a leading mobile app development company, we have a clear understanding of how to bring your mobile application idea to life. Our team conducts in-depth research into your product requirements and stays focused on transforming your vision into a successful app.     </p>
            <p className={styles.aboutText}>
            With a team of highly skilled tech enthusiasts, our mobile app development company has delivered innovative solutions across multiple industries and platforms, ensuring that every app meets unique business goals. We leverage advanced technologies to build powerful mobile apps for iOS, Android, and React Native cross-platform solutions — helping you reach a wider audience and boost your revenue.
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
      Our App <span>Development Services</span> 
    </h2>
    
    <p className={styles.sectionText}>
   If you're obtaining an app for a dream business of yours, it should be one-of-a-kind and influential.<strong>At Nakshatra Namaha Creations, a reliable mobile app development company,</strong> we produce unmatched app creation services that lead your item to triumph. <br />
   Justiﬁed among the top mobile app development company selections in the district, we apply aﬂexiblemethodology in every venture and deliver mobile-centric solutions by <strong>integrating UX skill, shrewd consultation, bots, AI,IOT,and other state-of-the-art technologies.</strong> Our team of experts with years of professional career makes it very easy for the company to achieve set goals within the set time and budget. 
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
      Why Choose<span> Nakshatra Namaha Creations for Mobile </span> App Development?
    </h2>
     
        <p className={styles.whychoose_intro}>
        Now, among the top mobile app development companies, Nakshatra Namaha Creations has extensive experience working with leading brands, enterprises, and startups across the globe. As a trusted mobile app development company, our developers have strong fundamentals and proven expertise in customizing app designs and creating innovative, tech-savvy mobile applications for a wide range of industries.
         </p>


      </div>
    </section> 
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>Mobile apps designed by us</h3>
        <p className={styles.ctaSubtitle}>
         Our portfolio reflects the expertise of a reliable mobile app development company. Alongside our valued clients, we have delivered high-quality mobile applications that exceed expectations. This showcases our proficiency in turning creative concepts into fully functional, impactful mobile solutions.
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
            href="tel:+91-80-41531025"
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
      Our App<span> Development Process</span> 
    </h2>
        <p className={styles.whychoose_subtitle}>
          <strong>For mobile app design and development services</strong>
        </p>
        <p className={styles.whychoose_intro}>
         Nakshatra Namaha Creations, a reliable mobile app development company, has a well-defined, phased process flow which it enthusiastically follows while dealing with mobile application development. Our primary focus is on the creation of product-based apps that have market value as well as marketability. The precision of each stage of development is achieved through the combined efforts of our worldwide team of developers, designers, and strategists. This harmonious combination of agile methodologies and pixel-perfect design enables our mobile app development company to bring out the best in their mobile software engineering services in terms of quality and consistency.
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
