import RSS from "rss";
import BrogConfig from '@/brog.config';
import { getPosts } from "@/sanity/lib/queries";

export async function GET() {
  const feed = new RSS({
    title: BrogConfig.BLOG_TITLE,
    description: BrogConfig.WEB_DESCRIPTION,
    site_url: BrogConfig.SITE_URL,
    feed_url: `${BrogConfig.SITE_URL}/feed.xml`,
    language: "zh-CN",
    image_url: `${BrogConfig.SITE_URL}/opengraph-image.png`,
    generator: "PHP 9.0",
  });

  const data = await getPosts(999);
  if (!data) {
    return new Response('Not found', { status: 404 })
  }

  data.forEach((post) => {
    feed.item({
      title: post.title,
      guid: post._id,
      url: `${BrogConfig.SITE_URL}/posts/${post.slug.current}`,
      description: post.description,
      date: new Date(post.publishedAt),
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}

export const revalidate = 3600;