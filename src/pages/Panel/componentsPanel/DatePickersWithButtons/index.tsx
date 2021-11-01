import { CommonButton, SelectDatePicker } from "src/components";
import { faSyncAlt, faDownload } from "@fortawesome/free-solid-svg-icons"
import { IonCardDateButtons, IonLabelDate,  IonRowDateButtons, IonGridColumns } from "./styles";
import { usePanelLocalContextData } from "src/store/localContext";


interface DatePickersWithButtonsProps { }

function DatePickersWithButtons(props: DatePickersWithButtonsProps) {

  return (
    <IonCardDateButtons className="border-radius-5">
      <IonRowDateButtons>

        <IonGridColumns >
          <IonLabelDate>Início</IonLabelDate>
          <SelectDatePicker />
        </IonGridColumns>

        <IonGridColumns >
          <IonLabelDate>Fim</IonLabelDate>
          <SelectDatePicker isFinalDate/>
        </IonGridColumns>

        <IonGridColumns >
          <CommonButton expand="full" color="success" faIcon={faSyncAlt} isRounded>ATUALIZAR</CommonButton>
        </IonGridColumns>

        <IonGridColumns>
          <CommonButton expand="full" color="tertiary" faIcon={faDownload} isRounded>EXPORTAR</CommonButton>
        </IonGridColumns>

      </IonRowDateButtons>
    </IonCardDateButtons>
  );
}

export {DatePickersWithButtons};
