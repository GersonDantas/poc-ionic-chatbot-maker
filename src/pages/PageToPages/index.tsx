import { ReactNode } from "react";
import { useParams } from "react-router";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import {
  MyIonToggleThem
} from "src/components";

import { Panel, Conversations } from "..";

const PageToPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <MyIonToggleThem />

          <IonTitle color="primary" style={{textTransform: "capitalize"}}>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

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
      return <Panel />;
  }
}

export { PageToPage };
