import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="size-16 animate-spin text-primary" strokeWidth={1.5} />
    </div>
  );
};

export { Loader };
