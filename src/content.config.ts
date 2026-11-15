import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Her not src/content/defter/ içinde bir .md ya da .mdx dosyası.
const defter = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/defter' }),
  schema: z.object({
    baslik: z.string(),
    ozet: z.string(),
    kategori: z.enum(['yoneylem', 'istatistik', 'francais', 'yazi']),
    tarih: z.coerce.date(),
    durum: z.enum(['yayinda', 'taslak']).default('yayinda'),
    oynanabilir: z.boolean().default(false),
  }),
});

export const collections = { defter };
