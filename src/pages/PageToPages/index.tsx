import { ReactNode, useState } from "react";
import { RouteComponentProps } from "react-router";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewWillEnter,
} from "@ionic/react";

import { MyIonToggleTheme } from "src/components";

import { Panel, Conversations } from "..";
import { users } from "../../store/mocUsers";
import { useGlobalContextData } from "src/store";
import { getStorageKey } from "src/hooks";
import { User } from "src/store/dto";

const PageToPage: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

  const [userLogged, setUserLogged] =  useState<string>("Usuario")

  useIonViewDidEnter(async() => {
    let user: User = await getStorageKey("LoggedInUserInStorage")
    setUserLogged(user.name);
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
            {`${userLogged}/${match.params.name}`}
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
