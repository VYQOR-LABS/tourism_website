import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/webmail",
        destination: "https://wp35.host-ww.net:2096/",
        permanent: false,
      },
    ];
  },
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
