import { defineField, defineType } from "sanity";
import { z } from "zod";

export const Menu = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  slug: z.object({
    _type: z.string(),
    current: z.string(),
  }),
});

export type Menu = z.infer<typeof Menu>;

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
