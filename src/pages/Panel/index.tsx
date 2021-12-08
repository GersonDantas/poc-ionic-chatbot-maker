import { IonCol, IonRow, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { CardWithHeader } from 'src/components';
import { getStorageKey } from 'src/hooks';
import { useGlobalContextData } from 'src/store';
import { PanelContextProvider, usePanelLocalContextData } from 'src/store/localContext';
import { WidgetChart, WidgetPanel, WidgetTable } from 'src/types';
import { v4 as uuidV4 } from "uuid";

import { ApexCharts, DatePickersWithButtons, TablesPanel, IonGridPanel, SkeletonWidgetsPanel } from './componentsPanel';
import { IonCardLabel, IonTitleDepartment } from './styles';

interface WidgetStateArraysObject {
  clientArray: WidgetPanel[] | undefined,
  fourWidgetsArray: WidgetPanel[] | undefined,
  chartArray: WidgetPanel[] | undefined,
  tableArray: WidgetPanel[] | undefined,
}

const Panel: React.FC = () => {
  const { chatbotConnected, userSession, isLoading, setIsLoading } = useGlobalContextData();
  // const { widgetsStateArrays } = usePanelLocalContextData();

  const [widgetsStateArrays, setWidgetStateArrays] = useState<WidgetStateArraysObject | undefined>()


  useIonViewWillEnter(async () => {
    const clientArray = await getStorageKey("PanelScreenClientArray");
    const fourWidgetsArray = await getStorageKey("PanelScreenFourWidgetsArray");
    const chartArray = await getStorageKey("PanelScreenChartArray");
    const tableArray = await getStorageKey("PanelScreenTableArray");
    setWidgetStateArrays({
      clientArray: clientArray,
      fourWidgetsArray: fourWidgetsArray,
      chartArray: chartArray,
      tableArray: tableArray,
    });
    setIsLoading(false);
  }, [chatbotConnected, userSession])

  return (
    <PanelContextProvider>
      {
        isLoading
          ? <SkeletonWidgetsPanel />
          : <IonGridPanel>
            <IonRow style={{ marginBottom: '20px' }}>
              <IonCol size="12">
                <IonTitleDepartment color="primary">CLIENTES</IonTitleDepartment>
              </IonCol>

              {
                widgetsStateArrays?.clientArray
                && widgetsStateArrays?.clientArray[0].widgets.map((widget): ReactNode => {
                  return (
                    <IonCol key={uuidV4()} sizeSm="6" size="12">
                      <CardWithHeader cardTitle={widget.name}>
                        <IonCardLabel>{widget.value}</IonCardLabel>
                      </CardWithHeader>
                    </IonCol>
                  )
                })
              }

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

            <IonRow style={{ alignItems: 'center' }}>

              {
                widgetsStateArrays?.fourWidgetsArray
                && widgetsStateArrays?.fourWidgetsArray[0].widgets.map((widget): ReactNode => {
                  return (
                    <IonCol key={uuidV4()} sizeXl="3" sizeLg="6" sizeMd="6" sizeSm="12" size="12">
                      <CardWithHeader cardTitle={widget.name}>
                        <IonCardLabel>{widget.value}</IonCardLabel>
                      </CardWithHeader>
                    </IonCol>
                  )
                })
              }
            </IonRow>

            <IonRow>
              <IonCol>
                <ApexCharts widgetArray={widgetsStateArrays?.chartArray && widgetsStateArrays?.chartArray[0].widgets[0] as WidgetChart}/>
              </IonCol>
            </IonRow>

            {
              widgetsStateArrays?.tableArray?.map((array) => {
                let currentWidget = array.widgets[0] as WidgetTable
                return (
                  <IonRow key={uuidV4()}>
                    <IonCol>
                      <CardWithHeader cardTitle={currentWidget.name} hasIcon minHeight>
                        <TablesPanel
                          headers={currentWidget.columns}
                          rows={currentWidget.rows}
                        />
                      </CardWithHeader>
                    </IonCol>
                  </IonRow>
                )
              })
            }
          </IonGridPanel>
      }
    </PanelContextProvider>
  );
};

export { Panel };
