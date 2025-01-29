// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { project: projectsCollection };
