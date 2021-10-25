import { IonButton, IonLabel } from "@ionic/react";
import React, { Dispatch, SetStateAction } from "react";
import {
  MyIonCardTitleForgot,
  MyIonCardSubtitleForgot,
  MyIonInputForgot,
  IonRowModalForgot,
  IonColModalForgot,
  IonModalForgot,
  IonRowButtons,
  IonColButtons,
} from "./styles";

type IonCardForgotPasswordProps = {
  setTheModal: Dispatch<SetStateAction<boolean>>;
};

const IonCardForgotPassword: React.FC<IonCardForgotPasswordProps> = ({
  setTheModal,
}) => {
  return (
    <IonRowModalForgot>
      <IonColModalForgot>
        <MyIonCardTitleForgot>Esqueceu a senha?</MyIonCardTitleForgot>
        <MyIonCardSubtitleForgot>
          Qual o e-mail do cadastro?
        </MyIonCardSubtitleForgot>
        <MyIonInputForgot 
          type="email"
          autocomplete="email"
          placeholder="Digite sua email..."
        />
        <IonRowButtons >
          <IonColButtons sizeSm="3.5" size="12">
            <IonButton
              type="reset"
              fill="outline"
              shape="round"
              onClick={() => setTheModal(false)}
            >
              CANCELAR
            </IonButton>
          </IonColButtons>
          <IonColButtons sizeSm="3.5" size="12">
            <IonButton type="reset" shape="round">
              ENVIAR
            </IonButton>
          </IonColButtons>
        </IonRowButtons>
      </IonColModalForgot>
    </IonRowModalForgot>
  );
};

export { IonModalForgot };
export default IonCardForgotPassword;
