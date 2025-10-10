"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import TestimonialsCarousel2 from "../../components/TestimonialsCarousel2";
import WhyUnique2 from "../../components/WhyUnique2";



export default function WebDesignCompany() {
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
    question: "Why should I choose Nakshatra Namaha Creations as my web design company?",
    answer:
      "At Nakshatra Namaha Creations, we specialize in creating stunning, high-performance websites that convert visitors into customers. Our expertise spans responsive web design, e-commerce development, SEO optimization, CMS solutions, and ongoing support. Our clients trust us for quality, reliability, and long-term partnership.",
  },
  {
    id: 2,
    question: "How long does it take for Nakshatra Namaha Creations to design and launch a website?",
    answer:
      "The timeline depends on complexity, features, and content readiness. For a typical business website, it may take 4–8 weeks. E-commerce or custom web applications may require 8–12+ weeks. We provide a project roadmap upfront so you know milestones and deadlines.",
  },
  {
    id: 3,
    question: "Do you design responsive websites (mobile-friendly)?",
    answer:
      "Yes — responsive web design is standard. Every website we build by Nakshatra Namaha Creations adapts seamlessly to mobile, tablet, and desktop devices to ensure excellent user experience and SEO performance.",
  },
  {
    id: 4,
    question: "What CMS / platforms do you use for web development?",
    answer:
      "We work with modern, flexible platforms including WordPress, Shopify, Drupal, or custom frameworks (e.g. Laravel) depending on the client’s needs. We choose the platform that best fits your long-term goals, budget, and maintenance expectations.",
  },
  {
    id: 5,
    question: "Will my website be SEO-ready / optimized?",
    answer:
      "Absolutely. As part of our web design service, Nakshatra Namaha Creations ensures your site is built with SEO best practices: clean code, fast loading, meta tags, structured data, mobile optimization, and internal linking. We can also offer ongoing SEO and content services post-launch.",
  },
  {
    id: 6,
    question: "Can you redesign an existing website?",
    answer:
      "Yes. If your current site is outdated, slow, or not responsive, we offer website redesign services. We will preserve your SEO juice, migrate content, and modernize the design to match current web standards and your brand identity.",
  },
    {
    id: 7,
    question: "How much does a website cost with Nakshatra Namaha Creations?",
    answer:
      "Cost varies depending on design complexity, features (e.g., e-commerce, custom integrations), and content volume. A simple business website may start in a mid-range budget, while complex web apps or online stores may cost more. Contact us for a free quote; we’ll provide a detailed estimate based on your requirements.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/icons/webdesign.png",
    title: "Custom Website Design",
    text: "We create visually stunning, user-friendly designs that match your brand’s personality and business goals.",
  },
  {
    icon: "/images/icons/web.png",
    title: "Responsive Web Design",
    text: "Your website will look and perform perfectly on desktops, tablets, and mobile devices of all screen sizes.",
  },
  {
    icon: "/images/icons/frontend.png",
    title: "UI/UX Design",
    text: "We design smooth, intuitive interfaces that enhance user engagement and improve overall experience.",
  },
  {
    icon: "/images/icons/shopping.png",
    title: "E-Commerce Web Design",
    text: "Get an online store that’s easy to manage, secure, and optimized for conversions and repeat customers.",
  },
  {
    icon: "/images/icons/growth-chart.png",
    title: "Corporate Website Design",
    text: "Professional and performance-driven designs tailored for businesses that want to make a strong online impression.",
  },
  {
    icon: "/images/icons/landing-page.png",
    title: "Landing Page Design",
    text: "Capture attention and drive action with goal-focused landing pages built for campaigns and lead generation.",
  },
];

  return (
    <>
     <Head>
            <title>Corporate Ad Film Production Company | Professional Ad Brand</title>
            <meta
              name="description"
              content="Partner with a leading corporate ad film production company for high-quality ad films, creative storytelling, and impactful brand communication across all platforms."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/web-design-company-in-mysore"
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
                      Web Design Company in Mysore
                    </span>
                  </li>
                </ol>
              </nav>

            <h1 className={styles.title}>
 Web Design Company in Mysore

</h1>
<p className={styles.subtitle}>
Get mobile friendly web designs with a user experience centric approach. Contact us today!
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
             Website Design excellence delivered by one of Mysore Top Dev Shops

            </h2>
            <p className={styles.aboutText}>
               Nakshatra Namaha Creations Inc is a web design company operating in Mysore, that offers full-service portfolio of design and development of web and mobile presence for businesses, cloud, managed IT services, Internet marketing and marketing automation to businesses of all sizes operating across industries.
                   </p>
             <p className={styles.aboutText}>
         Regardless of the stage of operation of your business, our team of expert web designers and internet marketers provide you with one-off web designs powered by impactful marketing practices to take your web presence to the next level. This does not only effectively help you increase the customer-base for your business but also helps you build a memorable presence across the web leading to a stronger recall for your brand.
                 </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/tech/tech15.jpg"
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

      
    </section>


  
    
      <h2 className={styles.sectionIntro} style={{width:"80%", margin:"0 auto", marginBottom:"10px"}}>
      Why Choose<span> Nakshatra Namaha Creations </span> as Your Web Design Company in Mysore
    </h2>
    
    <p className={styles.sectionText}>
 Having the right web design company is essential to shaping how your brand appears and performs online. At Nakshatra Namaha Creations, we blend creativity, technology, and strategy to design websites that not only look stunning but also deliver measurable business results.
              </p>
        
             <br />
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
   {/* <section className={styles.whychoose}>
      <div className="container">
           <h2 className={styles.sectionIntro}>
     Why Work <span> with Our 2D Animation </span> Company 
    </h2>
     
        <p className={styles.whychoose_intro}>
       Working together with the leading 2D animation company is to have access to the mental power of creativity that knows how to lure attention, simplify the communication of complex ideas, and give out animations that will make your audience remember. We not only have a team of designers but also illustrators and storytellers who bring in the art of painting out your concept into engaging visual content.
             </p>


      </div>
    </section>  */}
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>Web Designs Crafted by Us</h3>
<p className={styles.ctaSubtitle}>
  Our web design portfolio highlights the creativity, innovation, and technical expertise of our design team. From business websites to e-commerce platforms, we’ve worked with clients across industries to build digital experiences that attract visitors and convert them into customers. Each project reflects our dedication to blending aesthetics with functionality, ensuring every website we craft not only looks visually stunning but also performs seamlessly across devices.
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
      <section className={styles.aboutWrap} style={{marginTop:"5px"}}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left content */}

          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/tech/tech14.jpg"
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
            We drive your digital success

            </h2>
            <p className={styles.aboutText}>
            Nakshatra Namaha Creations is a well-established web design company that has years of experience executing endless number of Mysore based web design projects. We understand that every business is unique and so are its needs. Our team therefore, does not believe in a ‘one-size-fits-all’ approach to its projects. From small local stores to the biggest of global brands, we hold the experience of designing custom web presence for businesses across practically every industry. Our industry domain specialists impart strategic consultation on the tech-business aspects of your business to guide you through commercial success of your web presence project.          
                </p>
             <p className={styles.aboutText}>
         The solutions we deliver encompass everything from web and mobile design to web and mobile development to cloud to internet marketing and everything that your business can think of while going through each phase of building its web presence from the scratch.
                  </p>
          </div>
    
      
        </div>
      </div>

    </section>
    <section className={styles.whychoose}>
      <div className="container">
           <h2 className={styles.sectionIntro}>
      Types of  <span> Web Design Services </span> We Offer
    </h2>
        
        <p className={styles.whychoose_intro}>
       As a leading web design company, we craft visually engaging, user-focused websites that help brands stand out and perform better online. Our expertise covers every aspect of digital design from concept to completion ensuring your site looks exceptional and functions seamlessly on every device.
                    </p>

 

      </div>
    </section> 
     <WhyUnique2/>
      <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Why Nakshatra Namaha Creations as a preferred web design company in Mysore</h2>
     <p className={styles.subText}>
         
         Nakshatra Namaha Creations is a web design company that strives for innovation in designs that do not just have a creative appeal but are highly usable too. Our project deliveries are highly professional and our services are driven by the highest level of customer service standards.
While we live in an inanimate world that is becoming increasingly dependent upon technology, the best part about Nakshatra Namaha Creations offerings is that it provides you with a personalized delivery of its intelligent tech-business solutions custom built to serve your needs. At Nakshatra Namaha Creations, while we understand the importance of quality web design services coupled with the effective marketing of the web presence of a business, we equally appreciate the importance of strong customer service and support. And this is clearly reflected in our service offerings

                </p>

        <div className={styles.subBlock}>
          <h4 className={styles.subHeading}>
            Let us help you achieve more!
          </h4>
       
          <p className={styles.subText}>
           As a preferred web design company for our customers in Mysore, we work closely with them towards achieving more in terms of their online presence and developing a larger customer-base for them online by this means. More than just being a creative and professional company, we operate as your web presence partners who understand your business in and out, its people, its processes, its needs and its goals. This is the reason why our clients in Mysore vouch for our services and for the continued value we have been generating for businesses in this area, we have recently been recognized as one of the top web developers in Mysore.
            </p>

         
          <h4 className={styles.subHeading}>
           Bringing ideas to creative reality!
          </h4>
          <p className={styles.subText}>
         At Nakshatra Namaha Creations, we strive to provide our customers with custom-crafted solutions that help them create unforgettable impressions on the minds of their audience. While we cater to their needs in a budget-friendly manner, the quality of our offerings is unmatched in the industry, creating significant value for our customers. More than just a design solution professional, we work for them as their strategy partners where we ensure that while our designs reflect their brand’s image realistically, the content copy that accompanies the design perfectly reflects their brand’s voice. While we work towards helping them achieve greater exposure online with a strong presence across the search engines and more traffic & visits on the website and the social media pages, our goal is to generate a larger return on their digital investment. The bottom-line is that while we give the wings of creativity to their designs and overall web presence, we also make sure that the project also stays on the ground reality of achieving commercial success staying profitable.
           </p>
            <p className={styles.subText}>
         In simpler terms, we, as a web design company, help businesses in Mysore get designs that are visually impressive, effectively optimized for search engines and successfully marketed to achieve overall high returns.
           </p>
            <p className={styles.subText}>
         As one of the most sought-after web design companies in Mysore, we equip the Mysore based businesses with end-to-end web presence solutions at highly affordable rates. For over 8+ years now, we have worked on thousands of web design projects for businesses working practically in every industry. Having garnered this vast an experience, we also have a strong foothold in effectively marketing your business online. It has also led us to extend our services qualitatively as well as in a budget-friendly manner.
           </p>
            <p className={styles.subText}>
         Browse through our website and take time to look at our work portfolio, go through our client testimonials and explore the wide range of web design and the allied web presence services we can assist you with. Since our team understands your business and listens patiently to your need specifications, our offerings are bound to amaze you with the way they instantly strike a chord with your target audience. Contact us or have us contact you to share your project details and our experts will be more than happy to guide you on the next steps.
           </p>
         
        </div>


  
      </div>
    </section>
     {/* <TestimonialsCarousel2/> */}
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
