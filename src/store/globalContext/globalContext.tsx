import React, { SetStateAction, Dispatch } from "react";
import { UserProps } from "src/types";
import { User } from "../dto";
import { users } from "../mocUsers";

interface GlobalContextState {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  // checkLoggedInUser: () => UserProps | undefined;
  // addLoggedInUser: (id: string) => void;
  setUserConnected: Dispatch<SetStateAction<any>>
  userConnected: any;
}

export const GlobalContext = React.createContext({} as GlobalContextState);

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  const [userConnected, setUserConnected] = React.useState<any>()

  // const addLoggedInUser = (id: string) => setUserIdConnected(id);

  // const checkLoggedInUser = () => users.find(existingId);

  // const existingId = (user: User) => user.id === userIdConnected

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark, /* checkLoggedInUser, addLoggedInUser, */ userConnected, setUserConnected }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContextData = () => React.useContext(GlobalContext);
