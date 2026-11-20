import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Jeder Eintrag in src/data/projects.json braucht eine eindeutige "id".
const projekte = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    zeitraum: z.string(),
    titel: z.string(),
    rolle: z.string(),
    ergebnis: z.string(),
    // Kleinere Zahl steht weiter oben. Ohne Angabe: Reihenfolge der Datei.
    reihenfolge: z.number().optional(),
  }),
});

export const collections = { projekte };
