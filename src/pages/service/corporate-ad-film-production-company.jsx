"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import WhyUnique1 from "../../components/WhyUnique1";
import Head from "next/head";
import TestimonialsCarousel2 from "../../components/TestimonialsCarousel2";
// import TestimonialsCarousel from "./TestimonialsCarousel.jsx";



export default function CorporateFilmProd() {
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
    question: "Why should we hire a corporate ad film production company instead of freelancers?",
    answer:
      "A dedicated corporate ad film production company provides end-to-end services including concept, production, and post-production, ensuring consistency and quality.",
  },
  {
    id: 2,
    question: "How long does it take to produce a corporate ad film?",
    answer:
      "Timelines vary depending on complexity, but most ad films are completed within 3–6 weeks.",
  },
  {
    id: 3,
    question: "Can you create ad films for startups with limited budgets?",
    answer:
      "Yes. We offer scalable packages tailored to different business sizes and needs.",
  },
  {
    id: 4,
    question: "Do you provide ad films optimized for social media platforms?",
    answer:
      "Absolutely. We create platform-specific cuts for LinkedIn, YouTube, Instagram, and more.",
  },
  {
    id: 5,
    question: "What industries do you serve?",
    answer:
      "As an experienced corporate ad film production company, we serve IT, healthcare, retail, manufacturing, education, and many others.",
  },
  {
    id: 6,
    question: "Do you handle scripting and voice-overs?",
    answer:
      "Yes. Our team offers full scripting, voice-over, and editing services as part of the production package.",
  },
    {
    id: 7,
    question: "Can you integrate animation or motion graphics into ad films?",
    answer:
      "Definitely. We blend live-action with animation and graphics to enhance storytelling.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/icons/light-bulb.png",
    title: "Creative Team",
    text: "An experienced team consisting of directors, cinematographers, and editors whose work is focused on corporate ad films",
  },
  {
    icon: "/images/icons/office-building.png",
    title: "Industry Expertise",
    text: "Know-how of making powerful ad films for various industries",
  },
  {
    icon: "/images/icons/promotion.png",
    title: "Smooth Production",
    text: "Easy production processes that save your time and at the same time keep the same level of quality",
  },
  {
    icon: "/images/icons/video.png",
    title: "Engaging Storytelling",
    text: "Content marketing through storytelling, attracting and connecting with your target audience",
  },
  {
    icon: "/images/icons/quality-assurance.png",
    title: "Quality Delivery",
    text: "Great pictures, professional editing, and delivery on time",
  },
  {
    icon: "/images/icons/united.png",
    title: "Trusted Clients",
    text: "Testimonials of distinguished client situations including startups, SMEs, and brands",
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
              href="https://nakshatranamahacreations.in/service/corporate-ad-film-production-company"
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
                      Corporate Ad Film Production Company
                    </span>
                  </li>
                </ol>
              </nav>

            <h2 className={styles.title}>
 Corporate Ad Film Production Company In Mysore 
</h2>
<p className={styles.subtitle}>
 Where Creativity Meets Business Strategy
Bring your brand to life through visually stunning corporate ad films that communicate your story, values, and vision with cinematic brilliance. We help businesses connect with audiences emotionally and leave a lasting impact.
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
              Corporate Ad Film Production Company
            </h1>
            <p className={styles.aboutText}>
               Nakshatra Namaha Creations is a reliable corporate ad film production company that facilitates brands to create stunning visual narratives, which are liked to engage, motivate, and convert the audience. We deal with making refined and powerful ad films that transport your brand’s giving, history, and products to the world. Our method is a mix of creativity and strategy that guarantees each ad film to be your brand’s voice and to connect to your target audience.
           </p>
             <p className={styles.aboutText}>
            We create ad films that are more than just a promotional tool. With a skilled team and state-of-the-art production methods, we produce films that instigate loyalty, brand awareness, and authentic relationships. Being a top corporate ad film production company, we make sure that every work has its distinct narrative style and impeccable quality.
                </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/tech/tech12.jpg"
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

    
      <h2 className={styles.sectionIntro} style={{width:"90%", margin:"0 auto"}}>
      Why Choose<span>Nakshatra Namaha Creations </span> as Your Corporate Ad Film Production Company
    </h2>
    
    <p className={styles.sectionText}>
  Having a corporate advertising film production company that is just the right fit is a good way to transform how your brand communicates with the audience. Choosing us is the preference of the businesses just because of what we bring to them.
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
        <h3 className={styles.ctaTitle}>Corporate Ad Films Crafted by Us</h3>
<p className={styles.ctaSubtitle}>
  Our corporate ad film portfolio showcases the creativity and professionalism of our production team. From impactful brand stories to high-quality promotional videos, we’ve collaborated with businesses across industries to produce films that connect with audiences and elevate brand presence. Each project reflects our passion for storytelling, strong visual direction, and commitment to delivering corporate films that inspire, engage, and drive results.
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
        <section className={styles.aboutWrap} style={{marginTop:"0px"}}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left content */}

          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/tech/videoproduct12.jpg"
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
             Corporate Ad Films for Powerful Brand Communication

            </h2>
            <p className={styles.aboutText}>
               It is true that every brand has some messages that they want to share with the people and a nicely made ad film can make that message linger in people's minds. Corporate Ad Film Production Company in which we are considered to be experts, is the place where we take business objectives and turn them into wonderful visual content that not only attracts attention but also gets the engagement done further. We accomplish this by integrating the power of storytelling with the aesthetics of the creative director. We allow businesses to tell their customers what they stand for, what they plan to achieve and how they can be of help to them, by using these communication tools which are not limited to only one medium.
                      </p>
             <p className={styles.aboutText}>
           We, at Nakshatra Namaha Creations, are a trusted corporate ad film production company committed to transforming not only the visual aspect of your ad films but also ensuring their value as a powerful marketing tool. Our creativity brings businesses the spark they need to enhance brand communication and achieve visibility in today’s highly competitive markets.
                </p>
          </div>
    
      
        </div>
      </div>

 <br />
      <div className="container">
           <h2 className={styles.sectionIntro}>
      Types of  <span> Corporate Ad Films </span> We Create
    </h2>
        
        <p className={styles.whychoose_intro}>
        Being a full-service corporate ad film production company, we make a range of ad films that reflect various business requirements..
                </p>

 

      </div>
    </section> 
     <WhyUnique1/>
      <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Our Corporate Ad Film Production Process</h2>
     <p className={styles.subText}>
         As a trusted corporate ad film production company, we follow a clear, step-by-step process to ensure seamless service and results that exceed expectations:
          </p>

        <div className={styles.subBlock}>
          <h4 className={styles.subHeading}>
            Concept & Strategy
          </h4>
       
          <p className={styles.subText}>
        Our corporate ad film production company works closely with you to define your objectives, target audience, and campaign goals for maximum impact.
          </p>

         
          <h4 className={styles.subHeading}>
           Scriptwriting & Storyboarding
          </h4>
          <p className={styles.subText}>
          At our corporate ad film production company, we craft engaging scripts, create strong characters, and plan each frame to bring your story to life.
             </p>

             <h4 className={styles.subHeading}>
        Production
          </h4>
         <p className={styles.subText}>
            Our corporate ad film production company captures professional shots using advanced cameras, lighting, and audio equipment to ensure cinematic quality.
          </p>
        


             <h4 className={styles.subHeading}>    
    Post-Production
          </h4>
         <p className={styles.subText}>
          As a leading corporate ad film production company, we combine footage, animations, sound, and special effects to give your ad film a polished, engaging look.
             </p>

             <h4 className={styles.subHeading}>
        Delivery & Optimization
          </h4>
         <p className={styles.subText}>
         Our corporate ad film production company optimizes your ad films for TV, web, and social media to ensure maximum reach and performance across platforms.
          </p>

       <h2 className={styles.heading}>Benefits of Partnering with a Professional Corporate Ad Film Production Company</h2>
            
            <p className={styles.subText}>
       Choosing Nakshatra Namaha Creations as your trusted corporate ad film production company offers:
            </p>
            <p className={styles.subText}>
       • Stronger brand identity built through impactful visual storytelling crafted by our corporate ad film production company.
            </p>
            <p className={styles.subText}>
       • Higher engagement across social media and marketing channels with creative ad films produced by our experienced corporate ad film production company.
            </p>
            <p className={styles.subText}>
       • Improved credibility and trust among customers and stakeholders thanks to the professional quality delivered by our corporate ad film production company.
            </p>
            <p className={styles.subText}>
       • Time-efficient production with a skilled and well-coordinated team at our corporate ad film production company, ensuring smooth project execution.
            </p>
            <p className={styles.subText}>
       • Optimized ad films that perform effectively on TV, web, and social platforms, powered by our strategic approach as a leading corporate ad film production company.
            </p>
            <p className={styles.subText}>
       • A competitive edge in crowded markets through memorable brand communication developed by our innovative corporate ad film production company.
            </p>
        </div>


  
      </div>
    </section>
     <TestimonialsCarousel2/>
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
