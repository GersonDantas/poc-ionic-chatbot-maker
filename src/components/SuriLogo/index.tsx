import { IonCol, IonImg } from "@ionic/react";
import React from "react";
import { MyIonRow } from "./styles";

const Logo: React.FC = () => {
  return (
    <MyIonRow >
      <IonCol size="3">
          <IonImg
            src="https://portal-staging.chatbotmaker.io/images/suri-cbm-logo-blue.png"
            alt="logo da suri"
          />
      </IonCol>
    </MyIonRow>
  );
};

export default Logo;
