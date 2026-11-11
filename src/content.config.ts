// Content collections: each folder in src/content/ holds one .md file per item.
// The schema checks every file's frontmatter, so a typo shows up as a clear build error.
// Add items through the dashboard at /admin, or copy a file from src/content/_templates/.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pattern = '**/[^_]*.md';

// The dashboard saves blank optional fields as "" or null; treat those as "not set".
const blank = (v: unknown) => (v === '' || v === null ? undefined : v);
const optionalText = z.preprocess(blank, z.string().optional());
const optionalUrl = z.preprocess(blank, z.string().url().optional());
const list = <T extends z.ZodTypeAny>(item: T) => z.preprocess((v) => v ?? [], z.array(item));

const projects = defineCollection({
    loader: glob({ pattern, base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        type: z.enum(['school', 'personal']),
        course: optionalText,
        date: z.coerce.date(),
        tags: list(z.string()),
        repo: optionalUrl,
        demo: optionalUrl,
        cover: optionalText,
        screenshots: list(z.object({ src: z.string(), caption: z.preprocess((v) => v ?? '', z.string()) })),
        featured: z.preprocess((v) => v ?? false, z.boolean()),
        snippets: list(
            z.object({
                file: z.string(),
                lang: z.string(),
                note: z.string(),
                code: z.string(),
            }),
        ),
    }),
});

const certificates = defineCollection({
    loader: glob({ pattern, base: './src/content/certificates' }),
    schema: z.object({
        title: z.string(),
        issuer: z.string(),
        date: z.coerce.date(),
        image: optionalText,
        url: optionalUrl,
    }),
});

const achievements = defineCollection({
    loader: glob({ pattern, base: './src/content/achievements' }),
    schema: z.object({
        title: z.string(),
        event: z.string(),
        date: z.coerce.date(),
        description: z.preprocess((v) => v ?? '', z.string()),
    }),
});

export const collections = { projects, certificates, achievements };
