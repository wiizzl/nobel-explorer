import { z } from "zod";

const CitySchema = z.object({
  en: z.string(),
  no: z.string().optional(),
  se: z.string().optional(),
  sameAs: z.string().optional(),
});
type City = z.infer<typeof CitySchema>;

const YNowSchema = z.object({
  en: z.string(),
  no: z.string(),
  se: z.string(),
  sameAs: z.array(z.string()).optional(),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
});
type YNow = z.infer<typeof YNowSchema>;

const NameSchema = z.object({
  en: z.string(),
  se: z.string(),
});
type Name = z.infer<typeof NameSchema>;

const LinkSchema = z.object({
  rel: z.string(),
  href: z.string(),
  action: z.string(),
  types: z.string(),
  title: z.string().optional(),
  class: z.array(z.string()).optional(),
});
type Link = z.infer<typeof LinkSchema>;

const MetaSchema = z.object({
  terms: z.string(),
  license: z.string(),
  disclaimer: z.string(),
});
type Meta = z.infer<typeof MetaSchema>;

const ContinentSchema = z.object({
  en: z.string(),
});
type Continent = z.infer<typeof ContinentSchema>;

const WikidataSchema = z.object({
  id: z.string(),
  url: z.string(),
});
type Wikidata = z.infer<typeof WikidataSchema>;

const WikipediaSchema = z.object({
  slug: z.string(),
  english: z.string(),
});
type Wikipedia = z.infer<typeof WikipediaSchema>;

const PlaceSchema = z.object({
  city: CitySchema.optional(),
  country: CitySchema.optional(),
  cityNow: YNowSchema.optional(),
  countryNow: YNowSchema.optional(),
  continent: CitySchema.optional(),
  locationString: CitySchema,
});
type Place = z.infer<typeof PlaceSchema>;

const AffiliationSchema = z.object({
  name: CitySchema,
  nameNow: ContinentSchema,
  city: CitySchema,
  country: CitySchema,
  cityNow: YNowSchema,
  countryNow: YNowSchema,
  continent: ContinentSchema,
  locationString: CitySchema,
});
type Affiliation = z.infer<typeof AffiliationSchema>;

const BirthSchema = z.object({
  date: z.string(),
  place: PlaceSchema.optional(),
});
type Birth = z.infer<typeof BirthSchema>;

const NobelPrizeSchema = z.object({
  awardYear: z.string(),
  category: CitySchema,
  categoryFullName: CitySchema,
  sortOrder: z.string(),
  portion: z.string(),
  dateAwarded: z.string(),
  prizeStatus: z.string(),
  motivation: CitySchema,
  prizeAmount: z.number(),
  prizeAmountAdjusted: z.number(),
  affiliations: z.array(AffiliationSchema).optional(),
  links: z.array(LinkSchema),
});
type NobelPrize = z.infer<typeof NobelPrizeSchema>;

const LaureateSchema = z.object({
  id: z.string(),
  knownName: NameSchema,
  givenName: NameSchema,
  familyName: NameSchema,
  fullName: NameSchema,
  fileName: z.string(),
  gender: z.string(),
  birth: BirthSchema,
  death: BirthSchema.optional(),
  wikipedia: WikipediaSchema,
  wikidata: WikidataSchema,
  sameAs: z.array(z.string()),
  links: z.array(LinkSchema),
  nobelPrizes: z.array(NobelPrizeSchema),
  meta: MetaSchema,
});
type Laureate = z.infer<typeof LaureateSchema>;

export {
  AffiliationSchema,
  BirthSchema,
  CitySchema,
  ContinentSchema,
  LaureateSchema,
  LinkSchema,
  MetaSchema,
  NameSchema,
  NobelPrizeSchema,
  PlaceSchema,
  WikidataSchema,
  WikipediaSchema,
  YNowSchema,
  type Affiliation,
  type Birth,
  type City,
  type Continent,
  type Laureate,
  type Link,
  type Meta,
  type Name,
  type NobelPrize,
  type Place,
  type Wikidata,
  type Wikipedia,
  type YNow,
};
