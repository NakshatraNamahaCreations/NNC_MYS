// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

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

function sendPageView(url: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", "G-KP1NN4CK4R", {
      page_path: url,
    });
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // bootstrap JS (client-only)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // pageview tracking on route change
    const handleRouteChange = (url: string) => sendPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    // initial page load
    if (typeof window !== "undefined") {
      sendPageView(window.location.pathname + window.location.search);
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-base" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KRN4FTRP');
        `}
      </Script>

      {/* Google Analytics (direct gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KP1NN4CK4R"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-KP1NN4CK4R', { send_page_view: false });
        `}
      </Script>

      {/* GTM noscript fallback (placed near top of body tree) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KRN4FTRP"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Header />
      <Component {...pageProps} />
    </>
  );
}
