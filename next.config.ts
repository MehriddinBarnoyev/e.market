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
      "devforum-uploads.s3.dualstack.us-east-2.amazonaws.com",
      "hips.hearstapps.com",
      "www.timeoutabudhabi.com",
      "images.immediate.co.uk",
      "media.licdn.com",
      "s3-ap-southeast-1.amazonaws.com",
      "fbi.cults3d.com",
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  /* config options here */
};

export default nextConfig;
