import { Dispatch, SetStateAction, useContext } from "react";

import {
  SetUserStoreContext,
  UserStoreContext,
} from "@/app/providers/user-store-provider";
import { User } from "@/types/user";

export interface UserStore extends User {}

export type UserStoreSetter = Dispatch<SetStateAction<UserStore | undefined>>;

export const useUserStore = () => useContext(UserStoreContext);
export const useSetUserStore = () => useContext(SetUserStoreContext);
