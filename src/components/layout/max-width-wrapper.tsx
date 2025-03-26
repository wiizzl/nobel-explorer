import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = (props: MaxWidthWrapperProps) => (
  <div className={cn("h-full mx-auto w-full max-w-screen-2xl px-2.5 md:px-24", props.className)}>{props.children}</div>
);

export { MaxWidthWrapper };
