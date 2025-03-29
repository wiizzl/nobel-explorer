"use server";

import { LaureatesSchema } from "@/features/laureates/schemas/laureates.schema";

import { config } from "@/config";

const fetchLaureates = async (page: number, perPage: number) => {
  const response = await fetch(`${config.api}/laureates?offset=${page}&limit=${perPage}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  const parsedData = LaureatesSchema.parse(data);

  return parsedData;
};

export { fetchLaureates };
