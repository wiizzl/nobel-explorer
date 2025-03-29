"use server";

import { NobelPrizesSchema } from "@/features/prizes/schema/prizes.schema";

import { config } from "@/config";

const fetchPrizes = async (page: number, perPage: number) => {
  const response = await fetch(`${config.api}/nobelPrizes?offset=${page}&limit=${perPage}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  const parsedData = NobelPrizesSchema.parse(data);

  return parsedData;
};

export { fetchPrizes };
