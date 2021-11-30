import { IonButton } from '@ionic/react';
import styled from 'styled-components';

export const FacebookButton = styled(IonButton)`
  --background-hover: var(--ion-color-primary);
  --background-hover-opacity: 80%;
  --color-hover: var(--ion-color-primary-contrast);
  --ripple-color: var(--ion-color-primary-shade);
  --border-width: 0.5px;
  --color-activated: var(--ion-color-primary);
  --background-focused: rgba(var(--ion-color-secondary-rgb), 0.8);
  font-size: 1em;
  font-family: 'Inter', sans-serif;
`;
