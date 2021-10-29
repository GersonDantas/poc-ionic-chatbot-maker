import React from "react";
import { IonCol } from "@ionic/react";
import logo from 'src/assets/img/suri-cbm-logo-blue.png';

import { MyIonRow } from "./styles";

const SuriLogo: React.FC = () => {
  return (
    <MyIonRow >
      <IonCol size="3">
          <img
            src={logo}
            alt="logo da suri"
          />
      </IonCol>
    </MyIonRow>
  );
};

export {SuriLogo};
