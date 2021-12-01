import { IonCheckbox } from '@ionic/react';
import styled from 'styled-components';

export const IonCheckBox = styled(IonCheckbox)`
  --border-radius: 50%;
  --checkmark-color: transparent;
  --background: rgba(var(--ion-text-color-rgb), 0.15);
  --background-checked: var(--ion-background-color);
  --border-color: rgba(var(--ion-text-color-rgb), 0.15);
  --border-width: 4px;
  --size: 16px;
  --transition: 0.5s;
  --border-style: solid;
`;
