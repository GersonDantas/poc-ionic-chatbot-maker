import { IonGrid } from '@ionic/react';
import styled from 'styled-components';

export const IonGridPanelStyled = styled(IonGrid)`
  --ion-grid-padding: 15px;

  @media (min-width: 1130px) {
    --ion-grid-padding: 30px;
  }
`;