import styled from "styled-components"
import { IonIcon } from "@ionic/react";


export const IonIconToggleTheme = styled(IonIcon)`
  border-radius: 50%;
  
  padding: 7px;
  height: 18px;
  width: 18px;

  margin-top: 5px;
  margin-bottom: 5px;

  &.component-icon-dark {
    background: var(--ion-color-step-850, #27323e);
    color: var(--ion-item-background, #fff);
  }
`