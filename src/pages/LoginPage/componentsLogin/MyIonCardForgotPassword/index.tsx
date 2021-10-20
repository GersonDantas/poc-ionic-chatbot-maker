import React from "react";
import {
  MyIonCardTitleForgot,
  MyIonCardSubtitleForgot,
  MyIonInputForgot,
} from "./styles";

const MyIonCardForgotPassword: React.FC = () => {
  return (
    <>
      <MyIonCardTitleForgot>Esqueceu a senha?</MyIonCardTitleForgot>
      <MyIonCardSubtitleForgot>
        Qual o e-mail do cadastro?
      </MyIonCardSubtitleForgot >
      <MyIonInputForgot />
    </>
  );
};

export default MyIonCardForgotPassword;
