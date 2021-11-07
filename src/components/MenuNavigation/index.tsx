/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonImg
} from "@ionic/react";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import {
  statsChart,
  statsChartOutline,
  settings,
  settingsOutline,
  options,
  optionsOutline,
  person,
  personOutline,
  grid,
  gridOutline,
  chatbubbles,
  chatbubblesOutline
} from "ionicons/icons";

import "./styles.css";

import { AppPage } from "src/types";
import { SuriLogo } from "..";

const topMenuList: AppPage[] = [
  {
    title: "Gestão",
    url: "/page/gestao",
    iosIcon: gridOutline,
    mdIcon: grid,
  },
];

const mediunMenuList: AppPage[] = [
  {
    title: "Painel",
    url: "/page/painel",
    iosIcon: statsChartOutline,
    mdIcon: statsChart,
  },
  {
    title: "Conversas",
    url: "/page/conversas",
    iosIcon: chatbubblesOutline,
    mdIcon: chatbubbles,
  },
  {
    title: "Habilidades",
    url: "/page/habilidades",
    iosIcon: optionsOutline,
    mdIcon: options,
  },
  {
    title: "Configurações",
    url: "/page/configuracoes",
    iosIcon: settingsOutline,
    mdIcon: settings,
  },
];

const listDownMenu: AppPage[] = [
  {
    title: "Meu Perfil",
    url: "/page/perfil",
    iosIcon: personOutline,
    mdIcon: person,
  },
];

const MenuNavigation: React.FC = () => {
  const location = useLocation();


  return (
    <IonMenu contentId="main" type="overlay" className="left-bar">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader style={{ marginBottom: "30px" }}>
            <SuriLogo className="logo" columnSize="12" />
          </IonListHeader>

          {topMenuList.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} >
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    color="primary"
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="inbox-list">
          {mediunMenuList.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} >
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    color="primary"
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="inbox-list">
          {listDownMenu.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    color="primary"
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export { MenuNavigation };
