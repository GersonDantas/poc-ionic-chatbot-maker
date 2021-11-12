/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { InputChangeEventDetail } from "@ionic/core/dist/types/interface"


import Nprogerss from "nprogress";

import {
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonPage,
  IonRippleEffect,
  IonRow,
  useIonViewDidEnter,
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
} from "src/components";
import { users } from "src/store/mocUsers";
import { maskToPhoneNumber } from "src/utils";
import { User } from "src/store/dto";
import { useGlobalContextData } from "src/store";
import { getStorageKey, setStorageByKey } from "src/hooks";


function LoginPage() {

  
  const [stateUser, setStateUser] = React.useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  
  useIonViewDidEnter(async () => {
    let user = await getStorageKey("LoggedInUserInStorage")
    if(user === "Unexpected end of JSON input") {
      return
    } else {
      window.location.replace("/page/painel");
    }
  })

  const valueInput = (e: CustomEvent<InputChangeEventDetail>, name: string): void => { 
    if(name === "phoneNumber") {
      setStateUser({ ...stateUser, phoneNumber: maskToPhoneNumber(e.detail.value!) }) 
    } else {
      setStateUser({ ...stateUser, [name]: e.detail.value }) 
    }
  };

  const [isSigningForm, setIsSigningForm] = React.useState(true);
  const [forgotPassword, setForgotPassword] = React.useState(false);
  
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    Nprogerss.start();

    e.preventDefault();
    
    if(isSigningForm) {
      signingIn()
    } else {
      signingUp()
    }
  }

  const signingIn = async () => {
    Nprogerss.inc(0.5);

    if(users.find(existingEmail)) {
      let inputUser = users.find(existingEmail);
      if(stateUser.password === inputUser?.password) {
        await setStorageByKey("LoggedInUserInStorage", inputUser);
        window.location.replace("/page/painel");
      } else {
        console.log("senha incorreta");
      }
    } else {
      console.log("email não encontrado")
    }
  }

  const signingUp = () => {}

  const existingEmail = (user: User) => user.email === stateUser.email
  
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
                  <SuriLogo columnSize="6" />
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
                    data-after={`ou ${isSigningForm ? "entre" : "cadastre-se"
                      } com seu email`}
                  />

                  <form onSubmit={(e) => handleSignIn(e)}>
                    {!isSigningForm && (
                      <InputAndLabelComponent
                        label="Nome"
                        value={stateUser.name}
                        type="text"
                        autocomplete="name"
                        placeholder="Digite sua nome..."
                        onIonChange={(e) => valueInput(e, "name")}
                      />
                    )}

                    <InputAndLabelComponent
                      label="Email"
                      value={stateUser.email}
                      type="email"
                      name="email"
                      placeholder="Digite sua email..."
                      onIonChange={(e) => valueInput(e, "email")}
                    />

                    <InputAndLabelComponent
                      label="Senha"
                      value={stateUser.password}
                      type="password"
                      name="password"
                      placeholder="Digite sua senha..."
                      autocomplete="current-password"
                      onIonChange={(e) => valueInput(e, "password")}
                    />

                    {!isSigningForm && (
                      <InputAndLabelComponent
                        label="Whatsapp"
                        value={stateUser.phoneNumber}
                        name="phoneNumber"
                        placeholder="(__) ____-____"
                        autocomplete="tel"
                        onIonChange={(e) => valueInput(e, "phoneNumber")}
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
                          type="submit"
                          // onClick={loginFake}
                          strong
                        // onSubmit={() => { }}
                        >
                          {isSigningForm ? "FAZER LOGIN" : "CADASTRE-SE"}
                          <IonRippleEffect />
                        </MyIonSigningSigningupButton>

                        <MyIonToggleSigningSigniup >

                          {isSigningForm
                            ? "Não é cadastrado ainda? "
                            : "Já possui cadastro? "}

                          <a
                            onClick={() => setIsSigningForm(!isSigningForm)}
                            className="toggle-signin"
                          >
                            {isSigningForm
                              ? "Crie sua conta"
                              : "Entre em sua conta"}
                          </a>

                        </MyIonToggleSigningSigniup>

                      </IonCol>
                    </IonRow>
                  </form>
                </IonCardContent>
              </IonCardFormLogin>
            </IonCol>
          </IonRowCardLine>
        </IonGridLogin>
      </IonContentLogin>
    </IonPage>
  );
}

export { LoginPage };
