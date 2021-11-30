import { IonCol } from '@ionic/react';
import styled from 'styled-components';

export const ColInputAndLabel = styled(IonCol)`
  padding: 0;
  margin-bottom: 20px;
  .span-error {
    color: var(--ion-color-danger-shade);
    display: inline-block;
    margin-left: 5px;
    font-weight: 700;
  }
  .input-error {
    border: 1px dotted var(--ion-color-danger-shade);
  }
`;
