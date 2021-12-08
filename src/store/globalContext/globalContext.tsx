import React from 'react';
import { ChatbotItem, Session, setStateType } from 'src/types';

interface GlobalContextState {
  isDark: boolean;
  setIsDark: setStateType<boolean>;
  userSession: Session | undefined;
  setUserSession: setStateType<Session | undefined>
  chatbotConnected: ChatbotItem | undefined;
  setChatbotConnected: setStateType<ChatbotItem | undefined>
  isLoginPage: boolean
  setIsLoginPage: setStateType<boolean>;
  isLoading: boolean
  setIsLoading: setStateType<boolean>;
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
  const [isLoading, setIsLoading] = React.useState(false);
  
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
      isLoading,
      setIsLoading
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContextData = () => React.useContext(GlobalContext);
