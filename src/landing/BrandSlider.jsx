"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import styles from "./BrandSlider.module.css";

const brandsRow1 = [
    // "/images/clients/logo23.webp",
      "/images/clients/clients3.jpg.webp", 

        "/images/clients/MysuruOilsLogo.png", 
   "/images/clients/medinovis-logo.png", 
   "/images/clients/novus-logo.png",    
 

  "/images/clients/clients2.jpg.webp",

  "/images/clients/logo20.webp", 
   "/images/clients/clients5.webp",
   "/images/clients/clients6.webp", 
   "/images/clients/logo25.webp",
  "/images/clients/clients8.webp", 
  "/images/clients/logo26.webp", 
   "/images/clients/logo18.webp",
   "/images/clients/logo-kang.png", 
     "/images/clients/logo-scin.png", 

   "/images/clients/logo9.jpg",
   "/images/clients/logo27.webp", 
      "/images/clients/logo13.webp", 
   "/images/clients/logo22.webp",
   "/images/clients/imagecopy3.png", 

   "/images/clients/logo10.jpg",
 "/images/clients/clientlogo7.jpg", 
   "/images/clients/logo16.webp", 
      "/images/clients/ravandur.png", 
   "/images/clients/logo11.webp", 
  "/images/clients/clients1.jpg", 
      "/images/clients/logo19.webp", 
   "/images/clients/logo14.webp", 
      "/images/clients/clients4.webp", 


   "/images/clients/logo21.webp", 
   "/images/crea.jpg", 
      "/images/clients/logo12.webp",
];

const brandsRow2 = [
    // "/images/clients/logo23.webp",
  "/images/clients/clientlogo7.jpg", 
  "/images/clients/clients1.jpg", 
  "/images/clients/clients2.jpg.webp",
  "/images/clients/clients3.jpg.webp", 
   "/images/clients/clients4.webp", 
  "/images/clients/logo20.webp", 
   "/images/clients/clients5.webp",
   "/images/clients/clients6.webp", 
   "/images/clients/logo25.webp",
  "/images/clients/clients8.webp", 
  "/images/clients/logo26.webp", 
   "/images/clients/logo27.webp", 
   "/images/clients/logo22.webp",
   "/images/clients/imagecopy3.png", 
   "/images/clients/logo9.jpg",
   "/images/clients/logo10.jpg",
   "/images/clients/logo18.webp",
   "/images/clients/logo19.webp", 
   "/images/clients/logo13.webp", 
   "/images/clients/logo21.webp", 
   "/images/clients/logo11.webp", 
   "/images/clients/logo12.webp",
   "/images/clients/logo14.webp", 
   "/images/clients/logo16.webp", 
      "/images/clients/MysuruOilsLogo.png", 
   "/images/clients/medinovis-logo.png", 
   "/images/clients/novus-logo.png",    
    "/images/clients/logo-kang.png", 
     "/images/clients/logo-scin.png", 
      "/images/clients/ravandur.png", 
   "/images/crea.jpg", 
];

export default function BrandSlider() {
  return (
    <section className={styles.brandSection}>
      {/* ROW 1 */}
            <div className={styles.header}>
        <h2>
          Trusted by <span>100+</span> clients from startup to enterprise
        </h2>
        <p>for their website design and development needs</p>
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={22}
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={6000}
        className={styles.slider}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {brandsRow1.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className={styles.logoCard}>
              <img src={logo} alt="Brand logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ROW 2 */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={22}
        loop
        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
        speed={6000}
        className={styles.slider}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brandsRow2.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className={styles.logoCard}>
              <img src={logo} alt="Brand logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
