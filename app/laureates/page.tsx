import { fetchData } from "@/features/data/data.action";

export default async function LaureatesPage() {
  const laureatesData = await fetchData("laureate");

  return <main className="min-h-screen">{JSON.stringify(laureatesData)}</main>;
}
