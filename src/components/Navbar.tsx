import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// import "@/components/Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobile, setIsMobile] = useState(false); // SSR-safe default

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize(); // set once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeAll = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="realtive-top bg" style={{ backgroundColor: "#f2f2f2" }}>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light w-100"
        
      >
        <div className="container navbar-container d-flex justify-content-between align-items-center">
          {/* Brand */}
          <Link href="/" className="navbar-brand" onClick={closeAll}>
             <img src="/images/nnclogo.png" alt="Logo" />
          </Link>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler custom-toggler"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Menu */}
          <div
            className={`collapse navbar-collapse justify-content-center ${
              mobileMenuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link" onClick={closeAll}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/about-us" className="nav-link" onClick={closeAll}>
                  About Us
                </Link>
              </li>

              {/* Services dropdown */}
              <li
                className={`nav-item dropdown position-static ${
                  dropdownOpen ? "show" : ""
                }`}
                onMouseEnter={() => {
                  if (!isMobile) {
                    if (dropdownTimer.current)
                      clearTimeout(dropdownTimer.current);
                    setDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile) {
                    dropdownTimer.current = setTimeout(
                      () => setDropdownOpen(false),
                      300
                    );
                  }
                }}
              >
                <div
                  onClick={() => {
                    if (isMobile) setDropdownOpen((v) => !v);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    href="/service"
                    className="nav-link"
                    onClick={() => {
                      if (!isMobile) setDropdownOpen(true);
                    }}
                  >
                    Services <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                  </Link>
                </div>

                <div
                  className={`dropdown-menu py-4 shadow-sm ${
                    dropdownOpen ? "show" : ""
                  }`}
                >
                  <div className="container ramanna">
                    <div className="row">
                      <div className="col-lg-3 col-md-12 text-center border-end">
                        <img
                          src="/images/ecom.jpg"
                          alt="promo"
                          className="img-fluid mb-3"
                          style={{ maxHeight: "120px" }}
                        />
                        <p className="text-muted small">
                          Enhance your business’s online presence using innovative
                          technologies.
                        </p>
                      </div>

                      <div className="col-lg-9 col-md-12">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                              href="/service/mobile-app-development-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              Mobile App Development
                            </Link>
                            <Link
                              href="/service/wordpress-website-development-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              WordPress Website Development
                            </Link>
                            <Link
                              href="/service/ecommerce-website-development-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              E-Commerce Website Development
                            </Link>
                            <Link
                              href="/service/software-development-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              Software Development
                            </Link>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                              href="/service/social-media-marketing-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              Social Media Marketing
                            </Link>
                            <Link
                              href="/service/seo-service-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              SEO Services
                            </Link>
                            <Link
                              href="/service/b2b-marketing-service-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              B2B Marketing Services
                            </Link>
                            <Link
                              href="/service/corporate-video-production-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              Corporate Video Production
                            </Link>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                              href="/service/ui-ux-design-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              UI/UX Design
                            </Link>
                            <Link
                              href="/service/2d-animation-company-in-mysore"
                              className="dropdown-item"
                              onClick={closeAll}
                            >
                              2D Animation
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/our-work" className="nav-link" onClick={closeAll}>
                  Our Work
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs" className="nav-link" onClick={closeAll}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/careers" className="nav-link" onClick={closeAll}>
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-us" className="nav-link" onClick={closeAll}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
