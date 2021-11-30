import React, { ReactNode } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  useIonViewWillEnter,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { MyIonToggleTheme } from 'src/components';
import { useGlobalContextData } from 'src/store';
import { getStorageKey } from 'src/hooks';
import { returnTheFirstName } from 'src/utils';
import { ChatbotItem, Session } from 'src/types';

import { Panel, Conversations } from '..';

const PageToPage: React.FC<RouteComponentProps<{ name: string; }>> = function ({ match }) {
  const {
    setUserSession,
    userSession,
    setIsLoginPage,
    setChatbotConnected,
    chatbotConnected,
  } = useGlobalContextData();

  const [chatbotName, setChatbotName] = React.useState<ChatbotItem | undefined>()

  useIonViewWillEnter(async () => {
    const session: Session = await getStorageKey('SessionUserInLocalStorage');
    const chatbotItem: ChatbotItem = await getStorageKey('ChatbotSelectedInLocalStorage');

    setIsLoginPage(false);
    setUserSession(session);
    setChatbotConnected(chatbotItem ?? userSession?.platformUser.chatbots[0])
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>

          <MyIonToggleTheme />

          <IonTitle style={{ textTransform: 'capitalize' }} color="primary">
            {`${chatbotConnected?.name ?? userSession?.platformUser.chatbots[0].name ?? "Sem chatbot"}
            /${match.params.name}`}
          </IonTitle>
        </IonToolbar>
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
