"use server";

import { config } from "@/config";

import { NobelPrize, NobelPrizeResult } from "@/types/api";

const fetchPrize = async (year: NobelPrize["awardYear"]) => {
  const response = await fetch(`${config.api}/nobelPrize/${year}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return data as NobelPrizeResult;
};

export { fetchPrize };
