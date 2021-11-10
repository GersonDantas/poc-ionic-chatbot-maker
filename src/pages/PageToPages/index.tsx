import { ReactNode } from "react";
import { RouteComponentProps, useParams } from "react-router";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { MyIonToggleTheme } from "src/components";

import { Panel, Conversations } from "..";

const PageToPage: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>

          <MyIonToggleTheme />

          <IonTitle style={{ textTransform: "capitalize" }} color="primary" >
            {match.params.name}
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
    case "painel":
      return <Panel />;
    case "conversas":
      return <Conversations />;
    default:
      return <Panel />;
  }
}

export { PageToPage };
