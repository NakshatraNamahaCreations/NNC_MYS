
import ScrollToTop from "@/pages/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
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
