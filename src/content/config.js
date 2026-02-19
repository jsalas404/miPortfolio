import { defineCollection, z } from "astro:content"

// "z" es un schema de validación para los datos del blog
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }