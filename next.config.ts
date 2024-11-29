import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "r1creative.net",
      "download.logo.wine",
      "crystalpng.com",
      "logos-world.net",
      "static.wikia.nocookie.net",
      "preview.redd.it",
      "cdn.vectorstock.com",
      "upload.wikimedia.org",
      "pbs.twimg.com",
      "static.vecteezy.com",
      "img.freepik.com",
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  /* config options here */
};

export default nextConfig;
