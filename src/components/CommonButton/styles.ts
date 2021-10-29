import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonButton, IonLabel } from "@ionic/react";
import styled from "styled-components";

export const IonCommonButton = styled(IonButton)`
  height: 42px;
  --border-radius: 5px;
`;

export const IonCommonButtonIcon = styled(FontAwesomeIcon)`
`;

export const IonCommonButtonLabel = styled(IonLabel)`
    font-weight: bold;
`