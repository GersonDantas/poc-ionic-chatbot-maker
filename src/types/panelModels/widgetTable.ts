import { WidgetTableColumn } from ".";

export interface WidgetTable {
    columns: WidgetTableColumn[];
    rows:  Array<Array<string>>;
}