// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

// your CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/components/Navbar.css";
import "@/pages/Home.module.css";
import "@/components/InfoSection.module.css";
import "@/pages/MobileBottomBar.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "@/components/Header";

/**
 * Add the gtag typing to the Window interface so TypeScript knows about it.
 * This is file-scoped but affects the global Window type.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sendPageView(url: string) {
  // safe checks for client and gtag presence
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

    // initial page load (guard with window)
    if (typeof window !== "undefined") {
      sendPageView(window.location.pathname + window.location.search);
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
    // include router.events so effect re-attaches correctly if router changes
  }, [router.events]);

  return (
    <>
      {/* Google Analytics */}
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

      <Header />
      <Component {...pageProps} />
    </>
  );
}
