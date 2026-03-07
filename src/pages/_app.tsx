// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";

// your CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "@/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/components/Navbar.css";
import "@/pages/Home.module.css";
import "@/components/InfoSection.module.css";
import "@/pages/MobileBottomBar.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "@/components/Header";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Bootstrap JS (client only)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Google Ads Global Site Tag */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16753423286"
      />

      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'AW-16753423286');
        `}
      </Script>

      <Header />
      <Component {...pageProps} />
    </>
  );
}