// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
    // output: 'export' ,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: { unoptimized: true } // optional; you can remove this—plugin handles images
};
export default nextConfig;
  