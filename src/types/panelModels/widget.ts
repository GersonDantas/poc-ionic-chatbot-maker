import { WidgetType } from "../enums";

export interface Widget {
    name: string;
    type: WidgetType;
    size: number;
}