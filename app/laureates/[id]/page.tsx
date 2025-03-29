import { redirect } from "next/navigation";

type LaureatePageProps = {
  params: Promise<{ id: string }>;
};

export default async function LaureatePage(props: LaureatePageProps) {
  const { id } = await props.params;
  if (!id) redirect("/laureates");

  return <main className="min-h-screen">{id}</main>;
}
