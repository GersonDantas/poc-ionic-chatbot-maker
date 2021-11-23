import { InputChangeEventDetail } from "@ionic/core";
import { isPlatform } from "@ionic/react";
import { addDays, format, subDays } from "date-fns";
import { IonInputMobile, IonInputWeb } from "./styles";
import { SelectAdaptiveDatePickerProps } from "src/types"

function SelectAdaptiveDatePicker(props: SelectAdaptiveDatePickerProps) {
  const { isFinalDate, setFinalDate, setInitialDate, initialDate, finalDate } = props;


  const handleIonChange = (e: CustomEvent<InputChangeEventDetail>): void => {
    if (isFinalDate) {
      setFinalDate(e.detail.value!);
    } else {
      setInitialDate(e.detail.value!);
    }
  };

  return isPlatform("mobile") ? (
    <IonInputMobile
      min="2019"
      max={format(new Date(), "yyyy-MM-dd")}
      monthShortNames="Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez"
      cancelText="Cancelar"
      doneText="ok"
      displayFormat="DD/MM/YYYY"
      pickerFormat="DD MMM YYYY"
      value={isFinalDate ? finalDate : initialDate}
      onIonChange={handleIonChange}
    />
  ) : (
    <IonInputWeb
      type="date"
      max={format(new Date(), "yyyy-MM-dd")}
      value={isFinalDate ? finalDate : initialDate}
      onIonChange={handleIonChange}
    />
  );
}

export { SelectAdaptiveDatePicker };
