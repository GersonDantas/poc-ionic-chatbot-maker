import {
  IonButtons,
  IonContent,
  IonHeader,
  useIonViewWillEnter,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import React, { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';
import { MyIonToggleTheme } from 'src/components';
import { getStorageKey, replaceHistory } from 'src/hooks';
import { useGlobalContextData } from 'src/store';
import { PanelContextProvider } from 'src/store/localContext';
import { ChatbotItem, Session } from 'src/types';

import { Panel, Conversations } from '../';
import SkeletonHeader from './componetsPageToPages/SkeletonHeader';

const PageToPage: React.FC<RouteComponentProps<{ name: string; }>> = function ({ match }) {
  const {
    setUserSession,
    userSession,
    setChatbotConnected,
    chatbotConnected,
    isLoading,
  } = useGlobalContextData();

  useIonViewWillEnter(async () => {
    const session: Session = await getStorageKey('SessionUserInLocalStorage');
    const chatbotItem: ChatbotItem = await getStorageKey('ChatbotSelectedInLocalStorage');

    if (session?.tokenSession) {
      setUserSession(session);
      setChatbotConnected(chatbotItem);
    } else {
      replaceHistory("/");
    }
  });
  
  return (
    <IonPage>
      <IonHeader>
        <>
          {isLoading
            ? <SkeletonHeader />
            : <IonToolbar
                style={{ "--background": "var(--ion-card-background)" }}
            >
              <IonButtons slot="start">
                <IonMenuButton color="primary" />
              </IonButtons>

              <MyIonToggleTheme />

              <IonTitle style={{ textTransform: 'capitalize' }} color="primary">
                {`${chatbotConnected?.name ?? userSession?.platformUser.chatbots[0].name ?? "Sem chatbot"}
            /${match.params.name}`}
              </IonTitle>
            </IonToolbar>
          }
        </>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{match.params.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {selectPageContent(match.params.name)}
      </IonContent>
    </IonPage>
  );
};

function selectPageContent(name: string): ReactNode {
  switch (name) {
    case 'painel':
    return <Panel />;
    case 'conversas':
      return <Conversations />;
    default:
      return <Panel />;
  }
}

export { PageToPage };
