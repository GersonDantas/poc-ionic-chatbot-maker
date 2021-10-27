import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  statsChart,
  statsChartOutline,
  settings,
  settingsOutline,
  options,
  optionsOutline,
  grid,
  gridOutline,
  chatbubbles,
  chatbubblesOutline
} from "ionicons/icons";
import "./styles.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

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

const MenuNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" className="left-bar">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>SURI</IonListHeader>
          <IonNote>suri@by.chatbotmaker</IonNote>
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

        <IonList>
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
      </IonContent>
    </IonMenu>
  );
};

export default MenuNavigation;
