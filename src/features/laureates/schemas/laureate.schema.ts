import * as z from "zod";

const CitySchema = z.object({
  en: z.string(),
  no: z.string(),
  se: z.string(),
});
type City = z.infer<typeof CitySchema>;

const YNowSchema = z.object({
  en: z.string(),
  no: z.string(),
  se: z.string(),
  sameAs: z.array(z.string()),
  latitude: z.string(),
  longitude: z.string(),
});
type YNow = z.infer<typeof YNowSchema>;

const FamilyNameSchema = z.object({
  en: z.string(),
  se: z.string(),
});
type FamilyName = z.infer<typeof FamilyNameSchema>;

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
  city: CitySchema,
  country: CitySchema,
  cityNow: YNowSchema,
  countryNow: YNowSchema,
  continent: CitySchema,
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
  place: PlaceSchema,
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
  motivation: FamilyNameSchema,
  prizeAmount: z.number(),
  prizeAmountAdjusted: z.number(),
  affiliations: z.array(AffiliationSchema),
  links: z.array(LinkSchema),
});
type NobelPrize = z.infer<typeof NobelPrizeSchema>;

const LaureateSchema = z.array(
  z.object({
    id: z.string(),
    knownName: FamilyNameSchema,
    givenName: FamilyNameSchema,
    familyName: FamilyNameSchema,
    fullName: FamilyNameSchema,
    fileName: z.string(),
    gender: z.string(),
    birth: BirthSchema,
    wikipedia: WikipediaSchema,
    wikidata: WikidataSchema,
    sameAs: z.array(z.string()),
    links: z.array(LinkSchema),
    nobelPrizes: z.array(NobelPrizeSchema),
    meta: MetaSchema,
  })
);
type Laureate = z.infer<typeof LaureateSchema>;

export type {
  Affiliation,
  Birth,
  City,
  Continent,
  FamilyName,
  Laureate,
  Link,
  Meta,
  NobelPrize,
  Place,
  Wikidata,
  Wikipedia,
  YNow,
};

export {
  AffiliationSchema,
  BirthSchema,
  CitySchema,
  ContinentSchema,
  FamilyNameSchema,
  LaureateSchema,
  LinkSchema,
  MetaSchema,
  NobelPrizeSchema,
  PlaceSchema,
  WikidataSchema,
  WikipediaSchema,
  YNowSchema,
};
