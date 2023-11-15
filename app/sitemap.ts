import { MetadataRoute } from "next";
import BrogConfig from "@/brog.config";
import { allPosts } from "contentlayer/generated";

export default async function Sitemap() {
  const staticMap = [
    {
      url: BrogConfig.SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BrogConfig.SITE_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BrogConfig.SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ] satisfies MetadataRoute.Sitemap;

  const slugs = allPosts.map((post) => post.url);

  const dynamicMap = slugs.map((slug) => ({
    url: `${BrogConfig.SITE_URL}/posts/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticMap, ...dynamicMap];
}
