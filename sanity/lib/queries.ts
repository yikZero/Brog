import { groq } from "next-sanity";

// Get all menus
export const menusQuery = groq`*[_type == "menu" && defined(slug.current)]{
  _id, title, description, slug
}`;

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, description, publishedAt, slug
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  title, body
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all projects
export const projectsQuery = groq`*[_type == "project" && defined(url)] | order(publishedAt desc) {
  _id, title, description, url, publishedAt
}`;