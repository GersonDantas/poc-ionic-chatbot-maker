import { IonCard, IonCardTitle, IonIcon, IonRow } from "@ionic/react";
import styled from "styled-components";

export const RowCardHeader = styled(IonRow)`
  width: 100%;
  align-items: center;
`;

export const IonCardWithHeader = styled(IonCard)`
  border-radius: 16px;
  box-shadow: 2px 8px 17px 2px var(--ion-shadow-color);
  --background: var(--ion-card-background);
`;

export const IonCardHeaderContentRow = styled(IonRow)`
  padding: 16px;
  justify-content: center;
  @media screen and (max-width: 540px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const IonCardHeaderIcon = styled(IonIcon)``;

export const IonCardHeaderTitle = styled(IonCardTitle)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  @media screen and (max-width: 540px) {
    height: 25px;
  }
`;

