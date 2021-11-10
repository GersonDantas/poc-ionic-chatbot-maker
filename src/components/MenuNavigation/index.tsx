/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation } from "react-router-dom";
import {
  IonContent,
  IonList,
  IonListHeader,
  IonMenu,
} from "@ionic/react";

import { 
  settingsMenuList,
  skillsMenu, 
  managementMenu 
} from "./navigationRoutesObjects"

import { SuriLogo } from "..";
import DropDownItem from "./DropDownItem";

import "./styles.css";
import MiddleItems from "./MiddleItems";

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

          <MiddleItems location={location}/>

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
    </IonMenu>
  );
};

export { MenuNavigation };
