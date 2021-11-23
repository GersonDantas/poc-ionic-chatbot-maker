/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";


import axios from "axios";

import Nprogerss from "nprogress";

import {
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonPage,
  IonRippleEffect,
  IonRow,
  useIonViewWillEnter,
} from "@ionic/react";

import {
  IonCardForgotPassword,
  HtmlHr,
  FacebookButton,
  IonCardFormLogin,
  ForgotYourPasswordButton,
  IonGridLogin,
  IonRowCardLine,
  MyIonSigningSigningupButton,
  IonSubTitleLogin,
  IonTitleLogin,
  MyIonToggleSigningSigniup,
  IonModalForgot,
  IonContentLogin,
  PageLoginSkeleton,
  SuriTerms,
} from "./componentsLogin";

import {
  SuriLogo,
  InputAndLabelComponent,
} from "src/components";
import { users } from "src/store/mocUsers";
import { User } from "src/store/dto";
import { getStorageKey, pushHistory, setStorageByKey, useForm } from "src/hooks";
import { valueInput } from "src/utils";
import { initialStateUser, initialStatusError } from "./initialStatusObjects";
import { validateForm } from "./utils";


function LoginPage() {

  const [isLoading, setIsloading] = React.useState(true);
  const [isSigningForm, setIsSigningForm] = React.useState(true);
  const [forgotPassword, setForgotPassword] = React.useState(false);
  // const [stateUser, setStateUser] = React.useState(initialStateUser);
  // const [error, setError] = React.useState(initialStatusError);

  useIonViewWillEnter(async () => {
    try {
      Nprogerss.start();
      let user = await getStorageKey("LoggedInUserInStorage")
      Nprogerss.inc(0.5);
      if (user !== undefined) {
        window.location.replace("/page/painel");
      } else {
        setIsloading(false);
        Nprogerss.done();
      }
    } catch (error: any) {
      setIsloading(false);
      console.log(error.message);
    }
  })

  const form = useForm({
    initialValues: initialStateUser,
    validate: validateForm
  })

  // const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
  //   Nprogerss.start();

  //   e.preventDefault();

  //   // if(!(await validate())) return;

  //   if (isSigningForm) {
  //     signingIn()
  //   } else {
  //     signingUp()
  //   }
  // }

  // const signingIn = async () => {
  //   Nprogerss.inc(0.5);
  //   setIsloading(true);

  //   if (users.find(existingEmail)) {
  //     let inputUser = users.find(existingEmail);
  //     if (stateUser.password === inputUser?.password) {

  //       await setStorageByKey("LoggedInUserInStorage", inputUser);

  //       pushHistory("/page/panel");

  //       setIsloading(false);
  //       Nprogerss.done();
  //     } else {
  //       console.log("senha incorreta");

  //       setIsloading(false);
  //       Nprogerss.done();
  //     }
  //   } else {
  //     console.log("email não encontrado")
  //     Nprogerss.done();
  //     setIsloading(false);
  //   }
  // }

  // const signingUp = () => { }

  // const existingEmail = (user: User) => user.email === stateUser.email

  return (
    <IonPage >
      {isLoading
        ? <PageLoginSkeleton />
        : <IonContentLogin fullscreen>

          <IonModalForgot
            isOpen={forgotPassword}
            onDidDismiss={() => setForgotPassword(false)}
          >
            <IonCardForgotPassword setTheModal={setForgotPassword} />
          </IonModalForgot>

          <IonGridLogin>
            <IonRowCardLine>

              <IonCol sizeMd="4.3" size="12">
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

                    <form /* onSubmit={(e) => handleSignIn(e)} */>
                      {!isSigningForm && (
                        <InputAndLabelComponent
                          label="Nome"
                          touched={form.touched.name}
                          spanError={form.errors.name}
                          value={form.values.name}
                          type="text"
                          name="name"
                          autocomplete="name"
                          placeholder="Digite sua nome..."
                          onBlur={form.handleBlur}
                          onIonChange={form.handleChange}
                        />
                      )}

                      <InputAndLabelComponent
                        label="Email"
                        touched={form.touched.email}
                        spanError={form.errors.email}
                        value={form.values.email}
                        type="text"
                        name="email"
                        placeholder="Digite sua email..."
                        onIonBlur={form.handleBlur}
                        onIonChange={form.handleChange}
                      />

                      <InputAndLabelComponent
                        label="Senha"
                        touched={form.touched.password}
                        spanError={form.errors.password}
                        value={form.values.password}
                        type="password"
                        name="password"
                        placeholder="Digite sua senha..."
                        autocomplete="current-password"
                        onIonBlur={form.handleBlur}
                        onIonChange={form.handleChange}
                      />

                      {!isSigningForm && (
                        <InputAndLabelComponent
                          label="Whatsapp"
                          touched={form.touched.whatsApp}
                          spanError={form.errors.whatsApp}
                          value={form.values.whatsApp}
                          name="whatsApp"
                          placeholder="(__) ____-____"
                          autocomplete="tel"
                          onIonBlur={form.handleBlur}
                          onIonChange={form.handleChange}
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
                        <SuriTerms />
                      )}

                      <IonRow style={{ justifyContent: "center" }} >
                        <IonCol size="11.5">

                          <MyIonSigningSigningupButton
                            expand="full"
                            fill="solid"
                            shape="round"
                            size="default"
                            type="submit"
                            strong
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
        </IonContentLogin>}
    </IonPage>
  );
}

export { LoginPage };
