"use server";

import { config } from "@/config";

import { Laureate } from "@/types/api";

const fetchLaureate = async (id: Laureate["id"]) => {
  const response = await fetch(`${config.api}/laureate/${id}`);

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  const data = await response.json();

  return data as Laureate[];
};

export { fetchLaureate };
