import { IonCard, IonInput, IonLabel } from "@ionic/react";
import styled from "styled-components";

export const IonCardWithHeader = styled(IonCard)`
    border-radius: 16px;
    box-shadow: 2px 8px 17px 2px var(--ion-shadow-color);
    --background: var(--ion-card-background);
`

export const MyIonLabel = styled(IonLabel)`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--ion-text-color);
`;

export const MyIonInputStyled = styled(IonInput)`
  background-color: #fff;
  background-image: none;
  border: 1px solid rgba(var(--ion-text-color-rgb), 0.2);
  border-radius: 1px;
  color: inherit;
  display: block;
  padding: 6px 20px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;
  font-size: 14px;
  border-radius: 18px;
  line-height: 1.42857143;
  margin-bottom: 20px;

  &:focus-within {
    outline: none;
    border: 1px solid var(--ion-color-primary);
    box-shadow: 0 0 2px #719ece;
    color: var(--ion-color-primary);
  }
  
  .native-input.sc-ion-input-md:-webkit-autofill {
    background-color: transparent;
    border-radius: 16px;
  }
`;

