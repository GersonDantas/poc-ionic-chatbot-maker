/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable vars-on-top */
import { format, subDays } from 'date-fns';
import React, { SetStateAction, Dispatch } from 'react';
import { useGlobalContextData } from '..';

interface PanelLocalContextState {
  initialDate: string;
  setInitialDate: Dispatch<SetStateAction<string>>;
  finalDate: string;
  setFinalDate: Dispatch<SetStateAction<string>>;
}

export const PanelLocalContext = React.createContext(
  {} as PanelLocalContextState,
);

type PanelContextProviderProps = {
  children: React.ReactNode;
};

export var PanelContextProvider = function ({ children }: PanelContextProviderProps) {

  const {userSession} = useGlobalContextData()
  const decreasedDays = subDays(new Date(), 7);

  const [initialDate, setInitialDate] = React.useState<string>(
    format(decreasedDays, 'yyyy-MM-dd'),
  );
  const [finalDate, setFinalDate] = React.useState<string>(
    format(new Date(), 'yyyy-MM-dd'),
  );
  console.log(userSession)

  return (
    <PanelLocalContext.Provider
      value={{
        initialDate,
        setInitialDate,
        finalDate,
        setFinalDate,
      }}
    >
      {children}
    </PanelLocalContext.Provider>
  );
};

export const usePanelLocalContextData = () => React.useContext(PanelLocalContext);
