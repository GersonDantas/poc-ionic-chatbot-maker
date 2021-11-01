import React, { useEffect } from "react";
import { useIonViewDidEnter } from "@ionic/react";
import { addDays, format } from "date-fns";
import { Line } from "react-chartjs-2";
import { usePanelLocalContextData } from "src/store/localContext";
import "src/theme/GlobalStyles"

const ChartJs: React.FC = () => {
  const { initialDate } = usePanelLocalContextData();
  const [xAxesLabels, setXAxiesLabels] = React.useState<Array<string>>([]);

  const fillInXaxisDateLabel = (): void => {
    for (let i = 0; i < 7; i++) {
      setXAxiesLabels(() => [
        ...xAxesLabels,
        format(addDays(new Date(initialDate), i), "dd/MM/yyyy"),
      ]);
    }
  };

  useEffect(fillInXaxisDateLabel, [initialDate, initialDate])
  useIonViewDidEnter(fillInXaxisDateLabel);

  return (
    <Line
      width="100%"
      height="100%"
      data={{
        labels: [...xAxesLabels],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "var(--ion-color-primary)"
        }],
        
      }}
    ></Line>
  );
};

export {ChartJs};
