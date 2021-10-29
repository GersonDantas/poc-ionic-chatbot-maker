import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonCard, IonCardTitle, IonIcon, IonRow } from "@ionic/react";
import styled from "styled-components";

export const IonCardWithHeader = styled(IonCard)`
  border-radius: 16px;
  box-shadow: 2px 8px 17px 2px rgba(var(--ion-text-color-rgb), 0.3);
  --background: var(--ion-card-background);
`;
export const IonCardHeaderContentRow = styled(IonRow)`
  padding: 16px;
  justify-content: center;
`;
export const IonCardHeaderIcon = styled(IonIcon)``;
export const IonCardHeaderTitle = styled(IonCardTitle)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
`;
export const FaIconCard = styled(FontAwesomeIcon)`
  background-color: red;
`;
