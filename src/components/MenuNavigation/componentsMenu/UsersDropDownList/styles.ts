import styled from "styled-components";
import {
  IonAvatar,
  IonCard,
  IonItem,
  IonLabel,
  IonCardHeader,
  IonCardContent,
  IonList,
} from "@ionic/react";
export const DivMenuSuspended = styled.div`
  position: relative;
  width: 100%;
`;

export const IonAvatarStyled = styled(IonAvatar)`
  height: 30px;
  width: 30px;
  margin-right: 6px;
  border: 1px solid var(--ion-color-primary);
`;

export const DivListSuspended = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  width: 100%;
  box-shadow: none;
  border: 1px solid rgba(var(--ion-text-color-rgb), 0.3);
  background: var(--ion-card-background);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserListSuspend = styled(IonList)`
  background: var(--ion-card-background);
  max-height: 25vh;
  overflow-y: auto;
  box-shadow: none;
`;
export const ListSuspendedItem = styled(IonItem)`
  width: 100%;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  --background: var(--ion-card-background);
`;
export const SuspendedAvatar = styled(IonAvatarStyled)`
  height: 14px;
  width: 14px;
  display: flex;
  align-items: center;
`;
export const SuspendedLabel = styled(IonLabel)`
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.42857;
  list-style: none;
  margin: 0;
  text-transform: none;
  font-weight: bolder;
`;
