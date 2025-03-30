"use server";

import { config } from "@/config";

import { LaureatesResult } from "@/types/api";

interface Parameter {
  key: string;
  value: string;
}

const fetchLaureates = async (page: number, pageSize: number, parameters?: Parameter[]) => {
  const queryParams = parameters?.map((param) => `${param.key}=${param.value}`).join("&");

  const response = await fetch(
    `${config.api}/laureates?offset=${(page - 1) * pageSize}&limit=${pageSize}${parameters ? `&${queryParams}` : ""}`
  );

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return response.json() as LaureatesResult;
};

export { fetchLaureates };
