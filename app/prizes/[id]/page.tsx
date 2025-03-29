import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Prize",
};

type PrizePageProps = {
  params: Promise<{ id: string }>;
};

export default async function PrizePage(props: PrizePageProps) {
  const { id } = await props.params;
  if (!id) redirect("/prizes");

  return <main className="min-h-screen">{id}</main>;
}
