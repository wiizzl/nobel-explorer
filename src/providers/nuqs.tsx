import { NuqsAdapter } from "nuqs/adapters/next/app";

type NuqsProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export default function NuqsProvider(props: NuqsProviderProps) {
  return <NuqsAdapter>{props.children}</NuqsAdapter>;
}
