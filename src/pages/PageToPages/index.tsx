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
import { returnTheFirstName } from "src/utils";

const PageToPage: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

  const { setUserSession, userSession, setIsLoginPage } = useGlobalContextData()

  useIonViewWillEnter(async () => {
    let session = await getStorageKey("SessionUserInLocalStorage");

    setIsLoginPage(false);
    setUserSession(session);

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
            {`${returnTheFirstName(userSession?.name) ?? ""}/${match.params.name}`}
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
