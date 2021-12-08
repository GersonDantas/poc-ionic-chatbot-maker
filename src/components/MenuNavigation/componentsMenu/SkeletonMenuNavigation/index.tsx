import { IonAvatar, IonCol, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonRow } from '@ionic/react';
import React from "react";

import { ListFooter } from '../FooterList/styles';
import { StyledSkeletonAvatar, StyledSkeletonLabel, StyledSkeletonLogo } from './styles';

const SkeletonMenuNavigation: React.FC = () => {
  return (
    <>
      <IonContent>
        <IonList id="inbox-list-skeleton">
          <IonListHeader style={{ marginBottom: '30px' }}>
            <IonRow style={{ width: '100%', justifyContent: 'center' }}>
              <IonCol size="8" >
                <StyledSkeletonLogo animated />
              </IonCol>
            </IonRow>
          </IonListHeader>

          <SkeletonItemList />

          <hr className="divider-management" />

          <SkeletonItemList />

          <SkeletonItemList />

          <SkeletonItemList />

          <SkeletonItemList />

        </IonList>
      </IonContent>
      <ListFooter>
        <SkeletonItemList />

        <SkeletonItemList />
      </ListFooter>
    </>
  );
}

const SkeletonItemList: React.FC = () => {
  return (
    <IonItem
      lines="none"
      className="ion-item-menu"
      style={{ marginBottom: '8px' }}
    >
      <IonAvatar>
        <StyledSkeletonAvatar animated />
      </IonAvatar>

      <IonLabel>
        <StyledSkeletonLabel animated />
      </IonLabel>
    </IonItem>
  )
}

export { SkeletonMenuNavigation };
