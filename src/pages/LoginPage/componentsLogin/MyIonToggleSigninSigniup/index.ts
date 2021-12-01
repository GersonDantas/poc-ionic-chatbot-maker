import styled from 'styled-components';

import { IonSubTitleLogin } from '../IonSubTitleLogin';

export const MyIonToggleSigningSigniup = styled(IonSubTitleLogin)`
  padding-left: 10px;
  button {
    background-color: var(--ion-card-background);
    cursor: pointer;
    text-decoration: none;
    color: var(--ion-color-primary);
    font-weight: 500;
    font-family: 'Inter';
  }
`;
