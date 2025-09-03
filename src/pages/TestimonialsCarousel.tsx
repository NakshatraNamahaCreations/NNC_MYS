"use client";

import Image from "next/image";
import Slider from "react-slick";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  {
    name: "Ramesh Gowda",
    role: "Founder, Mysore AgroTech",
    rating: 5,
    text:
      "Nakshatra Namaha Creations built our complete website and mobile app for farmer services. The UI is clean, multilingual support works flawlessly, and their project management ensured we went live exactly as planned.",
    avatar: "/images/man.png",
  },
  {
    name: "Anjali Rao",
    role: "Marketing Head, Lavish Eventzz",
    rating: 5,
    text:
      "From branding to a full event booking platform, the team delivered beyond expectations. Their digital marketing strategy gave us strong local visibility on Google, and our customer inquiries doubled in just 3 months.",
    avatar: "/images/woman.png",
  },
  {
    name: "Vikram Shetty",
    role: "Operations Manager, The Mysore Oils",
    rating: 5,
    text:
      "Our e-commerce platform was seamlessly designed by NNC. The product catalog, checkout, and secure payment integration are smooth. Their support team is quick to resolve queries and keeps everything running stable.",
    avatar: "/images/man.png",
  },
  {
    name: "Shweta Nair",
    role: "HR Manager, Premium Movers Australia",
    rating: 4,
    text:
      "We needed a relocation services portal with booking and tracking features. Nakshatra Namaha Creations delivered a scalable solution with a sleek design. A few tweaks were needed post-launch, but the team was responsive and fixed them fast.",
    avatar: "/images/woman.png",
  },
  {
    name: "Abdul Rahman",
    role: "Director, Make My Documents",
    rating: 5,
    text:
      "The passport and visa service portal they developed is reliable and secure. Features like document uploads, status tracking, and payment gateway work perfectly. Clients find it user-friendly and professional.",
    avatar: "/images/man.png",
  },
  {
    name: "Neha Sharma",
    role: "Creative Head, Upskilliq Events",
    rating: 5,
    text:
      "Their graphic design and video production services helped us create impactful campaigns. From animations to social media creatives, the quality was consistent and aligned with our brand identity.",
    avatar: "/images/woman.png",
  },
  {
    name: "Karthik Reddy",
    role: "CEO, Sunshine Hospitality",
    rating: 5,
    text:
      "Nakshatra Namaha Creations built a custom room booking website for our hospitality business. The integration with payment systems and responsive design made it easier for our guests to book directly online.",
    avatar: "/images/man.png",
  },
  {
    name: "Priya Menon",
    role: "CFO, Coorg Eco Homes",
    rating: 5,
    text:
      "Their SEO and Google Ads campaign gave us measurable results. We saw a 65% increase in website traffic and significant boost in direct bookings. The transparency in reporting was much appreciated.",
    avatar: "/images/woman.png",
  },
];


export default function TestimonialsCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const eyebrow = "OUR TESTIMONIALS";
  const title = "What they’re talking about\nour company";
  const lines = title.split("\n");

  return (
    <section className={`${styles.testimonialsCarousel} py-5`}>
      <div className="container">
        {/* Heading */}
        <div className={styles.testimonialsCarouselHead}>
          {/* <span className={styles.testimonialsCarouselEyebrow}>{eyebrow}</span> */}
          <h2 className={styles.testimonialsCarouselTitle}>
            {lines.map((l, i) => (
              <span key={i}>
                {l}
                {i === 0 ? <br /> : null}
              </span>
            ))}
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialsCarouselSlide}>
              <article className={styles.testimonialsCarouselCard}>
                <header className={styles.testimonialsCarouselHeader}>
                  <div className={styles.testimonialsCarouselAvatarWrap}>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={96}
                      height={96}
                      className={styles.testimonialsCarouselAvatar}
                    />
                  </div>
                  <div className={styles.testimonialsCarouselMeta}>
                    <div className={styles.testimonialsCarouselStars}>
                      {"★".repeat(t.rating)}
                      <span className={styles.testimonialsCarouselMuted}>
                        {"★".repeat(5 - t.rating)}
                      </span>
                    </div>
                    <h4 className={styles.testimonialsCarouselName}>{t.name}</h4>
                    {/* <div className={styles.testimonialsCarouselRole}>{t.role}</div> */}
                  </div>
                </header>

                <div className={styles.testimonialsCarouselDivider}>
                  <span className={styles.testimonialsCarouselTick} />
                </div>

                <p className={styles.testimonialsCarouselText}>{t.text}</p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
