import styled from "styled-components";
import Chart from "react-apexcharts";

export const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;
export const ChartStyled = styled(Chart)`
  .apexcharts-tooltip {
    background: var(--ion-card-background);
    color: var(--ion-text-color);
  }
`;
