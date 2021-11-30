import {
  IonCardSubtitle, IonCardTitle, IonCol, IonModal, IonRow,
} from '@ionic/react';
import { MyIonInputStyled } from 'src/components/MyIonComonsStyleds';
import styled from 'styled-components';

export const IonModalForgot = styled(IonModal)`
  --border-radius: var(--border-card-radius);
  @media screen and (max-width: 560px) {
    --border-radius: 0px;
  }
`;
export const IonRowModalForgot = styled(IonRow)`
  height: 100%;
  align-items: center;
`;

export const IonColModalForgot = styled(IonCol)`
  padding: 0 10%;
`;

export const MyIonCardTitleForgot = styled(IonCardTitle)`
  color: #575757;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  position: relative;
  margin: 5% 0;
  padding: 0;
  line-height: 40px;
  display: block;
  font-family: 'Inter', sans-serif;
`;

export const MyIonCardSubtitleForgot = styled(IonCardSubtitle)`
  text-align: center;
  margin-bottom: 5%;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

export const MyIonInputForgot = styled(MyIonInputStyled)`
  margin-bottom: 10%;
`;

export const IonRowButtons = styled(IonRow)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

export const IonColButtons = styled(IonCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
