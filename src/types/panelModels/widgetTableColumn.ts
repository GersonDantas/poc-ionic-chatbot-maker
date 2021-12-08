import { Widget } from ".";

export interface WidgetTableColumn extends Widget {
	caption: string;
	width: number;
	center: boolean;
}
