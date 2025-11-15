"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileAppDevelopmentBanner.module.css";
import ContactForm from '@components/ContactForm';
import InfoSection from "@/components/InfoSection";
import styles1 from "../FaqSection.module.css";
import Head from "next/head";
import WhyUnique3 from "../../components/WhyUnique3";



export default function WebsiteDeveloper() {
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
    question: "Why should I choose Nakshatra Namaha Creations as my website developer?",
    answer:
      "Nakshatra Namaha Creations provides professional website development with a focus on performance, clean coding, mobile responsiveness, and long-term scalability. Our team ensures your website is fast, secure, SEO-ready, and aligned with your business goals."
  },
  {
    id: 2,
    question: "Do you provide maintenance after the website is developed?",
    answer:
      "Yes. We provide ongoing support, updates, backups, security monitoring, and performance optimization. Our maintenance plans ensure your website remains fast, secure, and up-to-date."
  },
  {
    id: 3,
    question: "Do your website developers build mobile-friendly websites?",
    answer:
      "Yes, every project we deliver is fully mobile-responsive. Our website developers ensure your site performs seamlessly across mobile, tablet, and desktop devices to improve user experience and search ranking."
  },
  {
    id: 4,
    question: "What platforms do your website developers work with?",
    answer:
      "We work with WordPress, Shopify, WooCommerce, Drupal, and fully custom frameworks like Laravel or MERN Stack. Our team recommends the best platform based on your needs, budget, and long-term scalability."
  },
  {
    id: 5,
    question: "Will my website be SEO-optimized when your developers build it?",
    answer:
      "Absolutely. Our website developers follow SEO-friendly practices including optimized code, schema structure, fast loading speed, proper headings, clean URLs, and mobile optimization. We also offer ongoing SEO services if required."
  },
  {
    id: 6,
    question: "Can your website developers redesign my existing website?",
    answer:
      "Yes. We offer complete website redesign services. Whether your website looks outdated, loads slowly, or isn’t converting well, our team can upgrade the design, improve speed, migrate content, and rebuild it using modern standards."
  },
  {
    id: 7,
    question: "How much does it cost to hire your website developers?",
    answer:
      "Costs depend on the type of website, features, integrations, number of pages, and design complexity. Basic business websites fall into a moderate range, while e-commerce or custom applications may cost more. Contact us for a detailed pricing quote."
  },
];

// ✅ Just use plain objects instead of interface
const cards = [
 {
  icon: "/images/icons/webdesign.png",
  title: "Custom Website Developers",
  text: "We create visually stunning, user-friendly websites that match your brand’s personality and business goals.",
},
{
  icon: "/images/icons/web.png",
  title: "Responsive Website Developers",
  text: "We ensure your website looks and performs perfectly on desktops, tablets, and mobile devices.",
},
{
  icon: "/images/icons/frontend.png",
  title: "UI/UX Website Developers",
  text: "We design smooth, intuitive interfaces that enhance user engagement and overall experience.",
},
{
  icon: "/images/icons/shopping.png",
  title: "E-Commerce Website Developers",
  text: "We build secure, easy-to-manage online stores optimized for conversions and repeat customers.",
},
{
  icon: "/images/icons/growth-chart.png",
  title: "Corporate Website Developers",
  text: "We create professional, performance-driven websites for businesses that want a strong online presence.",
},
{
  icon: "/images/icons/landing-page.png",
  title: "Landing Page Developers",
  text: "We build goal-focused landing pages designed to capture attention and drive leads for your campaigns.",
},

];

  return (
    <>
     <Head>
            <title>Website Developer for Business | Professional Web Development</title>
            <meta
              name="description"
              content="Get a business website built by a professional website developer. Fast, mobile-friendly, SEO-ready websites designed to convert visitors into leads."
            />
            <link
              rel="canonical"
              href="https://nakshatranamahacreations.in/service/website-developers"
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
                      Website Developers Company in Mysore
                    </span>
                  </li>
                </ol>
              </nav>

            <h1 className={styles.title}>
Website Developers – Professional Website Developer for Business Owners

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
             Hire the Best Website Developer for Your Business Growth

            </h2>
            <p className={styles.aboutText}>
              One​‍​‌‍​‍‌​‍​‌‍​‍‌ of the smartest investments you can make is hiring the right website developer if you want your business to be different from other businesses in the market. A professional specialist doesn’t just build pages — they create a complete digital experience that reflects your brand, engages visitors, and drives enquiries. When your developer knows business strategy, customer behavior, and contemporary design standards, your site turns into a strong tool which is always available to you and brings you the right leads.
              </p>
             <p className={styles.aboutText}>
        The majority of business owners are in trouble because the website they have is outdated, slow to load, and does not convert visitors into customers. This is the point where a competent website developer can be a great help. The right expert makes sure that your site is fast, easy to use on any device, secure, and attractive, thus enabling your business to quickly gain the trust of your target audience. Under the right guidance in terms of structure, performance, and functionality, your website becomes well-grounded for future ​‍​‌‍​‍‌​‍​‌‍​‍‌growth.
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
      Why Choose<span> Nakshatra Namaha Creations </span> as Your Website Developer Company in Mysore
    </h2>
    
    <p className={styles.sectionText}>
 Having the right Website Developer company is essential to shaping how your brand appears and performs online. At Nakshatra Namaha Creations, we blend creativity, technology, and strategy to design websites that not only look stunning but also deliver measurable business results.
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
   <h3 className={styles.ctaTitle}>Websites Crafted by Our Developers</h3>
<p className={styles.ctaSubtitle}>
  Our website developers bring creativity, innovation, and technical expertise to every project. From business websites to e-commerce platforms, we’ve worked with clients across industries to build digital experiences that attract visitors and turn them into customers. Each website we create reflects our focus on combining clean aesthetics with strong functionality, ensuring every project not only looks impressive but also performs smoothly across all devices.
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
            Why Your Business Needs a Professional Website Developer

            </h2>
            <p className={styles.aboutText}>
           An​‍​‌‍​‍‌​‍​‌‍​‍‌ expert website creator knows the intricacies of your business, the expectations of your customers, and the method of converting the visitors who happen to drop by into clients. In case you are simply thinking about giving your old site a new look or creating a new one from scratch, the right expert is the one who makes sure that your website is quick, accessible for the users of mobile devices, attractive, and has a good structure for Google ranking.
             </p>
             <p className={styles.aboutText}>
        Any business of today requires a good website developer who can integrate design, functionality, and marketing strategy into one flawless digital experience. With the right specialist at the helm of your online presence, you are given a website that not only makes a beautiful visual impression but is also an active vehicle for your business ​‍​‌‍​‍‌​‍​‌‍​‍‌expansion.
             </p>
          </div>
    
      
        </div>
      </div>

    </section>
    <section className={styles.whychoose}>
      <div className="container">
           <h2 className={styles.sectionIntro}>
      Website Developer   <span> Services Designed for </span>Business Owners
    </h2>
        
        <p className={styles.whychoose_intro}>
     A good website developer does more than write code — they help create a digital asset that strengthens your brand and boosts revenue. When you hire a professional website developer, you get services like:
        </p>

 

      </div>
    </section> 
     <WhyUnique3/>
      <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Why Choose a Website Developer Instead of DIY Tools?</h2>
     <p className={styles.subText}>
     The​‍​‌‍​‍‌​‍​‌‍​‍‌ competition you face keeps on refreshing their websites yearly — by upgrading layout, speed, and user experience. An experienced website developer by your side acts as your weapon to keep the lead when the market is crowded and not to lose your place. In general, it is just at the beginning when DIY tools may seem to be convenient but later on, they hardly provide you with a strategy, performance, or business stability for the long-term that your business really deserves. A professional web designer knows what users expect, how search engines work, and the way to create a website that sells and not just attract visitors by its aesthetic.
     </p>
       <p className={styles.subText}>
     Moreover, a competent website developer is the one who can offer you a certain degree of personalization and help you solve problems that come with drag-and-drop platforms and that these platforms cannot provide. They personalize the framework, aesthetics, and the use of your website to be in harmony with the brand’s objectives. Therefore, by enhancing loading speed and developing secure integrations, every detail is not only for pleasing the user but also for working efficiently and converting better.
     </p>

        <div className={styles.subBlock}>
          <h4 className={styles.subHeading}>
          What a professional developer can offer to your business:
          </h4>
       
          <p className={styles.subText}>
          • Better search engine rankings
          </p>
             <p className={styles.subText}>
          • A more polished and credible design
          </p>
           <p className={styles.subText}>
          • Website performance that is faster and more seamless
          </p>
           <p className={styles.subText}>
          • Automation that provides time-saving and reduces manual work
          </p>
           <p className={styles.subText}>
          • Security and data protection on a very high level
          </p>
           <p className={styles.subText}>
          • The complete freedom over the design, features, and extensibility
          </p>
             <p className={styles.subText}>
          Goal-oriented businesses that focus on growth use the services of a reliable professional only because they are aware that a strong website is far more than just an online brochure — it is a revenue-generating asset. And the presence of the right website developer at your disposal is what guarantees that your digital footprint will always be up-to-date and in line with your business ​‍​‌‍​‍‌​‍​‌‍​‍‌expansion.
          </p>


          <h2 className={styles.heading}>Revamp Your Existing Website with a Skilled Website Developer</h2>


          <p className={styles.subText}>
          If​‍​‌‍​‍‌​‍​‌‍​‍‌ your website is still lagging and it takes a long time to load or it doesn't bring you constant inquiries, then that is a very obvious sign that your digital presence needs a new look. A strategic website developer through just a redesign can totally change the way your business is perceived by the world. The changes can be as simple as redesigning your layouts, refreshing your content, improving navigation, and giving your site a modern, high-performing structure. A true revamp is not about making just a few superficial changes but rather about going deeper with the changes that have a direct impact on conversions and user experience.
          </p>
        <p className={styles.subText}>
          With a proper redesign by a professional and experienced specialist, you can be sure that your website will look new, be trusted, and represent your company&#39;s brand values. Every modification, starting from mobile optimization to faster loading times, is done with the objective of making it easier for potential customers to get in touch with your business online. A skilled website developer in your revamp is not only the creator of a digital brochure but your website becomes a strong branding and sales tool.
          </p>

            <h4 className={styles.subHeading}>
         An expert website re-design can help you:
          </h4>
       
          <p className={styles.subText}>
          • Increase conversions
          </p>
            <p className={styles.subText}>
          • Build stronger trust with visitors
          </p>
             <p className={styles.subText}>
          • Improve mobile and tablet experience
          </p>
             <p className={styles.subText}>
          • Strengthen branding and visual identity
          </p>
             <p className={styles.subText}>
          • Boost SEO rankings and visibility
          </p>

            <p className={styles.subText}>
         This is the reason why business owners of today put their trust in a website developer whose main goal is to efficiently, impactfully, and sustainably deliver ​‍​‌‍​‍‌​‍​‌‍​‍‌redesigns.
           </p>

          <h2 className={styles.heading}>How a Website Developer Helps You Attract More Customers</h2>


            <p className={styles.subText}>
        The​‍​‌‍​‍‌​‍​‌‍​‍‌ right website developer designs a website that seems easy for your customers to use — from the moment they arrive at your homepage until the time they make an enquiry about your services. A conversion-focused expert carefully examines how people think, what keeps them on a page, and what prompts them to take a certain action. By getting a grasp on user behaviour, layout psychology, and performance optimization, they create a digital journey that not only distracts from your business goals but actually supports them.
             </p>
            <p className={styles.subText}>
        Moreover a competent individual guarantees that all the parts of your website are working together to increase trust and thereby, your business credibility. From quicker loading times to more user-friendly browsing, each and every detail is meticulously planned to make visitors 'friendly' with your business. When an experienced website developer takes on your project, your website is transformed into a seamless, sales-driven experience rather than just an assortment of pages.
           </p>
             <h4 className={styles.subHeading}>
         What a professional makes sure:
          </h4>
             <p className={styles.subText}>
          • Clear and persuasive CTAs
          </p>
            <p className={styles.subText}>
          • Easy-to-use navigation
          </p>
            <p className={styles.subText}>
          • SEO-friendly page architecture
          </p>
            <p className={styles.subText}>
          • Strong local SEO signals
          </p>
            <p className={styles.subText}>
          • Clean visual hierarchy
          </p>
            <p className={styles.subText}>
          • Trust-building components at the most important interaction points
          </p>
            <p className={styles.subText}>
          Under the direction of a strategic website developer, your website becomes a valuable tool that not only draws in the right customers but also converts them ​‍​‌‍​‍‌​‍​‌‍​‍‌effortlessly.
          </p>

          <h2 className={styles.heading}>Website Developers Who Focus on SEO and Google Rankings</h2>
          <p className={styles.subText}>
        If​‍​‌‍​‍‌​‍​‌‍​‍‌ your site doesn't appear on Google, it will not be of any help to you. That is the reason why you must have a specialist who comprehends the operation of search engines and the way to create pages that get high ranks. A proficient website developer makes a website that is trusted by Google—quickly loading, safe, mobile-friendly, and fully SEO optimized. The technical aspects as well as the on-page elements of your site are designed to give you a higher chance of getting noticed by Google.
           </p>
            <p className={styles.subText}>
       An SEO-focused expert is aware of the correct utilization of tags, schema, structure, and layout that contribute to better ranking of your site in search results. You don't have to guess what search engines want as your website is created based on a verified strategy. If you are working with an experienced website developer, your website will not be just another URL out there but a real source of organic leads.
          </p>
             <h4 className={styles.subHeading}>
         Companies that collaborate with an SEO-ready specialist enjoy:
          </h4>
          <p className={styles.subText}>
          •  Improved visibility
          </p>
            <p className={styles.subText}>
          • Enhanced website authority
          </p>
            <p className={styles.subText}>
          • A higher number of organic leads
          </p>
            <p className={styles.subText}>
          • A more robust local presence
          </p>
          <p className={styles.subText}>
          This is the way long-term growth is being supported and your business is kept ahead of the competition by a results-driven website ​‍​‌‍​‍‌​‍​‌‍​‍‌developer.
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
