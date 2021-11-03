import React from "react";
import Chart from "react-apexcharts";
import { addDays, format } from "date-fns";
import { usePanelLocalContextData } from "src/store/localContext";
import { ChartContainer } from "./styles";
import {atendimentos} from "./atendimentosMock"

const ApexCharts: React.FC = () => {
  const { initialDate } = usePanelLocalContextData();
  const [xAxesLabels, setXAxiesLabels] = React.useState<Array<string>>(
    fillInXaxisDateLabel(initialDate)
  );

  React.useEffect(
    () => setXAxiesLabels(fillInXaxisDateLabel(initialDate)),
    [initialDate]
  );
  
  return (
    <ChartContainer>
      <Chart
        width="100%"
        height="100%"
        type="line"
        series={[
          {
            name: "tabela de Atendimentos",
            data: xAxesLabels.map(date => {
              let value =  getValueByKey(atendimentos, date)
              if(value) {
                return value;
              } else {
                return 0
              }
            }),
            toolbar: {}
          },
        ]}
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: xAxesLabels,
            labels: {},
          },
          yaxis: {},
        }}
      ></Chart>
    </ChartContainer>
  );
};

const fillInXaxisDateLabel = (initialDate: string): Array<string> => {
  let tempArray = [];

  for (let i = 1; i <= 7; i++) {
    tempArray[i - 1] = format(addDays(new Date(initialDate), i), "dd/MM/yyyy");
  }

  return tempArray;
};

function getValueByKey (collection: any, key: string) {
	var value;
  collection.map((item: { [x: string]: any; }) => {
  	if (key in item) value = item[key];
	})
  
  return value;
}

export { ApexCharts };
