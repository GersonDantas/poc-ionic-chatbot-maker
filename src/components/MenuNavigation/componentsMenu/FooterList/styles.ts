import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonModal,
  IonRow,
} from '@ionic/react';
import styled from 'styled-components';

import { IonAvatarStyled } from '..';

export const ListFooter = styled.div`
  padding: 0 8px 0 15px;
  background-color: var(--ion-card-background);
`;
export const ModalUserDetail = styled(IonModal)`
  --border-radius: 0;
  --height: 100%;
  --width: 100%;
  --background: rgba(#a9abab, 0.5);
`;
export const RowModal = styled(IonRow)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;
export const ColModal = styled(IonCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardModal = styled(IonCard)`
  height: fit-content;
  max-width: 400px;
  border-radius: var(--border-card-radius);
`;

export const CardModalUserDetailHeader = styled(IonCardHeader)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
  border-radius: var(--border-card-radius) var(--border-card-radius) 0 0;
`;
export const UserDetailAvatar = styled(IonAvatarStyled)`
  height: 180px;
  width: 180px;
  border: 5px solid var(--ion-card-background);
  margin-bottom: 20px;
`;
export const UserDetailTitle = styled(IonCardTitle)`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
`;
export const CardModalUserDetailContent = styled(IonCardContent)`
  padding: 20px 0 0 0;
`;
export const RowInputs = styled(IonRow)`
  padding: 5px 10px 5px 10px;
  background: var(--ion-background-color);
  .input-user-detail {
    font-size: 16px;
    font-weight: 400;
    color: var(--ion-text-color);
    background: var(--ion-card-background);
  }
  .input-user-detail:focus {
    background: var(--ion-card-background);
    color: var(--ion-color-primary);
  }
`;
export const IonTextTerms = styled.a`
  text-decoration: none;
  color: var(--ion-color-primary);
  font-size: 10px;
  float: right;
`;

export const RowFooter = styled(IonRow)`
  height: fit-content;
  background: var(--ion-card-background);
  border-top: rgba(var(--ion-text-color-rgb), 0.3) 1px solid;
  padding: 5px 5px 10px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'getOut' 'space' 'cancel' 'save';
  @media (max-width: 540px) {
    grid-template-columns: 1fr;

    #space {
      display: none;
    }

    #getOut {
      grid-area: save;
    }

    #save {
      grid-area: getOut;
    }
  }
`;

export const CommonButtonDetail = styled(IonButton)`
  font-weight: 500;
  font-size: 13px;
  --border-radius: var(--border-card-radius);
  &.button-cancel-detail {
    --border-color: rgba(var(--ion-text-color-rgb), 0.3);
    --color: var(--ion-text-color);
  }
`;
