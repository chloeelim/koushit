import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import LoadingFallback from "@/app/pages/fallbacks/loading-fallback";
import { useSetUserStore, useUserStore } from "@/app/providers/user-store";
import UnauthenticatedApp from "@/app/routing/unauthenticated-app";
import DefaultFallbackLayout from "@/components/layout/default-fallback-layout";
import { authQueries } from "@/modules/auth/query-factory";

import AuthenticatedApp from "./authenticated-app";

const AppRouter = () => {
  const user = useUserStore();
  const setUser = useSetUserStore();
  const { data, isLoading, isSuccess, isError } = useQuery(
    authQueries.validateSession,
  );

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data.data);
    }
  }, [isSuccess, data, setUser]);

  if (isLoading || (isSuccess && !user)) {
    return <DefaultFallbackLayout children={<LoadingFallback />} />;
  } else if (!user && isError) {
    return <UnauthenticatedApp />;
  }

  return <AuthenticatedApp />;
};

export default AppRouter;
