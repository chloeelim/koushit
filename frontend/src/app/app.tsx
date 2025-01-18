import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import MainErrorFallback from "@/app/pages/fallbacks/error-fallback";
import LoadingFallback from "@/app/pages/fallbacks/loading-fallback";
import RootProvider from "@/app/providers/root-provider";
import AppRouter from "@/app/routing/app-router";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <RootProvider>
          <AppRouter />
          <Toaster
            richColors
            closeButton
            position="top-right"
            toastOptions={{}}
            theme="light"
          />
        </RootProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
