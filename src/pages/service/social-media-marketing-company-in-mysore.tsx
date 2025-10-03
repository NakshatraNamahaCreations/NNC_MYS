// src/pages/service/social-media-marketing-company-in-mysore.tsx
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import styles from "./wordpress.module.css";
import styles1 from "./social-media.module.css";
import SocialMediaFaq from "./SocialMediaFaq";
import InfoSection from "@/components/InfoSection";
import ReasonsToChooseWordPress from "@/pages/ReasonsToChooseWordPress";
import FloatingActions from "@/pages/FloatingActions";
import MobileBottomBar from "@/pages/MobileBottomBar";
import { useState } from "react";
import axios from "axios";
import { HiShieldCheck } from "react-icons/hi";
import { TbSocial } from "react-icons/tb";
import { MdCampaign } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { RiRocket2Fill } from "react-icons/ri";
import styles2 from "./software-dev.module.css";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const faqs = [
  {
    id: 1,
    question:
      "What platforms do you cover in your social media marketing services?",
    answer:
      "We offer marketing services across major platforms including Facebook, Instagram, LinkedIn, Twitter, and YouTube.",
  },
  {
    id: 2,
    question: "Do you create custom content for each platform?",
    answer:
      "Yes, we tailor posts, reels, ads, and stories to suit each platform's format and audience for maximum engagement.",
  },
  {
    id: 3,
    question: "Can you help with ad campaigns and paid promotions?",
    answer:
      "Absolutely. We create and manage paid ad campaigns with strategic targeting, creative design, and conversion tracking.",
  },
  {
    id: 4,
    question: "Do you provide analytics and performance reports?",
    answer:
      "Yes, we offer detailed reports that track engagement, reach, follower growth, and conversions to measure ROI.",
  },
  {
    id: 5,
    question:
      "Can social media marketing improve my local business visibility?",
    answer:
      "Yes, with location-based targeting, hashtags, and community engagement, we help boost your visibility within Mysore and nearby areas.",
  },
  {
    id: 6,
    question: "Is graphic design included in your social media packages?",
    answer:
      "Yes, we include professional graphic design for posts, banners, carousel ads, and more as part of our packages.",
  },
];

export default function SocialMediaPage() {

   const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    service: "",
    referenceFrom: "quickform", // static value to identify this form
    city: "Mysore",             // static
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        formData
      );
      if (res.status === 200 || res.status === 201) {
        alert("Thank you! Your enquiry has been sent.");
        setFormData({
          name: "",
          phoneNo: "",
          email: "",
          service: "",
          referenceFrom: "quickform",
          city: "Mysore",
        });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending form.");
    }
  };

  const services = [
    {
      icon: "/images/motion.webp",
      title: "Social strategy",
      points: [
        "Nakshatra Namaha Creations provides strategic planning, from consultation to execution, ensuring a seamless experience.",
        "We design interactive interfaces that enhance user engagement and long-term customer relationships.",
        "Our unique approach focuses on delivering customized solutions tailored to your business needs.",
        "With result-driven tactics, we help you achieve your goals efficiently and effectively.",
      ],
    },
    {
      icon: "/images/online-store.png",
      title: "Content curation",
      points: [
        "Customer engagement is key—how you connect leaves a lasting impact.",
        "Our expert bloggers and publishers craft compelling content tailored to your brand",
        "We bring life to empty web pages with impactful storytelling and strategic messaging.",
        "Whether B2B or B2C, we ensure your services reach the right audience effectively.",
      ],
    },
    {
      icon: "/images/crossplat.png",
      title: "Brand awareness",
      points: [
        "Social media branding is at the core of our strategy, helping you build a strong online presence.",
        "We craft well-defined strategies and tactics to ensure seamless customer reach.",
        "No matter the platform, we tailor branding solutions to match your business goals.",
        "Our expertise makes connecting with your audience easier and more effective.",
      ],
    },
    {
      icon: "/images/native.png",
      title: "Community building",
      points: [
        "Establishing a strong community is essential for expanding your customer base.",
        "We leverage social platforms to enhance your brands visibility and engagement.",
        "Our strategies help you connect with a wider audience and build lasting relationships.",
        "A well-established community boosts brand awareness and drives long-term growth.",
      ],
    },
    {
      icon: "/images/app-development.png",
      title: "Monitoring and analytics",
      points: [
        "We maintain complete transparency by keeping you informed about every aspect of your project.",
        "Your feedback is valued and integrated to refine strategies for optimal results.",
        "Brand credibility remains our top priority, ensuring trust and authenticity.",
        "Our expert social media marketing techniques help you achieve new heights of success.",
      ],
    },
    {
      icon: "/images/app-development.png",
      title: "Platform selection",
      points: [
        "Identifying the right social media platforms is key to reaching your target audience.",
        "We analyze where your potential customers are most active to optimize marketing efforts.",
        "Platform selection is based on your business needs and customer preferences.",
        "Whether its Facebook, LinkedIn, Instagram, or Twitter, we tailor strategies for maximum impact.",
      ],
    },
  ];

  const cards = [
    {
      title: "Create a secure imprint",
      icon: <HiShieldCheck size={28} color="#22abe2" />,
      text:
        "Engage viewers with a professional profile, build trust, and understand customer needs for stronger connections.",
    },
    {
      title: "Enhanced engagement",
      icon: <TbSocial size={28} color="#22abe2"  />,
      text:
        "Leverage top social media platforms like Facebook, Twitter, and Instagram, using captions, hashtags, and engagement tools to reach your audience.",
    },
    {
      title: "Inexpensive business branding",
      icon: <MdCampaign size={28} color="#22abe2"  />,
      text:
        "Elevate your brand with creative, engaging social media ads that attract local customers.",
    },
    {
      title: "Offer 24/7 support",
      icon: <IoChatboxEllipses size={28} color="#22abe2" />,
      text:
        "Engage instantly on social platforms by tracking queries, responding positively, and offering personalized support.",
    },
    {
      title: "Launch & Support",
      icon: <RiRocket2Fill size={28} color="#22abe2"  />,
      text:
        "Launching your site with ongoing support for continuous performance.",
    },
  ];

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    {
      name: "Social Media Marketing",
      path: "/service/social-media-marketing-company-in-mysore",
    },
  ];

  // JSON-LD blocks
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nakshatranamahacreations.in/#organization",
    name: "Nakshatra Namaha Creations",
    url: "https://nakshatranamahacreations.in",
    logo: "https://nakshatranamahacreations.in/images/image.png",
    sameAs: [
      "https://www.facebook.com/Nakshatranamahacreations/",
      "https://www.instagram.com/nnc.digitalbengaluru/",
    ],
  };

  const businessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nakshatranamahacreations.in/#localbusiness",
    name: "Nakshatra Namaha Creations",
    image: "https://nakshatranamahacreations.in/images/image.png",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block",
      addressLocality: "Mysuru",
      addressRegion: "Karnataka",
      postalCode: "570008",
      addressCountry: "IN",
    },
    url: "https://nakshatranamahacreations.in",
    telephone: "+91-9900566466",
    email: "info@nakshatranamahacreations.in",
    areaServed: "Mysuru",
    priceRange: "₹₹",
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social Media Marketing",
    provider: { "@id": "https://nakshatranamahacreations.in/#localbusiness" },
    areaServed: { "@type": "Place", name: "Mysuru" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl:
        "https://nakshatranamahacreations.in/service/social-media-marketing-company-in-mysore",
      availableLanguage: "English",
    },
    description:
      "Grow your brand in Mysore with expert social media marketers. We craft result-driven strategies for Instagram, Facebook, LinkedIn, and more to boost engagement.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nakshatranamahacreations.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://nakshatranamahacreations.in/service",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Social Media Marketing",
        item: "https://nakshatranamahacreations.in/service/social-media-marketing-company-in-mysore",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Best Social Media Marketing Company in Mysore</title>
        <meta
          name="description"
          content="Grow your brand in Mysore with expert social media marketers. We craft result-driven strategies for Instagram, Facebook, LinkedIn, and more to boost engagement."
        />
        <meta
          name="keywords"
          content="Best Social Media Marketing Company in Mysore"
        />
        <link
          rel="canonical"
          href="https://nakshatranamahacreations.in/service/social-media-marketing-company-in-mysore"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Social Media Marketing Company in Mysore"
        />
        <meta
          property="og:description"
          content="Grow your brand in Mysore with expert social media marketers. We craft result-driven strategies for Instagram, Facebook, LinkedIn, and more to boost engagement."
        />
        <meta
          property="og:url"
          content="https://nakshatranamahacreations.in/service/social-media-marketing-company-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nakshatra Namaha Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Best Social Media Marketing Company in Mysore"
        />
        <meta
          name="twitter:description"
          content="Grow your brand in Mysore with expert social media marketers. We craft result-driven strategies for Instagram, Facebook, LinkedIn, and more to boost engagement."
        />
        <meta
          name="twitter:image"
          content="https://nakshatranamahacreations.in/media/logo.png"
        />
        <meta name="twitter:site" content="@nncbengaluru" />
      </Head>

      {/* JSON-LD */}
      <Script id="sm-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgLd)}
      </Script>
      <Script id="sm-biz" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(businessLd)}
      </Script>
      <Script id="sm-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="sm-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="sm-crumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(crumbLd)}
      </Script>

      <section className={styles.heroBannerWrapper} id="contact-hero">
           <Image
             src="/images/background.jpg"
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
                <nav className={styles1.breadcrumbs} aria-label="Breadcrumb">
  <ol>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/service">Services</Link>
    </li>
    <li aria-current="page">
      <span className={styles1.breadcrumbsCurrent}>Social Media Marketing</span>
    </li>
  </ol>
</nav>

<h1 className={styles1.title}>SOCIAL MEDIA MARKETING COMPANY IN MYSORE</h1>
<p className={styles1.subtitle}>
  Nakshatra Namaha Creations helps brands thrive online with creative, data-driven 
  social media marketing strategies. From content creation and audience engagement 
  to targeted ad campaigns, we design impactful solutions that build brand awareness, 
  drive leads, and foster community growth. With our expertise across platforms like 
  Instagram, Facebook, LinkedIn, and YouTube, your business can stay relevant and 
  ahead of the competition in the ever-evolving digital world.
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
     

    

      <div className={styles2["software-develop-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles2["software-develop-title"]}>
            Best Social Media Marketing Company in Mysore
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["socialmedia-section-wrapper"]}>
            <p className={styles2["software-develop-description"]}>
              A strong social media presence is essential for brand growth and
              audience engagement. As a leading social media marketing company
              in Mysore, we craft customized strategies that align with your
              business goals. Our campaigns are designed with precision to
              ensure maximum reach, engagement, and conversions across platforms.
              With a focus on content, analytics, and engagement, our expert
              team creates impactful social media strategies that boost brand
              awareness and drive results. Through targeted marketing and
              creative storytelling, we help your business leave a lasting
              impression in the digital world.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles["wordpressservices-wrapper"]}>
        <h2 className={styles["wordpressservices-title"]}>
          Our Social Media Marketing services include
        </h2>
        <div className={styles["wordpressservices-grid"]}>
          {services.map((service, idx) => (
            <div className={styles["wordpressservices-card"]} key={idx}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles["wordpressservices-icon"]}
              />
              <h4 className={styles["wordpressservices-heading"]}>
                {service.title}
              </h4>
              <ul className={styles["wordpressservices-list"]}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["wordpressapp-section"]}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles["wordpressapp-title"]}>
            What are the advantages of social media marketing for your business?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles["wordpressapp-section-wrapper"]}>
            <div className={styles["wordpressapp-line"]} />
            <p className={styles["wordpressapp-description"]}>
              Social media marketing helps businesses increase brand visibility,
              engage with their target audience, and drive more traffic to their
              website. It also boosts customer loyalty, enhances lead generation,
              and improves conversion rates through strategic content and
              advertising.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles1["socialcard-wrapper"]}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles1["socialcard"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className={styles1["socialcard-icon-bg"]}>{card.icon}</div>
            <h3 className={styles1["socialcard-title"]}>{card.title}</h3>
            <p className={styles1["socialcard-desc"]}>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles["industry-section-wrapper"]}>
        <div className={styles["industry-section-left"]}>
          <h2>
            Why choose Nakshatra Namaha Creations as a Social Media Marketing
            Company in Mysore?
          </h2>
          <p>
            As a leading social media marketing company in Mysore, Nakshatra
            Namaha Creations combines expertise, creativity, and a
            customer-centric approach to every project. We specialize in
            crafting dynamic social media strategies that enhance your brand’s
            online presence and drive business growth. From innovative startups
            to established brands, we deliver tailored solutions focused on
            engagement, visibility, and impactful results.
          </p>
        </div>
        <div className={styles["industry-section-right"]}>
          <img src="/images/rajanna1.png" alt="Industries Mockup" />
        </div>
      </div>

      <FloatingActions />
      <MobileBottomBar />
      <ReasonsToChooseWordPress />

      <SocialMediaFaq/>
      <InfoSection />
    </>
  );
}
