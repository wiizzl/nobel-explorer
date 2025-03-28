"use server";

import { config } from "@/config";

const fetchData = async (endpoint: string) => {
  const response = await fetch(`${config.api}/${endpoint}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error while fetching data: ${response.statusText}`);
  }

  return data;
};

export { fetchData };
