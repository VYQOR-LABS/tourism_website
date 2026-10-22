import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "static.guestcentric.net" },
      { protocol: "https", hostname: "image-tc.galaxy.tf" },
      { protocol: "https", hostname: "swahilibeach.com" },
      { protocol: "https", hostname: "marasaafrica.wpenginepowered.com" },
    ],
  },
};

export default nextConfig;
