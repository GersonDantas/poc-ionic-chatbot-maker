import {
  IonToolbar, IonSearchbar, IonList, IonItem, IonFab, IonFabButton, IonIcon, IonFabList,
} from '@ionic/react';
import { add, download, chatbubbleEllipses } from 'ionicons/icons';

import { IonGridConversations } from './styles';
import './style.css';

const Conversations = function () {
  return (
    <>
      {/* <IonHeaderContainer name="Conversas" /> */}

      <IonFab vertical="bottom" horizontal="end" edge slot="fixed" className="button-mais-conversas">
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton color="tertiary"><IonIcon icon={download} /></IonFabButton>
          <IonFabButton className="button-new-mens"><IonIcon icon={chatbubbleEllipses} /></IonFabButton>
        </IonFabList>
      </IonFab>

      <IonGridConversations>
        <IonToolbar>
          <IonSearchbar style={{ maxWidth: 400 }} />
        </IonToolbar>

        <IonList>
          <IonItem>Amsterdam</IonItem>
          <IonItem>Bogota</IonItem>
          <IonItem>Buenos Aires</IonItem>
          <IonItem>Cairo</IonItem>
          <IonItem>Dhaka</IonItem>
          <IonItem>Edinburgh</IonItem>
          <IonItem>Geneva</IonItem>
          <IonItem>Genoa</IonItem>
          <IonItem>Glasgow</IonItem>
          <IonItem>Hanoi</IonItem>
          <IonItem>Hong Kong</IonItem>
          <IonItem>Islamabad</IonItem>
          <IonItem>Istanbul</IonItem>
          <IonItem>Jakarta</IonItem>
          <IonItem>Kiel</IonItem>
          <IonItem>Kyoto</IonItem>
          <IonItem>Le Havre</IonItem>
          <IonItem>Lebanon</IonItem>
          <IonItem>Lhasa</IonItem>
          <IonItem>Lima</IonItem>
          <IonItem>London</IonItem>
          <IonItem>Los Angeles</IonItem>
          <IonItem>Madrid</IonItem>
          <IonItem>Manila</IonItem>
          <IonItem>New York</IonItem>
          <IonItem>Olympia</IonItem>
          <IonItem>Oslo</IonItem>
          <IonItem>Panama City</IonItem>
          <IonItem>Peking</IonItem>
          <IonItem>Philadelphia</IonItem>
          <IonItem>San Francisco</IonItem>
          <IonItem>Seoul</IonItem>
          <IonItem>Taipeh</IonItem>
          <IonItem>Tel Aviv</IonItem>
          <IonItem>Tokio</IonItem>
          <IonItem>Uelzen</IonItem>
          <IonItem>Washington</IonItem>
        </IonList>
      </IonGridConversations>
    </>
  );
};

export { Conversations };
