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
  MyIonSigningSigningupButton,
  IonSubTitleLogin,
  MyIonTextTerms,
  IonTitleLogin,
  MyIonToggleSigningSigniup,
  IonColTerms,
  IonRowTerms,
  IonModalForgot,
  IonContentLogin
} from "./componentsLogin";

import {
  SuriLogo,
  InputAndLabelComponent,
  InputWithMask,
} from "src/components";



function LoginPage() {
  const [inputValueName, setInputValueName] = useState<string>();
  const [inputValueEmail, setInputValueEmail] = useState<string>();
  const [inputValuePassword, setInputValuePassword] = useState<string>();
  const [inputValueWhatsapp, setInputValueWhatsapp] = useState<string>();

  const [isSigningForm, setIsSigningForm] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  const loginFake = () => {
    Nprogerss.start();
    setTimeout(() => {
      Nprogerss.inc(0.3);
      setTimeout(() => {
        Nprogerss.inc(0.3);
        setTimeout(() => {
          Nprogerss.inc(0.3);
          window.location.replace("/page/painel");
        }, 500);
      }, 500);
    }, 500);
  };

  return (
    <IonPage >
      <IonContentLogin fullscreen>

        <IonModalForgot
          isOpen={forgotPassword}
          onDidDismiss={() => setForgotPassword(false)}
        >
          <IonCardForgotPassword setTheModal={setForgotPassword} />
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
                    {isSigningForm ? "Entre" : "Cadastre-se"}
                  </IonTitleLogin>

                  <IonSubTitleLogin>
                    {isSigningForm
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
                    {isSigningForm ? "ENTRE" : "CADASTRE-SE"} COM O FACEBOOK
                    <IonRippleEffect />
                  </FacebookButton>

                  <HtmlHr
                    data-after={`ou ${
                      isSigningForm ? "entre" : "cadastre-se"
                    } com seu email`}
                  />

                  {!isSigningForm && (
                    <InputAndLabelComponent
                      label="Nome"
                      value={inputValueName}
                      type="text"
                      autocomplete="name"
                      placeholder="Digite sua nome..."
                      onIonChange={(e: any) => setInputValueName(e.detail.value!)}
                    />
                  )}

                  <InputAndLabelComponent
                    label="Email"
                    value={inputValueEmail}
                    type="email"
                    autocomplete="email"
                    placeholder="Digite sua email..."
                    onIonChange={(e: any) => setInputValueEmail(e.detail.value!)}
                  />

                  <InputAndLabelComponent
                    label="Senha"
                    value={inputValuePassword}
                    type="password"
                    placeholder="Digite sua senha..."
                    autocomplete="current-password"
                    onIonChange={(e: any) => setInputValuePassword(e.detail.value!)}
                  />

                  {!isSigningForm && (
                    <InputWithMask
                      label="Whatsapp"
                      maskProps="(00) 00000-0000"
                      placeholder="(__) ____-____"
                      value={inputValueWhatsapp}
                      autocomplete="tel"
                      onChange={(e: any) => setInputValueWhatsapp(e)}
                    />
                  )}

                  {isSigningForm ? (
                    <ForgotYourPasswordButton
                      fill="clear"
                      color="primary"
                      size="small"
                      type="reset"
                      onClick={() => setForgotPassword(true)}
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

                      <MyIonSigningSigningupButton
                        expand="full"
                        fill="solid"
                        shape="round"
                        size="default"
                        onClick={loginFake}
                        strong
                      >
                        {isSigningForm ? "FAZER LOGIN" : "CADASTRE-SE"}
                        <IonRippleEffect />
                      </MyIonSigningSigningupButton>

                      <MyIonToggleSigningSigniup >

                        {isSigningForm
                          ? "Não é cadastrado ainda? "
                          : "Já possui cadastro? "}

                        <a onClick={ () => setIsSigningForm(!isSigningForm)} className="toggle-signin" >
                          {isSigningForm
                            ? "Crie sua conta"
                            : "Entre em sua conta"}
                        </a>

                      </MyIonToggleSigningSigniup>

                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCardFormLogin>
            </IonCol>
          </IonRowCardLine>
        </IonGridLogin>
      </IonContentLogin>
    </IonPage>
  );
}

export {LoginPage};
