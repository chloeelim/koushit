import { queryOptions } from "@tanstack/react-query";

import { getUserAuthSessionGet } from "@/client";

export const authQueries = {
  validateSession: queryOptions({
    queryKey: ["auth", "sessions"],
    queryFn: getUserAuthSessionGet,
    staleTime: 0,
  }),
};
