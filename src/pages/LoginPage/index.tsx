/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import {
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonModal,
  IonPage,
  IonRippleEffect,
  IonRow,
} from "@ionic/react";

import {
  MyIonCardForgotPassword,
  MyHtmlHr,
  MyIonFacebookButton,
  MyIonCard,
  MyIonCheckBox,
  ForgotYourPassword,
  MyIonGrid,
  MyIonRow,
  MyIonSigninSigningupButton,
  MyIonSubTitle,
  MyIonTextTerms,
  MyIonTitle,
  MyIonToggleSigninSigniup,
} from "./componentsLogin/componentManager";

import {
  SuriLogo,
  MyInputAndLabelComponent,
  MyInputWithMask,
} from "../../components/componentManager";


function LoginPage() {
  const [inputValueName, setInputValueName] = useState<string>();
  const [inputValueEmail, setInputValueEmail] = useState<string>();
  const [inputValuePassword, setInputValuePassword] = useState<string>();
  const [inputValueWhatsapp, setInputValueWhatsapp] = useState<string>();

  const [isSigninForm, setIsSigninForm] = useState(true);
  const [forgotPassword, setForgotPasswor] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonModal
          isOpen={forgotPassword}
          onDidDismiss={() => setForgotPasswor(false)}
        >
          <MyIonCardForgotPassword />
        </IonModal>
        <MyIonGrid>
          <MyIonRow>
            <IonCol sizeSm="12" sizeXl="4.5">
              <MyIonCard>
                <IonCardHeader>
                  <SuriLogo />
                </IonCardHeader>

                <IonCardContent>
                  <MyIonTitle>
                    {isSigninForm ? "Entre" : "Cadastre-se"}
                  </MyIonTitle>
                  <MyIonSubTitle>
                    {isSigninForm
                      ? "E encante seus clientes"
                      : "Só vai levar alguns segundos"}
                  </MyIonSubTitle>

                  <MyIonFacebookButton
                    expand="block"
                    fill="outline"
                    shape="round"
                    size="large"
                    strong
                  >
                    <FontAwesomeIcon icon={faFacebookF} size="sm" pull="left" />
                    {isSigninForm ? "ENTRE" : "CADASTRE-SE"} COM O FACEBOOK
                    <IonRippleEffect />
                  </MyIonFacebookButton>

                  <MyHtmlHr
                    data-after={`ou ${
                      isSigninForm ? "entre" : "cadastre-se"
                    } com seu email`}
                  />

                  {!isSigninForm && (
                    <MyInputAndLabelComponent
                      label="Nome"
                      value={inputValueName}
                      type="text"
                      placeholder="Digite sua nome..."
                      onIonChange={(e) => setInputValueName(e.detail.value!)}
                    />
                  )}

                  <MyInputAndLabelComponent
                    label="Email"
                    value={inputValueEmail}
                    type="email"
                    placeholder="Digite sua email..."
                    onIonChange={(e) => setInputValueEmail(e.detail.value!)}
                  />

                  <MyInputAndLabelComponent
                    label="Senha"
                    value={inputValuePassword}
                    type="password"
                    placeholder="Digite sua senha..."
                    onIonChange={(e) => setInputValuePassword(e.detail.value!)}
                  />

                  {!isSigninForm && (
                    <MyInputWithMask
                      label="Whatsapp"
                      maskProps="(00) 00000-0000"
                      placeholder="(__) ____-____"
                      value={inputValueWhatsapp}
                      onChange={(e: any) => setInputValueWhatsapp(e)}
                    />
                  )}

                  {isSigninForm ? (
                    <ForgotYourPassword
                      fill="clear"
                      color="primary"
                      size="small"
                      type="reset"
                      onClick={() => setForgotPasswor(true)}
                    >
                      Esqueceu sua senha?
                    </ForgotYourPassword>
                  ) : (
                    <IonRow>
                      <IonCol sizeLg="0.6" size="1">
                        <MyIonCheckBox />
                      </IonCol>
                      <IonCol sizeLg="11.4" size="11">
                        <MyIonTextTerms>
                          <a
                            href="https://drive.google.com/file/d/1F9oyvCEV0MjXNZD2X7DSXqqVElEICPEV/view"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Termos, Política de Dados e Política de Cookies.
                          </a>
                          Aceito receber notificações sobre atualizações e
                          novidades da plataforma pelo Whatsapp.
                        </MyIonTextTerms>
                      </IonCol>
                    </IonRow>
                  )}

                  <IonRow style={{ justifyContent: "center" }}>
                    <IonCol size="11.5">
                      <MyIonSigninSigningupButton
                        expand="full"
                        fill="solid"
                        shape="round"
                        size="default"
                        strong
                      >
                        {isSigninForm ? "FAZER LOGIN" : "CADASTRE-SE"}
                        <IonRippleEffect />
                      </MyIonSigninSigningupButton>
                      <MyIonToggleSigninSigniup>
                        {isSigninForm
                          ? "Não é cadastrado ainda? "
                          : "Já possui cadastro? "}
                        <a
                          href="#"
                          onClick={() => {
                            // scrollToBottom();
                            setIsSigninForm(!isSigninForm);
                          }}
                          className="toggle-signin"
                        >
                          {isSigninForm
                            ? "Crie sua conta"
                            : "Entre em sua conta"}
                        </a>
                      </MyIonToggleSigninSigniup>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </MyIonCard>
            </IonCol>
          </MyIonRow>
        </MyIonGrid>
      </IonContent>
    </IonPage>
  );
}

// function getContent() {
//   return document.querySelector("ion-content");
// }

// function scrollToBottom() {
//   console.log(getContent());
//   if (getContent()) getContent()!.scrollIntoView({block: "center", behavior: "auto"});
// }

export default LoginPage;
