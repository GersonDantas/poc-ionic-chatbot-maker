/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation } from "react-router-dom";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonRouterLink,
} from "@ionic/react";

import {
  settingsMenuList,
  skillsMenu,
  managementMenu
} from "./navigationRoutesObjects"

import { SuriLogo } from "..";
import { DropDownItem, MenuListItem, MiddleItems, UsersDropDownList } from "./componentsMenu";

import "./styles.css";
import { chevronForwardOutline } from "ionicons/icons";
import { users } from "src/pages/LoginPage/mocUsers";
import { IonAvatarStyled } from "./componentsMenu/UsersDropDownList/styles";

const MenuNavigation: React.FC = () => {

  const location = useLocation();


  return (
    <IonMenu contentId="main" type="overlay" className="left-bar">
      <IonContent >
        <IonList id="inbox-list">
          <IonListHeader style={{ marginBottom: "30px" }}>
            <SuriLogo className="logo" columnSize="12" />
          </IonListHeader>

          <DropDownItem
            title="Gestão"
            dropDownObject={managementMenu}
            location={location}
            faIcon="th-large"
          />

          <hr className="divider-management" />

          <UsersDropDownList />

          <MiddleItems location={location} />

          <DropDownItem
            title="Habilidades"
            dropDownObject={skillsMenu}
            location={location}
            iconMoon="settings"
          />

          <DropDownItem
            title="Configurações"
            dropDownObject={settingsMenuList}
            location={location}
            iconMoon="options"
          />


        </IonList>
      </IonContent>
      <IonList>
        <IonItem
          button
          lines="none"
          detail
          detailIcon={chevronForwardOutline}
        >
          <IonAvatarStyled>
            <img src={users[0].imgUserUrl} alt={users[0].email} />
          </IonAvatarStyled>
          <IonLabel >{`${users[0].name} ${users[0].subName}`}</IonLabel>
        </IonItem>
        <IonRouterLink 
          href="https://chatbotmaker.gitbook.io/centraldeajuda/"
          target="_blank"
        >
          <MenuListItem 
            iconMoon="question-mark"
            title="CENTRAL DE AJUDA"
            location={location}
          />
        </IonRouterLink>
      </IonList>
    </IonMenu>
  );
};

export { MenuNavigation };
