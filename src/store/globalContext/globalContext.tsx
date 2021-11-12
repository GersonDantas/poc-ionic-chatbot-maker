import React, { SetStateAction, Dispatch } from "react";
import { UserProps } from "src/types";
import { User } from "../dto";
import { users } from "../mocUsers";

interface GlobalContextState {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  // checkLoggedInUser: () => UserProps | undefined;
  // addLoggedInUser: (id: string) => void;
  // setUserIdConected: Dispatch<SetStateAction<string | undefined>>
  // userIdConected: string | undefined;
}

export const GlobalContext = React.createContext({} as GlobalContextState);

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  // const [userIdConected, setUserIdConected] = React.useState<string | undefined>()

  // const addLoggedInUser = (id: string) => setUserIdConected(id);

  // const checkLoggedInUser = () => users.find(existingId);

  // const existingId = (user: User) => user.id === userIdConected

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark/* , checkLoggedInUser, addLoggedInUser, userIdConected, setUserIdConected */ }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContextData = () => React.useContext(GlobalContext);
