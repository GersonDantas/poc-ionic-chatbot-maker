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
  MyIonToggleThem,
} from "src/components";
import Panel from "../Panel";
import LoginPage from "../LoginPage";

interface PageProps {
  children?: ReactNode;
}

const Page: React.FC<PageProps> = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <MyIonToggleThem />

          <IonTitle color="primary">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {selectPageContent('Painel')}
      </IonContent>
    </IonPage>
  );
};

function selectPageContent(name: string): ReactNode {
  switch (name) {
    case 'Painel':
      return <Panel />  
    default:
      return <LoginPage />
  }
}

export default Page;
