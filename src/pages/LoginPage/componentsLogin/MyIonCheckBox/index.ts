import styled from 'styled-components'
import { IonCheckbox } from '@ionic/react';

export const MyIonCheckBox = styled(IonCheckbox)`
  --border-radius: 50%;
  --checkmark-color: transparent;
  --background: rgba(var(--ion-text-color-rgb), 0.15);
  --background-checked: var(--ion-background-color);
  --border-color: rgba(var(--ion-text-color-rgb), 0.15);
  --size: 15px;
  --transition: 0.5s;
  --border-style: solid;
`;