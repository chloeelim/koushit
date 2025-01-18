import { Dispatch, SetStateAction, useContext } from "react";

import {
  SetUserStoreContext,
  UserStoreContext,
} from "@/app/providers/user-store-provider";
import { UserPublic } from "@/client";

export interface UserStore extends UserPublic {}

export type UserStoreSetter = Dispatch<SetStateAction<UserStore | undefined>>;

export const useUserStore = () => useContext(UserStoreContext);
export const useSetUserStore = () => useContext(SetUserStoreContext);
