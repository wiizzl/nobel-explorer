import Link from "next/link";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { config } from "@/config";

const Footer = () => {
  return (
    <footer className="z-50 border-t py-8 mt-3 md:text-start text-center">
      <MaxWidthWrapper>
        <Link href="/" className="font-nobel text-2xl">
          {config.title}
        </Link>
        <p className="text-xs text-muted-foreground mt-2">
          Based on the data provided by the official{" "}
          <Link href={config.credit.url} target="_blank" className="underline">
            {config.credit.name}
          </Link>
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Code can be found on{" "}
          <Link href={config.creator.source} target="_blank" className="underline">
            GitHub
          </Link>
        </p>
      </MaxWidthWrapper>
    </footer>
  );
};

export { Footer };
