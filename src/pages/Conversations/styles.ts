import { IonGrid, IonLabel, IonTitle } from '@ionic/react';
import styled from 'styled-components';

export const IonGridConversations = styled(IonGrid)`
  --ion-grid-padding: 15px;

  @media (min-width: 1130px) {
    --ion-grid-padding: 30px;
  }
`;

export const IonTitleDepartment = styled(IonTitle)`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

export const IonCardLabel = styled(IonLabel)`
  font-weight: 500;
  font-size: 30px;
  color: var(--ion-text-color);
`;
