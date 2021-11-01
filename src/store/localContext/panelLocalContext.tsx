import React, { SetStateAction, Dispatch } from "react";
import {format, addDays} from 'date-fns';

interface PanelLocalContextState {
  initialDate: string;
  setInitialDate: Dispatch<SetStateAction<string>>;
  finalDate: string;
  setFinalDate: Dispatch<SetStateAction<string>>;
}

export const PanelLocalContext = React.createContext({} as PanelLocalContextState);

type PanelContextProviderProps = {
  children: React.ReactNode;
};

export function PanelContextProvider({ children }: PanelContextProviderProps) {
  const decreasedDays = addDays(new Date(), -7);
  
  const [initialDate, setInitialDate] = React.useState<string>(format(decreasedDays, "yyyy-MM-dd"));
  const [finalDate, setFinalDate] = React.useState<string>(format(new Date(), "yyyy-MM-dd"));
  return (
    <PanelLocalContext.Provider
      value={{
        initialDate,
        setInitialDate,
        finalDate,
        setFinalDate,
      }}
    >{children}</PanelLocalContext.Provider>
  );
}

export const usePanelLocalContextData = () =>
  React.useContext(PanelLocalContext);

