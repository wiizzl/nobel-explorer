import { fetchData } from "@/features/data/data.action";

export default async function PrizesPage() {
  const prizesData = await fetchData("prize");

  return <main className="min-h-screen">{JSON.stringify(prizesData)}</main>;
}
