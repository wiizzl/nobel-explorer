"use server";

import { config } from "@/config";

import { NobelPrizesResult } from "@/types/api";

const fetchPrizes = async (page: number, perPage: number) => {
  const response = await fetch(`${config.api}/nobelPrizes?offset=${(page - 1) * perPage}&limit=${perPage}&sort=desc`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return data as NobelPrizesResult;
};

export { fetchPrizes };
