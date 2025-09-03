// src/pages/_app.tsx
import type { AppProps } from "next/app";
// pages/_app.js (Pages Router)
import 'bootstrap/dist/css/bootstrap.min.css';


// Global styles
import "@/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/Navbar.css";   // if you made Navbar.css global
import "@/pages/Home.module.css";         // move Home.css to src/styles/Home.css
import "@/components/InfoSection.module.css"; 
import "@/pages/MobileBottomBar.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Bootstrap JS on client only
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
