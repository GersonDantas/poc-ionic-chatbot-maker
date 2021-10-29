import { IonCol } from "@ionic/react";
import { CommonButton, SelectDatePicker } from "src/components";
import { faSyncAlt, faDownload } from "@fortawesome/free-solid-svg-icons"
import { IonCardDateButtons, IonLabelDate, IonRowButtons, IonRowDateButtons, IonColPos } from "./styles";

interface DatePickersWithButtonsProps { }

function DatePickersWithButtons(props: DatePickersWithButtonsProps) {
  return (
    <IonCardDateButtons className="border-radius-5">
      <IonRowDateButtons>

        <IonColPos size="11">
          <IonLabelDate>Início</IonLabelDate>
          <SelectDatePicker />
        </IonColPos>

        <IonColPos size="11">
          <IonLabelDate>Fim</IonLabelDate>
          <SelectDatePicker />
        </IonColPos>

        {/* <IonCol size="12" sizeMd="3">
          <IonRowButtons> */}

        <IonCol size="12">
          <CommonButton expand="full" color="success" faIcon={faSyncAlt} isRounded>ATUALIZAR</CommonButton>
        </IonCol>

        <IonCol size="12" >
          <CommonButton expand="full" color="tertiary" faIcon={faDownload} isRounded>EXPORTAR</CommonButton>
        </IonCol>

        {/* </IonRowButtons>
        </IonCol> */}

      </IonRowDateButtons>
    </IonCardDateButtons>
  );
}

export default DatePickersWithButtons;
