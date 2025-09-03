"use client";

import { Carousel } from "react-bootstrap";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./OurClientsSays.module.css";

type Testimonial = { text: string; author: string };

const testimonials: Testimonial[] = [
  {
    text: `NNC provides the best services in digital marketing and branding with their excellent team and I thank Mr.Harish and 
    team members who supported in each and every step, I would rate their work as one of the best in Mysore! Thank you`,
    author: "Bhaskar Bhasu",
  },
  {
    text: `Very nice service I approached Harish sir for my company website and sir was very professional and he
explains everything very nicely so that customer can understand everything clearly and the quality of work is
good.`,
    author: "M. Nagahari",
  },
  {
    text: `They have created a highly functional and visually 
    appealing website that perfectly meets our needs. Their attention to detail and timely 
    communication throughout the process were exceptional.`,
    author: "Dr.Ashwini",
  },
  {
    text: `Good service we got from the Nakshatra website creations,it was great moment's we had with Mr.Harish ... We had started the new business at JP nagar.,...,. To improve the business and marketing activities we got best support from Nakshatra website creations team.....
I really suggest and recomend others to connect with Nakshatra website creations team to develop the website creation and Google adds or other online activities.......
Staff and Owner is very helpful and kind people....`,
    author: "Patil Sandeep",
  },
];

export default function ClientsCarousel() {
  return (
    <section className={`${styles["testimonial-wrapper"]} ${styles["bg-gradient"]}`}>
      <div className={styles["testimonial-container"]}>
        <h2 className={styles["testimonial-heading"]}>What Our Clients Say</h2>

        <Carousel
          controls
          indicators
          interval={6000}
          nextIcon={
            <FaChevronRight className={`${styles["arrow-icon"]} ${styles["right"]}`} />
          }
          prevIcon={
            <FaChevronLeft className={`${styles["arrow-icon"]} ${styles["left"]}`} />
          }
        >
          {testimonials.map((t, i) => (
            <Carousel.Item key={i}>
              <div className={styles["testimonial-card"]}>
                <FaQuoteLeft className={styles["quote-icon"]} />
                <p className={styles["testimonial-text"]}>{t.text}</p>
                <h5 className={styles["testimonial-author"]}>- {t.author}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
