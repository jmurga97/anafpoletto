import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: z
        .object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            coverImage: z.string().optional(),
            coverAlt: z.string().optional(),
            draft: z.boolean().default(true),
        })
        .superRefine((article, context) => {
            if (article.coverImage && !article.coverAlt?.trim()) {
                context.addIssue({
                    code: z.ZodIssueCode.custom,
                    message:
                        "Añade un texto alternativo cuando uses una imagen de portada.",
                    path: ["coverAlt"],
                });
            }
        }),
});

export const collections = { blog };
