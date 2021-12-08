import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonPage,
  IonRippleEffect,
  IonRow,
  useIonViewWillEnter,
} from '@ionic/react';
import Nprogerss from 'nprogress';
import React from 'react';
import {
  SuriLogo,
  InputAndLabelComponent,
} from 'src/components';
import {
  getStorageKey, replaceHistory, setStorageByKey, useForm,
} from 'src/hooks';
import { api } from 'src/services';
import { useGlobalContextData } from 'src/store';
import { ChatbotItem, Session } from 'src/types';
import { initialStateUser, validateForm, maskToPhoneNumber } from 'src/utils';

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
  AlertInvalidCrud,
} from './componentsLogin';

const LoginPage = function () {
  const {isLoading, setIsLoading} = useGlobalContextData();

  const [isSigningForm, setIsSigningForm] = React.useState(true);
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [showErrorTerms, setShowErrorTerms] = React.useState(false);
  const [showLoginError, setShowLoginError] = React.useState(false);

  useIonViewWillEnter(async () => {
    try {
      Nprogerss.start();

      const user = await getStorageKey('SessionUserInLocalStorage');

      Nprogerss.inc(0.5);
      if (user !== undefined) {
        replaceHistory('/page/painel');
      } else {
        setIsLoading(false);
        Nprogerss.done();
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error.message);
    }
  });

  const form = useForm({
    initialValues: initialStateUser,
    validate: validateForm,
  });

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Nprogerss.start();
    setIsLoading(true);

    if (!formIsValid()) return;

    if (isSigningForm) {
      signingIn();
    } else {
      signingUp();
    }
  };

  const formIsValid = (): boolean => {
    const checkboxTermsIsChekced = document.getElementById('checkboxMyTerms')?.ariaChecked === 'true';
    const errors = Object.values(form.errors);

    if (isSigningForm) {
      if (errors[1] !== '' || errors[2] !== '') {
        Nprogerss.done();
        setIsLoading(false);
        return false;
      }
      return true;
    }

    const isError = !errors.every((error) => error === '');

    if (!checkboxTermsIsChekced) {
      setShowErrorTerms(true);
      setIsLoading(false);
      Nprogerss.done();

      return false;
    } if (isError) {
      Nprogerss.done();

      return false;
    }
    return true;
  };

  const signingIn = () => {
    Nprogerss.inc(0.5);

    api.post('/api/v1/session', {
      email: form.values.email,
      password: form.values.password,
    }).then((res) => {
      connectPanel(res.data)
    })
      .catch((e) => {
        if (e.message === 'Request failed with status code 400') {
          Nprogerss.done();
          setIsLoading(false);
          setShowLoginError(true);
          setTimeout(() => setShowLoginError(false), 5000);
        }
      });
  };

  const signingUp = () => {
    Nprogerss.inc(0.5);

    api.post("/api/v1/session/register", {
      name: form.values.name,
      email: form.values.email,
      whatsApp: form.values.whatsapp,
      password: form.values.password,
    })
      .then(res => connectPanel(res.data))
      .catch(err => {
        console.log(err.message);
        Nprogerss.done();
        setIsLoading(false);
        setShowLoginError(true);
        setTimeout(() => setShowLoginError(false), 5000);
      });
  };

  const connectPanel = async (data: Session): Promise<void> => {
    await setStorageByKey<Session>('SessionUserInLocalStorage', data);
    await setStorageByKey<ChatbotItem>("ChatbotSelectedInLocalStorage", data?.platformUser.chatbots[0]);
    replaceHistory('/page/panel');
  }

  return (
    <IonPage>
      {isLoading
        ? <PageLoginSkeleton />
        : (
          <IonContentLogin fullscreen>

            <IonModalForgot
              isOpen={forgotPassword}
              onDidDismiss={() => setForgotPassword(false)}
            >
              <IonCardForgotPassword setTheModal={setForgotPassword} />
            </IonModalForgot>

            <IonGridLogin>
              <IonRowCardLine>

                <IonCol sizeMd="5" size="12">
                  <IonCardFormLogin>
                    <IonCardHeader>
                      <SuriLogo columnSize="6" />
                    </IonCardHeader>

                    <IonCardContent>

                      <IonTitleLogin>
                        {isSigningForm ? 'Entre' : 'Cadastre-se'}
                      </IonTitleLogin>

                      <IonSubTitleLogin>
                        {isSigningForm
                          ? 'E encante seus clientes'
                          : 'Só vai levar alguns segundos'}
                      </IonSubTitleLogin>

                      <FacebookButton
                        expand="block"
                        fill="outline"
                        shape="round"
                        size="large"
                        strong
                      >
                        <FontAwesomeIcon icon={faFacebookF} size="sm" pull="left" />
                        {isSigningForm ? 'ENTRE' : 'CADASTRE-SE'}
                        {' '}
                        COM O FACEBOOK
                        <IonRippleEffect />
                      </FacebookButton>

                      <HtmlHr
                        data-after={`ou ${isSigningForm ? 'entre' : 'cadastre-se'
                          } com seu email`}
                      />

                      <form onSubmit={(e) => handleSignIn(e)}>
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
                            onIonBlur={form.handleBlur}
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
                          autocomplete="email"
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
                            maxlength={15}
                            placeholder="(__) ____-____"
                            autocomplete="tel"
                            onIonBlur={form.handleBlur}
                            onIonChange={
                              (e: any) => form.handleChange(e, maskToPhoneNumber(e?.target.value))
                            }
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
                          <SuriTerms
                            showError={showErrorTerms}
                            setShowError={setShowErrorTerms}
                          />
                        )}

                        <IonRow style={{ justifyContent: 'center' }}>
                          <IonCol size="11.5">

                            <MyIonSigningSigningupButton
                              expand="full"
                              fill="solid"
                              shape="round"
                              size="default"
                              type="submit"
                              strong
                            >
                              {isSigningForm ? 'FAZER LOGIN' : 'CADASTRE-SE'}
                              <IonRippleEffect />
                            </MyIonSigningSigningupButton>

                            <MyIonToggleSigningSigniup>

                              {isSigningForm
                                ? 'Não é cadastrado ainda? '
                                : 'Já possui cadastro? '}

                              <button
                                type="button"
                                onClick={() => {
                                  form.clearErrors();
                                  setIsSigningForm(!isSigningForm);
                                }}
                                className="toggle-signin"
                              >
                                {isSigningForm
                                  ? 'Crie sua conta'
                                  : 'Entre em sua conta'}
                              </button>

                            </MyIonToggleSigningSigniup>

                          </IonCol>
                        </IonRow>
                        {showLoginError && <AlertInvalidCrud />}
                      </form>
                    </IonCardContent>
                  </IonCardFormLogin>
                </IonCol>
              </IonRowCardLine>
            </IonGridLogin>
          </IonContentLogin>
        )}
    </IonPage>
  );
};

export { LoginPage };
