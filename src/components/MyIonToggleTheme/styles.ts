import styled from "styled-components";
import { IonIcon, IonToggle } from "@ionic/react";
// import { moon, sunny } from "ionicons/icons";

// export const IonIconToggleTheme = styled(IonIcon)`
//   border-radius: 50%;

//   padding: 7px;
//   height: 18px;
//   width: 18px;

//   margin-top: 5px;
//   margin-bottom: 5px;
//   margin: 5px;

//   &.component-icon-dark {
//     background: var(--ion-color-step-850, #27323e);
//     color: var(--ion-item-background, #fff);
//   }
// `;

export const IonToggleStyled = styled(IonToggle)`
  margin-right: 15px;
  --handle-background: radial-gradient( circle farthest-corner at 74% 40%,#173c66 42%,#fff 59.2% );
  --handle-background-checked: #fef89f;
  --background: #173c66;
  --background-checked: #8ad7ec;
  --handle-transition: 350ms ease-in;
  --handle-spacing: 3px;
`;
