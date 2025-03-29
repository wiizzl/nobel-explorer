import { redirect } from "next/navigation";

import { fetchData } from "@/features/data/data.action";

type LaureatePageProps = {
  params: Promise<{ id: string }>;
};

export default async function LaureatePage(props: LaureatePageProps) {
  const { id } = await props.params;
  if (!id) redirect("/laureates");

  const laureateData = await fetchData("laureate", [`id=${id}`]);
  if (!laureateData) redirect("/laureates");

  return <main className="min-h-screen">{JSON.stringify(laureateData)}</main>;
}
