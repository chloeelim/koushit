import { queryOptions } from "@tanstack/react-query";

import { getUserAuthSessionGet } from "@/client";

export const authQueries = {
  validateSession: queryOptions({
    queryKey: ["auth", "session"],
    queryFn: getUserAuthSessionGet,
    staleTime: 0,
  }),
};
