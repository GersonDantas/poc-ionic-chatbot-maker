import { Widget } from ".";

export interface WidgetChartSerie extends Widget {
	name: string;
	labels: string[];
	data: number[];
}
