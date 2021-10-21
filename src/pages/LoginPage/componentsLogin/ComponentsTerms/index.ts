import { IonCol, IonRow, IonText } from "@ionic/react";
import styled from "styled-components";

export const IonRowTerms = styled(IonRow)`
  align-items: center;
`;
export const IonColTerms = styled(IonCol)`
  display: flex;
  justify-content: center;
`;

export const MyIonTextTerms = styled(IonText)`
  font-size: 0.75rem;
  a {
    text-decoration: none;
    color: var(--ion-color-primary);
  }
`;
