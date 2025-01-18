import { queryOptions } from "@tanstack/react-query";

export const authQueries = {
  validateSession: queryOptions({
    queryKey: ["system", "auth", "sessions"],
    queryFn: () => {}, // TODO
    staleTime: 0,
  }),
};
