import React, { useState } from "react";
import { ChartContainer } from "./styles";
import Chart from 'react-apexcharts'


const ApexCharts: React.FC = () => {
  return (
    <ChartContainer>
      <Chart
        width="100%"
        height="100%"
        type="line"
        series={[
          {
            name: "tabela de Atendimentos",
            data: [30, 35, 32, 20, 84, 97, 280, 325, 294],
          },
        ]}
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            labels: {

            }
          },
          yaxis: {
            labels: {
              formatter: (value) => value.toFixed(0)
            }
          }
        }}
        
      ></Chart>
    </ChartContainer>
  );
};

export { ApexCharts };
