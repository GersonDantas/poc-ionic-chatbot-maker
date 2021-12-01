import { IonSkeletonText } from '@ionic/react';
import styled from 'styled-components';

export const SkeletonLogo = styled(IonSkeletonText)`
  justify-self: center;
  width: 100%;
  height: 13vh;
`;
export const SkeletonButton = styled(IonSkeletonText)`
  height: 6vh;
  --border-radius: var(--border-global-radius);
  margin: 15px 0;
`;

export const SkeletonInput = styled(IonSkeletonText)`
  height: 6vh;
  --border-radius: var(--border-global-radius);
  margin-bottom: 30px;
`;
