import { addDays, differenceInDays, format } from 'date-fns';
import React, { useMemo, useState } from 'react';
import { CardWithHeader } from 'src/components';
import { useGlobalContextData } from 'src/store';
import { usePanelLocalContextData } from 'src/store/localContext';
import { WidgetChart } from 'src/types';

import { ChartContainer, ChartStyled } from './styles';

interface apexChartProps {
  widgetArray: WidgetChart | undefined
}

const ApexCharts: React.FC<apexChartProps> = ({ widgetArray }) => {
  const { initialDate, finalDate } = usePanelLocalContextData();
  const { chatbotConnected, userSession } = useGlobalContextData();
  // const [widgetArray] = useState<WidgetChart | undefined>(widgetArray);

  const [xAxesLabels] = React.useState<Array<string>>(
    fillInXaxisDateLabel(initialDate, finalDate),
  );


  const [chatProps, setChatProps] = useState({
    series: [
      {
        name: widgetArray?.series[0].name ?? "chart-example",
        data: widgetArray?.series[0].data,
      },
    ],
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          tools: {
            pan: false,
          },
        },
      },
      tooltip: {
        fillSeriesColor: true,
        style: {
          fontFamily: 'Inter, sans-serif',
        },
        theme: 'dark',
        onDatasetHover: {
          highlightDataSeries: true,
        },
        x: {
          show: false,
        },
      },
      xaxis: {
        categories: widgetArray?.series[0].labels,
        labels: {
          style: {
            colors: 'var(--ion-text-color)',
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            colors: ['var(--ion-text-color)'],
          },
        },
      },
      markers: {
        size: 4,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        colors: ['var(--ion-color-primary)'],
        hover: {
          size: 5,
        },
      },
      stroke: {
        width: [1, 0, 0],
        colors: ['var(--ion-color-primary)'],
      },
    },
  });

  console.log(chatProps)

  // React.useEffect(() =>
  //   setChatProps({
  //     ...chatProps,
  //     series: [{
  //       ...chatProps.series[0],
  //       name: widgetArray?.series[0].name ?? "grafico atendimentos",
  //       data: widgetArray?.series[0].data,
  //     }],
  //     options: {
  //       ...chatProps.options,
  //       xaxis: {
  //         ...chatProps.options.xaxis,
  //         categories: widgetArray?.series[0].labels
  //       }
  //     }
  //   }),
  //   [chatbotConnected, userSession, widgetArray],
  // );

  return (
    <CardWithHeader cardTitle="ATENDIMENTOS POR DIA" hasIcon>
      <ChartContainer>
        <ChartStyled
          width="100%"
          height="100%"
          series={chatProps.series}
          options={chatProps.options}
        />
      </ChartContainer>
    </CardWithHeader>
  );
};

const fillInXaxisDateLabel = (
  initialDate: string,
  finalDate: string,
): Array<string> => {
  const tempArray = [];

  const differenceOfDays = differenceInDays(
    turnIntoDate(finalDate),
    turnIntoDate(initialDate),
  );

  for (let i = 1; i <= differenceOfDays + 1; i++) {
    tempArray[i - 1] = format(addDays(turnIntoDate(initialDate), i), 'dd/MM/yyyy');
  }

  return tempArray;
};

const turnIntoDate = (value: string | number): Date => new Date(value);

function getValueByKey(collection: any, key: string) {
  let value;

  collection.map((item: { [x: string]: number }): number => {
    if (key in item) {
      return value = item[key];
    }
    return 0;
  });

  return value;
}

export { ApexCharts };
