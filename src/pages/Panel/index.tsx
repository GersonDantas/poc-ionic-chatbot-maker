import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { CardWithHeader } from "../../components/componentManager";


import { IonCardLabel, IonGridPanel, IonTitleDepartament } from "./styles";


function Panel() {
  return (
    <IonGridPanel>
      <IonRow>
        <IonCol size="12">
          <IonTitleDepartament color="primary">CLIENTES</IonTitleDepartament>
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
          
        </IonCol>
      </IonRow>
    </IonGridPanel>
  );
}

export default Panel;
