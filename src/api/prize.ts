"use server";

import { config } from "@/config";

import { NobelPrize } from "@/types/api";

const fetchPrize = async (category: string, year: NobelPrize["awardYear"]) => {
  const response = await fetch(`${config.api}/nobelPrize/${year}/${category}`);

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  const data = await response.json();

  return data as NobelPrize[];
};

export { fetchPrize };
