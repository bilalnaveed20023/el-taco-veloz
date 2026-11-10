import type { NextConfig } from "next";

// PAGES=1 builds a static export for GitHub Pages, served from /el-taco-veloz/
const pages = process.env.PAGES === "1";
const basePath = pages ? "/el-taco-veloz" : "";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.local"],
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(pages && {
    output: "export",
    basePath,
    trailingSlash: true,
    distDir: ".next-pages",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
