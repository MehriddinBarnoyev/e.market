import type { NextConfig } from "next";

const domains = [
  "target.scene7.com",
  "cdn-icons-png.flaticon.com",
  "encrypted-tbn0.gstatic.com",
  "wallpapers.com",
  "r1creative.net",
  "devforum-uploads.s3.dualstack.us-east-2.amazonaws.com",
  "files.oaiusercontent.com",
  "logos-world.net",
  "static.wikia.nocookie.net",
  "preview.redd.it",
  "cdn.vectorstock.com",
  "upload.wikimedia.org",
  "pbs.twimg.com",
  "static.vecteezy.com",
  "img.freepik.com",
  "images.immediate.co.uk",
  "thumbs.dreamstime.com",
];
const nextConfig: NextConfig = {
  images: {
    domains: [...domains],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  /* config options here */
};

export default nextConfig;
