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
import logoBlue from 'src/assets/img/logo-blue.png';
import logoWhite from 'src/assets/img/logo-white.png';
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
import { useGlobalContextData } from "src/store";

const listMenuAlto: AppPage[] = [
  {
    title: "Gestão",
    url: "/page/gestao",
    iosIcon: gridOutline,
    mdIcon: grid,
  },
];

const listMenuMedio: AppPage[] = [
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

const listMenuBaixo: AppPage[] = [
  {
    title: "Meu Perfil",
    url: "/page/perfil",
    iosIcon: personOutline,
    mdIcon: person,
  },
];

const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  .logo {
    width: 50%;
  }
`;

const MenuNavigation: React.FC = () => {
  const {isDark} = useGlobalContextData()
  const [logo, setLog] = React.useState<string>()
  const location = useLocation();

  React.useEffect(() => {
    toggleLogo()
  }, [isDark])

  const toggleLogo = () => {
    if(isDark) {
      setLog(logoWhite)
    }else {
      setLog(logoBlue)
    }
  }

  return (
    <IonMenu contentId="main" type="overlay" className="left-bar">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <ContainerLogo>
              <IonImg src={logo} className="logo" />
            </ContainerLogo>
          </IonListHeader>

          {listMenuAlto.map((appPage, index) => {
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

        <IonList id="inbox-list">
          {listMenuMedio.map((appPage, index) => {
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

        <IonList id="inbox-list">
          {listMenuBaixo.map((appPage, index) => {
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

        {/* <IonList>
          <IonMenuToggle  autoHide={false}>
            <IonItem
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <MyIonToggleThem />
            </IonItem>
          </IonMenuToggle>
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export { MenuNavigation };
