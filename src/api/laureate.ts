"use server";

import { Laureate, LaureateSchema } from "@/features/laureates/schemas/laureate.schema";

import { config } from "@/config";

const fetchLaureate = async (id: Laureate[number]["id"]) => {
  const response = await fetch(`${config.api}/laureate/${id}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  const parsedData = LaureateSchema.parse(data);

  return parsedData;
};

export { fetchLaureate };
