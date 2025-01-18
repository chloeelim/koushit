import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotFoundFallbackProps {
  className?: string;
  asChild?: boolean;
  entityName?: string;
}

const NotFoundFallback = ({
  className,
  asChild,
  entityName,
}: NotFoundFallbackProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 text-center p-8",
        asChild ? "h-full w-full" : "h-screen w-screen ",
        className,
      )}
    >
      <h1 className="text-8xl text-gray-700 font-bold">404</h1>
      <h2 className="text-6xl font-semibold">Not Found</h2>
      <p className="text-lg">
        Uh oh, we couldn't find the {entityName ?? "page"} you're looking for.
        {entityName ? "" : ` Help us check that you've entered the right URL!`}
      </p>
      <div className="mt-4">
        <Button asChild>
          {entityName ? (
            <Link to="..">Back</Link>
          ) : (
            <Link to="/">Return to homepage</Link>
          )}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundFallback;
