import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultOptions } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import qs from "qs";

import { UserStoreProvider } from "@/app/providers/user-store-provider";
import { client } from "@/client";

const queryClientConfig: DefaultOptions = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
};

interface RootProviderProps {
  children: ReactNode;
}

const RootProvider = ({ children }: RootProviderProps) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryClientConfig }),
  );

  client.setConfig({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    throwOnError: true,
    paramsSerializer: (params) => {
      return qs.stringify(params, { indices: false });
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.DEV && <ReactQueryDevtools />}
      <UserStoreProvider>{children}</UserStoreProvider>
    </QueryClientProvider>
  );
};

export default RootProvider;
