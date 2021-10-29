import {
  IonCol,
  IonRow,
} from "@ionic/react";
import { CardWithHeader } from "src/components";
import DatePickersWithButtons from "./componentsPanel/DatePickersWithButtons";


import { IonCardLabel, IonGridPanel, IonTitleDepartment } from "./styles";

function Panel() {
  
  var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }

  return (
    <IonGridPanel>

      <IonRow style={{marginBottom: '30px'}}>
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

      <IonRow style={{marginBottom: '10px'}}>
        <IonCol size="12">
          <IonTitleDepartment color="primary">
            ATENDIMENTOS
          </IonTitleDepartment>
        </IonCol>

        <IonCol size="12">
          <DatePickersWithButtons />
        </IonCol>
      </IonRow>

      <IonRow style={{alignItems: 'center'}}>
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
          <CardWithHeader cardTitle="ATENDIMENTOS POR DIA" hasIcon >
            <div id="service-chart" />
          </CardWithHeader>
        </IonCol>
      </IonRow>

    </IonGridPanel>
  );
}

export {Panel};
