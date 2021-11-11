import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, ReactNode, SetStateAction } from "react";
import * as History from 'history';

export interface UserProps {
  id: string;
  password: string;
  name: string;
  subName?: string;
  email: string;
  phoneNumber: string;
  imgUserUrl?: string;
  imgMessageUrl?: string;
}
export interface DropDownItemProps {
  title: string;
  dropDownObject: AppPage[];
  location: History.Location;
  faIcon?: IconProp;
  iconMoon?: string;
}

export interface CardWithHeaderProps {
  children: ReactNode;
  titleInCenter?: boolean | undefined;
  cardTitle: string;
  hasIcon?: boolean;
}

export interface AppPage {
  url: string;
  iconMoon?: string;
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
