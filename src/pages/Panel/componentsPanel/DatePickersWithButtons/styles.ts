import { IonCol, IonRow } from "@ionic/react";
import { IonCardWithHeader, MyIonLabel } from "src/components";
import styled from "styled-components";

export const IonCardDateButtons = styled(IonCardWithHeader)``;

export const IonColPos = styled(IonCol)`
 --ion-grid-columns: 1fr;
`;

export const IonRowDateButtons = styled(IonRow)`
  justify-content: flex-end;
  align-items: center;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 875px) {
    grid-template-columns: 2fr 2fr;
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
  }

`;

export const IonLabelDate = styled(MyIonLabel)``;

export const IonRowButtons = styled(IonRow)`
  justify-content: center;
`;
