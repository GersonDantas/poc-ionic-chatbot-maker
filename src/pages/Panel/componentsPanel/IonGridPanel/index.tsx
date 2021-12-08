import { toastController } from '@ionic/core';
import { useIonViewWillEnter } from "@ionic/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ReactNode } from 'react';
import { getStorageKey, setStorageByKey } from "src/hooks";
import { apiWithToken } from "src/services";
import { useGlobalContextData, usePanelLocalContextData } from "src/store";
import { ChatbotItem, Session, setStateType, WidgetChart, WidgetPanel } from "src/types";
import { WidgetType } from "src/types/enums";

import { IonGridPanelStyled } from './styles';

interface IonGridPanelProps {
  children: ReactNode;
}

function IonGridPanel({ children }: IonGridPanelProps) {
  const { initialDate, finalDate } = usePanelLocalContextData();
  const { chatbotConnected, userSession, setIsLoading } = useGlobalContextData();

  useIonViewWillEnter(async () => {
    await setWidgetsArraysInStorage()
    setIsLoading(false);
  }, [chatbotConnected, userSession])

  async function setWidgetsArraysInStorage(): Promise<void> {
    setIsLoading(true);
    const userSession: Session = await getStorageKey("SessionUserInLocalStorage");
    const token = userSession?.tokenSession;
    const chatbot = await getStorageKey('ChatbotSelectedInLocalStorage');

    let tempArray: Array<WidgetPanel> = [];

    if (token && userSession && chatbot && tempArray.length === 0) {
      try {
        let res: any = await apiWithToken(`Bearer ${token}:${userSession.platformUser.id}`)
          .get(
            `/api/v1/chatbots/${chatbot.id}/dashboard?start=${initialDate}&end=${finalDate}&channel=all`
          )
        tempArray = res.data;

      } catch (error: any) {
        alertError(error.message, "setWidgetsArraysInStorage/api/v1/chatbots/")
      }
    }


    if (tempArray.length !== 0) {
      try {
        const clientArray = tempArray.filter(widgets => widgets.widgets.length === 2);
        if (clientArray) {
          await setStorageByKey<WidgetPanel[]>("PanelScreenClientArray", clientArray);
        }

        const fourWidgetsArray = tempArray.filter(widgets => widgets.widgets.length === 4);
        if (fourWidgetsArray) {
          await setStorageByKey<WidgetPanel[]>("PanelScreenFourWidgetsArray", fourWidgetsArray);
        }

        const chartArray = tempArray.filter(widgets => widgets.widgets[0].type === WidgetType.chart);
        if (chartArray) {
          await setStorageByKey<WidgetPanel[]>("PanelScreenChartArray", chartArray);
        }

        const tableArray = tempArray.filter(widgets => widgets.widgets[0].type === WidgetType.table);
        if (tableArray) {
          await setStorageByKey<WidgetPanel[]>("PanelScreenTableArray", tableArray);
        }

      } catch (error: any) {
        alertError(error.message, "setWidgetsArraysInStorage/tempArray.length !== 0")
      }
      // console.log(await tableArrayStorage)
    }
  }

  const alertError = async (errorMenssage: string, locationError?: string): Promise<void> => {
    console.log(errorMenssage)

    let msg =
      `${errorMenssage}, ${locationError ? locationError + "," : ""} contate o suporte técnico.`

    const toast = await toastController.create({
      color: 'danger',
      duration: 2000,
      message: msg,
      position: "top"
    })

    await toast.present();
  }

  return (
    <IonGridPanelStyled>
      {children}
    </IonGridPanelStyled>
  );

}

export { IonGridPanel };
