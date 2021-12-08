import { Widget, WidgetChartSerie } from ".";
import { WidgetChartType } from "../enums";

export interface WidgetChart extends Widget {
    chartType: WidgetChartType;
    series: WidgetChartSerie[];
}