"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import WhyUnique7 from "../../components/WhyUnique7";
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
    title: "Strategic Social Media Planning",
    text: "Every brand grows faster with a clear roadmap. We create platform-specific strategies that align with your industry, audience behavior, and business goals. Our planning covers content themes, posting frequency, ad strategy, engagement flow, and growth objectives — ensuring your brand stays active, relevant, and impactful.",
  },
  {
    icon: "/images/icons/quality-assurance.png",
    title: "High-Quality Content Creation",
    text: "Content is the heart of social media. Our team designs eye-catching creatives, reels, videos, carousels, motion graphics, and branded visuals that capture attention instantly. Whether it’s educational, promotional, or entertainment-focused, we create content that strengthens your brand identity and encourages users to engage.",
  },
  {
    icon: "/images/icons/growth-chart.png",
    title: "Social Media Advertising & Lead Generation",
    text: "We run performance-driven paid campaigns on Facebook, Instagram, YouTube, and LinkedIn to help your business reach a wider audience. From targeting the right demographics to optimizing ad budgets, we focus on maximizing conversions, driving quality leads, and delivering measurable ROI for your business.",
  },
  {
    icon: "/images/icons/brand-image.png",
    title: "Community Engagement & Brand Building",
    text: "Strong engagement builds trust. We actively manage comments, messages, and customer interactions to keep your page responsive and authoritative. Our consistent engagement strategy helps your audience feel connected, increasing loyalty and long-term customer retention.",
  },


];

const faqs = [
 {
    id: 1,
    question: "What do social media marketing services include?",
    answer:
      "Services include content creation, advertising, campaign management, analytics, audience targeting, and performance optimization.",
  },
  {
    id: 2,
    question: "How can social media marketing help my business grow?",
    answer:
      "It increases brand visibility, generates leads, engages customers, and drives measurable sales.",
  },
  {
    id: 3,
    question: "Which platforms do you manage?",
    answer:
      "We manage Facebook, Instagram, LinkedIn, Twitter, YouTube, and more.",
  },
  {
    id: 4,
    question: "How soon can I see results from social media marketing?",
    answer:
      "Most businesses start seeing engagement within weeks and conversions within 2–3 months, depending on strategy and consistency.",
  },
  {
    id: 5,
    question: "Do you offer paid advertising on social platforms?",
    answer:
      "Yes, we handle ad strategy, targeting, creatives, optimization, and reporting.",
  },
  {
    id: 6,
    question: "Can you manage my brand across multiple platforms?",
    answer:
      "Absolutely we specialize in multichannel social media management.",
  },
    {
    id: 7,
    question: "Do you provide content creation services?",
    answer:
      "Yes, we create posts, videos, reels, graphics, and promotional content.",
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
  {
    icon: "/images/icons/social-media (1).png",
    title: "Multichannel Management",
    text: "We take care of your brand image across different online channels, thus providing not only a harmonious message but also strengthened target group interaction.",
  },
  {
    icon: "/images/icons/sales.png",
    title: "Sales Funnel Acceleration",
    text: "We optimize every step from awareness to conversion in order to shorten the customer journey.",
  },
  {
   icon: "/images/icons/evaluation.png",
    title: "Campaign Performance Monitoring",
    text: "With real- time analytics, one can easily pinpoint the efficient actions and thus improvethe unproductive ones.",
  },
  {
    icon: "/images/icons/app-settings.png",
    title: "Technology-Driven Marketing",
    text: "Efficiency and personalization are the results of our employing automation, analytics tools, and AI-led insights.",
  },
  {
    icon: "/images/icons/monitor.png",
    title: "Improved Marketing Efficiency",
    text: "By targeting in a smarter way, creating better content, and by budgeting in an optimized manner, you will be able to accomplish more with fewer resources.",
  },
    {
    icon: "/images/icons/bar-chart.png",
    title: "Connecting Actions to Outcomes",
    text: "Each campaign is linked to quantifiable business results such as leads, conversions, revenue, and retention.",
  },
];

  return (
    <>
      <Head>
            <title>Social Media Marketing Services | Grow Your Brand Online</title>
            <meta
              name="description"
              content="Boost your brand visibility with expert Social Media Marketing Services. We help you drive engagement, leads, and sales through strategic content and ads."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/social-media-marketing"
            />
           <meta name="keywords" content="Social Media Marketing Services, Social Media Marketing Company, Social Media Marketing Agency, Social Media Management Services, SMM Services, Social Media Advertising, Social Media Marketing Experts"/>

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
                      Social Media Marketing Services
                    </span>
                  </li>
                </ol>
              </nav>

              <h2 className={styles.title}>
               Social Media Marketing Services That Grow Your Brand
              </h2>
              <p className={styles.subtitle}>
           Drive real results with our Social Media Marketing Services. We help you build a strong presence, increase engagement, and convert followers into loyal customers.
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
            What Are Social Media Marketing Services?
            </h1>
            <p className={styles.aboutText}>
       Social​‍​‌‍​‍‌​‍​‌‍​‍‌ media marketing services are professional solutions that help businesses make the most of platforms such as Facebook, Instagram, LinkedIn, Twitter, and YouTube to create brand awareness, engage with the audience, generate leads, and increase conversions. 

Such services often encompass strategic content creation, paid advertising, audience targeting, analytics, campaign optimization, and continuous management — thus becoming a vital part of a brand's overall digital marketing strategy.

          </p>
            <p className={styles.aboutText}  >
            In a scenario where consumers are spending several hours a day on social media, these platforms have turned into a strong tool for demand generation, lead nurturing, customer engagement, and business growth.
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
      How We <span> Boost Your Business Growth </span> 

    </h2>
    
    <p className={styles.sectionText}style={{width:"70%"}}>
    We help your business grow by creating strategic social media plans, managing your content consistently, running high-performing ad campaigns, and delivering insights that keep your brand ahead of the competition.
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
      Why <span> Social Media Matters </span> for Your Business
    </h2>
     
        <p className={styles.whychoose_intro}>
     Social media has become the most powerful place to connect with your audience. It helps brands build visibility, engage customers, and drive consistent business growth all in real time and at a lower cost than traditional marketing.
      </p>


      </div>
    </section> 
    <WhyUnique7/>
       <section className={styles.ctaSection}>
      <div className="container text-center">
        <h3 className={styles.ctaTitle}>Ready to Grow Your Brand with Powerful Social Media Marketing?</h3>
        <p className={styles.ctaSubtitle}>
        Partner with a Social Media Marketing Company that helps you increase visibility, boost engagement, and convert followers into real customers. From daily content to strategic ad campaigns, we help your brand stand out and grow consistently.
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
        Leading <span>  Social Media Marketing Company </span> for Brand Growth & Customer Engagement
    </h2>
       
        <p className={styles.whychoose_intro}>
     In today’s digital world, your audience is active on social platforms every single day. As a trusted Social Media Marketing Company, we help brands build visibility, engage the right audience, and generate consistent leads through strategic content, creative storytelling, and data-driven campaigns. From Instagram to LinkedIn, our team ensures your brand gets noticed, remembered, and chosen.
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
