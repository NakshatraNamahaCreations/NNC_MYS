"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import WhyUnique from "../../components/WhyUnique";
import TestimonialsCarousel1 from "../../components/TestimonialsCarousel1";
import Head from "next/head";
// import TestimonialsCarousel from "./TestimonialsCarousel.jsx";



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
    question: "Why choose Nakshatra Namaha Creations as your 2D animation company?",
    answer:
      "Nakshatra Namaha Creations combines creative storytelling with technical precision to deliver animations that captivate viewers and drive measurable results.",
  },
  {
    id: 2,
    question: "Does your 2D animation company offer full production services?",
    answer:
      "Yes, we manage the entire process—from scripting and storyboarding to illustration, sound design, and final delivery.",
  },
  {
    id: 3,
    question: "Can you create industry-specific animations?",
    answer:
      "Absolutely. We serve industries like education, healthcare, e-commerce, corporate training, and entertainment with tailored solutions.",
  },
  {
    id: 4,
    question: "How do you ensure the quality of animations?",
    answer:
      "Every project undergoes a thorough review process with multiple quality checks to ensure professional results.",
  },
  {
    id: 5,
    question: "Can you design unique animated characters for my brand?",
    answer:
      "Yes, our creative team develops custom characters that align with your brand’s story and connect with your audience.",
  },
  {
    id: 6,
    question: "What if I only have a basic idea for the animation?",
    answer:
      "That’s all we need to get started! We’ll guide you through concept development, storyboarding, and production.",
  },
    {
    id: 7,
    question: "How involved will I be in the process?",
    answer:
      "We encourage collaboration and provide opportunities for review and feedback at every stage of development.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/icons/light-bulb.png",
    title: "Creative Excellence",
    text: "One of the most trusted 2D Animation Companies concentrates not only on the quantity but also on the quality of the animations by delivering visually enchanting animations that enhance your identity. Our incredible artists combine creativity, and the result is exactly what you expect and more.",
  },
  {
    icon: "/images/icons/app-development.png",
    title: "Tailored Solutions",
    text: "Every business has its own unique story to tell, and therefore our 2D animation company makes it a point to specialize in fully customized animations that facilitate the expression of your story in the best way possible. We look into your objectives, target audience, and key message carefully to come up with animations that are in line with your brand’s voice and also grab the engagement of viewers meaningfully.",
  },
  {
    icon: "/images/icons/office-building.png",
    title: "Industry Expertise",
    text: "By being the best 2D animation company in the world for many years, we have made animations tailored to the needs of various industries such as education, healthcare, corporate communications, e-commerce, entertainment, and many more. We are in this way exposing ourselves to different industries, which enables us to grasp their distinct needs and render solutions that work for real.",
  },
  {
    icon: "/images/icons/app-settings.png",
    title: "Cutting-Edge Tools",
    text: "Our 2D animation company embraces the latest animation software with the different parts of the process being done using the most up-to-date methods to ensure a very smooth, high-quality, and eye-catching final product. It is through this way that our animations are up to the latest technological standards, are future-proof, and are available on different platforms without compatibility and quality issues.",
  },
  {
    icon: "/images/icons/united.png",
    title: "Collaborative Approach",
    text: "We recognize the importance of teamwork and are convinced that excellent results are the fruits of well done teamwork. As a client-focused 2D animation company, we constantly keep in touch with you through each step of the process-from coming up with ideas, developing storyboards, and even shooting. Your ideas are important at every stage of development, with the final animation being that which most reflects your input and achieves your targeted goals thus making your vision come true.",
  },

];

  return (
    <>
     <Head>
            <title>2D Animation Company – Creative Animated Video Services</title>
            <meta
              name="description"
              content="Leading 2D animation company providing engaging animated video design, production, and motion graphics services to elevate your brand’s storytelling and reach."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/2d-animation-company"
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
                      2d Animation Company
                    </span>
                  </li>
                </ol>
              </nav>

            <h2 className={styles.title}>
  Transform Ideas Into Motion
</h2>
<p className={styles.subtitle}>
  Our 2D animation company brings your brand stories to life with eye-catching visuals, engaging characters, and seamless motion. From explainer videos to commercials, we design animations that connect, inspire, and drive action.
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
              2D Animation Company
            </h1>
            <p className={styles.aboutText}>
                Our 2D animation studio is a storytelling company that specializes in creating captivating and visually attractive stories that attract the audience's attention and connect with them. We make animations that are novel, meaningful, and yield the desired outcome, no matter if they are for the cases of explainer videos, product demos, educational materials, or brand storytelling. A team of qualified illustrators, motion designers, and storytellers gives us the power to achieve with accuracy, uniqueness, and creativity any project that we want.
           </p>
             <p className={styles.aboutText}>
            If you are a company that wants to launch a new product, an instructor who wants to make difficult concepts easy to understand, or a brand that wants to become stronger in the market, then our 2D animation company is the one that can provide you with the right visuals that will lead you to success.
                </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/2danimation2.jpg"
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
      Top <span>2D Animation Company for </span> Businesses and Brands
    </h2>
    
    <p className={styles.sectionText}>
        Working with the right 2D animation company is basically having a crew on your side that knows how to creatively put your concept through the funnel. Our division is far different from any other company because our animations represent not only a visual treat but also a way to attract, educate, and motivate the target audience.
           </p>
     <p className={styles.sectionText}>
       Whether we are talking about product demos, brand stories, or explainer videos, our journey into the creative world is always about discovering the end-user and making every visualization serve your company's goals. Our skilled illustrators, designers, and storytellers, through their hard work, aim at producing not only unique, but also top-notch animations. Using a mix of creativity and the latest technology, our 2D animation company has become the go-to for businesses looking to make a strong digital presence.

             </p>
    </section>


     <section className={styles.aboutWrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left content */}

          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/2danimation1.jpg"
                alt="Mobile app & website development illustration"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                priority
                className={styles.aboutImage}
              />
            </div>
          </div>
            {/* Right image */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
             Leading 2D Animation Company for Creative Storytelling

            </h2>
            <p className={styles.aboutText}>
               One of the strongest methods to attract the audience and establish a deep relationship is still visual storytelling. Being a renowned 2D animation company, we concentrate on creating animations that catch the viewer's attention and are also usable—involving companies to convey the complicated ideas in an easy way.
                      </p>
             <p className={styles.aboutText}>
         The combined creative team of professionals prepares interesting content based on the strategy of the given topic like the creation of explainer videos, product demos, educational modules, and brand narratives. The use of the 2D animation company as a bridge between creative thought and technical skill enables them to deliver the impact of your marketing message and the realization of business goals in each and every project.
                </p>
          </div>
    
      
        </div>
      </div>
  
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
     Why Work <span> with Our 2D Animation </span> Company 
    </h2>
     
        <p className={styles.whychoose_intro}>
       Working together with the leading 2D animation company is to have access to the mental power of creativity that knows how to lure attention, simplify the communication of complex ideas, and give out animations that will make your audience remember. We not only have a team of designers but also illustrators and storytellers who bring in the art of painting out your concept into engaging visual content.
             </p>


      </div>
    </section> 
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>2D Animations crafted by us</h3>
<p className={styles.ctaSubtitle}>
  Our 2D animation portfolio highlights the creativity and precision of a trusted animation studio. From explainer videos to engaging character animations, we have partnered with clients to deliver compelling visuals that tell stories and leave a lasting impact. This reflects our ability to transform ideas into visually stunning, dynamic animated experiences.
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
      Creative <span> 2D Animation Experts for Storytelling </span> & Branding
    </h2>
        {/* <p className={styles.whychoose_subtitle}>
          <strong>For mobile app design and development services</strong>
        </p> */}
        <p className={styles.whychoose_intro}>
        A creative 2D animation company turns your concepts into reality by mixing creative ideas with effective story-telling. We offer a range of services that are perfectly suited for businesses, educators, and creators who want to communicate their ideas in a more captivating and impactful way. Our methodology ensures that every animation not only appeals visually but also credits your brand.
                </p>

 

      </div>
    </section> 
     <WhyUnique/>
     <TestimonialsCarousel1/>
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
