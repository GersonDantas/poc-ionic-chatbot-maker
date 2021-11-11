import React, { SetStateAction, Dispatch } from "react";
import { UserProps } from "src/types";

interface GlobalContextState {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  checkLoggedInUser: () => UserProps;
  addLoggedInUser: (user: UserProps) => void;
}

export const GlobalContext = React.createContext({} as GlobalContextState);

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  const [userConected, setUserConected] = React.useState<UserProps>()

  const addLoggedInUser = (user: UserProps): void => {
    setUserConected(user);
  }

  const checkLoggedInUser = (): UserProps => {
    return userConected!;
  }

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark, checkLoggedInUser, addLoggedInUser }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContextData = () => React.useContext(GlobalContext);
