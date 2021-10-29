import { isPlatform, useIonViewDidEnter } from "@ionic/react";
import { useState } from "react";

import { IonInputMobile, IonInputWeb } from "./styles";

interface SelectDatePickerProps {
  value?: string;
}

function SelectDatePicker(props: SelectDatePickerProps) {
  const [currentDate, setCurrentDate] = useState<string>();

  useIonViewDidEnter(() => {
    setCurrentDate(currentDateFormatted());
  });

  return isPlatform("mobile") ? (

    <IonInputMobile
      min="2019"
      monthShortNames="Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez"
      cancelText="Cancelar"
      doneText="ok"
      displayFormat="DD/MM/YYYY"
      pickerFormat="DD MMM YYYY"
      value={currentDate}
      onChange={(e: any) => setCurrentDate(e.detail.value!)}
    />

  ) : (
    <IonInputWeb type="date" value={props.value ?? currentDate} />
  );
}

function currentDateFormatted(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
}

export {SelectDatePicker};
