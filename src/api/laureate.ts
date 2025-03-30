"use server";

import { config } from "@/config";

import { Laureate, LaureateResult } from "@/types/api";

const fetchLaureate = async (id: Laureate["id"]) => {
  const response = await fetch(`${config.api}/laureate/${id}`);

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return response.json() as LaureateResult;
};

export { fetchLaureate };
