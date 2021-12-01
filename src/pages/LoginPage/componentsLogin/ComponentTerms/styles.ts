import { IonCol, IonRow, IonText } from '@ionic/react';
import styled from 'styled-components';

export const IonRowTerms = styled(IonRow)`
  align-items: center;
  .span-error {
    display: block;
    color: var(--ion-color-danger-shade);
    display: inline-block;
    margin-left: 5px;
    font-weight: 700;
  }
  .no-error {
    display: none;
  }
`;

export const IonColTerms = styled(IonCol)`
  justify-content: center;
  align-items: center;
`;

export const MyIonTextTerms = styled(IonText)`
  font-size: 0.75rem;
  a {
    text-decoration: none;
    color: var(--ion-color-primary);
  }
`;
