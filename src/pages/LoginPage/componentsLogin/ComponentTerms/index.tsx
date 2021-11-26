import { IonCol } from '@ionic/react';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IonCheckBox } from 'src/pages/LoginPage/componentsLogin';


import { IonColTerms, IonRowTerms, MyIonTextTerms } from './styles';


interface SuriTermsProps {
  showError: boolean;
  setShowError: Dispatch<SetStateAction<boolean>>
}

const SuriTerms: React.FC<SuriTermsProps> = ({ showError, setShowError }) => {
  return (
    <IonRowTerms>
      <IonColTerms sizeLg="0.8" size="1">
        <IonCheckBox id="checkboxMyTerms" onIonChange={() => setShowError(false)} />
      </IonColTerms>
      <IonCol sizeLg="11.2" size="11">
        <MyIonTextTerms>
          Aceito os{' '}
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
      {showError &&
        <IonCol size="12" >
          <span className="span-error">Este campo é requerido.</span>
        </IonCol>
      }
    </IonRowTerms>
  );
};

export { SuriTerms };
