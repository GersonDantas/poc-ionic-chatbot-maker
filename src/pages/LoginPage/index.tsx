/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import {
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonPage,
  IonRippleEffect,
  IonRow,
} from "@ionic/react";

import {
  MyIonCardForgotPassword,
  HtmlHr,
  FacebookButton,
  MyIonCard,
  MyIonCheckBox,
  ForgotYourPasswordButton,
  MyIonGrid,
  MyIonRow,
  MyIonSigninSigningupButton,
  MyIonSubTitle,
  MyIonTextTerms,
  MyIonTitle,
  MyIonToggleSigninSigniup,
  IonColTerms,
  IonRowTerms,
  IonModalForgot,
} from "./componentsLogin/componentManager";

import {
  SuriLogo,
  MyInputAndLabelComponent,
  MyInputWithMask,
} from "../../components/componentManager";
import { Redirect } from "react-router";

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
        <IonModalForgot
          isOpen={forgotPassword}
          onDidDismiss={() => setForgotPasswor(false)}
        >
          <MyIonCardForgotPassword setTheModal={setForgotPasswor} />
        </IonModalForgot>
        <MyIonGrid>
          <MyIonRow>
            <IonCol sizeMd="4.5" size="12">
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

                  <FacebookButton
                    expand="block"
                    fill="outline"
                    shape="round"
                    size="large"
                    strong
                  >
                    <FontAwesomeIcon icon={faFacebookF} size="sm" pull="left" />
                    {isSigninForm ? "ENTRE" : "CADASTRE-SE"} COM O FACEBOOK
                    <IonRippleEffect />
                  </FacebookButton>

                  <HtmlHr
                    data-after={`ou ${
                      isSigninForm ? "entre" : "cadastre-se"
                    } com seu email`}
                  />

                  {!isSigninForm && (
                    <MyInputAndLabelComponent
                      label="Nome"
                      value={inputValueName}
                      type="text"
                      autocomplete="name"
                      placeholder="Digite sua nome..."
                      onIonChange={(e) => setInputValueName(e.detail.value!)}
                    />
                  )}

                  <MyInputAndLabelComponent
                    label="Email"
                    value={inputValueEmail}
                    type="email"
                    autocomplete="email"
                    placeholder="Digite sua email..."
                    onIonChange={(e) => setInputValueEmail(e.detail.value!)}
                  />

                  <MyInputAndLabelComponent
                    label="Senha"
                    value={inputValuePassword}
                    type="password"
                    placeholder="Digite sua senha..."
                    autocomplete="current-password"
                    onIonChange={(e) => setInputValuePassword(e.detail.value!)}
                  />

                  {!isSigninForm && (
                    <MyInputWithMask
                      label="Whatsapp"
                      maskProps="(00) 00000-0000"
                      placeholder="(__) ____-____"
                      value={inputValueWhatsapp}
                      autocomplete="tel"
                      onChange={(e: any) => setInputValueWhatsapp(e)}
                    />
                  )}

                  {isSigninForm ? (
                    <ForgotYourPasswordButton
                      fill="clear"
                      color="primary"
                      size="small"
                      type="reset"
                      onClick={() => setForgotPasswor(true)}
                    >
                      Esqueceu sua senha?
                    </ForgotYourPasswordButton>
                  ) : (
                    <IonRowTerms>
                      <IonColTerms sizeLg="0.6" size="1">
                        <MyIonCheckBox />
                      </IonColTerms>
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
                    </IonRowTerms>
                  )}

                  <IonRow style={{ justifyContent: "center" }}>
                    <IonCol size="11.5">
                      <MyIonSigninSigningupButton
                        expand="full"
                        fill="solid"
                        shape="round"
                        size="default"
                        onClick={() => window.location.replace("/page/InBox")}
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
