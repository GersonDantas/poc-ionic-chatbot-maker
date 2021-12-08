import { IonSkeletonText } from "@ionic/react";
import styled from "styled-components";
export const SkeletonTogleTheme = styled(IonSkeletonText)`
  width: 5%;
  min-height: 25px;
  margin-right: 15px;
  --border-radius: 15px;
`;
export const StyledSkeletonTitle = styled(IonSkeletonText)`
  width: 15%;
  min-height: 25px;
`;