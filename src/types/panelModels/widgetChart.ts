import { WidgetChartSerie } from ".";
import { WidgetChartType } from "../enums";

export interface WidgetChart {
    chartType: WidgetChartType;
    series: WidgetChartSerie[];
}