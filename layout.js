
import ScrollToTop from "@/pages/ScrollToTop";
import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
