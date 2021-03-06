import React, { SetStateAction, Dispatch } from 'react';
import { ChatbotItem, Session } from 'src/types';

interface GlobalContextState {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  userSession: Session | undefined;
  setUserSession: Dispatch<SetStateAction<Session | undefined>>
  chatbotConnected: ChatbotItem | undefined;
  setChatbotConnected: Dispatch<SetStateAction<ChatbotItem | undefined>>
  isLoginPage: boolean
  setIsLoginPage: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext({} as GlobalContextState);

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export var GlobalContextProvider = function ({
  children,
}: GlobalContextProviderProps) {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  const [userSession, setUserSession] = React.useState<Session | undefined>();
  const [chatbotConnected, setChatbotConnected] = React.useState<ChatbotItem | undefined>();
  const [isLoginPage, setIsLoginPage] = React.useState(true);

  return (
    <GlobalContext.Provider value={{
      isDark,
      setIsDark,
      userSession,
      setUserSession,
      isLoginPage,
      setIsLoginPage,
      chatbotConnected,
      setChatbotConnected,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContextData = () => React.useContext(GlobalContext);
