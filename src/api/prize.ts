"use server";

import { config } from "@/config";

import { NobelPrize, NobelPrizeResult } from "@/types/api";

const fetchPrize = async (year: NobelPrize["awardYear"], category: string) => {
  const response = await fetch(`${config.api}/nobelPrize/${year}/${category}`);

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return response.json() as NobelPrizeResult;
};

export { fetchPrize };
