import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/about",
  "/accommodation",
  "/blog",
  "/booking",
  "/contact",
  "/destinations",
  "/experiences",
  "/faq",
  "/flights",
  "/gallery",
  "/privacy-policy",
  "/terms",
  "/tours",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    ...staticRoutes,
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...destinations.map((destination) => `/destinations/${destination.slug}`),
    ...tours.map((tour) => `/tours/${tour.slug}`),
  ];

  return urls.map((path) => ({ url: new URL(path, SITE_URL).toString() }));
}