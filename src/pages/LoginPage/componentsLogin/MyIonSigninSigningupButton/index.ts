import styled from "styled-components";
import { MyIonFacebookButton } from "../MyFacebookButton";

export const MyIonSigninSigningupButton = styled(MyIonFacebookButton)`
  --background-hover: var(--ion-color-primary-shade);
  --ripple-color: var(--ion-color-primary);
  margin-bottom: 20px;
`;