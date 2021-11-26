import React, { SetStateAction, Dispatch } from "react";
import { Session } from "src/types";

interface GlobalContextState {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  userSession: Session | undefined;
  setUserSession: Dispatch<SetStateAction<Session | undefined>>
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
  const [userSession, setUserSession] = React.useState<Session | undefined>()
  const [isLoginPage, setIsLoginPage] = React.useState(true)

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark, userSession, setUserSession, isLoginPage, setIsLoginPage }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContextData = () => React.useContext(GlobalContext);
