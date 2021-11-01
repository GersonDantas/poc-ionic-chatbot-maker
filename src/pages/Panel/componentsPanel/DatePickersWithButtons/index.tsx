import { CommonButton, SelectAdaptiveDatePicker } from "src/components";
import { faSyncAlt, faDownload } from "@fortawesome/free-solid-svg-icons"
import { IonCardDateButtons, IonLabelDate,  IonRowDateButtons, IonGridColumns } from "./styles";
import { usePanelLocalContextData } from "src/store/localContext";



interface DatePickersWithButtonsProps { }

function DatePickersWithButtons(props: DatePickersWithButtonsProps) {
  const {initialDate, finalDate, setFinalDate, setInitialDate} = usePanelLocalContextData();

  return (
    <IonCardDateButtons className="border-radius-5">
      <IonRowDateButtons>

        <IonGridColumns >
          <IonLabelDate>Início</IonLabelDate>
          <SelectAdaptiveDatePicker 
            initialDate={initialDate}
            finalDate={finalDate}
            setFinalDate={setFinalDate}
            setInitialDate={setInitialDate}
          />
        </IonGridColumns>

        <IonGridColumns >
          <IonLabelDate>Fim</IonLabelDate>
          <SelectAdaptiveDatePicker 
            isFinalDate
            initialDate={initialDate}
            finalDate={finalDate}
            setFinalDate={setFinalDate}
            setInitialDate={setInitialDate}
          />
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
