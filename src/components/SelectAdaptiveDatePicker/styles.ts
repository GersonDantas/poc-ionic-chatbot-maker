import { IonDatetime } from '@ionic/react';
import styled from 'styled-components';

import { MyIonInputStyled } from '../MyIonComonsStyleds';

export const IonInputWeb = styled(MyIonInputStyled)`
  position: relative;
  margin-top: 8px;
  width: 100%;
  border-radius: var(--border-card-radius);
  --padding-end: 10px;
  --padding-start: 10px;
  background: var(--ion-background-color);
`;

export const IonInputMobile = styled(IonDatetime)`
  margin-top: 5px;
  background-color: rgba(var(--ion-background-color-rgb), 0.5);
  background-image: none;
  border: 1px solid rgba(var(--ion-text-color-rgb), 0.2);
  color: --ion-text-color;
  display: block;
  padding: 6px 20px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  border-radius: var(--border-input-radius);
  line-height: 1.42857143;
  margin-bottom: 20px;
  background: var(--ion-background-color);
  &:focus-within {
    outline: none;
    border: 1px solid var(--ion-color-primary);
    box-shadow: 0 0 2px #719ece;
    color: var(--ion-color-primary);
  }
  .native-input.sc-ion-input-md:-webkit-autofill {
    background-color: transparent;
    border-radius: var(--border-input-radius);
  }
`;
