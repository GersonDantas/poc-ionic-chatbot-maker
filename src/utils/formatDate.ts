import { format } from "date-fns";

export const formatUSDate = (date: Date): string => format(date, 'yyyy-MM-dd');