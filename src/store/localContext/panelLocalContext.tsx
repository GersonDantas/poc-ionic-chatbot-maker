import { subDays } from 'date-fns';
import React, { useState } from 'react';
import { setStateType } from 'src/types';
import { formatUSDate } from 'src/utils';
interface PanelLocalContextState {
  initialDate: string;
  setInitialDate: setStateType<string>;
  finalDate: string;
  setFinalDate: setStateType<string>;
}

export const PanelLocalContext = React.createContext(
  {} as PanelLocalContextState,
);

type PanelContextProviderProps = {
  children: React.ReactNode;
};

export var PanelContextProvider = function ({ children }: PanelContextProviderProps) {


  const decreasedDays = subDays(new Date(), 7);

  const [initialDate, setInitialDate] = useState<string>(
    formatUSDate(decreasedDays),
  );
  const [finalDate, setFinalDate] = useState<string>(
    formatUSDate(new Date()),
  );

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
