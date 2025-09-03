import Link from "next/link";
import Image from "next/image";
import styles from "@/pages/OurService.module.css"; 

type Props = {
  title: string;
  description: string;
  listItems: string[];
  Details: string;      
  imageSrc: string;      
  detailsLink: string;   
};

export default function OurService({
  title,
  description,
  listItems,
  Details,
  imageSrc,
  detailsLink,
}: Props) {
  return (
    <div className={styles["service-wrapper"]}>
      <div className={styles["service-row"]}>
        
       
        <div className={styles["service-left"]}>
          <h3>{title}</h3>
        </div>

        
        <div className={styles["service-middle"]}>
          <p>{description}</p>
          <ul>
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        
        <div className={styles["service-right"]}>
          <div className={styles["service-img-wrapper"]}>
            <Image
              src={imageSrc}
              alt={title}
              width={480}
              height={320}
            />
          </div>
        </div>
         <Link href={detailsLink} className={styles["service-btn"]}>
            {Details} <i className="fas fa-arrow-right" aria-hidden />
          </Link>
      </div>
    </div>
  );
}
