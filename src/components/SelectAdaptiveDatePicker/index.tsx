import { InputChangeEventDetail } from "@ionic/core";
import { isPlatform } from "@ionic/react";
import { addDays, format, subDays } from "date-fns";
import { IonInputMobile, IonInputWeb } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface SelectAdaptiveDatePickerProps {
  isFinalDate?: boolean;
  initialDate: string;
  finalDate: string;
  setFinalDate: Dispatch<SetStateAction<string>>;
  setInitialDate: Dispatch<SetStateAction<string>>;
}

function SelectAdaptiveDatePicker(props: SelectAdaptiveDatePickerProps) {

  const handleIonChange = (e: CustomEvent<InputChangeEventDetail>): void => {
    let startDecreased = subDays(new Date(e.detail.value!), 6);
    let increasedEnd = addDays(new Date(e.detail.value!), 8);

    if (props.isFinalDate) {
      props.setFinalDate(e.detail.value!);
      props.setInitialDate(format(startDecreased, "yyyy-MM-dd"));
    } else {
      props.setInitialDate(e.detail.value!);
      props.setFinalDate(format(increasedEnd, "yyyy-MM-dd"));
    }
  };

  return isPlatform("mobile") ? (
    <IonInputMobile
      min="2019"
      monthShortNames="Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez"
      cancelText="Cancelar"
      doneText="ok"
      displayFormat="DD/MM/YYYY"
      pickerFormat="DD MMM YYYY"
      value={props.initialDate}
      onIonChange={handleIonChange}
    />
  ) : (
    <IonInputWeb
      type="date"
      value={props.isFinalDate ? props.finalDate : props.initialDate}
      onIonChange={handleIonChange}
    />
  );
}

export { SelectAdaptiveDatePicker };
