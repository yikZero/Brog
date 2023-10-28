import { groq } from "next-sanity";

// Get all menus
export const menusQuery = groq`*[_type == "menu" && defined(slug.current)] | order(order) {
  _id, title, description, slug
}`;

// Get all posts
export function createPostsQuery(limit?: number) {
  const slicePart = limit ? ` [0..${limit - 1}]` : "";
  return groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)${slicePart} {
    _id, title, description, publishedAt, slug
  }`;
}

// Get posts count
export const postNumberQuery = groq`count(*[_type == "post" && defined(slug.current)])`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  title, body
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all projects
export function createProjectsQuery(limit?: number) {
  const slicePart = limit ? ` [0..${limit - 1}]` : "";
  return groq`*[_type == "project" && defined(url)] | order(publishedAt desc)${slicePart} {
    _id, title, description, url, publishedAt
  }`;
}

// Get projects count
export const projectNumberQuery = groq`count(*[_type == "project" && defined(url)])`;
