import { faSyncAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import { CommonButton, SelectAdaptiveDatePicker } from 'src/components';
import { usePanelLocalContextData } from 'src/store/localContext';

import {
  IonCardDateButtons, IonLabelDate, IonRowDateButtons, IonGridColumns,
} from './styles';

const DatePickersWithButtons = function () {
  const {
    initialDate, finalDate, setFinalDate, setInitialDate,
  } = usePanelLocalContextData();

  return (
    <IonCardDateButtons className="border-radius-5">
      <IonRowDateButtons>

        <IonGridColumns>
          <IonLabelDate>Início</IonLabelDate>
          <SelectAdaptiveDatePicker
            initialDate={initialDate}
            finalDate={finalDate}
            setFinalDate={setFinalDate}
            setInitialDate={setInitialDate}
          />
        </IonGridColumns>

        <IonGridColumns>
          <IonLabelDate>Fim</IonLabelDate>
          <SelectAdaptiveDatePicker
            isFinalDate
            initialDate={initialDate}
            finalDate={finalDate}
            setFinalDate={setFinalDate}
            setInitialDate={setInitialDate}
          />
        </IonGridColumns>

        <IonGridColumns>
          <CommonButton expand="full" color="success" faIcon={faSyncAlt} onClick={() => document.location.reload()}>ATUALIZAR</CommonButton>
        </IonGridColumns>

        <IonGridColumns>
          <CommonButton expand="full" color="tertiary" faIcon={faDownload} isRounded>EXPORTAR</CommonButton>
        </IonGridColumns>

      </IonRowDateButtons>
    </IonCardDateButtons>
  );
};

export { DatePickersWithButtons };
