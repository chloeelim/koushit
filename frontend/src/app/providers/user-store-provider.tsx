import { createContext, ReactNode, useState } from "react";

import { UserStore, UserStoreSetter } from "@/app/providers/user-store";

export const UserStoreContext = createContext<UserStore | undefined>(undefined);
export const SetUserStoreContext = createContext<UserStoreSetter>(() => {});

export const UserStoreProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<UserStore>();
  return (
    <UserStoreContext.Provider value={user}>
      <SetUserStoreContext.Provider value={setUser}>
        {children}
      </SetUserStoreContext.Provider>
    </UserStoreContext.Provider>
  );
};
