"use server";

import { config } from "@/config";

import { NobelPrizesResult } from "@/types/api";

interface Parameter {
  key: string;
  value: string;
}

const fetchPrizes = async (page: number, perPage: number, parameters?: Parameter[]) => {
  const queryParams = parameters?.map((param) => `${param.key}=${param.value}`).join("&");

  const response = await fetch(
    `${config.api}/nobelPrizes?offset=${(page - 1) * perPage}&limit=${perPage}${parameters ? `&${queryParams}` : ""}`,
  );

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return response.json() as NobelPrizesResult;
};

export { fetchPrizes };
