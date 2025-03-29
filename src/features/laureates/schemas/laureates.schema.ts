import { z } from "zod";

const GenderSchema = z.enum(["female", "male"]);
type Gender = z.infer<typeof GenderSchema>;

const ActionSchema = z.enum(["GET"]);
type Action = z.infer<typeof ActionSchema>;

const ClassElementSchema = z.enum(["laureate facts", "prize summary"]);
type ClassElement = z.infer<typeof ClassElementSchema>;

const RelSchema = z.enum(["external", "laureate", "nobelPrize"]);
type Rel = z.infer<typeof RelSchema>;

const TypesSchema = z.enum(["application/json", "text/html"]);
type Types = z.infer<typeof TypesSchema>;

const PrizeStatusSchema = z.enum(["declined", "received", "restricted"]);
type PrizeStatus = z.infer<typeof PrizeStatusSchema>;

const FamilyNameSchema = z.object({
  en: z.string(),
  no: z.string().optional(),
  se: z.string().optional(),
  sameAs: z.union([z.array(z.string()), z.string()]).optional(),
});
type FamilyName = z.infer<typeof FamilyNameSchema>;

const YNowSchema = z.object({
  en: z.string(),
  no: z.string().optional(),
  se: z.string().optional(),
  sameAs: z.array(z.string()).optional(),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
});
type YNow = z.infer<typeof YNowSchema>;

const FoundedPlaceSchema = z.object({
  city: FamilyNameSchema.optional(),
  country: FamilyNameSchema.optional(),
  cityNow: FamilyNameSchema.optional(),
  countryNow: FamilyNameSchema.optional(),
  continent: FamilyNameSchema.optional(),
  locationString: FamilyNameSchema,
});
type FoundedPlace = z.infer<typeof FoundedPlaceSchema>;

const FoundedContinentSchema = z.object({
  en: z.string(),
});
type FoundedContinent = z.infer<typeof FoundedContinentSchema>;

const LinkSchema = z.object({
  rel: RelSchema,
  href: z.string(),
  action: ActionSchema,
  types: TypesSchema,
  title: z.string().optional(),
  class: z.array(ClassElementSchema).optional(),
});
type Link = z.infer<typeof LinkSchema>;

const AffiliationSchema = z.object({
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
type Affiliation = z.infer<typeof AffiliationSchema>;

const ResidenceSchema = z.object({
  country: FamilyNameSchema,
  countryNow: FamilyNameSchema.optional(),
  continent: FoundedContinentSchema.optional(),
  locationString: FamilyNameSchema,
  city: FamilyNameSchema.optional(),
  cityNow: FamilyNameSchema.optional(),
});
type Residence = z.infer<typeof ResidenceSchema>;

const TopMotivationSchema = z.object({
  en: z.string(),
  se: z.string().optional(),
});
type TopMotivation = z.infer<typeof TopMotivationSchema>;

const PenNameOfSchema = z.object({
  fullName: z.string(),
});
type PenNameOf = z.infer<typeof PenNameOfSchema>;

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

const LinksSchema = z.object({
  first: z.string(),
  self: z.string(),
  next: z.string(),
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

const BirthPlaceSchema = z.object({
  city: FamilyNameSchema.optional(),
  country: FamilyNameSchema.optional(),
  cityNow: YNowSchema.optional(),
  countryNow: YNowSchema.optional(),
  continent: FamilyNameSchema.optional(),
  locationString: FamilyNameSchema,
});
type BirthPlace = z.infer<typeof BirthPlaceSchema>;

const DeathSchema = z.object({
  date: z.string(),
  place: BirthPlaceSchema,
});
type Death = z.infer<typeof DeathSchema>;

const FoundedSchema = z.object({
  date: z.string(),
  place: FoundedPlaceSchema,
});
type Founded = z.infer<typeof FoundedSchema>;

const NobelPrizeSchema = z.object({
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
type NobelPrize = z.infer<typeof NobelPrizeSchema>;

const BirthSchema = z.object({
  date: z.string(),
  place: BirthPlaceSchema.optional(),
});
type Birth = z.infer<typeof BirthSchema>;

const LaureateSchema = z.object({
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
type Laureate = z.infer<typeof LaureateSchema>;

const LaureatesSchema = z.object({
  laureates: z.array(LaureateSchema),
  meta: MetaSchema,
  links: LinksSchema,
});
type Laureates = z.infer<typeof LaureatesSchema>;

export type {
  Action,
  Affiliation,
  Birth,
  BirthPlace,
  ClassElement,
  Death,
  FamilyName,
  Founded,
  FoundedContinent,
  FoundedPlace,
  Gender,
  Laureate,
  Laureates,
  Link,
  Links,
  Meta,
  NobelPrize,
  PenNameOf,
  PrizeStatus,
  Rel,
  Residence,
  TopMotivation,
  Types,
  Wikidata,
  Wikipedia,
  YNow,
};

export {
  ActionSchema,
  AffiliationSchema,
  BirthPlaceSchema,
  BirthSchema,
  ClassElementSchema,
  DeathSchema,
  FamilyNameSchema,
  FoundedContinentSchema,
  FoundedPlaceSchema,
  FoundedSchema,
  GenderSchema,
  LaureateSchema,
  LaureatesSchema,
  LinkSchema,
  LinksSchema,
  MetaSchema,
  NobelPrizeSchema,
  PenNameOfSchema,
  PrizeStatusSchema,
  RelSchema,
  ResidenceSchema,
  TopMotivationSchema,
  TypesSchema,
  WikidataSchema,
  WikipediaSchema,
  YNowSchema,
};
