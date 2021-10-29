import { IonCol, IonRow } from "@ionic/react";
import { IonCardWithHeader, MyIonLabel } from "src/components";
import styled from "styled-components";

export const IonCardDateButtons = styled(IonCardWithHeader)``;

export const IonRowDateButtons = styled(IonRow)`
  justify-content: flex-end;
  align-items: center;
  padding: 15px 10px 10px;

  @media screen and (max-width: 540px) {
    justify-content: center;
  }

`;

export const IonLabelDate = styled(MyIonLabel)``;

export const IonRowButtons = styled(IonRow)`
  justify-content: center;
`;
