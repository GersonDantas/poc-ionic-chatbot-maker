import { IonCol } from '@ionic/react';
import { ReactNode } from 'react';
import { IonCheckBox } from 'src/pages/LoginPage/componentsLogin';


import { IonColTerms, IonRowTerms, MyIonTextTerms } from './styles';


const SuriTerms: React.FC = () => {
  return (
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
  );
};

export {SuriTerms};
