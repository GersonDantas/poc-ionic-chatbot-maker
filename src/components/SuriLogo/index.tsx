/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { IonCol, IonImg, useIonViewDidEnter } from "@ionic/react";
import logoBlue from "src/assets/img/logo-blue.png";
import logoWhite from "src/assets/img/logo-white.png";
import { useGlobalContextData } from "src/store";

import { MyIonRow } from "./styles";
import { IonImgProps } from "src/types";

type SuriLogoProps = {
  columnSize?: string;
} & IonImgProps;

const SuriLogo: React.FC<SuriLogoProps> = (props) => {
  const { isDark } = useGlobalContextData();
  const [logo, setLog] = React.useState<string>();

  React.useEffect(() => {
    toggleLogo();
  }, [isDark]);

  const toggleLogo = () => {
    if (isDark) {
      setLog(logoWhite);
    } else {
      setLog(logoBlue);
    }
  };
  
  return (
    <MyIonRow>
      <IonCol size={props.columnSize ?? "4"}>
        <IonImg src={logo} {...props} />
      </IonCol>
    </MyIonRow>
  );
};

export { SuriLogo };
