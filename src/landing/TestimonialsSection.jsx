"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    text: "Excellent professionalism and service. They designed our website and app within the time line and according to our requirement. Their team were totally outstanding, understanding and very patientful when we needed edits. We specially thank Mr. Harish Kashyap for all his help to the end. We are very happy to see our App live.",
    name: "Vidya Shety",
    company: "Mysore",
    img: "/images/tech/woman (1).png",
  },
  {
    text: "Thank you for developing my website. It has helped my business grow day by day. Professional design, clear content, and very good response. Truly satisfied with the service Thank you Sir 😊",
    name: "Narayana Bali Pooja Services Srirangapatna",
    company: "Mysore",
    img: "/images/tech/man (2).png",
  },
  {
    text: "This is the best website development company in Mysore. I got my restaurant website done with this team and they have a great expertise in developing customised website development. Would really recommend their service for all other clients too. Kudos to entire team",
    name: "Manjunath Poojary",
    company: "Mysore",
        img: "/images/tech/man (2).png",
  },
  {
    text: "Simply professional outfit they are. I just told them wanted a pitch deck and they designed it all by themselves with all paraphernalia that has to go in to preparing a pitch deck including that of hotel industry to detail without any inference from me. I strongly suggest them for any management related work including web design , app and digital marketing. For me they are ' go to ' computer house... Kudos harish and team !!!",
    name: "Seshadri C.S",
    company: "Mysore",
    img: "/images/tech/man (2).png",
  },
];

export default function TestimonialsSection() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.kicker}>TESTIMONIALS</span>
        <h2 className={styles.heading}>What Our Clients Say</h2>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings} className={styles.slider}>
          {testimonials.map((item, i) => (
            <div key={i} className={styles.slide}>
              <div className={styles.card}>
                <p className={styles.text}>{item.text}</p>

                <div className={styles.profile}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* MANUAL DOTS */}
        <div className={styles.manualDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                activeSlide === index ? styles.activeDot : ""
              }`}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
