import {
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonPage,
  IonRippleEffect,
} from "@ionic/react";
import { ReactNode, SetStateAction, useState } from "react";
import { SuriLogo } from "../../components/componentManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import {
  MyIonGrid,
  MyIonRow,
  MyIonCard,
  MyIonTitle,
  MyIonText,
  MyIonFacebookButton,
  MyHtmlHr,
  MyIonSigninSigningupButton,
} from "./styles";
import MyInputAndLabelComponent from "../../components/MyInputAndLabelComponent";
import MyInputWithMask from "../../components/MyInputWithMask";

interface LoginPageProps {
  children: ReactNode;
}

function LoginPage({ children }: LoginPageProps) {
  const [inputValueName, setInputValueName] = useState<string>();
  const [inputValueEmail, setInputValueEmail] = useState<string>();
  const [inputValuePassword, setInputValuePassword] = useState<string>();
  const [inputValueWhatsapp, setInputValueWhatsapp] = useState<string>();

  const [isSigninForm, setIsSigninForm] = useState(true);

  return (
    <IonPage>
      <IonContent fullscreen>
        <MyIonGrid>
          <MyIonRow>
            <IonCol sizeSm="12" sizeXl="5">
              <MyIonCard>
                <IonCardHeader>
                  <SuriLogo />
                </IonCardHeader>

                <IonCardContent>
                  <MyIonTitle>
                    {isSigninForm ? "Entre" : "Cadastre-se"}
                  </MyIonTitle>
                  <MyIonText>
                    {isSigninForm
                      ? "E encante seus clientes"
                      : "Só vai levar alguns segundos"}
                  </MyIonText>

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

                  <MyInputAndLabelComponent
                    label="Nome"
                    value={inputValueName}
                    type="text"
                    placeholder="Digite sua nome..."
                    onIonChange={(e) => setInputValueName(e.detail.value!)}
                  />

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

                  {/* <MyInputAndLabelComponent
                    label="Whatsapp"
                    value={inputValueWhatsapp}
                    type="tel"
                    placeholder="Digite seu Whatsapp"
                    onIonChange={(e) => setInputValueWhatsapp(e.detail.value!)}
                  /> */}

                  <MyInputWithMask
                    label="Whatsapp"
                    maskProps="(00) 00000-0000"
                    placeholder="(__) ____-____"
                    value={inputValueWhatsapp}
                    onChange={(e: any) => setInputValueWhatsapp(e)}
                  />

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
                </IonCardContent>
              </MyIonCard>
            </IonCol>
          </MyIonRow>
        </MyIonGrid>
      </IonContent>
    </IonPage>
  );
}

export default LoginPage;
