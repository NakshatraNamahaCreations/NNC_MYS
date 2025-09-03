"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

type MegaLink = { label: string; href: string };
type MenuItem = {
  label: string;
  href?: string;
  external?: boolean;
  mega?: {
    title: string;
    intro?: string;
    links?: MegaLink[];
    cta?: { label: string; href: string };
  };
};

const MENU: MenuItem[] = [
{ label: "About Us", href: "/about-us" },

  {
    label: "ServiCES",
    mega: {
      title: "Services",
      intro:
        "Creating unique and attractive websites and apps to grow business and deliver real outcomes.",
      links: [
  { label: "Mobile App Development", href: "/service/mobile-app-development-company-in-mysore" },
  { label: "WordPress Website Development", href: "/service/wordpress-website-development-company-in-mysore" },
  { label: "E-Commerce Website Development", href: "/service/ecommerce-website-development-company-in-mysore" },
  { label: "Software Development", href: "/service/software-development-company-in-mysore" },

  { label: "Social Media Marketing", href: "/service/social-media-marketing-company-in-mysore" },
  { label: "SEO Services", href: "/service/seo-service-company-in-mysore" },
  { label: "B2B Marketing Services", href: "/service/b2b-marketing-service-in-mysore" },
  { label: "Corporate Video Production", href: "/service/corporate-video-production-in-mysore" },

  { label: "UI/UX Design", href: "/service/ui-ux-design-company-in-mysore" },
  { label: "2D Animation", href: "/service/2d-animation-company-in-mysore" }
]

    },
  },

  { label: "Our Work", href: "/our-work" },
  { label: "Blog", href: "/blogs" },
   { label: "Careers", href: "/careers" },
   { label: "ContacT US", href: "/contact-us" },
 
];



export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);




  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const heroBottomRef = useRef(0);     // Y-position where hero ends
  const hideOffset = 24;               // small buffer before hiding

  // Measure hero bottom on mount / resize
  useEffect(() => {
    const measure = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        heroBottomRef.current = rect.bottom + window.scrollY;
      } else {
        // fallback: hide only after some pixels if hero not found
        heroBottomRef.current = 300;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll handler: hide on down past hero, show on up
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingDown = y > lastY.current;
        const pastHero = y > heroBottomRef.current - hideOffset;

        if (!pastHero) {
          // while in/above hero, keep header visible
          setVisible(true);
        } else {
          // past hero: hide when scrolling down, show when scrolling up
          setVisible(!goingDown);
        }

        lastY.current = y <= 0 ? 0 : y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);















  // Properly typed timer ref (fixes TS2322)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);

  const primaryLabels = new Set([
    "Where WE'VE donE IT",
    "ServiCES",
    "DigiTAL",
    "InsigHTS",
    "ContacT US",
  ]);

  const closeAll = () => {
    setOpenIdx(null);
    setMobileOpen(false);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  // Detect mobile by breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 991.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    // typed listener (fixes TS7006)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    closeAll();
  }, [pathname]);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenIdx(null);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
     <header
      ref={rootRef}
      className={`${styles.header} ${visible ? "" : styles.headerHidden}`}
    >
      <div className={styles.wrap}>

         <Link href="/" className="navbar-brand" onClick={closeAll}>
            <img src="/images/nnclogo.png" alt="Logo" />
          </Link>

        {/* Burger */}
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop nav */}
        <nav className={styles.navDesktop} aria-label="Primary">
          <ul className={styles.main}>
            {MENU.map((item, i) => {
              const hasMega = !!item.mega;
              const isOpen = openIdx === i;
              const isPrimary = primaryLabels.has(item.label);

              return (
                <li
                  key={item.label}
                  className={`${styles.li} ${isPrimary ? styles.primary : styles.secondary}`}
                  onMouseEnter={() => {
                    if (!hasMega || isMobile) return;
                    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
                    setOpenIdx(i);
                  }}
                  onMouseLeave={() => {
                    if (!hasMega || isMobile) return;
                    hideTimerRef.current = setTimeout(() => setOpenIdx(null), 160);
                  }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      className={styles.topLink}
                    >
                      <span className={styles.bullet} aria-hidden />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                  <button
  className={`${styles.topLink} ${hasMega ? styles.hasDropdown : ""}`}
  aria-haspopup={hasMega ? "true" : undefined}
  aria-expanded={hasMega ? isOpen : undefined}
  onClick={() => {
    if (isMobile) return;
    setOpenIdx(prev => (prev === i ? null : i));
  }}
>
  <span className={styles.bullet} aria-hidden />
  <span>{item.label}</span>
  {hasMega } {/* <-- caret */}
</button>

                  )}

                  {hasMega && (
                    <div className={`${styles.mega} ${isOpen ? styles.megaOpen : ""}`} role="menu">
                      <div className={styles.megaWrap}>
                        <div className={styles.megaIntro}>
                          <h3>{item.mega!.title}</h3>
                          {item.mega!.intro && <p>{item.mega!.intro}</p>}
                          {item.mega!.cta && (
                            <Link href={item.mega!.cta.href} className={styles.cta}>
                              {item.mega!.cta.label}
                              <span className={styles.ctaArrow} />
                            </Link>
                          )}
                        </div>

                        {item.mega!.links && (
                          <ul className={styles.megaLinks}>
                            {item.mega!.links.map(link => (
                              <li key={link.label}>
                                <Link href={link.href}>{link.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile drawer */}
        <aside className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ""}`} aria-hidden={!mobileOpen}>
          <div className={styles.mobileHead}>
            <Link href="/" className={styles.mobileLogo} onClick={closeAll} aria-label="SeekNEO Home">
              <Image src="/seekneo-img/logo/logo.png" alt="SeekNEO" width={132} height={36} />
            </Link>
            <button className={styles.close} onClick={closeAll} aria-label="Close menu">
              close
            </button>
          </div>

          <ul className={styles.mobileList}>
            {MENU.map((item) => (
              <MobileItem key={item.label} item={item} onDone={closeAll} />
            ))}
          </ul>

          <div className={styles.social}>
            <a href="https://www.facebook.com/SeekNeoITSolutions" target="_blank" aria-label="Facebook">FB</a>
            <a href="https://twitter.com/seekneoit" target="_blank" aria-label="Twitter">TW</a>
            <a href="https://www.linkedin.com/company/seekneo-it-solutions" target="_blank" aria-label="LinkedIn">IN</a>
            <a href="https://www.youtube.com/@SeekNeoDigital" target="_blank" aria-label="YouTube">YT</a>
            <a href="https://www.instagram.com/seekneoitsolutions" target="_blank" aria-label="Instagram">IG</a>
          </div>
        </aside>
      </div>
    </header>
  );
}

/* ---------- Mobile sub component ---------- */

function MobileItem({
  item,
  onDone,
}: {
  item: MenuItem;
  onDone: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasMega = !!item.mega;

  if (item.href) {
    return (
      <li className={styles.mobileItem}>
        <Link href={item.href} target={item.external ? "_blank" : undefined} onClick={onDone}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.mobileItem}>
      <button
        className={styles.mobileToggle}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {item.label}
        {hasMega && <i className={styles.caret} aria-hidden />}
      </button>
      {hasMega && open && (
        <div className={styles.mobileMega}>
          <h4>{item.mega!.title}</h4>
          {item.mega!.intro && <p>{item.mega!.intro}</p>}
          {item.mega!.links && (
            <ul className={styles.mobileLinks}>
              {item.mega!.links.map(l => (
                <li key={l.label}>
                  <Link href={l.href} onClick={onDone}>{l.label}</Link>
                </li>
              ))}
            </ul>
          )}
          {item.mega!.cta && (
            <Link href={item.mega!.cta.href} className={styles.cta} onClick={onDone}>
              {item.mega!.cta.label}
              <span className={styles.ctaArrow} />
            </Link>
          )}
        </div>
      )}
    </li>
  );
}
