import Chart from 'react-apexcharts';
import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 100%;
  min-height: 300px;
`;
export const ChartStyled = styled(Chart)`
  .apexcharts-tooltip {
    color: var(--ion-text-color);
  }
`;
