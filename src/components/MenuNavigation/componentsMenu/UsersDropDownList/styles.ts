import styled from "styled-components";
import {
  IonAvatar,
  IonItem,
  IonLabel,
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
  border: 1px ridge rgba(var(--ion-text-color-rgb), 0.3);
  background: var(--ion-card-background);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: var(--border-card-radius);
  padding: 2px;
`;

export const InputListSuspended = styled.input`
  height: 25px;
  border-radius: var(--border-card-radius);
  padding: 10px 5px;
  border: 2px ridge rgba(var(--ion-text-color-rgb), 0.2);
  margin: 1px 0;
  :focus {
    outline-color: var(--ion-color-primary);
  }
  background: url(../../../../assets/icons/magnifier.png) 100% -20px no-repeat, var(--ion-card-background);
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
