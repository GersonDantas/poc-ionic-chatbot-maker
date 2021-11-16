import { ReactNode } from "react";
import { RouteComponentProps } from "react-router";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

import { MyIonToggleTheme } from "src/components";

import { Panel, Conversations } from "..";
import { useGlobalContextData } from "src/store";
import { getStorageKey } from "src/hooks";

const PageToPage: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

  const { userConnected, setUserConnected } = useGlobalContextData()

  useIonViewWillEnter(async () => {
    let user = await getStorageKey("LoggedInUserInStorage");
    setUserConnected(user);
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>

          <MyIonToggleTheme />

          <IonTitle style={{ textTransform: "capitalize" }} color="primary" >
            {`${userConnected?.name ?? ""}/${match.params.name}`}
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
