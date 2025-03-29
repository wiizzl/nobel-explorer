"use server";

import { LaureatesSchema } from "@/features/data/schemas/laureate.schema";
import { PrizesSchema } from "@/features/data/schemas/prize.schema";

import { config } from "@/config";

const fetchData = async (endpoint: "laureate" | "prize", parameters?: string[]) => {
  const response = await fetch(`${config.api}/${endpoint}.json${parameters ? `?${parameters?.join("&")}` : ""}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  const parsedData = endpoint === "laureate" ? LaureatesSchema.parse(data) : PrizesSchema.parse(data);

  return parsedData;
};

export { fetchData };
