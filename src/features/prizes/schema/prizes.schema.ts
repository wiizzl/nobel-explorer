import { z } from "zod";

const ActionSchema = z.enum(["GET"]);
type Action = z.infer<typeof ActionSchema>;

const RelSchema = z.enum(["laureate", "nobelPrize"]);
type Rel = z.infer<typeof RelSchema>;

const TypesSchema = z.enum(["application/json"]);
type Types = z.infer<typeof TypesSchema>;

const LinksSchema = z.object({
  first: z.string(),
  self: z.string(),
  last: z.string(),
});
type Links = z.infer<typeof LinksSchema>;

const MetaSchema = z.object({
  offset: z.number(),
  limit: z.number(),
  count: z.number(),
  terms: z.string(),
  license: z.string(),
  disclaimer: z.string(),
});
type Meta = z.infer<typeof MetaSchema>;

const CategorySchema = z.object({
  en: z.string(),
  no: z.string().optional(),
  se: z.string().optional(),
});
type Category = z.infer<typeof CategorySchema>;

const FullNameSchema = z.object({
  en: z.string(),
});
type FullName = z.infer<typeof FullNameSchema>;

const NameSchema = z.object({
  en: z.string(),
  no: z.string().optional(),
});
type Name = z.infer<typeof NameSchema>;

const LinkSchema = z.object({
  rel: RelSchema,
  href: z.string(),
  action: ActionSchema,
  types: TypesSchema,
});
type Link = z.infer<typeof LinkSchema>;

const TopMotivationSchema = z.object({
  en: z.string(),
  se: z.string().optional(),
});
type TopMotivation = z.infer<typeof TopMotivationSchema>;

const LaureateSchema = z.object({
  id: z.string(),
  knownName: NameSchema.optional(),
  fullName: FullNameSchema.optional(),
  portion: z.string(),
  sortOrder: z.string(),
  motivation: CategorySchema,
  links: z.array(LinkSchema),
  orgName: NameSchema.optional(),
  nativeName: z.string().optional(),
  acronym: z.string().optional(),
});
type Laureate = z.infer<typeof LaureateSchema>;

const NobelPrizeSchema = z.object({
  awardYear: z.string(),
  category: CategorySchema,
  categoryFullName: CategorySchema,
  dateAwarded: z.string().optional(),
  prizeAmount: z.number(),
  prizeAmountAdjusted: z.number(),
  links: z.array(LinkSchema),
  laureates: z.array(LaureateSchema).optional(),
  topMotivation: TopMotivationSchema.optional(),
});
type NobelPrize = z.infer<typeof NobelPrizeSchema>;

const NobelPrizesSchema = z.object({
  nobelPrizes: z.array(NobelPrizeSchema),
  meta: MetaSchema,
  links: LinksSchema,
});
type NobelPrizes = z.infer<typeof NobelPrizesSchema>;

export type {
  Action,
  Category,
  FullName,
  Laureate,
  Link,
  Links,
  Meta,
  Name,
  NobelPrize,
  NobelPrizes,
  Rel,
  TopMotivation,
  Types,
};

export {
  ActionSchema,
  CategorySchema,
  FullNameSchema,
  LaureateSchema,
  LinkSchema,
  LinksSchema,
  MetaSchema,
  NameSchema,
  NobelPrizeSchema,
  NobelPrizesSchema,
  RelSchema,
  TopMotivationSchema,
  TypesSchema,
};
