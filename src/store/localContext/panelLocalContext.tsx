import React, { SetStateAction, Dispatch } from "react";
import { format, subDays } from "date-fns";
import pt from "date-fns/locale/pt-BR";

interface PanelLocalContextState {
  initialDate: string;
  setInitialDate: Dispatch<SetStateAction<string>>;
  finalDate: string;
  setFinalDate: Dispatch<SetStateAction<string>>;
}

export const PanelLocalContext = React.createContext(
  {} as PanelLocalContextState
);

type PanelContextProviderProps = {
  children: React.ReactNode;
};

export function PanelContextProvider({ children }: PanelContextProviderProps) {
  const decreasedDays = subDays(new Date(), 7);

  const [initialDate, setInitialDate] = React.useState<string>(
    format(decreasedDays, "yyyy-MM-dd", { locale: pt })
  );
  const [finalDate, setFinalDate] = React.useState<string>(
    format(new Date(), "yyyy-MM-dd", { locale: pt })
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
}

export const usePanelLocalContextData = () =>
  React.useContext(PanelLocalContext);
