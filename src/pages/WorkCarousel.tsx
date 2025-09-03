'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './WorkCarousel.module.css';

type Work = { name: string; link: string };

const works: Work[] = [
  { name: 'Rajathadri Royal Inn', link: '/rajath' },
  { name: 'SK Developers', link: '/sk' },
  { name: 'Creative Flexi Pack', link: '/creative' },
  { name: 'Sarang Creations', link: '/sarang' },
  { name: 'Brindavan Constructions', link: '/brindavan' },
  { name: 'Avitri Spices', link: '/avitri' },
];

export default function WorkCarousel() {
  return (
    <div className={styles['work-carousel']}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <Link href={work.link} className={styles['carousel-box']}>
              <div className={styles['slide-card']}>
                <h3>{work.name}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
