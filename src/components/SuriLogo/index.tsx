import { IonCol, IonImg } from "@ionic/react";
import React from "react";
import { MyIonRow } from "./styles";
import logo from '../../assets/img/suri-cbm-logo-blue.png';

const Logo: React.FC = () => {
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

export default Logo;
