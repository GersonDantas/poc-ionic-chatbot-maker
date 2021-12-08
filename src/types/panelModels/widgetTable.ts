import { Widget, WidgetTableColumn } from ".";

export interface WidgetTable extends Widget {
	columns: WidgetTableColumn[];
	rows: Array<Array<string>>;
}
