import { ExportType } from "../enums";

export interface ExportAttendanceFilter {
	startDate: string;
	endDate: string;
	channel: string;
	department: string;
	attendant: string;
	exportType: ExportType;
}
