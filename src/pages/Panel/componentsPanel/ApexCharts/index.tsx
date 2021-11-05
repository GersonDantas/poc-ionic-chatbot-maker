/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Chart from "react-apexcharts";
import { addDays, differenceInDays, format } from "date-fns";
import { usePanelLocalContextData } from "src/store/localContext";
import { ChartContainer, ChartStyled } from "./styles";
import { atendimentos } from "./atendimentosMock";
import { useGlobalContextData } from "src/store";

const ApexCharts: React.FC = () => {
  const { isDark } = useGlobalContextData();
  const { initialDate, finalDate } = usePanelLocalContextData();
  const [xAxesLabels, setXAxiesLabels] = React.useState<Array<string>>(
    fillInXaxisDateLabel(initialDate, finalDate)
  );
  const [labelsStyle, setLabelsStyle] = React.useState({
    colors: isDark ? "#fff" : "#676a6c",
  });

  const chatProps = {
    series: [
      {
        name: "tabela de Atendimentos",
        data: xAxesLabels.map((date) => {
          let value = getValueByKey(atendimentos, date);
          if (value) {
            return value;
          } else {
            return 0;
          }
        }),
      },
    ],
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
          },
        },
      },
      tooltip: {
        style: {
          fontFamily: "Inter, sans-serif",
        },
        onDatasetHover: {
          highlightDataSeries: true,
        },
        x: {
          show: false,
        },
      },
      xaxis: {
        categories: xAxesLabels,
        labels: {
          style: {
            colors: "var(--ion-text-color)",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            colors: ["var(--ion-text-color)"],
          },
        },
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        colors: ["var(--ion-color-primary)"],
        hover: {
          size: 8,
        },
      },
      stroke: {
        width: [1, 0, 0],
        colors: ["var(--ion-color-primary)"],
      },
    },
  };

  React.useEffect(
    () => setXAxiesLabels(fillInXaxisDateLabel(initialDate, finalDate)),
    [initialDate, finalDate]
  );

  return (
    <ChartContainer>
      <ChartStyled
        width="100%"
        height="100%"
        series={chatProps.series}
        options={chatProps.options}
      />
    </ChartContainer>
  );
};

const fillInXaxisDateLabel = (
  initialDate: string,
  finalDate: string
): Array<string> => {
  let tempArray = [];

  let differenceOfDays = differenceInDays(
    turnIntoDate(initialDate),
    turnIntoDate(finalDate)
  );

  for (let i = 0; i <= -differenceOfDays + 1; i++) {
    tempArray[i] = format(addDays(turnIntoDate(initialDate), i), "dd/MM/yyyy");
  }

  return tempArray;
};

const turnIntoDate = (value: string | number): Date => new Date(value);

function getValueByKey(collection: any, key: string) {
  var value;

  collection.map((item: { [x: string]: number }) => {
    if (key in item) value = item[key];
  });

  return value;
}

export { ApexCharts };
