import {
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
} from "@ionic/react";
import styled from "styled-components";

export const MyIonCard = styled(IonCard)`
  box-shadow: 11px 1px 24px rgb(0 0 0 / 30%);
`;

export const MyIonRow = styled(IonRow)`
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const MyIonGrid = styled(IonGrid)`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const MyIonTitle = styled(IonCardTitle)`
  margin-bottom: 3%;
  padding-left: 0;
  color: var(--ion-text-color);
  font-weight: bold;
  font-size: 1rem;
  font-family: "Inter-ExtraBold", sans-serif;
`;

export const MyIonText = styled(IonCardSubtitle)`
  margin-bottom: 2%;
  color: var(--ion-text-color);
  font-weight: 200;
  font-size: 0.8rem;
  font-family: "Inter-ExtraBold", sans-serif;
`;

export const MyIonFacebookButton = styled(IonButton)`
  --background-hover: var(--ion-color-primary);
  --background-hover-opacity: 80%;
  --color-hover: var(--ion-color-primary-contrast);
  --ripple-color: var(--ion-color-primary-shade);
  --border-width: 0.5px;
  --color-activated: var(--ion-color-primary);
  --background-focused: var(--ion-color-primary);
  font-size: 1em;
  font-family: 'Inter-Bold', sans-serif;
`;

export const MyIonSigninSigningupButton = styled(MyIonFacebookButton) `
  --background-hover: var(--ion-color-primary-shade);
  --ripple-color: var(--ion-color-primary);
`;

export const MyHtmlHr = styled.hr`
  background: rgba(var(--ion-text-color-rgb), 0.3);
  border-top: medium solid #ccc;
  font-size: 4em;
  overflow: visible;
  position: relative;
  text-align: center;

  
  &::after {
    @media (max-width: 540px) {
        font-size: 0.7rem;
    }
    content: attr(data-after);
    display: inline-block;
    position: absolute;
    top: -1.1em;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    padding: 0.3em;
    background: var(--ion-background-color);
  }
`;
