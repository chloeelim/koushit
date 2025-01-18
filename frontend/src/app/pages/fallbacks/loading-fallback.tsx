import { LoadingSpinner } from "@/components/miscellaneous/loading-spinner";

interface LoadingFallbackProps {
  loadingText?: string;
}

const LoadingFallback = ({
  loadingText = "Getting everything ready...",
}: LoadingFallbackProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-y-8 items-center justify-center">
        <LoadingSpinner className="h-24 w-24 border-8 border-t-8" />
        <span className="text-lg font-semibold">{loadingText}</span>
      </div>
    </div>
  );
};

export default LoadingFallback;
