import { IonButtons, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import { SkeletonTogleTheme, StyledSkeletonTitle } from './styles';

const SkeletonHeader: React.FC = () => {
  return (
    <IonToolbar
      style={{ "--background": "var(--ion-card-background)" }}
    >
      <IonButtons slot="start">
        <IonMenuButton color="primary" />
      </IonButtons>

      <SkeletonTogleTheme slot="end" animated/>

      <IonTitle >
        <StyledSkeletonTitle animated/>
      </IonTitle>
    </IonToolbar>
  )
}

export default SkeletonHeader;
