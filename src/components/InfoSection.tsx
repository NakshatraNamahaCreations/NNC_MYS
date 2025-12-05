// src/components/InfoSection.tsx
import Link from "next/link";
import styles from "./InfoSection.module.css";


const data = [
  {
    label: "Our Service",
    links: [
   
      { text: "Mobile App Development Company In Mysore", href: "/service/mobile-app-development-company-in-mysore" },
         { text: "Mobile App Development Company ", href: "/service/mobile-app-development-company" },
      { text: "Website Design Company In Mysore", href: "/service/web-design-company-in-mysore" },
      { text: "2D Animation Company", href: "/service/2d-animation-company" }, //corporate-ad-film-production-company
       
      { text: "E-Commerce Website Development Company In Mysore", href: "/service/ecommerce-website-development-company-in-mysore" },
      { text: "Software Development Company In Mysore", href: "/service/software-development-company-in-mysore" },
       { text: "Social Media Marketing Company In Mysore", href: "/service/social-media-marketing-company-in-mysore" },
        { text: "SEO Services Company In Mysore", href: "/service/seo-service-company-in-mysore" },
         { text: "B2B Marketing Service Company In Mysore", href: "/service/b2b-marketing-service-in-mysore" },
      { text: "Corporate Video Production Company In Mysore", href: "/service/corporate-video-production-in-mysore" },
      { text: "UI/UX Design Company In Mysore", href: "/service/ui-ux-design-company-in-mysore" },
      { text: "2D Animation Company In Mysore", href: "/service/2d-animation-company-in-mysore" },
       { text: "Corporate Ad Film Production Company", href: "/service/corporate-ad-film-production-company" },
        { text: "Website Developers", href: "/service/website-developers" },
         { text: "CMS Development Services", href: "/service/cms-development-services" },
          { text: "Flutter App Development", href: "/service/flutter-app-development-company" },
           { text: "Ios App Development", href: "/service/ios-app-development-company" },
           { text: "Social Media Marketing", href: "/service/social-media-marketing" },
            { text: "Google Ads Management Services", href: "/service/google-ads-management-services" },
    ],
  }
]
const InfoSection = () => {
  return (
    <>
    <footer className={styles["footer-wrapper"]}>
      <div className="container">
        <div className="row">
          {/* Quick Links & Social Media */}
          <div className={`col-md-4 ${styles["footer-column"]}`}>
            <h5 className={styles["footer-title"]}>QUICK LINKS</h5>
            <ul className={styles["footer-links"]}>
              <li><Link className="nav-link" href="/">Home</Link></li>
              <li><Link className="nav-link" href="/about-us">About Us</Link></li>
              <li><Link className="nav-link" href="/service">Services</Link></li>
              <li><Link className="nav-link" href="/our-work">Our Work</Link></li>
              <li><Link className="nav-link" href="/careers">Careers</Link></li>
              <li><Link className="nav-link" href="/contact-us">Contact Us</Link></li>
            </ul>

            <h5 className={`${styles["footer-title"]} mt-4`}>Social Media</h5>
            <div className={styles["footer-social-icons"]}>
              <a
                href="https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/facebook.png" alt="facebook-icon" />
              </a>
              <a
                href="https://www.youtube.com/c/NakshatraNamahaCreations"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/youtubr.png" alt="youtube-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/nakshatra-namaha-creation/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/NNCWebsite.png" alt="linkedin-icon" />
              </a>
              <a
                href="https://www.instagram.com/nnc.digitalmysuru/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/instagram.png" alt="instagram-icon" />
              </a>
              <a
                href="https://x.com/nncbengaluru"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/twitter.png" alt="twitter-icon" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`col-md-4 ${styles["footer-column"]}`}>
            <h5 className={styles["footer-title"]}>CONTACT US</h5>
            <ul className={styles["footer-contacts"]}>
              <li><i className="fas fa-phone" /> +91 9900566466</li>
              <li>
                <i className="fas fa-envelope" />{" "}
                <a href="mailto:info@nakshatranamahacreations.com">
                  info@nakshatranamahacreations.com
                </a>
              </li>
              <li>
                <i className="fas fa-location-dot" />{" "}
                <a
                  href="https://maps.app.goo.gl/wK6ABZzpSUZaYf2U8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>BENGALURU</strong>
                </a>
                <br />
                1st floor, Darshan Plazza, Dwaraka Nagar,
                <br />
                Banashankari, 6th Stage 1st Block,
                <br />
                Channasandra, Bengaluru, Karnataka - 560061
              </li>
              <li>
                <i className="fas fa-location-dot" />{" "}
                <a
                  href="https://maps.app.goo.gl/MRzj1V4QJms5oVEY6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>MYSURU</strong>
                </a>
                <br />
                SUSWANI TOWERS, Akkamahadevi Rd,
                <br />
                JP Nagar 2nd Stage, C-Block,
                <br />
                Mysuru, Karnataka 570008
              </li>
              <li>
                <i className="fas fa-location-dot" />{" "}
                <a
                  href="https://maps.app.goo.gl/wuH74f3KVHujdgMt8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>HYDERABAD</strong>
                </a>
                <br />
                64/2 RT, Prakashnagar, Begumpet,
                <br />
                Hyderabad, Telangana - 500016
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={`col-md-4 ${styles["footer-column"]}`}>
            <h5 className={styles["footer-title"]}>OUR SERVICES</h5>
            <ul className={styles["footer-links"]}>
              <li>
                <Link className="dropdown-item" href="/service/mobile-app-development-company-in-mysore">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/service/ecommerce-website-development-company-in-mysore">
                  Website Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/service/corporate-video-production-in-mysore">
                  Corporate Video Production
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/service/social-media-marketing-company-in-mysore">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/service/ui-ux-design-company-in-mysore">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/service/2d-animation-company-in-mysore">
                  2D Animation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <section className={`${styles.bar} ${styles.themeTeal}`} aria-labelledby="popular-title">
  <div className={styles.inner}>
    <h2 id="popular-title" className={styles.title}>General Website Services</h2>

    <ul className={styles.list}>
      {data.map((row, i) => (
        <li className={styles.row} key={i}>
          <span className={styles.label}>{row.label}:</span>
          <div className={styles.links} aria-label={row.label}>
            {row.links.map((link, j) => (
              <a className={styles.link} href={link.href} key={j}>
                {link.text}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
  <br /><br />
</section>  

    </>
  );
};

export default InfoSection;
