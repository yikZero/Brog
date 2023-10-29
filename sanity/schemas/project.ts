import { defineField, defineType } from "sanity";
import { z } from "zod";

export const Project = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  publishedAt: z.string(),
});

export type Project = z.infer<typeof Project>;

export default defineType({
  name: "project",
  title: "Project",
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
      name: "url",
      title: "Url",
      type: "url",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "date",

      options: {
        dateFormat: "YYYY-MM",
      },
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
