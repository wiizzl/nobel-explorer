import { z } from "zod";

const GenderSchema = z.enum(["female", "male", "org"]);
export type Gender = z.infer<typeof GenderSchema>;

const CategorySchema = z.enum(["chemistry", "economics", "literature", "medicine", "peace", "physics"]);
export type Category = z.infer<typeof CategorySchema>;

const AffiliationClassSchema = z.object({
  name: z.string(),
  city: z.string().optional(),
  country: z.string().optional(),
});
export type AffiliationClass = z.infer<typeof AffiliationClassSchema>;

const PrizeSchema = z.object({
  year: z.string(),
  category: CategorySchema,
  share: z.string(),
  motivation: z.string(),
  affiliations: z.array(z.union([z.array(z.any()), AffiliationClassSchema])),
  overallMotivation: z.string().optional(),
});
export type Prize = z.infer<typeof PrizeSchema>;

const LaureateSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  surname: z.string().optional(),
  born: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  died: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  bornCountry: z.string().optional(),
  bornCountryCode: z.string().length(2).optional(),
  bornCity: z.string().optional(),
  diedCountry: z.string().optional(),
  diedCountryCode: z.string().length(2).optional(),
  diedCity: z.string().optional(),
  gender: GenderSchema,
  prizes: z.array(PrizeSchema),
});
export type Laureate = z.infer<typeof LaureateSchema>;

const LaureatesSchema = z.object({
  laureates: z.array(LaureateSchema),
});
export type Laureates = z.infer<typeof LaureatesSchema>;

export { AffiliationClassSchema, CategorySchema, GenderSchema, LaureateSchema, LaureatesSchema, PrizeSchema };
