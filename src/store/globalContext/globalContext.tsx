import React, { SetStateAction, Dispatch } from "react";
import { User } from "../dto";

interface GlobalContextState {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  userConnected: User | undefined;
  setUserConnected: Dispatch<SetStateAction<User | undefined>>
  isLoginPage: boolean
  setIsLoginPage: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext({} as GlobalContextState);

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  const [userConnected, setUserConnected] = React.useState<User | undefined>()
  const [isLoginPage, setIsLoginPage] = React.useState(true)

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark, userConnected, setUserConnected, isLoginPage, setIsLoginPage }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContextData = () => React.useContext(GlobalContext);
