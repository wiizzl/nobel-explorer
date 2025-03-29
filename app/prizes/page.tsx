import { fetchData } from "@/features/data/data.action";

export default async function PrizesPage() {
  const prizesData = await fetchData("prize");

  console.log("Prizes Data:", prizesData);

  return <main className="min-h-screen"></main>;
}
