import {
  IonCol,
  IonRow,
} from "@ionic/react";
import { CardWithHeader, SelectDatePicker } from "src/components";
import DatePickersWithButtons from "./componentsPanel/DatePickersWithButtons";

import { IonCardLabel, IonGridPanel, IonTitleDepartment } from "./styles";

function Panel() {
  return (
    <IonGridPanel>
      <IonRow>

        <IonCol size="12">
          <IonTitleDepartment color="primary">CLIENTES</IonTitleDepartment>
        </IonCol>

        <IonCol>
          <CardWithHeader cardTitle="ESPERANDO">
            <IonCardLabel>2</IonCardLabel>
          </CardWithHeader>
        </IonCol>

        <IonCol>
          <CardWithHeader cardTitle="EM ANDAMENTO">
            <IonCardLabel>1</IonCardLabel>
          </CardWithHeader>
        </IonCol>

      </IonRow>

      <IonRow>

        <IonCol size="12">
          <IonTitleDepartment color="primary">
            ATENDIMENTOS
          </IonTitleDepartment>
        </IonCol>

        <IonCol size="12">

          <DatePickersWithButtons />
          
        </IonCol>
      </IonRow>
    </IonGridPanel>
  );
}

export default Panel;
