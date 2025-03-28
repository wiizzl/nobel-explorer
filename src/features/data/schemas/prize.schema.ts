import { z } from "zod";

const LaureateSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  surname: z.string().optional(),
  motivation: z.string(),
  share: z.string(),
});
export type Laureate = z.infer<typeof LaureateSchema>;

const CategorySchema = z.enum(["chemistry", "economics", "literature", "medicine", "peace", "physics"]);
export type Category = z.infer<typeof CategorySchema>;

const PrizeSchema = z.object({
  year: z.string(),
  category: CategorySchema,
  laureates: z.array(LaureateSchema).optional(),
  overallMotivation: z.string().optional(),
});
export type Prize = z.infer<typeof PrizeSchema>;

const PrizesSchema = z.object({
  prizes: z.array(PrizeSchema),
});
export type Prizes = z.infer<typeof PrizesSchema>;

export { CategorySchema, LaureateSchema, PrizeSchema, PrizesSchema };
