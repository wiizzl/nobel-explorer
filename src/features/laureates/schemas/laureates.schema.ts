import { z } from "zod";

export const GenderSchema = z.enum(["female", "male"]);
export type Gender = z.infer<typeof GenderSchema>;

export const ActionSchema = z.enum(["GET"]);
export type Action = z.infer<typeof ActionSchema>;

export const ClassElementSchema = z.enum(["laureate facts", "prize summary"]);
export type ClassElement = z.infer<typeof ClassElementSchema>;

export const RelSchema = z.enum(["external", "laureate", "nobelPrize"]);
export type Rel = z.infer<typeof RelSchema>;

export const TypesSchema = z.enum(["application/json", "text/html"]);
export type Types = z.infer<typeof TypesSchema>;

export const PrizeStatusSchema = z.enum(["declined", "received", "restricted"]);
export type PrizeStatus = z.infer<typeof PrizeStatusSchema>;

export const FamilyNameSchema = z.object({
  en: z.string(),
  no: z.string().optional(),
  se: z.string().optional(),
  sameAs: z.union([z.array(z.string()), z.string()]).optional(),
});
export type FamilyName = z.infer<typeof FamilyNameSchema>;

export const YNowSchema = z.object({
  en: z.string(),
  no: z.string().optional(),
  se: z.string().optional(),
  sameAs: z.array(z.string()).optional(),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
});
export type YNow = z.infer<typeof YNowSchema>;

export const FoundedPlaceSchema = z.object({
  city: FamilyNameSchema.optional(),
  country: FamilyNameSchema.optional(),
  cityNow: FamilyNameSchema.optional(),
  countryNow: FamilyNameSchema.optional(),
  continent: FamilyNameSchema.optional(),
  locationString: FamilyNameSchema,
});
export type FoundedPlace = z.infer<typeof FoundedPlaceSchema>;

export const FoundedContinentSchema = z.object({
  en: z.string(),
});
export type FoundedContinent = z.infer<typeof FoundedContinentSchema>;

export const LinkSchema = z.object({
  rel: RelSchema,
  href: z.string(),
  action: ActionSchema,
  types: TypesSchema,
  title: z.string().optional(),
  class: z.array(ClassElementSchema).optional(),
});
export type Link = z.infer<typeof LinkSchema>;

export const AffiliationSchema = z.object({
  name: FamilyNameSchema,
  nameNow: FoundedContinentSchema,
  city: FamilyNameSchema.optional(),
  country: FamilyNameSchema.optional(),
  cityNow: YNowSchema.optional(),
  countryNow: YNowSchema.optional(),
  continent: FoundedContinentSchema.optional(),
  locationString: FamilyNameSchema,
  nativeName: z.string().optional(),
});
export type Affiliation = z.infer<typeof AffiliationSchema>;

export const ResidenceSchema = z.object({
  country: FamilyNameSchema,
  countryNow: FamilyNameSchema.optional(),
  continent: FoundedContinentSchema.optional(),
  locationString: FamilyNameSchema,
  city: FamilyNameSchema.optional(),
  cityNow: FamilyNameSchema.optional(),
});
export type Residence = z.infer<typeof ResidenceSchema>;

export const TopMotivationSchema = z.object({
  en: z.string(),
  se: z.string().optional(),
});
export type TopMotivation = z.infer<typeof TopMotivationSchema>;

export const PenNameOfSchema = z.object({
  fullName: z.string(),
});
export type PenNameOf = z.infer<typeof PenNameOfSchema>;

export const WikidataSchema = z.object({
  id: z.string(),
  url: z.string(),
});
export type Wikidata = z.infer<typeof WikidataSchema>;

export const WikipediaSchema = z.object({
  slug: z.string(),
  english: z.string(),
});
export type Wikipedia = z.infer<typeof WikipediaSchema>;

export const LinksSchema = z.object({
  first: z.string(),
  self: z.string(),
  next: z.string(),
  last: z.string(),
});
export type Links = z.infer<typeof LinksSchema>;

export const MetaSchema = z.object({
  offset: z.number(),
  limit: z.number(),
  count: z.number(),
  terms: z.string(),
  license: z.string(),
  disclaimer: z.string(),
});
export type Meta = z.infer<typeof MetaSchema>;

export const BirthPlaceSchema = z.object({
  city: FamilyNameSchema.optional(),
  country: FamilyNameSchema.optional(),
  cityNow: YNowSchema.optional(),
  countryNow: YNowSchema.optional(),
  continent: FamilyNameSchema.optional(),
  locationString: FamilyNameSchema,
});
export type BirthPlace = z.infer<typeof BirthPlaceSchema>;

export const DeathSchema = z.object({
  date: z.string(),
  place: BirthPlaceSchema,
});
export type Death = z.infer<typeof DeathSchema>;

export const FoundedSchema = z.object({
  date: z.string(),
  place: FoundedPlaceSchema,
});
export type Founded = z.infer<typeof FoundedSchema>;

export const NobelPrizeSchema = z.object({
  awardYear: z.string(),
  category: FamilyNameSchema,
  categoryFullName: FamilyNameSchema,
  sortOrder: z.string(),
  portion: z.string(),
  dateAwarded: z.string(),
  prizeStatus: PrizeStatusSchema,
  motivation: FamilyNameSchema,
  prizeAmount: z.number(),
  prizeAmountAdjusted: z.number(),
  affiliations: z.array(AffiliationSchema).optional(),
  links: z.array(LinkSchema),
  residences: z.array(ResidenceSchema).optional(),
  topMotivation: TopMotivationSchema.optional(),
});
export type NobelPrize = z.infer<typeof NobelPrizeSchema>;

export const BirthSchema = z.object({
  date: z.string(),
  place: BirthPlaceSchema.optional(),
});
export type Birth = z.infer<typeof BirthSchema>;

export const LaureateSchema = z.object({
  id: z.string(),
  knownName: FamilyNameSchema.optional(),
  givenName: FamilyNameSchema.optional(),
  familyName: FamilyNameSchema.optional(),
  fullName: FamilyNameSchema.optional(),
  fileName: z.string(),
  gender: GenderSchema.optional(),
  birth: BirthSchema.optional(),
  wikipedia: WikipediaSchema,
  wikidata: WikidataSchema,
  sameAs: z.array(z.string()),
  links: z.array(LinkSchema),
  nobelPrizes: z.array(NobelPrizeSchema),
  death: DeathSchema.optional(),
  orgName: FamilyNameSchema.optional(),
  acronym: z.string().optional(),
  founded: FoundedSchema.optional(),
  nativeName: z.string().optional(),
  penName: z.string().optional(),
  penNameOf: PenNameOfSchema.optional(),
  foundedCountry: FamilyNameSchema.optional(),
  foundedCountryNow: FamilyNameSchema.optional(),
  foundedContinent: FoundedContinentSchema.optional(),
});
export type Laureate = z.infer<typeof LaureateSchema>;

export const LaureatesSchema = z.object({
  laureates: z.array(LaureateSchema),
  meta: MetaSchema,
  links: LinksSchema,
});
export type Laureates = z.infer<typeof LaureatesSchema>;
