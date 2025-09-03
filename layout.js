import "./globals.css";
import ScrollToTop from "@/pages/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
