/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import { useLocation } from "react-router-dom";

import { chevronDownOutline, chevronBackOutline, grid } from "ionicons/icons"


import "./styles.css";

import { settingsMenuList, mediumMenuList, skillsMenu, managementMenu } from "./navigationRoutesObjects"
import { SuriLogo } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
      <IonContent >
        <IonList id="inbox-list">
          <IonListHeader style={{ marginBottom: "30px" }}>
            <SuriLogo className="logo" columnSize="12" />
          </IonListHeader>

          <IonItem
            lines="none"
            button
            detail
            detailIcon={
              state.dropdownMenus.management
                ? chevronDownOutline
                : chevronBackOutline
            }
            onClick={() => setState({
              dropdownMenus: {
                ...state.dropdownMenus,
                management: !state.dropdownMenus.management
              }
            })}
          >
            <FontAwesomeIcon icon="th-large" className="cb-" />
            <IonLabel>Gestão</IonLabel>
          </IonItem>

          {
            state.dropdownMenus.management && managementMenu.map((appPage, index) => {
              return (
                <IonItem
                  key={index}
                  className={
                    `(${location.pathname === appPage.url ? "selected" : ""}) sub-menu`
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                >
                  <FontAwesomeIcon icon={appPage.faIcon!} className="cb-" />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              );
            })
          }

          <hr className="divider-management" />

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
                <i className={`cb-${appPage.iconMoon}`} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            );
          })}

          <IonItem
            lines="none"
            button
            detail
            detailIcon={
              state.dropdownMenus.skills
                ? chevronDownOutline
                : chevronBackOutline
            }
            onClick={() => setState({
              dropdownMenus: {
                ...state.dropdownMenus,
                skills: !state.dropdownMenus.skills
              }
            })}
          >
            <i className="cb-settings" />
            <IonLabel>Habilidades</IonLabel>
          </IonItem>

          {
            state.dropdownMenus.skills && skillsMenu.map((appPage, index) => {
              return (
                <IonItem
                  key={index}
                  className={
                    `(${location.pathname === appPage.url ? "selected" : ""}) sub-menu`
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                >
                  <i className={`cb-${appPage.iconMoon}`} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              );
            })}

          <IonItem
            button
            lines="none"
            detail
            detailIcon={
              state.dropdownMenus.settings
                ? chevronDownOutline
                : chevronBackOutline
            }
            onClick={() => setState({
              dropdownMenus: {
                ...state.dropdownMenus,
                settings: !state.dropdownMenus.settings
              }
            })}
          >
            <i className="cb-options" />
            <IonLabel>Configurações</IonLabel>
          </IonItem>

          {
            state.dropdownMenus.settings && settingsMenuList.map((appPage, index) => {
              return (
                <IonItem
                  key={index}
                  className={
                    `(${location.pathname === appPage.url ? "selected" : ""}) sub-menu`
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                >
                  <i className={`cb-${appPage.iconMoon}`} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              );
            })}
          {/* </IonMenuToggle> */}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export { MenuNavigation };
