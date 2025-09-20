"use client";

import Image from "next/image";
import styles from "./ClientsShowcase.module.css";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const ROW_A: Logo[] = [
   { src: "/images/clients/logo23.webp", alt: "Client 31" },
  { src: "/images/clients/clientlogo7.jpg", alt: "Client 2" },
  { src: "/images/clients/clients1.jpg", alt: "Client 3" },
  { src: "/images/clients/clients2.jpg.webp", alt: "Client 4" },
  { src: "/images/clients/clients3.jpg.webp", alt: "Client 5" },
  { src: "/images/clients/clients4.webp", alt: "Client 6" },
  { src: "/images/clients/logo20.webp", alt: "Client 28" },
  { src: "/images/clients/clients5.webp", alt: "Client 7" },
  { src: "/images/clients/clients6.webp", alt: "Client 8" },
  { src: "/images/clients/logo25.webp", alt: "Client 32" },
  { src: "/images/clients/clients8.webp", alt: "Client 10" },
  { src: "/images/clients/logo26.webp", alt: "Client 33" },
  { src: "/images/clients/logo27.webp", alt: "Client 34" },
  { src: "/images/clients/logo22.webp", alt: "Client 30" },
  { src: "/images/clients/imagecopy3.png", alt: "Client 14" },
  { src: "/images/clients/logo9.jpg", alt: "Client 19" },
  { src: "/images/clients/logo10.jpg", alt: "Client 20" },
  { src: "/images/clients/logo18.webp", alt: "Client 26" },
  { src: "/images/clients/logo19.webp", alt: "Client 27" },
  { src: "/images/clients/logo13.webp", alt: "Client 23" },
  { src: "/images/clients/logo21.webp", alt: "Client 29" },
  { src: "/images/clients/logo11.webp", alt: "Client 21" },
  { src: "/images/clients/logo12.webp", alt: "Client 22" },
  { src: "/images/clients/logo14.webp", alt: "Client 24" },
  { src: "/images/clients/logo16.webp", alt: "Client 25" },
  { src: "/images/crea.jpg", alt: "Client 28" },
];

const ROW_B: Logo[] = [
    { src: "/images/crea.jpg", alt: "Client 28" },
      { src: "/images/clients/clients6.webp", alt: "Client 8" },
  { src: "/images/clients/clients5.webp", alt: "Client 7" },
  { src: "/images/clients/logo20.webp", alt: "Client 28" },
  { src: "/images/clients/clients4.webp", alt: "Client 6" },
  { src: "/images/clients/clients3.jpg.webp", alt: "Client 5" },
  { src: "/images/clients/clients2.jpg.webp", alt: "Client 4" },
  { src: "/images/clients/clients1.jpg", alt: "Client 3" },
  { src: "/images/clients/clientlogo7.jpg", alt: "Client 2" },
  { src: "/images/clients/logo23.webp", alt: "Client 31" },
  { src: "/images/clients/logo16.webp", alt: "Client 25" },
  { src: "/images/clients/logo14.webp", alt: "Client 24" },
  { src: "/images/clients/logo12.webp", alt: "Client 22" },
  { src: "/images/clients/logo11.webp", alt: "Client 21" },
  { src: "/images/clients/logo21.webp", alt: "Client 29" },
  { src: "/images/clients/logo13.webp", alt: "Client 23" },
  { src: "/images/clients/logo19.webp", alt: "Client 27" },
  { src: "/images/clients/logo18.webp", alt: "Client 26" },
  { src: "/images/clients/logo10.jpg", alt: "Client 20" },
  { src: "/images/clients/logo9.jpg", alt: "Client 19" },
  { src: "/images/clients/imagecopy3.png", alt: "Client 14" },
  { src: "/images/clients/logo22.webp", alt: "Client 30" },
  { src: "/images/clients/logo27.webp", alt: "Client 34" },
  { src: "/images/clients/logo26.webp", alt: "Client 33" },
  { src: "/images/clients/clients8.webp", alt: "Client 10" },
  { src: "/images/clients/logo25.webp", alt: "Client 32" },
  { src: "/images/clients/clients6.webp", alt: "Client 8" },
  { src: "/images/clients/clients5.webp", alt: "Client 7" },
  { src: "/images/clients/logo20.webp", alt: "Client 28" },
  { src: "/images/clients/clients4.webp", alt: "Client 6" },
  { src: "/images/clients/clients3.jpg.webp", alt: "Client 5" },
  { src: "/images/clients/clients2.jpg.webp", alt: "Client 4" },
  { src: "/images/clients/clients1.jpg", alt: "Client 3" },
  { src: "/images/clients/clientlogo7.jpg", alt: "Client 2" },
  { src: "/images/clients/logo23.webp", alt: "Client 31" },
];

const ROW_C: Logo[] = [

  { src: "/images/clients/logo27.webp", alt: "Client 34" },
  { src: "/images/clients/logo22.webp", alt: "Client 30" },
  { src: "/images/clients/imagecopy3.png", alt: "Client 14" },
  { src: "/images/clients/logo9.jpg", alt: "Client 19" },
  { src: "/images/clients/logo10.jpg", alt: "Client 20" },
  { src: "/images/clients/logo18.webp", alt: "Client 26" },
  { src: "/images/clients/logo19.webp", alt: "Client 27" },
  { src: "/images/clients/logo13.webp", alt: "Client 23" },
  { src: "/images/clients/logo21.webp", alt: "Client 29" },
  { src: "/images/clients/logo11.webp", alt: "Client 21" },
  { src: "/images/clients/logo12.webp", alt: "Client 22" },
  { src: "/images/clients/logo14.webp", alt: "Client 24" },
  { src: "/images/clients/logo16.webp", alt: "Client 25" },
  { src: "/images/crea.jpg", alt: "Client 28" },
     { src: "/images/clients/logo23.webp", alt: "Client 31" },
  { src: "/images/clients/clientlogo7.jpg", alt: "Client 2" },
  { src: "/images/clients/clients1.jpg", alt: "Client 3" },
  { src: "/images/clients/clients2.jpg.webp", alt: "Client 4" },
  { src: "/images/clients/clients3.jpg.webp", alt: "Client 5" },
  { src: "/images/clients/clients4.webp", alt: "Client 6" },
  { src: "/images/clients/logo20.webp", alt: "Client 28" },
  { src: "/images/clients/clients5.webp", alt: "Client 7" },
  { src: "/images/clients/clients6.webp", alt: "Client 8" },
  { src: "/images/clients/logo25.webp", alt: "Client 32" },
  { src: "/images/clients/clients8.webp", alt: "Client 10" },
  { src: "/images/clients/logo26.webp", alt: "Client 33" },
];

function Track({ logos, dir = "normal", duration = 32 }: {
  logos: Logo[];
  dir?: "normal" | "reverse";
  duration?: number;
}) {
  // duplicate the logos once so the marquee loops seamlessly
  const doubled = [...logos, ...logos];
  return (
    <div
      className={styles.track}
      style={{
        // @ts-expect-error CSS var typed as string
        "--duration": `${duration}s`,
        "--direction": dir,
      }}
    >
      {doubled.map((l, i) => (
        <div className={styles.logoCard} key={`${l.src}-${i}`} title={l.alt}>
          <Image
            src={l.src}
            alt={l.alt}
            width={120}
            height={120}
            className={styles.logoImg}
            sizes="(max-width: 768px) 80px, 120px"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientsShowcase() {
  return (
    <section className={styles.section}>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <p className={`mb-1 ${styles.kicker}`}>Join with us</p>
            <h2 className={`mb-2 ${styles.heading}`}>Brands We are Collaborated with </h2>
            <div className={styles.hr} aria-hidden />
          </div>
        </div>

        {/* Marquee belts */}
        <div className="mt-5">
          <div className={styles.belt}>
            <Track logos={ROW_A} dir="normal" duration={34} />
          </div>

          <div className={styles.belt}>
            <Track logos={ROW_B} dir="reverse" duration={36} />
          </div>

          <div className={styles.belt}>
            <Track logos={ROW_C} dir="normal" duration={34} />
          </div>
        </div>

      </div>
    </section>
  );
}
