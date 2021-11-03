import { IonCol, IonRow } from "@ionic/react";
import { CardWithHeader } from "src/components";
import { PanelContextProvider } from "src/store/localContext";
import { ApexCharts, DatePickersWithButtons } from "./componentsPanel";
import {ChartJs} from "./componentsPanel";
import { IonCardLabel, IonGridPanel, IonTitleDepartment } from "./styles";

function Panel() {

  return (
    <IonGridPanel>
      <IonRow style={{ marginBottom: "20px" }}>
        <IonCol size="12">
          <IonTitleDepartment color="primary">CLIENTES</IonTitleDepartment>
        </IonCol>

        <IonCol sizeSm="6" size="12">
          <CardWithHeader cardTitle="ESPERANDO">
            <IonCardLabel>2</IonCardLabel>
          </CardWithHeader>
        </IonCol>

        <IonCol sizeSm="6" size="12">
          <CardWithHeader cardTitle="EM ANDAMENTO">
            <IonCardLabel>1</IonCardLabel>
          </CardWithHeader>
        </IonCol>
      </IonRow>

      <PanelContextProvider>
        <IonRow >
          <IonCol size="12">
            <IonTitleDepartment color="primary">
              ATENDIMENTOS
            </IonTitleDepartment>
          </IonCol>

          <IonCol size="12">
            <DatePickersWithButtons />
          </IonCol>
        </IonRow>

        <IonRow style={{ alignItems: "center" }}>
          <IonCol sizeXl="3" sizeLg="6" sizeMd="6" sizeSm="12" size="12">
            <CardWithHeader cardTitle="FINALIZADOS">
              <IonCardLabel>2</IonCardLabel>
            </CardWithHeader>
          </IonCol>

          <IonCol sizeXl="3" sizeLg="6" sizeMd="6" sizeSm="12" size="12">
            <CardWithHeader cardTitle="CLIENTES ATIVOS">
              <IonCardLabel>2</IonCardLabel>
            </CardWithHeader>
          </IonCol>

          <IonCol sizeXl="3" sizeLg="6" sizeMd="6" sizeSm="12" size="12">
            <CardWithHeader cardTitle="TEMPO DE ESPERA">
              <IonCardLabel>00:00:00</IonCardLabel>
            </CardWithHeader>
          </IonCol>

          <IonCol sizeXl="3" sizeLg="6" sizeMd="6" sizeSm="12" size="12">
            <CardWithHeader cardTitle="TEMPO DE ATENDIMENTO">
              <IonCardLabel>00:00:00</IonCardLabel>
            </CardWithHeader>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <CardWithHeader cardTitle="ATENDIMENTOS POR DIA" hasIcon>
              <ApexCharts />
            </CardWithHeader>
          </IonCol>
        </IonRow>

      </PanelContextProvider>
    </IonGridPanel>
  );
}

export { Panel };
