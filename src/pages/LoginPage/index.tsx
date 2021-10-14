import { ReactNode } from 'react';
import { IonPage } from '@ionic/react';

import { Container } from './styles';

interface LoginPageProps {
  children: ReactNode;
}

function LoginPage({ children }: LoginPageProps) {
  return (
    <IonPage>
      <h1>LoginPage</h1>
      {children}
    </IonPage>
  );
};

export default LoginPage;
