"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./ClientSlider.module.css";

// load react-slick only in browser to avoid SSR "document is not defined"
const Slider = dynamic(() => import("react-slick"), { ssr: false });

type Client = { id: number; frontSrc: string; backSrc: string; alt: string };

const clientsRows: Client[][] = [
  [
    { id: 31, frontSrc: "/images/clients/logo23.webp", backSrc: "/images/clients/logo23.webp", alt: "Client 31" },
    { id: 2,  frontSrc: "/images/clients/clientlogo7.jpg", backSrc: "/images/clients/clientlogo7.jpg", alt: "Client 2" },
    { id: 3,  frontSrc: "/images/clients/clients1.jpg", backSrc: "/images/clients/clients1.jpg", alt: "Client 3" },
    { id: 4,  frontSrc: "/images/clients/clients2.jpg.webp", backSrc: "/images/clients/clients2.jpg.webp", alt: "Client 4" },
    { id: 5,  frontSrc: "/images/clients/clients3.jpg.webp", backSrc: "/images/clients/clients3.jpg.webp", alt: "Client 5" },
    { id: 6,  frontSrc: "/images/clients/clients4.webp", backSrc: "/images/clients/clients4.webp", alt: "Client 6" },
    { id: 28, frontSrc: "/images/clients/logo20.webp", backSrc: "/images/clients/logo20.webp", alt: "Client 28" },
  ],
  [
    { id: 7,  frontSrc: "/images/clients/clients5.webp", backSrc: "/images/clients/clients5.webp", alt: "Client 7" },
    { id: 8,  frontSrc: "/images/clients/clients6.webp", backSrc: "/images/clients/clients6.webp", alt: "Client 8" },
    { id: 32, frontSrc: "/images/clients/logo25.webp", backSrc: "/images/clients/logo25.webp", alt: "Client 32" },
    { id: 10, frontSrc: "/images/clients/clients8.webp", backSrc: "/images/clients/clients8.webp", alt: "Client 10" },
    { id: 33, frontSrc: "/images/clients/logo26.webp", backSrc: "/images/clients/logo26.webp", alt: "Client 33" },
    { id: 34, frontSrc: "/images/clients/logo27.webp", backSrc: "/images/clients/logo27.webp", alt: "Client 34" },
    { id: 30, frontSrc: "/images/clients/logo22.webp", backSrc: "/images/clients/logo22.webp", alt: "Client 30" },
  ],
  [
    { id: 14, frontSrc: "/images/clients/imagecopy3.png", backSrc: "/images/clients/imagecopy3.png", alt: "Client 14" },
    { id: 19, frontSrc: "/images/clients/logo9.jpg", backSrc: "/images/clients/logo9.jpg", alt: "Client 19" },
    { id: 20, frontSrc: "/images/clients/logo10.jpg", backSrc: "/images/clients/logo10.jpg", alt: "Client 20" },
    { id: 26, frontSrc: "/images/clients/logo18.webp", backSrc: "/images/clients/logo18.webp", alt: "Client 26" },
    { id: 27, frontSrc: "/images/clients/logo19.webp", backSrc: "/images/clients/logo19.webp", alt: "Client 27" },
    { id: 23, frontSrc: "/images/clients/logo13.webp", backSrc: "/images/clients/logo13.webp", alt: "Client 23" },
    { id: 29, frontSrc: "/images/clients/logo21.webp", backSrc: "/images/clients/logo21.webp", alt: "Client 29" },
  ],
  [
    { id: 20, frontSrc: "/images/clients/logo10.jpg", backSrc: "/images/clients/logo10.jpg", alt: "Client 20" },
    { id: 21, frontSrc: "/images/clients/logo11.webp", backSrc: "/images/clients/logo11.webp", alt: "Client 21" },
    { id: 22, frontSrc: "/images/clients/logo12.webp", backSrc: "/images/clients/logo12.webp", alt: "Client 22" },
    { id: 23, frontSrc: "/images/clients/logo13.webp", backSrc: "/images/clients/logo13.webp", alt: "Client 23" },
    { id: 24, frontSrc: "/images/clients/logo14.webp", backSrc: "/images/clients/logo14.webp", alt: "Client 24" },
    { id: 25, frontSrc: "/images/clients/logo16.webp", backSrc: "/images/clients/logo16.webp", alt: "Client 25" },
    { id: 28, frontSrc: "/images/crea.jpg", backSrc: "/images/crea.jpg", alt: "Client 28" },
  ],
];

const flatClients = clientsRows.flat();

const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1900,
  speed: 400,
  infinite: true,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768,  settings: { slidesToShow: 3 } },
    { breakpoint: 480,  settings: { slidesToShow: 2 } },
  ],
};

export default function ClientSlider() {
  return (
    <section className={styles["client-slider-section"]}>
      <div className={styles["client-slider-heading"]}>
        <h2>Brands We’ve Collaborated With</h2>
        <div className={styles["slider-line"]}></div>
      </div>

      <div className={styles["client-slider-wrapper"]}>
        <Slider {...settings}>
          {flatClients.map((client) => (
            <div key={client.id} className={styles["client-slide"]}>
              <Image
                src={client.frontSrc}
                alt={client.alt}
                width={160}
                height={90}
                sizes="(max-width: 768px) 120px, 160px"
                className={styles["logo-img"]}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
