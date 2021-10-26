/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Nprogerss from "nprogress";

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
  IonCardForgotPassword,
  HtmlHr,
  FacebookButton,
  IonCardFormLogin,
  IonCheckBox,
  ForgotYourPasswordButton,
  IonGridLogin,
  IonRowCardLine,
  MyIonSigninSigningupButton,
  IonSubTitleLogin,
  MyIonTextTerms,
  IonTitleLogin,
  MyIonToggleSigninSigniup,
  IonColTerms,
  IonRowTerms,
  IonModalForgot,
} from "./componentsLogin/componentManager";

import {
  SuriLogo,
  InputAndLabelComponent,
  InputWithMask,
} from "../../components/componentManager";
import { Redirect } from "react-router";

function LoginPage() {
  const [inputValueName, setInputValueName] = useState<string>();
  const [inputValueEmail, setInputValueEmail] = useState<string>();
  const [inputValuePassword, setInputValuePassword] = useState<string>();
  const [inputValueWhatsapp, setInputValueWhatsapp] = useState<string>();

  const [isSigninForm, setIsSigninForm] = useState(true);
  const [forgotPassword, setForgotPasswor] = useState(false);

  const loginFack = () => {
    Nprogerss.start();
    setTimeout(() => {
      Nprogerss.inc(0.3);
      setTimeout(() => {
        Nprogerss.inc(0.3);
        setTimeout(() => {
          Nprogerss.inc(0.3);
          window.location.replace("/page/Panel");
        }, 500);
      }, 500);
    }, 500);
  };

  return (
    <IonPage >
      <IonContent fullscreen>
        <IonModalForgot
          isOpen={forgotPassword}
          onDidDismiss={() => setForgotPasswor(false)}
        >
          <IonCardForgotPassword setTheModal={setForgotPasswor} />
        </IonModalForgot>

        <IonGridLogin>
          <IonRowCardLine>
            <IonCol sizeMd="4.5" size="12">
              <IonCardFormLogin>
                <IonCardHeader>
                  <SuriLogo />
                </IonCardHeader>

                <IonCardContent>
                  <IonTitleLogin>
                    {isSigninForm ? "Entre" : "Cadastre-se"}
                  </IonTitleLogin>

                  <IonSubTitleLogin>
                    {isSigninForm
                      ? "E encante seus clientes"
                      : "Só vai levar alguns segundos"}
                  </IonSubTitleLogin>

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
                    <InputAndLabelComponent
                      label="Nome"
                      value={inputValueName}
                      type="text"
                      autocomplete="name"
                      placeholder="Digite sua nome..."
                      onIonChange={(e) => setInputValueName(e.detail.value!)}
                    />
                  )}

                  <InputAndLabelComponent
                    label="Email"
                    value={inputValueEmail}
                    type="email"
                    autocomplete="email"
                    placeholder="Digite sua email..."
                    onIonChange={(e) => setInputValueEmail(e.detail.value!)}
                  />

                  <InputAndLabelComponent
                    label="Senha"
                    value={inputValuePassword}
                    type="password"
                    placeholder="Digite sua senha..."
                    autocomplete="current-password"
                    onIonChange={(e) => setInputValuePassword(e.detail.value!)}
                  />

                  {!isSigninForm && (
                    <InputWithMask
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
                        <IonCheckBox />
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

                  <IonRow style={{ justifyContent: "center" }} >
                    <IonCol size="11.5">
                      <MyIonSigninSigningupButton
                        expand="full"
                        fill="solid"
                        shape="round"
                        size="default"
                        onClick={loginFack}
                        strong
                      >
                        {isSigninForm ? "FAZER LOGIN" : "CADASTRE-SE"}
                        <IonRippleEffect />
                      </MyIonSigninSigningupButton>
                      <MyIonToggleSigninSigniup >
                        {isSigninForm
                          ? "Não é cadastrado ainda? "
                          : "Já possui cadastro? "}
                        <a
                          href="/#"
                          onClick={ () => {
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
              </IonCardFormLogin>
            </IonCol>
          </IonRowCardLine>
        </IonGridLogin>
      </IonContent>
    </IonPage>
  );
}

// function getContent() {
//   return document.querySelector('ion-content');
// }

// function scrollToBottom() {
//   const container = getContent();
//   return container && container.scrollToBottom(500);
// }

export default LoginPage;
