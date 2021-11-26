import { IonRow, IonCol, IonLabel } from "@ionic/react";
import styled from "styled-components";

export const RowAlertInvalidCrud = styled(IonRow)``;
export const ColAlertInvalidCrud = styled(IonCol)`
  .alert-danger {
    padding: 15px;
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: rgba(var(--ion-color-danger-rgb), .2);
    border-color: rgba(var(--ion-color-danger-rgb), .3);
    p {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        color: var(--ion-color-danger);
        text-align: center;
    }
  }
`;
