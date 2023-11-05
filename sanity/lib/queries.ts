import { groq } from "next-sanity";
import { clientFetch } from "./client";
import { type Menu } from "@/sanity/schemas/menu";
import { type Post } from "@/sanity/schemas/post";
import { type Project } from "@/sanity/schemas/project";

// Get all menus
export const getMenusQuery = () =>
  groq`*[_type == "menu" && defined(slug.current)] | order(order) {
  _id, title, description, slug
}`;

export const getAllMenus = () => clientFetch<Menu[]>(getMenusQuery());

// Get all posts
export const getPostsQuery = (limit?: number) => {
  const slicePart = limit ? ` [0..${limit - 1}]` : "";
  return groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)${slicePart} {
    _id, title, description, publishedAt, slug
  }`;
};

export const getPosts = (limit?: string | number) =>
  clientFetch<Post[]>(getPostsQuery(Number(limit)));

// Get all posts slug for sitemap
export const getPostsSlugQuery = () =>
  groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc).slug.current`;

export const getPostsSlugs = () => clientFetch<string[]>(getPostsSlugQuery());

// Get posts count
export const getPostNumberQuery = () =>
  groq`count(*[_type == "post" && defined(slug.current)])`;

export const getPostsCount = () => clientFetch<number>(getPostNumberQuery());

// Get a single post by its slug
export const getPostQuery = () =>
  groq`*[_type == "post" && slug.current == $slug][0]{ 
  title, publishedAt, "categories": categories[]->title,body[] {
    ...,
    _type == "image" => {
      "url": asset->url,
      "lqip": asset->metadata.lqip,
      "dimensions": asset->metadata.dimensions,
      ...
    }
  },
}`;

export const getPost = (slug: string) =>
  clientFetch<Post>(getPostQuery(), { slug });

// Get all post slugs
export const getPostPathsQuery = () =>
  groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const getPostPaths = () => clientFetch<Post[]>(getPostPathsQuery());

// Get all projects
export const getProjectsQuery = (limit?: number) => {
  const slicePart = limit ? ` [0..${limit - 1}]` : "";
  return groq`*[_type == "project" && defined(url)] | order(publishedAt desc)${slicePart} {
    _id, title, description, url, publishedAt
  }`;
};

export const getProjects = (limit?: string | number) =>
  clientFetch<Project[]>(getProjectsQuery(Number(limit)));

// Get projects count
export const projectNumberQuery = () =>
  groq`count(*[_type == "project" && defined(url)])`;

export const getProjectsCount = () => clientFetch<number>(projectNumberQuery());
