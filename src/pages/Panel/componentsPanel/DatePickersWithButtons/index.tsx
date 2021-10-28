import {  IonCol } from "@ionic/react";
import {CommonButton, SelectDatePicker} from "../../../../components";
import {faSyncAlt, faDownload} from "@fortawesome/free-solid-svg-icons"

import { IonCardDateButtons, IonLabelDate, IonRowButtons, IonRowDateButtons } from "./styles";

interface DatePickersWithButtonsProps {}

function DatePickersWithButtons(props: DatePickersWithButtonsProps) {
  return (
    <IonCardDateButtons>
      <IonRowDateButtons>

        <IonCol size="12" sizeMd="3">
          <IonLabelDate>Início</IonLabelDate>
          <SelectDatePicker />
        </IonCol>

        <IonCol size="12" sizeMd="3">
          <IonLabelDate>Fim</IonLabelDate>
          <SelectDatePicker />
        </IonCol>

        <IonCol size="12" sizeMd="3">
          <IonRowButtons>

            <IonCol size="12" sizeSm="4" sizeMd="9" sizeLg="10" sizeXl="8">
              <CommonButton expand="full" color="success" faIcon={faSyncAlt} isRounded>ATUALIZAR</CommonButton>
            </IonCol>

            <IonCol size="12" sizeSm="4" sizeMd="9" sizeLg="10" sizeXl="8">
              <CommonButton expand="full"faIcon={faDownload} isRounded>EXPORTAR</CommonButton>
            </IonCol>

          </IonRowButtons>
        </IonCol>

      </IonRowDateButtons>
    </IonCardDateButtons>
  );
}

export default DatePickersWithButtons;
