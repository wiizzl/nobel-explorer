"use client";

import { parseAsString, useQueryStates } from "nuqs";

const useLaureatesFilters = () => {
  return useQueryStates({
    name: parseAsString.withDefault(""),
    sort: parseAsString.withDefault("asc"),
    gender: parseAsString.withDefault(""),
    motivation: parseAsString.withDefault(""),
    affiliation: parseAsString.withDefault(""),
    residence: parseAsString.withDefault(""),
    birthDate: parseAsString.withDefault(""),
    deathDate: parseAsString.withDefault(""),
    birthDateTo: parseAsString.withDefault(""),
    deathDateTo: parseAsString.withDefault(""),
    foundedDate: parseAsString.withDefault(""),
    birthCity: parseAsString.withDefault(""),
    deathCity: parseAsString.withDefault(""),
    birthCountry: parseAsString.withDefault(""),
    deathCountry: parseAsString.withDefault(""),
    birthContinent: parseAsString.withDefault(""),
    deathContinent: parseAsString.withDefault(""),
    foundedCity: parseAsString.withDefault(""),
    foundedCountry: parseAsString.withDefault(""),
    foundedContinent: parseAsString.withDefault(""),
    nobelPrizeYear: parseAsString.withDefault(""),
    yearTo: parseAsString.withDefault(""),
    nobelPrizeCategory: parseAsString.withDefault(""),
  });
};

const usePrizesFilters = () => {
  return useQueryStates({
    sort: parseAsString.withDefault("desc"),
    nobelPrizeYear: parseAsString.withDefault(""),
    yearTo: parseAsString.withDefault(""),
    nobelPrizeCategory: parseAsString.withDefault(""),
  });
};

export { useLaureatesFilters, usePrizesFilters };
