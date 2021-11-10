import styled from "styled-components";
import { IonToggle } from "@ionic/react";

export const IonToggleStyled = styled(IonToggle)`
  margin-right: 15px;
  --handle-background: radial-gradient(
    circle farthest-corner at 74% 40%,
    #173c66 42%,
    #fef89f 59.2%,
    #fff 10%
  );
  --handle-background-checked: radial-gradient(
    circle,
    rgba(254, 248, 159, 1) 70%,
    rgba(111, 133, 228, 1) 75%,
    rgba(137, 213, 234, 1) 97%
  );
  --background: #173c66;
  --background-checked: #8ad7ec;
  --handle-transition: all 350ms ease-in;
  --handle-spacing: 3px;
`;
