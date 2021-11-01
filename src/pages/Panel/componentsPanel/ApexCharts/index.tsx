import React, { useState } from "react";
import { ChartContainer } from "./styles";
import { addDays, format } from "date-fns";
import { usePanelLocalContextData } from "src/store/localContext";
import Chart from 'react-apexcharts';


const ApexCharts: React.FC = () => {
  const { initialDate } = usePanelLocalContextData();
  const [xAxesLabels, setXAxiesLabels] = React.useState<Array<string>>([]);

  const fillInXaxisDateLabel = (): void => {
    for (let i = 0; i < 7; i++) {
      setXAxiesLabels([
        ...xAxesLabels,
        format(addDays(new Date(initialDate), i), "dd/MM/yyyy"),
      ]);
    }
  };

  return (
    <ChartContainer>
      <Chart
        width="100%"
        height="100%"
        type="line"
        series={[
          {
            name: "tabela de Atendimentos",
            data: [0, 1, 0, 3, 2, 0, 8],
          },
        ]}
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [...xAxesLabels],
            labels: {
            }
          },
          yaxis: {
          }
        }}
        
      ></Chart>
    </ChartContainer>
  );
};

export { ApexCharts };
