import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CardWithHeaderProps {
  children: ReactNode;
  titleInCenter?: boolean | undefined;
  cardTitle: string;
  hasIcon?: boolean;
}

export interface AppPage {
  url: string;
  iconMoon?: string;
  iosIcon?: string;
  mdIcon?: string;
  faIcon?: IconProp;
  title: string;
}

export interface DatetimeChangeEventDetail {
  value: string | undefined | null;
}

export interface SelectAdaptiveDatePickerProps {
  isFinalDate?: boolean;
  initialDate: string;
  finalDate: string;
  setFinalDate: Dispatch<SetStateAction<string>>;
  setInitialDate: Dispatch<SetStateAction<string>>;
}
