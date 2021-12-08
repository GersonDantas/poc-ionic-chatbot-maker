import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import {
  IonContent,
  IonList,
  IonListHeader,
  IonMenu,
} from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  DropDownItem,
  FooterList,
  MiddleItems,
  UsersDropDownList,
} from './componentsMenu';
import {
  settingsMenuList,
  skillsMenu,
  managementMenu,
} from './navigationRoutesObjects';

import './styles.css';
import { SuriLogo } from '..';

import { useGlobalContextData } from 'src/store';

import { SkeletonMenuNavigation } from './componentsMenu/SkeletonMenuNavigation';


const MenuNavigation: React.FC = function () {
  const { isLoading } = useGlobalContextData();
  const location = useLocation();

  return (
    <IonMenu contentId="mainMenu" type="overlay" className="left-bar">
      {
        isLoading
          ? <SkeletonMenuNavigation />
          : <>
            <IonContent>
              <IonList id="inbox-list">
                <IonListHeader style={{ marginBottom: '30px' }}>
                  <SuriLogo className="logo-menu" columnSize="12" />
                </IonListHeader>

                <DropDownItem
                  title="Gestão"
                  dropDownObject={managementMenu}
                  location={location}
                  faIcon={faThLarge}
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
            <FooterList location={location} />
          </>
      }
    </IonMenu>
  );
};

export { MenuNavigation };
