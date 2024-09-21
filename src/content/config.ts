import { defineCollection, z } from 'astro:content';

// Definir la colección de 'posts'
const posts = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
  }),
});

export const collections = { posts };
