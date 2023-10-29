import { groq } from "next-sanity";
import { clientFetch } from "./client";
import { type Menu } from "@/sanity/schemas/menu";
import { type Post } from "@/sanity/schemas/post";
import { type Project } from "@/sanity/schemas/project";

// Get all menus
export const getMenusQuery =
  () => groq`*[_type == "menu" && defined(slug.current)] | order(order) {
  _id, title, description, slug
}`;

export const getAllMenus = () => {
  return clientFetch<Menu[]>(getMenusQuery());
};

// Get all posts
export function getPostsQuery(limit?: number) {
  const slicePart = limit ? ` [0..${limit - 1}]` : "";
  return groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)${slicePart} {
    _id, title, description, publishedAt, slug
  }`;
}

export const getPosts = (limit?: number) => {
  return clientFetch<Post[]>(getPostsQuery(limit));
};

// Get posts count
export const getPostNumberQuery = () =>
  groq`count(*[_type == "post" && defined(slug.current)])`;

export const getPostsCount = () => {
  return clientFetch<number>(getPostNumberQuery());
};

// Get a single post by its slug
export const getPostQuery =
  () => groq`*[_type == "post" && slug.current == $slug][0]{ 
  title, publishedAt, body
}`;

export const getPost = (slug: string) => {
  return clientFetch<Post>(getPostQuery(), { slug: slug });
}

// Get all post slugs
export const getPostPathsQuery =
  () => groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const getPostPaths = () => {
  return clientFetch<Post[]>(getPostPathsQuery());
}

// Get all projects
export function getProjectsQuery(limit?: number) {
  const slicePart = limit ? ` [0..${limit - 1}]` : "";
  return groq`*[_type == "project" && defined(url)] | order(publishedAt desc)${slicePart} {
    _id, title, description, url, publishedAt
  }`;
}

export const getProjects = (limit?: number) => {
  return clientFetch<Project[]>(getProjectsQuery(limit));
};

// Get projects count
export const projectNumberQuery = () =>
  groq`count(*[_type == "project" && defined(url)])`;

export const getProjectsCount = () => {
  return clientFetch<number>(projectNumberQuery());
};
