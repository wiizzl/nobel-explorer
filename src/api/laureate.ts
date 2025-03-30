"use server";

import { config } from "@/config";

import { Laureate, LaureateResult } from "@/types/api";

const fetchLaureate = async (id: Laureate["id"]) => {
  const response = await fetch(`${config.api}/laureate/${id}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return data as LaureateResult;
};

export { fetchLaureate };
