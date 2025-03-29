import { fetchData } from "@/features/data/data.action";

export default async function LaureatesPage() {
  const laureatesData = await fetchData("laureate");

  console.log("Laureates Data:", laureatesData);

  return <main className="min-h-screen"></main>;
}
