import { Widget } from ".";
import { ExportType } from "../enums";

export interface ExportWidget {
    widget: Widget;
    exportType: ExportType;
}