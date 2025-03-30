"use server";

import { config } from "@/config";

import { LaureatesResult } from "@/types/api";

const fetchLaureates = async (page: number, perPage: number, parameters?: string[]) => {
  const queryParams = parameters?.map((param) => `${param}`).join("&");

  const response = await fetch(
    `${config.api}/laureates?offset=${(page - 1) * perPage}&limit=${perPage}${parameters ? `&${queryParams}` : ""}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return data as LaureatesResult;
};

export { fetchLaureates };
