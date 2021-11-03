import { ReactNode } from "react";
import { useParams } from "react-router";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";


import { LoginPage, Panel, Conversations } from "..";

const PageToPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {selectPageContent(name)}

      </IonContent>
    </IonPage>
  );
};

function selectPageContent(name: string): ReactNode {
  switch (name) {

    case 'painel':
      return <Panel />
    case 'conversas':
      return <Conversations />
    default:
      return <LoginPage />;
  }
}

export { PageToPage };
