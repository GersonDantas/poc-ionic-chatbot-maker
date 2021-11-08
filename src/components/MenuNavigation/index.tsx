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
} from "@ionic/react";
import { useLocation } from "react-router-dom";

import { chevronDownOutline, chevronForwardOutline } from "ionicons/icons"


import "./styles.css";

import { settingsMenuList, mediumMenuList, topMenuList } from "./navigationRoutesObjects"
import { SuriLogo } from "..";


const MenuNavigation: React.FC = () => {
  const [state, setState] = React.useState({
    dropdownMenus: {
      management: false,
      skills: false,
      settings: false
    }
  })
  const location = useLocation();


  return (
    <IonMenu contentId="main" type="overlay" className="left-bar">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader style={{ marginBottom: "30px" }}>
            <SuriLogo className="logo" columnSize="12" />
          </IonListHeader>

          <IonMenuToggle autoHide={false} >
            {topMenuList.map((appPage, index) => {
              return (
                <IonItem
                  key={index}
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={true}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    color="primary"
                  />
                  <i className="cb-graph" />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              );
            })}

            {mediumMenuList.map((appPage, index) => {
              return (
                <IonItem
                  key={index}
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  {/* <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    color="primary"
                  /> */}
                  <i className={`cb-${appPage.iconMoon}` }/>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              );
            })}

            <IonItem
              routerDirection="none"
              lines="none"
              detail
              detailIcon={
                state.dropdownMenus.settings
                  ? chevronDownOutline
                  : chevronForwardOutline
              }
              onClick={() => setState({
                dropdownMenus: {
                  ...state.dropdownMenus,
                  settings: !state.dropdownMenus.settings
                }
              })}
            >
              <i className="cb-settings" />
              <IonLabel>Configurações</IonLabel>
            </IonItem>

            { 
             state.dropdownMenus.settings && settingsMenuList.map((appPage, index) => {
              return (
                <IonItem
                  key={index}
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                >
                  {/* <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    color="primary"
                  /> */}
                  <i className={`cb-${appPage.iconMoon}`} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              );
            })}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export { MenuNavigation };
