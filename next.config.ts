import type { NextConfig } from "next";

const domains = [
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
  "target.scene7.com",
  "s3-ap-southeast-1.amazonaws.com",
  "fbi.cults3d.com",
  "live-production.wcms.abc-cdn.net.au",
  "www.bluent.com",
  "styles.redditmedia.com",
  "play-lh.googleusercontent.com",
  "cdn.mos.cms.futurecdn.net",
  "assets.easports.com",
  "cdn.callofduty.com",
  "static3.srcdn.com",
  "cdn2.unrealengine.com",
  "cdn.gamer-network.net",
  "wow.zamimg.com",
  "i.ytimg.com",
  "coc.guide",
  "cdn.mos.cms.futurecdn.net", // Minecraft
  "assets.easports.com", // FIFA 24
  "cdn.callofduty.com", // Call of Duty
  "static3.srcdn.com", // Valorant
  "static.wikia.nocookie.net", // Roblox
  "cdn2.unrealengine.com", // Fortnite
  "cdn.gamer-network.net", // Apex Legends
  "wow.zamimg.com",
  "encrypted-tbn0.gstatic.com", // World of Warcraft
  "i.ytimg.com", // PUBG
  "coc.guide", // Clash of Clans
  "www.albiononline.com", // Albion Online
  "assets.rockpapershotgun.com", // Dota 2
  "cdn.loltracker.gg", // League of Legends
  "cdn2.unrealengine.com", // Counter-Strike
  "www.ubisoft.com",
  "wallpapers.com",
  "platform.polygon.com",
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
