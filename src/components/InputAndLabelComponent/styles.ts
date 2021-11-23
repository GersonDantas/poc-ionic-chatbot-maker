import { IonCol } from "@ionic/react";
import styled from "styled-components";
export const ColInputAndLabel = styled(IonCol)`
  padding: 0;
  margin-bottom: 20px;
  .input-error {
    color: var(--ion-color-danger-shade);
    display: inline-block;
    margin-left: 5px;
    font-weight: 700;
  }
`;
