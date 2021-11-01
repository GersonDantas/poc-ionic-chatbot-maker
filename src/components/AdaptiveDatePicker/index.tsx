import { InputChangeEventDetail } from "@ionic/core";
import { isPlatform, useIonViewDidEnter } from "@ionic/react";
import { usePanelLocalContextData } from "src/store/localContext";
import {addDays, format, subDays} from 'date-fns';
import { IonInputMobile, IonInputWeb } from "./styles";
import { useEffect } from "react";

interface SelectDatePickerProps {
  isFinalDate?: boolean;
}

function SelectDatePicker({isFinalDate = false}: SelectDatePickerProps) {
  const {initialDate, finalDate, setFinalDate, setInitialDate} = usePanelLocalContextData();

  return isPlatform("mobile") ? (

    <IonInputMobile
      min="2019"
      monthShortNames="Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez"
      cancelText="Cancelar"
      doneText="ok"
      displayFormat="DD/MM/YYYY"
      pickerFormat="DD MMM YYYY"
      value={initialDate}
      onChange={(e: any) => setInitialDate(e.detail.value!)}
    />

  ) : (
    <IonInputWeb type="date" value={isFinalDate ? finalDate :  initialDate} 
    onIonChange={(e: CustomEvent<InputChangeEventDetail>) => {
      
      let startDecreased = subDays(new Date(e.detail.value!), 6);
      let increasedEnd = addDays(new Date(e.detail.value!), 8);

      if(isFinalDate) {
        setFinalDate(e.detail.value!);
        setInitialDate(format(startDecreased, "yyyy-MM-dd"))
      }else {
        setInitialDate(e.detail.value!);
        setFinalDate(format(increasedEnd, "yyyy-MM-dd"))
      }
    }}/>
  );
}

export {SelectDatePicker};
